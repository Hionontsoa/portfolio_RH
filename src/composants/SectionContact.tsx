import { motion } from 'framer-motion';
import { Mail, MessageCircle, Linkedin, Github } from 'lucide-react';
import { ContactForm } from './ContactForm';

/**
 * SectionContact - Section de contact avec coordonnées et formulaire
 * Affiche les moyens de contact (email, WhatsApp, réseaux sociaux) et un formulaire
 */
export function SectionContact() {

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Titre principal */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Travaillons ensemble !
          </h2>

          {/* Sous-titre */}
          <p className="text-xl text-white/90 mb-12">
            Je suis disponible pour des opportunités freelance et des projets intéressants
          </p>

          {/* Moyens de contact */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Lien Email */}
            <motion.a
              href="mailto:hionontsoa1707@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex items-center gap-4 text-white hover:bg-white/20 transition-colors"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/80">Email</p>
                <p className="font-medium">hionontsoa1707@gmail.com</p>
              </div>
            </motion.a>

            {/* Lien WhatsApp */}
            <motion.a
              href="https://wa.me/261386645548"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex items-center gap-4 text-white hover:bg-white/20 transition-colors"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/80">WhatsApp</p>
                <p className="font-medium">+261 38 66 455 48</p>
              </div>
            </motion.a>
          </div>

          {/* Liens vers les réseaux sociaux */}
          <div className="flex justify-center gap-6 mb-12">
            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/votre-profil"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/votre-username"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="GitHub"
            >
              <Github size={28} />
            </motion.a>
          </div>
        </motion.div>

        {/* Formulaire de contact */}
        <ContactForm />
      </div>
    </section>
  );
}
