import React from 'react';
import { motion } from 'motion/react';
import { Download, GraduationCap, Award } from 'lucide-react';
import { FORMATIONS, CERTIFICATIONS } from '../constants';

/**
 * SectionAPropos : Présente le développeur, son parcours académique et ses certifications.
 * 
 * Fonctionnalités :
 * - Affichage d'une image de profil avec un badge de localisation.
 * - Texte de présentation mettant en avant les passions et technologies.
 * - Listes des formations et certifications extraites des constantes.
 * - Bouton de téléchargement du CV.
 * - Support complet du Dark Mode.
 */
export default function SectionAPropos() {
  return (
    <section id="a-propos" className="py-24 bg-white dark:bg-fond-sombre transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Colonne Gauche : Image de Profil et Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 dark:bg-fond-carte">
              <img 
                src="https://picsum.photos/seed/profile/800/800.webp" 
                alt="Hionontsoa Rabemalala" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            {/* Badge Localisation flottant */}
            <div className="absolute -bottom-8 -right-8 bg-primaire text-white p-8 rounded-3xl shadow-2xl hidden md:block">
              <p className="text-4xl font-bold mb-1">Madagascar</p>
              <p className="text-indigo-100 font-medium">Développeur basé ici</p>
            </div>
          </motion.div>

          {/* Colonne Droite : Texte de Présentation et Détails */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primaire dark:text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">À Propos de Moi</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              Passionné par la construction du futur du web.
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 dark:text-texte-sombre leading-relaxed mb-10">
              <p>
                Je suis un développeur web passionné par la création d’applications web modernes, performantes et sécurisées. Mon approche combine design esthétique et excellence technique.
              </p>
              <p>
                En tant qu'étudiant en informatique et développeur freelance, je travaille avec les technologies les plus récentes comme <span className="text-slate-900 dark:text-white font-semibold">React</span> et <span className="text-slate-900 dark:text-white font-semibold">Supabase</span> pour créer des solutions digitales innovantes.
              </p>
            </div>

            {/* Grille Formations et Certifications */}
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {/* Liste des Formations */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
                  <GraduationCap className="text-primaire" size={24} />
                  Formations
                </h3>
                <ul className="space-y-3">
                  {FORMATIONS.map((f, i) => (
                    <li key={i} className="border-l-2 border-slate-100 dark:border-slate-800 pl-4">
                      <p className="font-bold text-slate-900 dark:text-white text-sm">{f.titre}</p>
                      <p className="text-xs text-slate-500">{f.etablissement} • {f.annee}</p>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Liste des Certifications */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
                  <Award className="text-primaire" size={24} />
                  Certifications
                </h3>
                <ul className="space-y-3">
                  {CERTIFICATIONS.map((c, i) => (
                    <li key={i} className="border-l-2 border-slate-100 dark:border-slate-800 pl-4">
                      <p className="font-bold text-slate-900 dark:text-white text-sm">{c.titre}</p>
                      <p className="text-xs text-slate-500">{c.organisme} • {c.annee}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bouton CV et Stats rapides */}
            <div className=" flex flex-wrap gap-6 items-center">
              <a 
                href="/CV_2026_Hionontsoa_RABEMALALA.pdf" 
                download
                className="px-8 py-4 bg-slate-900 dark:bg-primaire text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-800 dark:hover:bg-indigo-700 transition-all shadow-xl shadow-slate-200 dark:shadow-none group cursor-pointer active:scale-95"
              >
                Télécharger mon CV
                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              </a>
              <div className="flex gap-8">
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Freelance</p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm font-medium">Disponible</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Étudiant</p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm font-medium">Informatique</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
