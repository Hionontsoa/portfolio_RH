import { motion } from 'framer-motion';
import { Briefcase, Code2, Github, Award } from 'lucide-react';

/**
 * Types de données
 */
interface Projet {
  title: string;
  description: string;
  technologies: string[];
  color: string;
}

interface SectionProjetsProps {
  projets: Projet[];
}

/**
 * CarteProjets - Carte affichant un projet avec ses informations
 * 
 * @param projet - Objet contenant les données du projet
 * @param index - Index pour l'animation en cascade
 */
function CarteProjets({ projet, index }: { projet: Projet; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
    >
      {/* En-tête du projet avec gradient */}
      <div className={`h-40 bg-linear-to-br ${projet.color} flex items-center justify-center`}>
        <Code2 size={64} className="text-white opacity-80" />
      </div>

      {/* Contenu du projet */}
      <div className="p-6">
        {/* Titre du projet */}
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
          {projet.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {projet.description}
        </p>

        {/* Badges de technologie */}
        <div className="flex flex-wrap gap-2 mb-4">
          {projet.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Boutons d'action */}
        <div className="mt-4 flex gap-3">
          {/* Lien GitHub */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <Github size={20} />
            <span className="text-sm">GitHub</span>
          </motion.button>

          {/* Lien Démo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700"
          >
            <Award size={20} />
            <span className="text-sm">Démo</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * SectionProjets - Section affichant les projets réalisés
 * 
 * @param projets - Tableau des projets
 */
export function SectionProjets({ projets }: SectionProjetsProps) {
  return (
    <section id="projets" className="py-20 px-4 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* En-tête */}
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-blue-600 dark:text-blue-400" size={32} />
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Projets & Réalisations</h2>
          </div>

          {/* Grille de projets */}
          <div className="grid md:grid-cols-3 gap-8">
            {projets.map((projet, index) => (
              <CarteProjets
                key={projet.title}
                projet={projet}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
