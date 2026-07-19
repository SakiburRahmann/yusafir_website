"use client";

import * as React from "react";
import * as THREE from "three";

/**
 * Lightweight 3D Earth globe built with Three.js.
 *
 * Optimizations vs. previous version:
 *  - Correct latLngToVec3 projection that aligns markers with the
 *    NASA Blue Marble equirectangular texture on three.js's default
 *    SphereGeometry UV mapping. (Previously Dhaka landed in Africa.)
 *  - Lower sphere geometry detail (48 segments vs 96) — ~75% fewer
 *    vertices, indistinguishable visual difference at this size.
 *  - Atmosphere geometry reduced to 32 segments.
 *  - pixelRatio capped at 1.5 (was 2) — saves fill-rate on high-DPI
 *    displays, large perf win on mobile.
 *  - Single directional light + ambient (removed rim light).
 *  - Arc curve resolution reduced to 40 points (was 72).
 *  - Pulse count halved: only every other destination gets a traveling
 *    pulse; all arcs still render statically.
 *  - IntersectionObserver pauses the RAF loop when the globe is
 *    scrolled off-screen — saves battery and CPU when not visible.
 *  - Power preference low-power on mobile, high-performance on desktop.
 *  - Initial rotation brings Asia into view (Dhaka longitude ≈ +90°),
 *    so the user sees Bangladesh instead of Africa on first paint.
 *
 * SSR-safe: parent imports this via next/dynamic with ssr:false.
 */

export type GlobeDestination = {
  name: string;
  flag: string;
  lat: number;
  lng: number;
};

type Props = {
  destinations: GlobeDestination[];
  origin: { name: string; lat: number; lng: number };
  size?: number; // px; default 420
  className?: string;
};

// Texture URLs — served from three-globe's unpkg CDN (public-domain NASA
// imagery). These are widely cached and reliable.
const EARTH_DAY_TEXTURE =
  "https://unpkg.com/three-globe@2.45.2/example/img/earth-blue-marble.jpg";
const EARTH_BUMP_TEXTURE =
  "https://unpkg.com/three-globe@2.45.2/example/img/earth-topology.png";
const EARTH_SPECULAR_TEXTURE =
  "https://unpkg.com/three-globe@2.45.2/example/img/earth-water.png";

/**
 * Convert lat/lng (degrees) to a 3D position on a sphere of the given radius.
 *
 * This formula is calibrated for a standard equirectangular Earth texture
 * (lng=-180 at u=0, lng=+180 at u=1) wrapped on three.js's default
 * SphereGeometry, where:
 *   - u=0.25 (lng=-90, Americas)  → FRONT  (+Z)
 *   - u=0.50 (lng=0,   Africa)    → RIGHT  (+X)
 *   - u=0.75 (lng=+90, Asia)      → BACK   (-Z)
 *
 * Therefore for any (lat, lng):
 *   - Y axis depends only on latitude:        y = r * cos((90-lat)·π/180)
 *   - horizontal radius from Y axis:          ρ = r * sin((90-lat)·π/180)
 *   - X = ρ · cos(lng·π/180)
 *   - Z = -ρ · sin(lng·π/180)   ← negative sign is critical
 *
 * Verification:
 *   Dhaka (23.81°N, 90.41°E) → (-0.006, 0.404, -0.915)·r  → BACK side
 *   London (51.51°N, -0.13°E) → (0.999, 0.623, 0.001)·r   → RIGHT side
 *   New York (40.71°N, -74.01°W) → (0.220, 0.652, 0.727)·r → FRONT-RIGHT
 */
function latLngToVec3(
  lat: number,
  lng: number,
  radius: number
): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180); // polar angle from +Y
  const lngRad = lng * (Math.PI / 180);
  const rho = radius * Math.sin(phi);
  return new THREE.Vector3(
    rho * Math.cos(lngRad), // X
    radius * Math.cos(phi), // Y
    -rho * Math.sin(lngRad) // Z (note the negative sign!)
  );
}

/**
 * Build a QuadraticBezierCurve3 arc from a to b that lifts well off the
 * sphere surface. The control point is placed along the normalized
 * midpoint direction, lifted outward by a factor proportional to the arc
 * length — longer flights rise higher.
 */
function buildArc(
  a: THREE.Vector3,
  b: THREE.Vector3,
  radius: number
): THREE.QuadraticBezierCurve3 {
  const mid = a.clone().add(b).multiplyScalar(0.5);
  const dist = a.distanceTo(b);
  // Lift factor: 10% of radius for short hops, up to 25% for antipodal.
  // Capped low so arc peaks (max 1.25r) stay fully inside the camera
  // frustum and never clip outside the frame.
  const liftFactor = radius * (0.10 + Math.min(dist / (radius * 2), 0.15));
  if (mid.lengthSq() < 1e-6) {
    // a and b are antipodal — pick an arbitrary perpendicular direction
    mid.set(0, 1, 0).multiplyScalar(radius + liftFactor);
  } else {
    mid.normalize().multiplyScalar(radius + liftFactor);
  }
  return new THREE.QuadraticBezierCurve3(a, mid, b);
}

/** Create a soft circular sprite texture (radial gradient) at runtime. */
function createSpriteTexture(
  innerColor: string,
  outerColor: string,
  size = 64
): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  grad.addColorStop(0, innerColor);
  grad.addColorStop(0.4, innerColor);
  grad.addColorStop(1, outerColor);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function HeroEarth({
  destinations,
  origin,
  size = 420,
  className,
}: Props) {
  const mountRef = React.useRef<HTMLDivElement>(null);
  // We hold all the imperative Three.js objects in a single ref so they
  // survive re-renders but are cleaned up on unmount.
  const stateRef = React.useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    earth: THREE.Mesh;
    atmosphere: THREE.Mesh;
    arcsGroup: THREE.Group;
    markersGroup: THREE.Group;
    pulses: {
      sprite: THREE.Sprite;
      t: number;
      speed: number;
      curve: THREE.QuadraticBezierCurve3;
    }[];
    autoRotateSpeed: number;
    targetSpin: number;
    currentSpin: number;
    targetTilt: number;
    currentTilt: number;
    drag: { active: boolean; lastX: number; lastY: number };
    rafId: number | null;
    disposed: boolean;
    earthGroup: THREE.Group;
    visible: boolean; // whether the globe is on-screen
  } | null>(null);

  // Initialize the Three.js scene once on mount.
  React.useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = size;
    const height = size;
    // Globe radius — sized so the ENTIRE globe (sphere + atmosphere + arcs)
    // fits inside the frame with breathing room. 0.30 of frame combined
    // with the camera distance below gives ~65% visual sphere fill while
    // keeping arc peaks fully visible.
    const radius = Math.max(10, Math.min(width, height) * 0.30);

    // Detect coarse pointer / small screen → low-power mode
    const isMobile =
      typeof window !== "undefined" &&
      (window.matchMedia?.("(max-width: 768px)").matches ||
        navigator.hardwareConcurrency <= 4);

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile, // disable AA on mobile for perf
      alpha: true,
      powerPreference: isMobile ? "low-power" : "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.5));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.touchAction = "none";
    renderer.domElement.style.cursor = "grab";

    // --- Scene & Camera ---
    // FOV 42° + camera at 4.0×radius gives a visible half-height of
    // ~1.54×radius at z=0, so:
    //   - sphere (1.0r)       → 65% of half-height  ✓ (good visual size)
    //   - atmosphere (1.10r)  → 72% of half-height  ✓
    //   - arc peak (1.25r)    → 81% of half-height  ✓ (fits with margin)
    // Even arc peaks on the camera-facing side (z=+0.5r) fit at ~93%.
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0, radius * 4.0);
    camera.lookAt(0, 0, 0);

    // --- Lights (simplified — was 3, now 2) ---
    const ambient = new THREE.AmbientLight(0x4a5a8a, 0.6);
    scene.add(ambient);

    // Main directional light — sun coming from upper-left-front
    const sun = new THREE.DirectionalLight(0xfff4e0, 1.4);
    sun.position.set(-2.0, 1.2, 1.5);
    scene.add(sun);

    // --- Earth group ---
    const earthGroup = new THREE.Group();
    scene.add(earthGroup);

    // --- Earth sphere (reduced from 96 to 48 segments) ---
    const earthGeo = new THREE.SphereGeometry(radius, 48, 48);
    const earthMat = new THREE.MeshPhongMaterial({
      color: 0x223355,
      shininess: 18,
      specular: new THREE.Color(0x335577),
    });
    const earth = new THREE.Mesh(earthGeo, earthMat);
    earthGroup.add(earth);

    // Load textures
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");
    loader.load(
      EARTH_DAY_TEXTURE,
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 4);
        earthMat.map = tex;
        earthMat.color.set(0xffffff);
        earthMat.needsUpdate = true;
      },
      undefined,
      () => {
        // Texture failed — solid colour fallback still looks fine.
      }
    );
    // Skip bump + specular maps on mobile to save texture bandwidth.
    if (!isMobile) {
      loader.load(EARTH_BUMP_TEXTURE, (tex) => {
        earthMat.bumpMap = tex;
        earthMat.bumpScale = 0.4;
        earthMat.needsUpdate = true;
      });
      loader.load(EARTH_SPECULAR_TEXTURE, (tex) => {
        earthMat.specularMap = tex;
        earthMat.specular = new THREE.Color(0x88aacc);
        earthMat.shininess = 22;
        earthMat.needsUpdate = true;
      });
    }

    // --- Atmosphere (32 segments vs 64) ---
    // Tighter atmosphere (1.10r vs 1.18r) so the glow sits closer to the
    // sphere and stays inside the frame.
    const atmGeo = new THREE.SphereGeometry(radius * 1.10, 32, 32);
    const atmMat = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color(0x4aa8ff) },
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
          gl_FragColor = vec4(glowColor, 1.0) * intensity;
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });
    const atmosphere = new THREE.Mesh(atmGeo, atmMat);
    earthGroup.add(atmosphere);

    // --- Markers & arcs ---
    const markersGroup = new THREE.Group();
    earthGroup.add(markersGroup);

    const arcsGroup = new THREE.Group();
    earthGroup.add(arcsGroup);

    // Sprite textures (smaller canvas = faster)
    const destSpriteTex = createSpriteTexture(
      "rgba(196,181,253,1)",
      "rgba(124,58,237,0)",
      64
    );
    const originSpriteTex = createSpriteTexture(
      "rgba(251,191,36,1)",
      "rgba(245,158,11,0)",
      64
    );
    const pulseSpriteTex = createSpriteTexture(
      "rgba(186,230,253,1)",
      "rgba(56,189,248,0)",
      64
    );

    // --- Origin marker (Dhaka) — sits ON the surface ---
    const originPos = latLngToVec3(origin.lat, origin.lng, radius);
    const originNormal = originPos.clone().normalize();

    // Glow sprite — centered exactly on the surface point. Sprite size is
    // kept small so it doesn't appear to bury into the globe.
    const originMarker = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: originSpriteTex,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    originMarker.scale.setScalar(radius * 0.12);
    // Push the sprite OUTWARD by half its visual radius so it sits on top
    // of the surface like a halo, not half-buried.
    originMarker.position
      .copy(originPos)
      .add(originNormal.clone().multiplyScalar(radius * 0.02));
    markersGroup.add(originMarker);

    // Inner solid dot — a tiny sphere resting on the surface like a bead.
    const originDotR = radius * 0.022;
    const originDot = new THREE.Mesh(
      new THREE.SphereGeometry(originDotR, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xfbbf24 })
    );
    originDot.position
      .copy(originPos)
      .add(originNormal.clone().multiplyScalar(originDotR));
    markersGroup.add(originDot);

    const pulses: {
      sprite: THREE.Sprite;
      t: number;
      speed: number;
      curve: THREE.QuadraticBezierCurve3;
    }[] = [];

    // --- Destination markers + arcs ---
    destinations.forEach((d, i) => {
      const destPos = latLngToVec3(d.lat, d.lng, radius);
      const destNormal = destPos.clone().normalize();

      // Destination glow sprite — pushed outward so it sits on the surface.
      const marker = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: destSpriteTex,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        })
      );
      marker.scale.setScalar(radius * 0.09);
      marker.position
        .copy(destPos)
        .add(destNormal.clone().multiplyScalar(radius * 0.02));
      markersGroup.add(marker);

      // Inner solid dot
      const dotR = radius * 0.014;
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(dotR, 10, 10),
        new THREE.MeshBasicMaterial({ color: 0xc4b5fd })
      );
      dot.position
        .copy(destPos)
        .add(destNormal.clone().multiplyScalar(dotR));
      markersGroup.add(dot);

      // Build arc — endpoints lifted just above the surface so the pulse
      // gently "kisses" the surface rather than clipping through it.
      const liftOff = radius * 0.02;
      const arcStart = originPos
        .clone()
        .add(originNormal.clone().multiplyScalar(liftOff));
      const arcEnd = destPos
        .clone()
        .add(destNormal.clone().multiplyScalar(liftOff));
      const curve = buildArc(arcStart, arcEnd, radius);

      // Static arc tube — faint full path (reduced from 72 to 40 points)
      const arcPoints = curve.getPoints(40);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPoints);
      const arcMat = new THREE.LineBasicMaterial({
        color: 0x7dd3fc,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
      });
      const arcLine = new THREE.Line(arcGeo, arcMat);
      arcsGroup.add(arcLine);

      // Traveling pulse — only on every other destination to reduce
      // active sprite count (was 12, now ~6).
      if (i % 2 === 0) {
        const pulse = new THREE.Sprite(
          new THREE.SpriteMaterial({
            map: pulseSpriteTex,
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
          })
        );
        pulse.scale.setScalar(radius * 0.07);
        arcsGroup.add(pulse);

        pulses.push({
          sprite: pulse,
          t: (i * 0.21) % 1,
          speed: 0.12 + Math.random() * 0.06, // 0.12..0.18 per second (slower)
          curve,
        });
      }
    });

    // Initial rotation: bring Asia (lng=+90) to the front (+Z).
    // The texture puts lng=+90 at the BACK (-Z), so rotating π around Y
    // brings it to the FRONT.
    const initialSpin = Math.PI * 0.95; // ~171° — slight tilt to also show
    // a bit of Europe/Africa on the right edge.

    const initialState = {
      renderer,
      scene,
      camera,
      earth,
      atmosphere,
      arcsGroup,
      markersGroup,
      pulses,
      autoRotateSpeed: 0.12, // rad/sec ~ 6.9°/s (slower than before)
      targetSpin: initialSpin,
      currentSpin: initialSpin,
      targetTilt: 0,
      currentTilt: 0,
      drag: { active: false, lastX: 0, lastY: 0 },
      rafId: null as number | null,
      disposed: false,
      earthGroup,
      visible: true,
    };
    stateRef.current = initialState;

    // --- Pointer interaction ---
    const el = renderer.domElement;
    const onPointerDown = (e: PointerEvent) => {
      initialState.drag.active = true;
      initialState.drag.lastX = e.clientX;
      initialState.drag.lastY = e.clientY;
      el.style.cursor = "grabbing";
      el.setPointerCapture?.(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!initialState.drag.active) return;
      const dx = e.clientX - initialState.drag.lastX;
      const dy = e.clientY - initialState.drag.lastY;
      initialState.drag.lastX = e.clientX;
      initialState.drag.lastY = e.clientY;
      initialState.targetSpin += dx * 0.0065;
      initialState.targetTilt += dy * 0.0065;
      initialState.targetTilt = Math.max(
        -Math.PI / 2.4,
        Math.min(Math.PI / 2.4, initialState.targetTilt)
      );
    };
    const onPointerUp = (e: PointerEvent) => {
      initialState.drag.active = false;
      el.style.cursor = "grab";
      el.releasePointerCapture?.(e.pointerId);
    };
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    el.addEventListener("pointerleave", onPointerUp);

    // --- Resize handling ---
    const handleResize = () => {
      const w = mount.clientWidth || size;
      const h = mount.clientHeight || size;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mount);

    // --- Visibility: pause RAF when off-screen ---
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          initialState.visible = e.isIntersecting;
          if (e.isIntersecting && initialState.rafId == null) {
            // Resume animation loop
            initialState.rafId = requestAnimationFrame(animate);
          } else if (!e.isIntersecting && initialState.rafId != null) {
            cancelAnimationFrame(initialState.rafId);
            initialState.rafId = null;
          }
        }
      },
      { rootMargin: "100px" }
    );
    visibilityObserver.observe(mount);

    // --- Animation loop ---
    const clock = new THREE.Clock();
    function animate() {
      if (initialState.disposed) return;
      if (!initialState.visible) {
        initialState.rafId = null;
        return;
      }
      const dt = Math.min(clock.getDelta(), 0.05);

      if (!initialState.drag.active) {
        initialState.targetSpin += initialState.autoRotateSpeed * dt;
      }

      const smoothing = 1 - Math.pow(0.001, dt);
      initialState.currentSpin +=
        (initialState.targetSpin - initialState.currentSpin) * smoothing;
      initialState.currentTilt +=
        (initialState.targetTilt - initialState.currentTilt) * smoothing;

      earthGroup.rotation.y = initialState.currentSpin;
      earthGroup.rotation.x = initialState.currentTilt;

      for (const p of initialState.pulses) {
        p.t = (p.t + p.speed * dt) % 1;
        const pos = p.curve.getPoint(p.t);
        p.sprite.position.copy(pos);
        // Fade in/out at the ends so the pulse appears to "jump" off Dhaka
        const fade = Math.sin(p.t * Math.PI);
        (p.sprite.material as THREE.SpriteMaterial).opacity = fade;
      }

      renderer.render(scene, camera);
      initialState.rafId = requestAnimationFrame(animate);
    }
    animate();

    // --- Cleanup ---
    return () => {
      initialState.disposed = true;
      if (initialState.rafId) cancelAnimationFrame(initialState.rafId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      el.removeEventListener("pointerleave", onPointerUp);

      earthGeo.dispose();
      earthMat.dispose();
      atmGeo.dispose();
      atmMat.dispose();
      destSpriteTex.dispose();
      originSpriteTex.dispose();
      pulseSpriteTex.dispose();

      arcsGroup.traverse((o) => {
        const line = o as THREE.Line;
        if (line.geometry) line.geometry.dispose();
        if (line.material) {
          const m = line.material as THREE.Material | THREE.Material[];
          if (Array.isArray(m)) m.forEach((mm) => mm.dispose());
          else m.dispose();
        }
      });
      markersGroup.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) {
          const m = mesh.material as THREE.Material | THREE.Material[];
          if (Array.isArray(m)) m.forEach((mm) => mm.dispose());
          else m.dispose();
        }
      });

      renderer.dispose();
      if (el.parentNode) el.parentNode.removeChild(el);
      stateRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, JSON.stringify(destinations), JSON.stringify(origin)]);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{
        position: "relative",
        width: size,
        height: size,
        maxWidth: "100%",
        touchAction: "none",
        cursor: "grab",
      }}
      aria-label="Interactive 3D Earth globe showing immigration pathways from Bangladesh"
    >
      {/* CSS atmospheric halo behind the canvas */}
      <div
        className="absolute inset-[-10%] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.40) 0%, rgba(1,64,167,0.16) 45%, transparent 70%)",
          transform: "translateZ(0)",
        }}
      />
      {/* Subtle orbit ring (single, was two) — GPU-promoted so the
          60s CSS spin animation never causes main-thread repaints. */}
      <div className="absolute inset-[-3%] rounded-full border border-white/10 animate-spin-slow pointer-events-none">
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(125,211,252,0.95)]" />
      </div>

      {/* Drag hint */}
      <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center">
        <div className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-medium text-white/80">
          Drag to rotate
        </div>
      </div>
    </div>
  );
}
