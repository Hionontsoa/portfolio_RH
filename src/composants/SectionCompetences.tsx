import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Types de données
 */
interface Competence {
  name: string;
  level: number;
  category: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  textColor: string;
}

interface SectionCompetencesProps {
  competences: Competence[];
}

/**
 * CarteCompetence - Carte affichant une compétence avec sa barre de progression
 * 
 * @param competence - Objet contenant les données de la compétence
 * @param index - Index pour l'animation en cascade
 * @param estSurvole - État indiquant si la compétence est survolée
 * @param onSurvoler - Fonction appelée lors du survol
 */
function CarteCompetence({
  competence,
  index,
  estSurvole,
  onSurvoler,
}: {
  competence: Competence;
  index: number;
  estSurvole: boolean;
  onSurvoler: (nom: string | null) => void;
}) {
  const Icon = competence.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.08, 
        y: -8,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => onSurvoler(competence.name)}
      onHoverEnd={() => onSurvoler(null)}
      className="relative group cursor-pointer"
    >
      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        {/* Fond dégradé au survol */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: estSurvole ? 0.1 : 0 }}
          className={`absolute inset-0 bg-linear-to-br ${competence.color}`}
        />
        
        {/* Conteneur d'icône avec animation */}
        <motion.div
          animate={{ 
            rotate: estSurvole ? 360 : 0,
          }}
          transition={{ duration: 0.6 }}
          className={`relative w-16 h-16 ${competence.bgColor} dark:bg-opacity-20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className={competence.textColor} size={32} />
        </motion.div>

        {/* Nom de la compétence */}
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 relative z-10">
          {competence.name}
        </h3>

        {/* Badge de niveau */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-sm font-medium ${competence.textColor}`}>
            {competence.level}%
          </span>
          <motion.span 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.05 }}
            className="text-xs text-gray-500"
          >
            {competence.level >= 80 ? 'Avancé' : competence.level >= 65 ? 'Intermédiaire' : 'Débutant'}
          </motion.span>
        </div>

        {/* Barre de progression */}
        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${competence.level}%` }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.2, 
              delay: index * 0.05,
              ease: "easeOut"
            }}
            className={`h-full bg-linear-to-r ${competence.color} rounded-full relative`}
          >
            <motion.div
              animate={{
                x: [0, 10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-white opacity-30"
            />
          </motion.div>
        </div>

        {/* Effet de particules au survol */}
        {estSurvole && (
          <>
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-linear-to-r ${competence.color}`}
            />
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-linear-to-r ${competence.color}`}
            />
          </>
        )}
      </div>
    </motion.div>
  );
}

/**
 * SectionCompetences - Section affichant l'ensemble des compétences
 * Affiche les compétences par catégorie avec des cartes interactives
 * 
 * @param competences - Tableau des compétences
 */
export function SectionCompetences({ competences }: SectionCompetencesProps) {
  const [competenceSurvole, setCompetenceSurvole] = React.useState<string | null>(null);

  // Regrouper les compétences par catégorie
  const competencesParCategorie = {
    Langages: competences.filter(c => c.category === 'Langages'),
    Frameworks: competences.filter(c => c.category === 'Frameworks'),
    Autres: competences.filter(c => c.category === 'Autres'),
  };

  return (
    <section id="compétences" className="py-20 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* En-tête */}
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="text-blue-600 dark:text-blue-400" size={32} />
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Compétences</h2>
          </div>

          {/* Grille de compétences */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {competences.map((competence, index) => (
              <CarteCompetence
                key={competence.name}
                competence={competence}
                index={index}
                estSurvole={competenceSurvole === competence.name}
                onSurvoler={setCompetenceSurvole}
              />
            ))}
          </div>

          {/* Filtres de catégories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex justify-center gap-4 flex-wrap"
          >
            <div className="px-6 py-2 bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-sm text-gray-700 dark:text-gray-300">
              <span className="font-bold text-blue-600 dark:text-blue-400">{competencesParCategorie.Langages.length}</span> Langages
            </div>
            <div className="px-6 py-2 bg-linear-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/30 dark:to-teal-900/30 rounded-full text-sm text-gray-700 dark:text-gray-300">
              <span className="font-bold text-cyan-600 dark:text-cyan-400">{competencesParCategorie.Frameworks.length}</span> Frameworks & Outils
            </div>
            <div className="px-6 py-2 bg-linear-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full text-sm text-gray-700 dark:text-gray-300">
              <span className="font-bold text-purple-600 dark:text-purple-400">{competencesParCategorie.Autres.length}</span> Autres compétences
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Importer React pour upaisseur Hooks
import * as React from 'react';
