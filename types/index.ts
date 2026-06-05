export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  tags: string[];
  side?: 'left' | 'right';
}

export type Tier = 'S' | 'A' | 'B';

export interface Project {
  id: string;
  title: string;
  year: number;
  tier: Tier;
  status: string;
  description: string;
  techStack: string[];
  contributions: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  description: string[];
  tags?: string[];
}

export interface Achievement {
  id: string;
  competition: string;
  award: string;
  year: string;
  description?: string;
}

export interface TechCategory {
  name: string;
  icon: string;
  skills: TechSkill[];
}

export interface TechSkill {
  name: string;
  level?: number;
}
