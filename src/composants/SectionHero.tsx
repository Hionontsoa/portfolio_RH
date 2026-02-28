import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';


interface SectionHeroProps {
  onScrollToSection: (id: string) => void;
}

/**
 * SectionHero - Section hero du portfolio
 * Affiche le titre, le sous-titre, les boutons d'action et l'image de profil
 * 
 * @param onScrollToSection - Fonction de rappel pour scroller vers une section
 */
export function SectionHero({ onScrollToSection }: SectionHeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 min-h-screen flex items-center bg-linear-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Contenu texte - Partie gauche */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            {/* Badge de bienvenue */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4"
            >
              👋 Bienvenue sur mon portfolio
            </motion.div>
            
            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              RABEMALALA Hionontsoa
            </motion.h1>
            
            {/* Sous-titre */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6"
            >
              Développeur Web Junior
            </motion.h2>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8"
            >
              Passionné par le développement web et la création d'applications modernes.
            </motion.p>
            
            {/* Boutons d'action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {/* Bouton Me contacter */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onScrollToSection('contact')}
                className="px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                Me contacter
              </motion.button>

              {/* Bouton Télécharger CV */}
              <motion.a
                href="https://cvdesignr.com/p/69687eeeb8d08?hl=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center gap-2"
              >
                <Download size={20} />
                Télécharger mon CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image de profil - Partie droite */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animation de fond gradient */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-30"
              />

              {/* Image du profil avec fallback */}
              <img
                src="/profile.png"
                alt="Profile"
                className="relative z-10 w-full h-full object-cover rounded-full border-8 border-white shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Flèche animée pour scroller */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-16"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={() => onScrollToSection('apropos')}
            className="text-blue-600 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white/90 transition-colors cursor-pointer hover:shadow-xl hover:text-blue-700 "
            aria-label="Scroller vers la section"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
