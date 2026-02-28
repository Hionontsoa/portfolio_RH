import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    // Protection maximale contre tous les plantages
    try {
      e.preventDefault();
      
      // Réinitialiser les messages
      setErrorMessage(null);
      
      // Bloquer si déjà en cours
      if (isSubmitting || isSubmitted) return;
      
      // Début d'envoi
      setIsSubmitting(true);

      // CONFIGURATION - REMPLACEZ PAR VOS VRAIS IDENTIFIANTS
      const serviceID = 'service_h83amjl';
      const templateID = 'template_f0v7zqm';
      const publicKey = '9Veg8I7G-7sf7jAqy';


      // Validation
      if (!serviceID || !templateID || !publicKey || serviceID.includes('YOUR_')) {
        throw new Error('Identifiants EmailJS non configurés');
      }

      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Tous les champs sont requis');
      }

      // Envoi EmailJS avec timeout de sécurité
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout: serveur trop lent')), 10000)
      );

      const emailPromise = emailjs.send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      await Promise.race([emailPromise, timeoutPromise]);

      // SUCCÈS - mise à jour UNIQUEMENT si le composant existe toujours
      if (document.contains(document.querySelector('form'))) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset automatique après 3 secondes
        const timer = setTimeout(() => {
          try {
            setIsSubmitted(false);
          } catch (err) {
            console.error('Erreur reset:', err);
          }
        }, 3000);

        // Cleanup du timer si le composant se démonte
        return () => clearTimeout(timer);
      }

    } catch (error: any) {
      // Gestion d'erreur ultra-sécurisée
      console.error('Erreur capturée:', error);
      
      try {
        setIsSubmitting(false);
        setErrorMessage(error?.message || 'Une erreur est survenue');
      } catch (stateError) {
        console.error('Impossible de mettre à jour l\'état:', stateError);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    try {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      // Effacer le message d'erreur quand l'utilisateur modifie
      if (errorMessage) setErrorMessage(null);
    } catch (err) {
      console.error('Erreur onChange:', err);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        Envoyez-moi un message
      </h3>

      {/* Name Input */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
          <div className="flex items-center gap-2">
            <User size={18} className="text-blue-600 dark:text-blue-400" />
            Nom
          </div>
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors bg-white dark:bg-gray-700 text-gray-800 dark:text-white disabled:opacity-50"
          placeholder="Votre nom complet"
        />
      </motion.div>

      {/* Email Input */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-blue-600 dark:text-blue-400" />
            Email
          </div>
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors bg-white dark:bg-gray-700 text-gray-800 dark:text-white disabled:opacity-50"
          placeholder="votre.email@example.com"
        />
      </motion.div>

      {/* Message Input */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mb-6"
      >
        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
          <div className="flex items-center gap-2">
            <MessageSquare size={18} className="text-blue-600 dark:text-blue-400" />
            Message
          </div>
        </label>
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          rows={5}
          className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none transition-colors resize-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white disabled:opacity-50"
          placeholder="Écrivez votre message ici..."
        />
      </motion.div>

      {/* Message d'erreur */}
      {errorMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 rounded-xl flex items-center gap-3"
        >
          <AlertCircle size={20} className="text-red-600 dark:text-red-400" />
          <p className="text-red-700 dark:text-red-300 text-sm">{errorMessage}</p>
        </motion.div>
      )}

      {/* Message de succès */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 rounded-xl flex items-center gap-3"
        >
          <CheckCircle size={20} className="text-green-600 dark:text-green-400" />
          <p className="text-green-700 dark:text-green-300 text-sm">Message envoyé avec succès !</p>
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
        whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
          isSubmitted
            ? 'bg-green-500 dark:bg-green-600 cursor-default'
            : isSubmitting
            ? 'bg-blue-500 dark:bg-blue-600 opacity-80 cursor-wait'
            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:from-blue-700 hover:to-purple-700'
        }`}
      >
        {isSubmitting ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
            Envoi en cours...
          </>
        ) : isSubmitted ? (
          <>
            <CheckCircle size={20} />
            Message envoyé
          </>
        ) : (
          <>
            <Send size={20} />
            Envoyer le message
          </>
        )}
      </motion.button>
    </motion.form>
  );
}