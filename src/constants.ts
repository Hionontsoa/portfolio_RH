import { 
  Code2, 
  Server, 
  Database, 
  Terminal, 
  Layout, 
  Cpu, 
  Github, 
  Linkedin, 
  Twitter,
  Atom,
  Wind,
  Framer,
  Triangle,
  Zap,
  Layers,
  Globe,
  MessageCircle,
  FileCode,
  Box,
  GitBranch,
  Monitor
} from 'lucide-react';

import optimalife1 from './assets/optimalife1.png';
import optimalife2 from './assets/optimalife2.png';
import optimalife3 from './assets/optimalife3.png';
import optimalife4 from './assets/optimalife4.png';
import optimalife5 from './assets/optimalife5.png';
import optimalife6 from './assets/optimalife6.png';
import optimalife7 from './assets/optimalife7.png';
import optimalife8 from './assets/optimalife8.png';

import profile1 from './assets/profile1.png';
import profile2 from './assets/profile2.png';
import profile3 from './assets/profile3.png';
import profile4 from './assets/profile4.png';
import profile5 from './assets/profile5.png';
import profile6 from './assets/profile6.png';



export const LIENS_NAVIGATION = [
  { nom: 'Accueil', href: '#accueil' },
  { nom: 'À Propos', href: '#a-propos' },
  { nom: 'Compétences', href: '#competences' },
  { nom: 'Projets', href: '#projets' },
  { nom: 'Services', href: '#services' },
  { nom: 'Contact', href: '#contact' },
];

export const LIENS_SOCIAUX = [
  { name: 'GitHub', href: 'https://github.com/Hionontsoa', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hionontsoa-rabemalala-b10b90350/', icon: Linkedin },
  { name: 'WhatsApp', href: 'https://wa.me/261386645548', icon: MessageCircle },
];

export const ICONES_TECH: Record<string, any> = {
  'React': Atom,
  'Supabase': Database,
  'Vercel': Triangle,
  'Tailwind': Wind,
  'Framer Motion': Framer,
  'Django': Globe,
  'Python': Code2,
  'JavaScript': Zap,
  'TypeScript': Code2,
  'HTML': Layout,
  'CSS': Layers,
  'MySQL': Database,
  'NodeJS': Server,
  'Git': GitBranch,
  'Vite': Zap,
  'C#': Terminal,
};

export const COMPETENCES = [
  {
    categorie: 'Frontend',
    icone: Layout,
    items: [
      { 
        nom: 'HTML', 
        icone: Layout, 
        niveau: 95, 
        description: 'Maîtrise avancée de la structure sémantique et de l\'accessibilité web.',
        projets: ['OptimaLife', 'Portfolio'],
        techs: ['HTML5', 'SEO', 'Accessibilité']
      },
      { 
        nom: 'CSS', 
        icone: Layers, 
        niveau: 80, 
        description: 'Conception de layouts complexes et animations fluides.',
        projets: ['OptimaLife', 'Portfolio'],
        techs: ['CSS3', 'Flexbox', 'Grid', 'SASS']
      },
      { 
        nom: 'JavaScript', 
        icone: Zap, 
        niveau: 75, 
        description: 'Développement de logique complexe et manipulation du DOM.',
        projets: ['OptimaLife', 'Calculatrice'],
        techs: ['ES6+', 'Async/Await', 'DOM API']
      },
      { 
        nom: 'React', 
        icone: Atom, 
        niveau: 75, 
        description: 'Création d\'interfaces utilisateur dynamiques et performantes.',
        projets: ['OptimaLife', 'Portfolio'],
        techs: ['Hooks', 'Context API', 'React Router']
      },
      { 
        nom: 'Tailwind', 
        icone: Wind, 
        niveau: 80, 
        description: 'Stylisation rapide et efficace avec une approche utility-first.',
        projets: ['OptimaLife', 'Portfolio'],
        techs: ['JIT Mode', 'Custom Config', 'Responsive Design']
      },
    ],
  },
  {
    categorie: 'Backend',
    icone: Server,
    items: [
      { 
        nom: 'Python', 
        icone: Code2, 
        niveau: 65, 
        description: 'Développement de scripts et d\'applications backend robustes.',
        projets: ['Gestion de Stock', 'Analyse de données'],
        techs: ['Pandas', 'NumPy', 'Scripts automation']
      },
      { 
        nom: 'Django', 
        icone: Globe, 
        niveau: 60, 
        description: 'Création d\'applications web complètes avec le framework Django.',
        projets: ['E-commerce', 'Blog'],
        techs: ['DRF', 'ORM', 'Templates']
      },
      { 
        nom: 'NodeJS', 
        icone: Server, 
        niveau: 45, 
        description: 'Développement de serveurs et d\'APIs avec Node.js.',
        projets: ['Chat App',],
        techs: ['Express', 'Socket.io', 'NPM']
      },
      { 
        nom: 'Supabase', 
        icone: Database, 
        niveau: 63, 
        description: 'Utilisation de BaaS pour l\'authentification et la base de données en temps réel.',
        projets: ['OptimaLife'],
        techs: ['Auth', 'PostgreSQL', 'Realtime']
      },
    ],
  },
  {
    categorie: 'Outils & Autres',
    icone: Cpu,
    items: [
      { 
        nom: 'Git', 
        icone: GitBranch, 
        niveau: 85, 
        description: 'Gestion de version et collaboration efficace.',
        projets: ['Tous mes projets'],
        techs: ['GitHub', 'GitLab', 'Branching strategy']
      },
      { 
        nom: 'C#', 
        icone: Terminal, 
        niveau: 65, 
        description: 'Bases de la programmation orientée objet avec C#.',
        projets: [ 'Desktop App'],
        techs: ['.NET', 'Entity Framework','Windows Forms']
      },
      { 
        nom: 'MySQL', 
        icone: Database, 
        niveau: 70, 
        description: 'Conception et gestion de bases de données relationnelles.',
        projets: ['Gestion de bibliothèque'],
        techs: ['SQL', 'Workbench', 'Optimization']
      },
    ],
  },
];

export const PROJETS = [
  {
    titre: 'OptimaLife',
    description: 'Application web moderne de gestion de tâches avec authentification et base de données Supabase.',
    image: optimalife1,
    galerie: [
      optimalife1,
      optimalife2,
      optimalife3,
      optimalife4,
      optimalife5,
      optimalife6,
      optimalife7,
      optimalife8,
    ],
    technologies: ['React', 'Supabase', 'Vercel'],
    lienDemo: 'https://optimalife.vercel.app/',
    lienGithub: 'https://github.com/Hionontsoa/OptimaLife-v1.1.0',
  },
  {
    titre: 'Portfolio Personnel',
    description: 'Ce portfolio même, conçu pour présenter mes compétences et mes projets de manière élégante.',
    image: profile1,
    galerie: [
      profile1,
      profile2,
      profile3,
      profile4,
      profile5,
      profile6,
    ],
    technologies: ['React', 'Tailwind', 'Framer Motion'],
    lienDemo: '#',
    lienGithub: 'https://github.com',
  },
];


export const FORMATIONS = [
  {
    titre: 'Licence en Informatique',
    etablissement: 'Institut Supérieur Polytechnique de Madagascar (ISPM)',
    annee: '2023 - Présent',
  },
  {
    titre: 'Baccalauréat Série D',
    etablissement: 'Lycée La VICTOIRE',
    annee: '2022',
  },
  {
    titre: 'Baccalauréat Série A2',
    etablissement: 'Lycée La VICTOIRE',
    annee: '2021',
  },
];

export const CERTIFICATIONS = [
  {
    titre: 'Développeur React Certifié',
    organisme: 'Meta (Coursera)',
    annee: '2024',
  },/*
  {
    titre: 'Python for Data Science',
    organisme: 'IBM',
    annee: '2023',
  },*/
];

export const SERVICES = [
  {
    titre: 'Développement Web',
    description: 'Création d\'applications web modernes, performantes et évolutives avec React et Django.',
    icone: Code2,
  },
  {
    titre: 'Optimisation SEO',
    description: 'Amélioration de la visibilité de votre site sur les moteurs de recherche pour attirer plus de clients.',
    icone: Cpu,
  },
  {
    titre: 'Design UI/UX',
    description: 'Conception d\'interfaces utilisateur intuitives et esthétiques pour une expérience utilisateur optimale.',
    icone: Layout,
  },
];
