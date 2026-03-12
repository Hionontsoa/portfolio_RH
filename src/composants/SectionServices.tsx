import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';

/**
 * SectionServices : Présente les différents services proposés par le développeur.
 * 
 * Fonctionnalités :
 * - Grille de services avec icônes et descriptions extraites des constantes.
 * - Éléments décoratifs animés en arrière-plan (blur).
 * - Carte d'appel à l'action finale avec dégradé.
 * - Support complet du Dark Mode.
 */
export default function SectionServices() {
  return (
    <section id="services" className="py-24 bg-slate-900 dark:bg-fond-sombre text-white overflow-hidden relative transition-colors duration-500">
      {/* Arrière-plan décoratif (cercles de flou) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-20">
          <p className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Ce que je propose</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Services Freelance</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Je fournis des solutions numériques de bout en bout pour aider votre entreprise à prospérer dans le paysage web moderne.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.titre}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2rem] bg-slate-800/50 dark:bg-fond-carte/50 border border-slate-700 dark:border-slate-800 hover:border-indigo-500/50 transition-all group"
            >
              {/* Icône du service */}
              <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                <service.icone size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.titre}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
          
          {/* Carte Appel à l'action finale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] bg-gradient-to-br from-primaire to-violet-700 flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Un projet spécifique ?</h3>
            <p className="text-indigo-100 mb-8">
              Discutons de vos besoins particuliers et construisons quelque chose d'incroyable ensemble.
            </p>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white text-primaire rounded-2xl font-bold hover:bg-indigo-50 transition-all shadow-xl"
            >
              Démarrer une Conversation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
