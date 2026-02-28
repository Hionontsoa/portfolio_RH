/**
 * ConstantsProjets - Fichier contenant les données des projets
 * Centralize les données pour faciliter la maintenance
 */

export interface Projet {
  title: string;
  description: string;
  technologies: string[];
  color: string;
}

/**
 * Liste complète des projets réalisés
 */
export const PROJETS: Projet[] = [
  {
    title: 'Site vitrine moderne',
    description: 'Un site vitrine élégant et responsive avec animations modernes',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Application de gestion',
    description: 'Système de gestion simple avec interface intuitive',
    technologies: ['PHP', 'MySQL', 'Bootstrap'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Dashboard React',
    description: 'Interface d\'administration moderne avec graphiques interactifs',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    color: 'from-orange-500 to-red-500'
  }
];
