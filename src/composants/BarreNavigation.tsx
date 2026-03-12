import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { LIENS_NAVIGATION } from '../constants';
import { useTheme } from '../contexte/ContexteTheme';

/**
 * BarreNavigation : Composant de navigation principal de l'application.
 * Gère le défilement, le menu mobile et le basculement du thème (Dark Mode).
 * 
 * Comportement :
 * - Devient semi-transparent avec un flou au défilement.
 * - Intègre un bouton pour basculer entre le mode clair et sombre.
 * - Responsive : menu burger sur mobile, liens horizontaux sur bureau.
 */
export default function BarreNavigation() {
  const [estOuvert, setEstOuvert] = useState(false);
  const [estDefile, setEstDefile] = useState(false);
  const { themeSombre, basculerTheme } = useTheme();

  // Détecte le défilement pour modifier l'apparence de la barre
  useEffect(() => {
    const gererDefilement = () => {
      setEstDefile(window.scrollY > 20);
    };
    window.addEventListener('scroll', gererDefilement);
    return () => window.removeEventListener('scroll', gererDefilement);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        estDefile 
          ? 'bg-white/70 dark:bg-fond-sombre/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 py-3 shadow-lg shadow-slate-200/20 dark:shadow-none' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo RH */}
        <motion.a 
          href="#accueil"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-primaire rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primaire/30 group-hover:rotate-12 transition-transform duration-300">
            RH
          </div>
          <span className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white hidden sm:block">
            HIONONTSOA<span className="text-primaire">.</span>
          </span>
        </motion.a>

        {/* Navigation Bureau */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          <div className="flex items-center bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
            {LIENS_NAVIGATION.map((lien) => (
              <a
                key={lien.nom}
                href={lien.href}
                className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-texte-sombre hover:text-primaire dark:hover:text-white rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-all duration-300"
              >
                {lien.nom}
              </a>
            ))}
          </div>
          
          <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2" />

          {/* Bouton Toggle Dark Mode */}
          <button
            onClick={basculerTheme}
            className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-texte-sombre hover:text-primaire dark:hover:text-white border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300"
            aria-label="Changer de thème"
          >
            {themeSombre ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href="#contact"
            className="px-6 py-2.5 bg-slate-900 dark:bg-primaire text-white text-sm font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-indigo-700 transition-all shadow-lg shadow-slate-200 dark:shadow-primaire/20 active:scale-95"
          >
            Me Contacter
          </a>
        </div>

        {/* Toggle Mobile et Thème */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={basculerTheme}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-texte-sombre border border-slate-200 dark:border-slate-700"
          >
            {themeSombre ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="p-2.5 rounded-xl bg-slate-900 dark:bg-primaire text-white shadow-lg"
            onClick={() => setEstOuvert(!estOuvert)}
          >
            {estOuvert ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Navigation Mobile */}
      <AnimatePresence>
        {estOuvert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-fond-sombre/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {LIENS_NAVIGATION.map((lien) => (
                <a
                  key={lien.nom}
                  href={lien.href}
                  onClick={() => setEstOuvert(false)}
                  className="px-4 py-3 text-lg font-bold text-slate-600 dark:text-texte-sombre hover:text-primaire dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all"
                >
                  {lien.nom}
                </a>
              ))}
              <div className="h-[1px] bg-slate-100 dark:bg-slate-800 my-2" />
              <a
                href="#contact"
                onClick={() => setEstOuvert(false)}
                className="w-full py-4 bg-slate-900 dark:bg-primaire text-white text-center rounded-xl font-bold shadow-xl active:scale-95 transition-transform"
              >
                Me Contacter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
