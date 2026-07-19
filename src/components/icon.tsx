"use client";

import {
  GraduationCap,
  Plane,
  FileCheck2,
  Compass,
  Globe2,
  Handshake,
  Target,
  Eye,
  HeartPulse,
  Building2,
  Mail,
  Phone,
  MapPin,
  Play,
  Instagram,
  Youtube,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  Quote,
  Sparkles,
  Users,
  Clock,
  ShieldCheck,
  type LucideProps,
} from "lucide-react";

const ICONS = {
  graduation: GraduationCap,
  passport: FileCheck2,
  "file-check": FileCheck2,
  compass: Compass,
  globe: Globe2,
  plane: Plane,
  handshake: Handshake,
  target: Target,
  eye: Eye,
  "heart-pulse": HeartPulse,
  building: Building2,
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin,
  play: Play,
  instagram: Instagram,
  youtube: Youtube,
  whatsapp: MessageCircle,
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  quote: Quote,
  sparkles: Sparkles,
  users: Users,
  clock: Clock,
  shield: ShieldCheck,
};

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Cmp = ICONS[name as IconName] ?? Sparkles;
  return <Cmp {...props} />;
}
