import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface Metric {
  id: string;
  value: string;
  label: string;
  icon?: LucideIcon;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
}
