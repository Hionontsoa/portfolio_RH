import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

/**
 * SectionContact : Permet aux utilisateurs de contacter le développeur via un formulaire.
 */
export default function SectionContact() {
  const [etatFormulaire, setEtatFormulaire] = useState({
    nom: '',
    email: '',
    message: ''
  });
  const [envoiEnCours, setEnvoiEnCours] = useState(false);
  const [succes, setSucces] = useState(false);

  /**
   * Gère la soumission du formulaire de contact via EmailJS.
   */
  const gererSoumission = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnvoiEnCours(true);

    // Configuration EmailJS
    const serviceID = 'service_h83amjl';
    const templateID = 'template_ots39k9';
    const publicKey = '9Veg8I7G-7sf7jAqy';

    // Paramètres du template (doivent correspondre aux variables dans votre template EmailJS)
    const templateParams = {
      name: etatFormulaire.nom,
      email: etatFormulaire.email,
      message: etatFormulaire.message,
      to_name: 'Hionontsoa', // Votre nom
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setSucces(true);
      setEtatFormulaire({ nom: '', email: '', message: '' });
      
      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => setSucces(false), 5000);
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
      setEnvoiEnCours(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-fond-sombre transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Colonne Gauche : Texte et Coordonnées */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primaire dark:text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Contactez-moi</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              Construisons quelque chose <br />
              <span className="text-primaire dark:text-indigo-400">d'extraordinaire</span> ensemble.
            </h2>
            <p className="text-lg text-slate-600 dark:text-texte-sombre mb-12 max-w-md">
              Que vous ayez un projet spécifique en tête ou que vous souhaitiez simplement dire bonjour, je suis toujours ouvert à de nouvelles opportunités.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-50 dark:bg-fond-carte rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 group-hover:text-primaire dark:group-hover:text-indigo-400 transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">hionontsoa1707@gmail.com</p>
                </div>
              </div>
              {/* Localisation */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-50 dark:bg-fond-carte rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 group-hover:text-primaire dark:group-hover:text-indigo-400 transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Localisation</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">Madagascar</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Colonne Droite : Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-fond-carte p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800"
          >
            <form onSubmit={gererSoumission} className="space-y-6">
              {/* Champ Nom */}
              <div>
                <label htmlFor="nom" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
                  Votre Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  required
                  value={etatFormulaire.nom}
                  onChange={(e) => setEtatFormulaire({ ...etatFormulaire, nom: e.target.value })}
                  className="w-full px-6 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-2xl focus:ring-2 focus:ring-primaire focus:border-transparent outline-none transition-all"
                  placeholder="Jean Dupont"
                />
              </div>
              {/* Champ Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
                  Adresse Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={etatFormulaire.email}
                  onChange={(e) => setEtatFormulaire({ ...etatFormulaire, email: e.target.value })}
                  className="w-full px-6 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-2xl focus:ring-2 focus:ring-primaire focus:border-transparent outline-none transition-all"
                  placeholder="jean@exemple.com"
                />
              </div>
              {/* Champ Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wider">
                  Votre Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={etatFormulaire.message}
                  onChange={(e) => setEtatFormulaire({ ...etatFormulaire, message: e.target.value })}
                  className="w-full px-6 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-2xl focus:ring-2 focus:ring-primaire focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Parlez-moi de votre projet..."
                />
              </div>
              {/* Bouton d'envoi */}
              <button
                type="submit"
                disabled={envoiEnCours || succes}
                className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95 cursor-pointer
                  ${succes 
                    ? 'bg-emerald-500 text-white shadow-emerald-200 dark:shadow-none' 
                    : 'bg-slate-900 dark:bg-primaire text-white hover:bg-slate-800 dark:hover:bg-indigo-700 shadow-slate-200 dark:shadow-none'
                  } 
                  ${envoiEnCours ? 'opacity-80 cursor-not-allowed' : ''}
                `}
              >
                {envoiEnCours ? (
                  <>
                    Envoi en cours...
                    <Loader2 size={20} className="animate-spin" />
                  </>
                ) : succes ? (
                  <>
                    Message Envoyé !
                    <CheckCircle2 size={20} />
                  </>
                ) : (
                  <>
                    Envoyer le Message
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
