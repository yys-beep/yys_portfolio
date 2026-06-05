import { Experience } from '@/types';

export const experienceData: Experience[] = [
  // ================= PROFESSIONAL EXPERIENCE =================
  {
    id: 'data-structures-demo',
    role: 'Data Structures Demonstrator (Java)',
    organization: 'University of Malaya',
    duration: 'March 2026 - June 2026',
    description: [
      'Guided students in implementing data structures and algorithms including trees, sorting, and searching techniques.',
      'Assisted debugging of Java-based programming and logical problem-solving tasks.',
      'Supported technical lab sessions and explained algorithmic concepts clearly.'
    ],
    tags: ['Java', 'Data Structures', 'Algorithms', 'Mentorship']
  },
  {
    id: 'programming-demo',
    role: 'Programming Demonstrator (Java)',
    organization: 'University of Malaya',
    duration: 'Oct 2025 - Jan 2026',
    description: [
      'Explained programming fundamentals and object-oriented programming concepts.',
      'Assisted students with debugging, logical thinking, and problem-solving approaches.',
      'Facilitated hands-on programming lab activities.'
    ],
    tags: ['Java', 'OOP', 'Debugging', 'Teaching']
  },
  {
    id: 'teaching-assistant-exin',
    role: 'Teaching Assistant',
    organization: 'Exin Tuition Centre',
    duration: 'July 2024 - Sep 2024',
    description: [
      'Provided academic support and one-to-one tutoring assistance.',
      'Explained key concepts and improved student understanding.',
      'Assisted classroom management and learning activities.'
    ],
    tags: ['Tutoring', 'Communication', 'Classroom Management']
  },

  // ================= ACTIVITIES / LEADERSHIP =================
  {
    id: 'um-hackathon-vice-head',
    role: 'Vice Head (Contest Protocol)',
    organization: 'UM Hackathon 2026',
    duration: 'Feb 2026 - June 2026',
    description: [
      'Coordinated competition flow and participant management.',
      'Managed communication between judges and teams.'
    ],
    tags: ['Leadership', 'Event Management', 'Communication']
  },
  {
    id: 'um-technothon-committee',
    role: 'Committee Member (Contest Protocol)',
    organization: 'UM Technothon 2026',
    duration: 'Feb 2026 - June 2026',
    description: [
      'Supported technical competition operations and logistics.',
      'Ensured structured participant flow and event execution.'
    ],
    tags: ['Logistics', 'Operations', 'Teamwork']
  },
  {
    id: 'um-game-jam-committee',
    role: 'Committee Member (Logistics & Technical)',
    organization: 'UM Game Jam 2026',
    duration: 'November 2025 - April 2026',
    description: [
      'Managed technical setup and event logistics.',
      'Provided on-site technical support to participants.'
    ],
    tags: ['Technical Support', 'Event Setup', 'Problem Solving']
  }
];