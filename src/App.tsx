import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import BarreNavigation from './composants/BarreNavigation';
import PiedPage from './composants/PiedPage';
import Accueil from './pages/Accueil';
import { FournisseurTheme } from './contexte/ContexteTheme';
import { useSectionActive } from './crochets/useSectionActive';
import { SEO } from './composants/SEO';
import BoutonFlottant from './composants/BoutonFlottant';

const SECTIONS = ['accueil', 'a-propos', 'competences', 'projets', 'services', 'contact'];

export default function App() {
  const sectionActive = useSectionActive(SECTIONS);

  return (
    <HelmetProvider>
      <FournisseurTheme>
        <div className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900 selection:text-indigo-900 dark:selection:text-indigo-100 transition-colors duration-500">
          <SEO activeSection={sectionActive} />
          <BarreNavigation />
          <Accueil />
          <PiedPage />
          <BoutonFlottant />
        </div>
      </FournisseurTheme>
    </HelmetProvider>
  );
}
