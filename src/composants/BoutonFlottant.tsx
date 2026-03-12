import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare } from 'lucide-react';

/**
 * BoutonFlottant : Un bouton flottant qui reste visible au défilement.
 * 
 * Fonctionnalités :
 * - Position fixe en bas à droite de l'écran.
 * - Animation d'entrée et de survol avec Framer Motion.
 * - Texte qui se révèle au survol ("Me Contacter").
 * - Lien direct vers la section contact.
 */
export default function BoutonFlottant() {
  return (
    <AnimatePresence>
      <motion.a
        href="#contact"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 p-4 bg-primaire text-white rounded-2xl shadow-2xl flex items-center gap-3 font-bold hover:bg-indigo-700 transition-colors group"
      >
        {/* Texte révélé au survol */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap">
          Me Contacter
        </span>
        <MessageSquare size={24} />
      </motion.a>
    </AnimatePresence>
  );
}
