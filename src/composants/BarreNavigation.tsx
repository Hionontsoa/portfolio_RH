import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Zap, Code2, BookOpen, MessageSquare, ArrowUp } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface BarreNavigationProps {
  onScrollToSection: (id: string) => void;
}

interface ElementMenu {
  label: string;
  id: string;
  icon: React.ReactNode;
  couleur: string;
}

/**
 * BarreNavigation - Composant de barre de navigation responsive premium
 * Affiche le menu principal sur desktop et un menu hamburger sur mobile
 * Inclut des icônes, indicateurs actifs et design moderne
 * 
 * @param onScrollToSection - Fonction de rappel pour scroller vers une section
 */
export function BarreNavigation({ onScrollToSection }: BarreNavigationProps) {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [sectionActive, setSectionActive] = useState('hero');
  const [afficherBoutonHaut, setAfficherBoutonHaut] = useState(false);
  
  // Éléments du menu avec icônes et couleurs
  const elementsMenu: ElementMenu[] = [
    { label: 'À propos', id: 'apropos', icon: <User size={18} />, couleur: 'from-blue-500 to-cyan-500' },
    { label: 'Compétences', id: 'competences', icon: <Zap size={18} />, couleur: 'from-purple-500 to-pink-500' },
    { label: 'Projets', id: 'projets', icon: <Code2 size={18} />, couleur: 'from-green-500 to-emerald-500' },
    { label: 'Formation', id: 'formation', icon: <BookOpen size={18} />, couleur: 'from-orange-500 to-red-500' },
    { label: 'Contact', id: 'contact', icon: <MessageSquare size={18} />, couleur: 'from-indigo-500 to-blue-500' },
  ];

  // Gestion du scroll pour afficher le bouton "haut" et déterminer la section active
  useEffect(() => {
    const gererScroll = () => {
      setAfficherBoutonHaut(window.scrollY > 300);
      
      // Déterminer quelle section est active
      const sections = ['hero', ...elementsMenu.map(e => e.id)];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setSectionActive(section);
          }
        }
      }
    };

    window.addEventListener('scroll', gererScroll);
    return () => window.removeEventListener('scroll', gererScroll);
  }, [elementsMenu]);

  // Fonction pour gérer le clic sur un élément du menu
  const gererClicMenu = (id: string) => {
    onScrollToSection(id);
    setSectionActive(id);
    setMenuOuvert(false);
  };

  // Revenir en haut
  const remonterEnHaut = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSectionActive('hero');
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50"
      >
        {/* Fond avec gradient et effet glassmorphism */}
        <div className="absolute inset-0 bg-white/40 dark:bg-gray-950/40 backdrop-blur-xl border-b border-white/10 dark:border-gray-800/30"></div>
        
        {/* Contenu navbar */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo / Accueil */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={remonterEnHaut}
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 blur-lg"
                />
                <div className="relative bg-linear-to-r from-blue-600 to-purple-600 p-2 rounded-full text-white">
                  <Home size={20} />
                </div>
              </div>
              <span className="text-lg font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:inline">
                Hinontsoa
              </span>
            </motion.button>

            {/* Menu Desktop avec icônes */}
            <div className="hidden md:flex items-center gap-1">
              {elementsMenu.map((item) => {
                const estActif = sectionActive === item.id;
                return (
                  <motion.button
                    key={item.id}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => gererClicMenu(item.id)}
                    className="relative px-4 py-2 group"
                  >
                    {/* Fond avec gradient au survol */}
                    {estActif && (
                      <motion.div
                        layoutId="activeNav"
                        className={`absolute inset-0 bg-linear-to-r ${item.couleur} rounded-lg opacity-20`}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    <div className="relative flex items-center gap-2 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {item.icon}
                      <span className="text-sm font-medium">{item.label}</span>
                      
                      {/* Indicateur actif */}
                      {estActif && (
                        <motion.div 
                          layoutId="underline"
                          className={`absolute -bottom-1 left-0 right-0 h-1 bg-linear-to-r ${item.couleur} rounded-full`}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Actions droite */}
            <div className="flex items-center gap-3">
              {/* Bouton CTA Desktop */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => gererClicMenu('contact')}
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
              >
                <MessageSquare size={16} />
                Contactez-moi
              </motion.button>

              {/* Bascule de thème */}
              <ThemeToggle />

              {/* Bouton Menu Mobile */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMenuOuvert(!menuOuvert)}
                className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Ouvrir menu"
              >
                {menuOuvert ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Menu Mobile */}
          <AnimatePresence>
            {menuOuvert && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden pb-4 space-y-2 border-t border-white/10 dark:border-gray-800/30 mt-4"
              >
                {elementsMenu.map((item) => {
                  const estActif = sectionActive === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      whileHover={{ x: 5 }}
                      onClick={() => gererClicMenu(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        estActif 
                          ? `bg-linear-to-r ${item.couleur} text-white shadow-lg` 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  );
                })}
                
                {/* CTA Mobile */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => gererClicMenu('contact')}
                  className="w-full mt-4 px-4 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
                >
                  <MessageSquare size={18} />
                  Contactez-moi
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Bouton flottant pour revenir en haut */}
      <AnimatePresence>
        {afficherBoutonHaut && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={remonterEnHaut}
            className="fixed bottom-8 right-8 z-40 p-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-shadow"
            aria-label="Revenir en haut"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowUp size={20} />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
