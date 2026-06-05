import { TechCategory } from '@/types';

export const techStackData: TechCategory[] = [
  {
    name: 'Languages',
    icon: 'Code2',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    name: 'Web & Mobile',
    icon: 'Monitor',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'HTML & CSS', level: 90 },
      { name: 'Android Development', level: 80 },
      { name: 'REST API Integration', level: 85 },
    ],
  },
  {
    name: 'Backend & Database',
    icon: 'Database',
    skills: [
      { name: 'Firebase (Auth / Realtime)', level: 90 },
      { name: 'Database Design', level: 85 },
      { name: 'Oracle Database', level: 75 },
    ],
  },
  {
    name: 'AI & Data',
    icon: 'Brain',
    skills: [
      { name: 'Generative AI (Gemini/Claude)', level: 88 },
      { name: 'Prompt Engineering', level: 90 },
      { name: 'Data Preprocessing', level: 75 },
      { name: 'Machine Learning (Basic)', level: 65 },
    ],
  },
  {
    name: 'Emerging Tech',
    icon: 'Sparkles',
    skills: [
      { name: 'AI-assisted Prototyping', level: 88 },
      { name: 'AR Development', level: 75 },
      { name: 'Computer Vision', level: 65 },
    ],
  },
  {
    name: 'Tools & Platforms',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Android Studio', level: 80 },
    ],
  },
];