import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

/**
 * SectionFormation - Section affichant la formation académique
 * Affiche les informations de formation avec icône et détails
 */
export function SectionFormation() {
  return (
    <section id="formation" className="py-20 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* En-tête */}
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="text-blue-600 dark:text-blue-400" size={32} />
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Formation</h2>
          </div>

          {/* Carte de formation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-start gap-6">
              {/* Icône avec gradient */}
              <div className="shrink-0">
                <div className="w-16 h-16 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-white" size={32} />
                </div>
              </div>

              {/* Détails de la formation */}
              <div className="flex-1">
                {/* Titre du diplôme */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Licence 3 – Informatique de gestion / Génie logiciel
                </h3>

                {/* Établissement */}
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                  Université / École Supérieure
                </p>

                {/* Période de formation */}
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  2023 - 2026
                </p>

                {/* Description du programme */}
                <p className="text-gray-600 dark:text-gray-400">
                  Formation complète en développement logiciel, bases de données, réseaux et gestion de projets informatiques.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
