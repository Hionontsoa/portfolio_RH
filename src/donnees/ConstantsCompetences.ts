/**
 * ConstantsCompetences - Fichier contenant les données des compétences
 * Centralize les données pour faciliter la maintenance
 */

import { 
  Code2, 
  FileCode2,
  Palette,
  Braces,
  Hash,
  Database,
  GitBranch,
  Layers,
  Smartphone,
  Pencil
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Competence {
  name: string;
  level: number;
  category: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  textColor: string;
}

/**
 * Liste complète des compétences
 * Organisées par catégorie : Langages, Frameworks, Autres
 */
export const COMPETENCES: Competence[] = [
  // Langages de programmation
  { 
    name: 'HTML', 
    level: 90, 
    category: 'Langages', 
    icon: FileCode2, 
    color: 'from-orange-500 to-red-500', 
    bgColor: 'bg-orange-50', 
    textColor: 'text-orange-600' 
  },
  { 
    name: 'CSS', 
    level: 85, 
    category: 'Langages', 
    icon: Palette, 
    color: 'from-blue-500 to-cyan-500', 
    bgColor: 'bg-blue-50', 
    textColor: 'text-blue-600' 
  },
  { 
    name: 'JavaScript', 
    level: 80, 
    category: 'Langages', 
    icon: Braces, 
    color: 'from-yellow-500 to-orange-500', 
    bgColor: 'bg-yellow-50', 
    textColor: 'text-yellow-600' 
  },
  { 
    name: 'TypeScript', 
    level: 75, 
    category: 'Langages', 
    icon: Code2, 
    color: 'from-blue-600 to-blue-800', 
    bgColor: 'bg-blue-50', 
    textColor: 'text-blue-700' 
  },
  { 
    name: 'PHP', 
    level: 70, 
    category: 'Langages', 
    icon: Hash, 
    color: 'from-purple-600 to-indigo-600', 
    bgColor: 'bg-purple-50', 
    textColor: 'text-purple-600' 
  },
  { 
    name: 'Python', 
    level: 75, 
    category: 'Langages', 
    icon: Code2, 
    color: 'from-green-600 to-emerald-600', 
    bgColor: 'bg-green-50', 
    textColor: 'text-green-600' 
  },
  { 
    name: 'C#', 
    level: 65, 
    category: 'Langages', 
    icon: Braces, 
    color: 'from-purple-700 to-purple-900', 
    bgColor: 'bg-purple-50', 
    textColor: 'text-purple-700' 
  },

  // Frameworks et technologies
  { 
    name: 'React', 
    level: 80, 
    category: 'Frameworks', 
    icon: Layers, 
    color: 'from-cyan-500 to-blue-500', 
    bgColor: 'bg-cyan-50', 
    textColor: 'text-cyan-600' 
  },
  { 
    name: 'Tailwind CSS', 
    level: 85, 
    category: 'Frameworks', 
    icon: Palette, 
    color: 'from-teal-500 to-cyan-600', 
    bgColor: 'bg-teal-50', 
    textColor: 'text-teal-600' 
  },
  { 
    name: 'Django', 
    level: 70, 
    category: 'Frameworks', 
    icon: Code2, 
    color: 'from-green-700 to-green-900', 
    bgColor: 'bg-green-50', 
    textColor: 'text-green-700' 
  },
  { 
    name: 'Figma', 
    level: 75, 
    category: 'Frameworks', 
    icon: Pencil, 
    color: 'from-pink-500 to-rose-500', 
    bgColor: 'bg-pink-50', 
    textColor: 'text-pink-600' 
  },
  { 
    name: 'Git', 
    level: 80, 
    category: 'Frameworks', 
    icon: GitBranch, 
    color: 'from-orange-600 to-red-600', 
    bgColor: 'bg-orange-50', 
    textColor: 'text-orange-600' 
  },

  // Autres compétences
  { 
    name: 'UI/UX', 
    level: 75, 
    category: 'Autres', 
    icon: Pencil, 
    color: 'from-indigo-500 to-purple-500', 
    bgColor: 'bg-indigo-50', 
    textColor: 'text-indigo-600' 
  },
  { 
    name: 'Bases de données', 
    level: 70, 
    category: 'Autres', 
    icon: Database, 
    color: 'from-blue-700 to-indigo-700', 
    bgColor: 'bg-blue-50', 
    textColor: 'text-blue-700' 
  },
  { 
    name: 'Responsive Design', 
    level: 85, 
    category: 'Autres', 
    icon: Smartphone, 
    color: 'from-purple-500 to-pink-500', 
    bgColor: 'bg-purple-50', 
    textColor: 'text-purple-600' 
  }
];
