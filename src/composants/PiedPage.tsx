import React from 'react';
import { LIENS_SOCIAUX } from '../constants';

/**
 * PiedPage : Le pied de page de l'application.
 * 
 * Fonctionnalités :
 * - Affichage du nom et d'une courte description.
 * - Liens vers les réseaux sociaux avec icônes.
 * - Copyright dynamique avec l'année en cours.
 * - Support complet du Dark Mode.
 */
export default function PiedPage() {
  const anneeActuelle = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white dark:bg-fond-sombre border-t border-slate-100 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo et Description */}
          <div>
            <a href="#accueil" className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white">
              HIONONTSOA<span className="text-primaire">.</span>
            </a>
            <p className="text-slate-500 dark:text-texte-sombre mt-2 text-sm">
              Création d'expériences web modernes depuis Madagascar.
            </p>
          </div>

          {/* Liens Sociaux */}
          <div className="flex items-center gap-6">
            {LIENS_SOCIAUX.map((lien) => (
              <a
                key={lien.name}
                href={lien.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-50 dark:bg-fond-carte rounded-xl flex items-center justify-center text-slate-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-primaire dark:hover:text-indigo-400 transition-all"
                aria-label={lien.name}
              >
                <lien.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright et Liens Légaux */}
        <div className="mt-12 pt-8 border-t border-slate-50 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400 font-medium">
          <p>© {anneeActuelle} Hionontsoa Rabemalala. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Conditions d'Utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
