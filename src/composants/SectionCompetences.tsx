import React, { useState } from 'react';
import { motion } from 'motion/react';
import { COMPETENCES } from '../constants';
import ModalSkill from './ModalSkill';

/**
 * SectionCompetences : Affiche les compétences techniques organisées par catégories.
 */
export default function SectionCompetences() {
  const [competenceSelectionnee, setCompetenceSelectionnee] = useState<any>(null);
  const [estModalOuvert, setEstModalOuvert] = useState(false);

  const ouvrirModal = (skill: any) => {
    setCompetenceSelectionnee(skill);
    setEstModalOuvert(true);
  };

  return (
    <section id="competences" className="py-24 bg-slate-50 dark:bg-fond-sombre transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <p className="text-primaire dark:text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Mes Compétences</h2>
          <p className="text-slate-600 dark:text-texte-sombre max-w-2xl mx-auto text-lg">
            Je me spécialise dans les technologies web modernes pour construire des applications rapides, réactives et faciles à maintenir.
          </p>
        </div>

        {/* Grille des catégories de compétences */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPETENCES.map((groupe, indexGroupe) => (
            <motion.div
              key={groupe.categorie}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: indexGroupe * 0.1 }}
              className="bg-white dark:bg-fond-carte p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-indigo-500/5 transition-all duration-500 group"
            >
              {/* Icône de catégorie */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-primaire dark:text-indigo-400 group-hover:rotate-6 transition-transform">
                  <groupe.icone size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{groupe.categorie}</h3>
              </div>
              
              {/* Liste des compétences individuelles */}
              <div className="grid grid-cols-2 gap-3">
                {groupe.items.map((competence: any) => (
                  <button 
                    key={competence.nom}
                    onClick={() => ouvrirModal(competence)}
                    className="flex flex-col items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-texte-sombre rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-primaire dark:hover:border-indigo-500 hover:shadow-md transition-all duration-300 group/skill cursor-pointer active:scale-95"
                  >
                    <div className="text-slate-400 group-hover/skill:text-primaire dark:group-hover/skill:text-indigo-400 transition-colors">
                      <competence.icone size={24} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider">{competence.nom}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de détail de compétence */}
      <ModalSkill 
        isOpen={estModalOuvert}
        onClose={() => setEstModalOuvert(false)}
        skill={competenceSelectionnee}
      />
    </section>
  );
}
