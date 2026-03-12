import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJETS, ICONES_TECH } from '../constants';

/**
 * ImageAvecChargement : Gère le chargement progressif des images avec un effet de fondu et un placeholder animé.
 */
function ImageAvecChargement({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [estCharge, setEstCharge] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence>
        {!estCharge && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse z-10"
          />
        )}
      </AnimatePresence>
      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: estCharge ? 1 : 0, scale: estCharge ? 1 : 1.05 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onLoad={() => setEstCharge(true)}
        className={className}
        referrerPolicy="no-referrer"
        loading="lazy"
      />
    </div>
  );
}

/**
 * GalerieProjet : Gère l'affichage d'une galerie d'images avec navigation suivant/précédent.
 */
function GalerieProjet({ images, titre, delai = 0 }: { images: string[]; titre: string; delai?: number }) {
  const [indexCourant, setIndexCourant] = useState(0);
  const [direction, setDirection] = useState(1); // 1 pour suivant, -1 pour précédent

  // Changement automatique toutes les 5 secondes avec un décalage initial
  useEffect(() => {
    if (images.length <= 1) return;

    const demarrerIntervalle = () => {
      return setInterval(() => {
        setDirection(1);
        setIndexCourant((prev) => (prev + 1) % images.length);
      }, 5000);
    };

    let intervalle: NodeJS.Timeout;
    const timeoutInitial = setTimeout(() => {
      intervalle = demarrerIntervalle();
    }, delai);

    return () => {
      clearTimeout(timeoutInitial);
      if (intervalle) clearInterval(intervalle);
    };
  }, [images.length, delai]);

  const suivant = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setDirection(1);
    setIndexCourant((prev) => (prev + 1) % images.length);
  };

  const precedent = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setDirection(-1);
    setIndexCourant((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full group/galerie overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={indexCourant}
          custom={direction}
          variants={{
            enter: (direction: number) => ({
              x: direction > 0 ? '100%' : '-100%',
              opacity: 1
            }),
            center: {
              zIndex: 1,
              x: 0,
              opacity: 1
            },
            exit: (direction: number) => ({
              zIndex: 0,
              x: direction < 0 ? '100%' : '-100%',
              opacity: 1
            })
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <ImageAvecChargement 
            src={images[indexCourant]} 
            alt={`${titre} aperçu ${indexCourant + 1}`} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Boutons de navigation */}
      {images.length > 1 && (
        <>
          <button
            onClick={precedent}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover/galerie:opacity-100 transition-all duration-300 z-30 cursor-pointer"
            aria-label="Image précédente"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={suivant}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover/galerie:opacity-100 transition-all duration-300 z-30 cursor-pointer"
            aria-label="Image suivante"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicateurs (dots) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setIndexCourant(i); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === indexCourant ? 'bg-white w-4' : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Aller à l'image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/**
 * SectionProjets : Affiche les projets réalisés par le développeur.
 * 
 * Fonctionnalités :
 * - Cartes de projet interactives avec animations au survol (élévation, changement de couleur).
 * - Galerie d'images défilante pour chaque projet.
 * - Liens vers les démos en direct et les dépôts GitHub.
 * - Support complet du Dark Mode.
 */
export default function SectionProjets() {
  return (
    <section id="projets" className="py-16 md:py-24 bg-white dark:bg-fond-sombre transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="text-center md:text-left">
            <p className="text-primaire dark:text-indigo-400 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Projets Récents</h2>
            <p className="text-slate-600 dark:text-texte-sombre max-w-xl text-base sm:text-lg mx-auto md:mx-0">
              Une sélection de mes travaux récents, allant d'applications web complexes à des expériences créatives.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <a 
              href="https://github.com/Hionontsoa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-bold hover:text-primaire dark:hover:text-indigo-400 transition-colors py-2 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 md:bg-transparent md:dark:bg-transparent cursor-pointer active:scale-95"
            >
              Voir tout sur GitHub <Github size={20} />
            </a>
          </div>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJETS.map((projet, index) => (
            <motion.div
              key={projet.titre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 25,
                delay: index * 0.1 
              }}
              className="group bg-white dark:bg-fond-carte rounded-[2rem] sm:rounded-[2.5rem] p-3 sm:p-4 border border-slate-100 dark:border-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:border-primaire/20 dark:hover:border-indigo-500/30 transition-all duration-500 cursor-default"
            >
              {/* Conteneur Image / Galerie */}
              <div className="relative aspect-video rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden mb-6 sm:mb-8 bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 shadow-lg transition-all duration-500">
                <GalerieProjet 
                  images={projet.galerie || [projet.image]} 
                  titre={projet.titre} 
                  delai={index * 2500}
                />

                {/* Overlay avec boutons d'action - Toujours visible sur mobile, hover sur desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex items-end p-4 sm:p-8 pointer-events-none z-20">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto pointer-events-auto">
                    <a 
                      href={projet.lienDemo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors text-sm sm:text-base cursor-pointer shadow-lg active:scale-95"
                    >
                      Voir Démo <ExternalLink size={18} />
                    </a>
                    <a 
                      href={projet.lienGithub} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-900/80 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-900 transition-colors text-sm sm:text-base cursor-pointer shadow-lg active:scale-95"
                    >
                      GitHub <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contenu textuel et tags */}
              <div className="px-1 sm:px-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {projet.technologies.map((t) => {
                    const Icone = ICONES_TECH[t];
                    return (
                      <span key={t} className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-primaire dark:text-indigo-400 uppercase tracking-wider px-2 sm:px-2.5 py-1 sm:py-1.5 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg border border-indigo-100/50 dark:border-indigo-500/20">
                        {Icone && <Icone size={12} className="sm:w-[14px] sm:h-[14px]" />}
                        {t}
                      </span>
                    );
                  })}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-primaire transition-colors">{projet.titre}</h3>
                <p className="text-slate-600 dark:text-texte-sombre mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed line-clamp-3 md:line-clamp-none">
                  {projet.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
