import { motion } from 'framer-motion';
import { Briefcase, Target, Lightbulb, User } from 'lucide-react';

/**
 * SectionAPropos - Section À propos avec design moderne et premium
 * Affiche une description détaillée avec style contemporain
 */
export function SectionAPropos() {
  const contenuSections = [
    {
      id: 1,
      icon: Briefcase,
      titre: 'Qui suis-je',
      texte: 'Développeur web freelance et étudiant en informatique, spécialisé dans la conception de sites web modernes, performants et centrés sur l\'expérience utilisateur.',
      couleur: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: Lightbulb,
      titre: 'Mon approche',
      texte: 'J\'accompagne mes clients dans la création de solutions digitales sur mesure, alliant design soigné, performance et technologies récentes. Rigoureux, autonome et orienté résultats, je m\'engage à livrer des projets fiables, optimisés et adaptés aux besoins spécifiques de chaque client.',
      couleur: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      icon: Target,
      titre: 'Mon objectif',
      texte: 'Mon objectif est d\'apporter une réelle valeur ajoutée à travers des solutions web efficaces, évolutives et professionnelles.',
      couleur: 'from-green-500 to-emerald-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 px-4 bg-linear-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* En-tête simple style Compétences/Projets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-12">
            <User className="text-blue-600 dark:text-blue-400" size={32} />
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">À propos</h2>
          </div>
        </motion.div>

        {/* Trois cartes avec contenu */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {contenuSections.map((section) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                variants={itemVariants}
                className="group relative"
              >
                {/* Fond avec gradient */}
                <div className={`absolute inset-0 bg-linear-to-br ${section.couleur} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-lg`}></div>
                
                {/* Carte */}
                <div className="relative h-full p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-2xl hover:border-white/40 dark:hover:border-gray-600/40 transition-all duration-300 hover:shadow-xl">
                  {/* Icône */}
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-14 h-14 rounded-xl bg-linear-to-br ${section.couleur} flex items-center justify-center text-white mb-6 shadow-lg`}
                  >
                    <Icon size={28} />
                  </motion.div>
                  
                  {/* Titre */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {section.titre}
                  </h3>
                  
                  {/* Texte */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                    {section.texte}
                  </p>

                  {/* Ligne decorative au bas */}
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + section.id * 0.1, duration: 0.6 }}
                    className={`mt-6 h-1 bg-linear-to-r ${section.couleur} rounded-full`}
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Section texte complet avec effet glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative mt-16"
        >
          {/* Éléments de décoration */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-20 dark:opacity-10"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-400 rounded-full blur-3xl opacity-20 dark:opacity-10"></div>

          {/* Carte principale */}
          
        </motion.div>
      </div>
    </section>
  );
}
