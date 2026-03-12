import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, Briefcase, Cpu } from 'lucide-react';

interface ModalSkillProps {
  isOpen: boolean;
  onClose: () => void;
  skill: {
    nom: string;
    icone: any;
    niveau: number;
    description: string;
    projets: string[];
    techs: string[];
  } | null;
}

export default function ModalSkill({ isOpen, onClose, skill }: ModalSkillProps) {
  if (!skill) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white dark:bg-fond-carte rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
          >
            {/* Header with Icon */}
            <div className="p-8 pb-0 flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-primaire dark:text-indigo-400">
                  <skill.icone size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{skill.nom}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="h-2 w-32 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.niveau}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-primaire"
                      />
                    </div>
                    <span className="text-sm font-bold text-primaire">{skill.niveau}%</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-8 space-y-6">
              <div>
                <p className="text-slate-600 dark:text-texte-sombre leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider">
                    <Cpu size={16} className="text-primaire" />
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.techs.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider">
                    <Briefcase size={16} className="text-primaire" />
                    Projets
                  </div>
                  <ul className="space-y-1">
                    {skill.projets.map(projet => (
                      <li key={projet} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                        <div className="w-1 h-1 bg-primaire rounded-full" />
                        {projet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-8 pt-0">
              <button 
                onClick={onClose}
                className="w-full py-4 bg-slate-900 dark:bg-primaire text-white rounded-2xl font-bold shadow-xl hover:bg-slate-800 dark:hover:bg-indigo-700 transition-all active:scale-[0.98]"
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
