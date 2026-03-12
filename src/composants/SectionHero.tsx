import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github } from 'lucide-react';

/**
 * SectionHero : Affiche le titre principal, le sous-titre et les boutons d'appel à l'action.
 * C'est la première section visible par l'utilisateur (Above the fold).
 * 
 * Fonctionnalités :
 * - Animations d'entrée fluides pour le texte et les images.
 * - Éléments décoratifs en arrière-plan (blur).
 * - Cartes flottantes animées pour mettre en avant des statistiques ou des badges.
 * - Support complet du Dark Mode via les classes `dark:`.
 */
export default function SectionHero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50 dark:bg-fond-sombre transition-colors duration-500">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-indigo-100/50 dark:bg-indigo-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-emerald-50/50 dark:bg-emerald-900/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Colonne Gauche : Texte et Boutons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge de disponibilité */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-fond-carte border border-indigo-100 dark:border-slate-700 text-primaire dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Disponible pour freelance
          </motion.div>

          {/* Titre Principal */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[1] mb-6 tracking-tighter"
          >
            Développeur <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaire via-violet-500 to-indigo-600 dark:from-indigo-400 dark:via-violet-400 dark:to-emerald-400">
              Full Stack
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-slate-600 dark:text-texte-sombre mb-10 max-w-lg leading-relaxed"
          >
            Je crée des applications web modernes avec <span className="text-slate-900 dark:text-white font-semibold">React</span>, <span className="text-slate-900 dark:text-white font-semibold">Django</span> et <span className="text-slate-900 dark:text-white font-semibold">Supabase</span>.
          </motion.p>

          {/* Boutons d'action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projets" 
              className="px-8 py-4 bg-slate-900 dark:bg-primaire text-white rounded-2xl font-semibold flex items-center gap-2 hover:bg-slate-800 dark:hover:bg-indigo-700 transition-all shadow-xl shadow-slate-200 dark:shadow-none group cursor-pointer active:scale-95"
            >
              Voir Projets
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white dark:bg-fond-carte text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer active:scale-95"
            >
              Me Contacter
            </a>
          </motion.div>

          {/* Preuve sociale / Avatars */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100.webp`}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-fond-sombre"
                  alt="Client"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              ))}
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Fait confiance par <span className="text-slate-900 dark:text-white font-bold">10+</span> clients
            </p>
          </motion.div>
        </motion.div>

        {/* Colonne Droite : Image et Éléments Flottants */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 bg-white dark:bg-fond-carte p-3 sm:p-4 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl shadow-indigo-100/50 dark:shadow-none border border-slate-100 dark:border-slate-800 group">
            <img 
              src="/hionontsoa.png" 
              alt="Développeur au travail" 
              className="rounded-[2rem] sm:rounded-[2.5rem] w-full object-cover aspect-[4/5] grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
              fetchPriority="high"
            />
          </div>
          
          {/* Cartes flottantes animées */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 z-20 bg-white dark:bg-fond-carte p-4 rounded-2xl shadow-xl border border-slate-50 dark:border-slate-700 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Github size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Open Source</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Contributeur Actif</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-fond-carte p-4 rounded-2xl shadow-xl border border-slate-50 dark:border-slate-700 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-primaire dark:text-indigo-400">
              <span className="text-xl font-bold">99%</span>
            </div>
            <div>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Performance</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">Score Lighthouse</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
