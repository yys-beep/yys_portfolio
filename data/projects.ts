import { Project } from '@/types';

export const projectsData: Project[] = [
  // ================= TIER S (Featured) =================
  {
    id: 'lobbylink',
    title: 'LobbyLink',
    year: 2026,
    tier: 'S',
    status: 'Live',
    description: 'Real-time campus coordination platform adapting to diverse collaboration needs (study, food, carpool).',
    imageUrl: '/images/lobbylink.jpg',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Firebase Firestore', 'Authentication'],
    contributions: [
      'Built real-time system using Firestore listeners',
      'Designed and developed full application architecture',
      'Implemented authentication and collaboration features',
      'Built chat, study, food ordering, and carpool modules',
      'Deployed production system'
    ],
    githubUrl: 'https://github.com/yys-beep/lobbylink',
    demoUrl: 'https://lobbylinkk.netlify.app'
  },
  {
    id: 'finplan',
    title: 'FinPlan 2026',
    year: 2026,
    tier: 'S',
    status: 'Active',
    description: 'Financial planning application for budget tracking, forecasting, and personal finance management.',
    imageUrl: '/images/finplan.jpg',
    techStack: ['Node.js', 'MongoDB', 'Express', 'JavaScript', 'Nodemailer'],
    contributions: [
      'Led ~85% of development',
      'Built frontend and backend',
      'Designed system workflows',
      'Implemented MongoDB integration',
      'Built email notification system'
    ],
    githubUrl: 'https://github.com/yys-beep/finplan2026',
    demoUrl: 'https://finplansystem2026.netlify.app/'
  },
  {
    id: 'fisheatfish',
    title: 'Fish Eat Fish',
    year: 2024,
    tier: 'S',
    status: 'University Project',
    description: 'A 2D arcade-style game demonstrating core OOP concepts, game mechanics, and collision detection.',
    imageUrl: '/images/fisheatfish.jpg',
    techStack: ['Java', 'JavaFX', 'OOP'],
    contributions: [
      'Independently developed core game logic',
      'Built movement system and collision detection',
      'Designed gameplay mechanics',
      'Developed JavaFX UI'
    ],
    githubUrl: 'https://github.com/yys-beep/FishEatFishGame'
  },
  {
    id: 'edumatch',
    title: 'EduMatch',
    year: 2025,
    tier: 'S',
    status: 'University Project',
    description: 'Mobile application matching users with educational resources through structured discovery.',
    imageUrl: '/images/edumatch.jpg',
    techStack: ['Android (Java)', 'Firebase Realtime DB', 'Firebase Auth'],
    contributions: [
      'Led ~80% development',
      'Designed Firebase database',
      'Built authentication system',
      'Developed matching logic'
    ],
    githubUrl: 'https://github.com/yys-beep/mad_edumatch'
  },

  // ================= TIER A (Strong Supporting) =================
  {
    id: 'fraud-detection',
    title: 'Fraud Detection System',
    year: 2026,
    tier: 'A',
    status: 'Hackathon Project',
    description: 'Comprehensive machine learning analysis combined with a React web interface to prevent fraudulent transactions.',
    imageUrl: '/images/fraud-detection.jpg',
    techStack: ['Python', 'Scikit-learn', 'React', 'Vite', 'Tailwind CSS'],
    contributions: [
      'Built frontend UI (React)',
      'Created dashboards and visualization layer',
      'Connected frontend to ML backend',
      'Managed deployment integration'
    ],
    githubUrl: 'https://github.com/yys-beep/vhack_fraud_backend',
    demoUrl: 'https://vhackfrauddetect.netlify.app/'
  },
  {
    id: 'photofusionfx',
    title: 'PhotoFusion FX',
    year: 2026,
    tier: 'A',
    status: 'Course Project',
    description: 'Comprehensive photo editing and management application with non-destructive layer-based editing.',
    imageUrl: '/images/photofusionfx.jpg',
    techStack: ['Java 21', 'JavaFX', 'SQLite', 'JCodec', 'Jakarta Mail'],
    contributions: [
      'Debugged and improved AI-generated codebase',
      'Fixed functional issues across modules',
      'Improved stability and usability',
      'Assisted feature integration'
    ],
    githubUrl: 'https://github.com/yys-beep/photofusionfx_optimized'
  },
  {
    id: 'immersivelearn',
    title: 'immersiveLearn',
    year: 2025,
    tier: 'A',
    status: 'Active',
    description: 'AI-powered interactive educational experience built with the Google Gemini API.',
    imageUrl: '/images/immersivelearn.jpg',
    techStack: ['React', 'TypeScript', 'Google Gemini API', 'Node.js'],
    contributions: [
      'Improved UI/UX design',
      'Enhanced hand-tracking functionality',
      'Optimized interaction flow',
      'Integrated and refined AI features'
    ],
    githubUrl: 'https://github.com/yys-beep/immersiveLearn',
    demoUrl: 'https://arimmersivelearn.netlify.app/'
  },

  // ================= TIER B (Archive) =================
  {
    id: 'ar-batu-seremban',
    title: 'AR Batu Seremban',
    year: 2025,
    tier: 'B',
    status: 'University Project',
    description: 'Augmented reality web app enhancing the traditional Malaysian game with AI gesture recognition.',
    imageUrl: '/images/ar-batu-seremban.jpg',
    techStack: ['TypeScript', 'Web AR', 'Google AI Studio', 'Node.js'],
    contributions: [
      'Improved gesture recognition accuracy',
      'Enhanced AR interaction system',
      'Added gameplay improvements'
    ],
    githubUrl: 'https://github.com/yys-beep/tcs_ar_batu_seremban',
    demoUrl: 'https://arbatuseremban.netlify.app/'
  },
  {
    id: 'ease-access',
    title: 'Ease & Access',
    year: 2025,
    tier: 'B',
    status: 'Competition Entry',
    description: 'Accessibility-focused information portal for Malaysia with centralized resources and AI chatbot.',
    imageUrl: '/images/ease-access.jpg',
    techStack: ['HTML5/CSS3', 'JavaScript', 'Tailwind CSS', 'Gemini API', 'Netlify Functions'],
    contributions: [
      'Contributed to frontend + backend development',
      'Assisted in Gemini chatbot integration',
      'Worked on accessibility features'
    ],
    githubUrl: 'https://github.com/yys-beep/gdg2025-Banana',
    demoUrl: 'https://easeandaccess.netlify.app'
  },
  {
    id: 'mindbloommap',
    title: 'MindBloomMap',
    year: 2025,
    tier: 'B',
    status: 'University Project',
    description: 'Project management and mind mapping application for visualizing ideas and organizing workflows.',
    imageUrl: '/images/mindbloommap.jpg',
    techStack: ['React', 'Vite', 'Expo (React Native)'],
    contributions: [
      'Contributed to React UI components',
      'Assisted in implementing mind map rendering',
      'Worked on real-time task organization'
    ],
    githubUrl: 'https://github.com/yys-beep/MindBloomMap_yys',
    demoUrl: 'https://testingmbm.netlify.app/'
  },
  {
    id: 'umescape',
    title: 'UM Escape',
    year: 2026,
    tier: 'B',
    status: 'Project',
    description: 'Interactive adventure game/escape room built for the University of Malaya community.',
    imageUrl: '/images/umescape.jpg',
    techStack: ['React', 'Vite', 'CSS3'],
    contributions: [
      'Built initial game structure',
      'Enhanced React UI and gameplay flow'
    ],
    githubUrl: 'https://github.com/yys-beep/um_escape',
    demoUrl: 'https://umescapegame.netlify.app/'
  },
  {
    id: 'healthlink',
    title: 'HealthLink Smart ID',
    year: 2025,
    tier: 'B',
    status: 'Prototype',
    description: 'Mobile app prototype for Malaysia\'s Smart Health ID system connecting citizens and healthcare providers.',
    imageUrl: '/images/healthlink.jpg',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'FontAwesome'],
    contributions: [
      'Contributed to hackathon ideation and prototype design',
      'Assisted in concept validation and presentation'
    ],
    githubUrl: 'https://github.com/yys-beep/HealthLink',
    demoUrl: 'https://szehantan.github.io/HealthLink/'
  }
];