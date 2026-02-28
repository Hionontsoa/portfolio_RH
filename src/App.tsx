import { BarreNavigation } from './composants/BarreNavigation';
import { SectionHero } from './composants/SectionHero';
import { SectionAPropos } from './composants/SectionAPropos';
import { SectionCompetences } from './composants/SectionCompetences';
import { SectionProjets } from './composants/SectionProjets';
import { SectionFormation } from './composants/SectionFormation';
import { SectionContact } from './composants/SectionContact';
import { PiedPage } from './composants/PiedPage';
import { COMPETENCES } from './donnees/ConstantsCompetences';
import { PROJETS } from './donnees/ConstantsProjets';

/**
 * App - Composant principal de l'application
 * 
 * Structure globale du portfolio avec toutes les sections
 * - Navigation responsive avec menu mobile
 * - Sections : Hero, À propos, Compétences, Projets, Formation, Contact
 * - Pied de page
 * 
 * ARCHITECTURE :
 * - Les données sont centralisées dans /donnees/
 * - Chaque section est un composant séparé
 * - Tous les composants sont maintenables et réutilisables
 */
export default function App() {
  /**
   * Fonction utilitaire pour scroller vers une section
   * @param id - L'ID de la section vers laquelle scroller
   */
  const gererScrollSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Barre de navigation responsive */}
      <BarreNavigation onScrollToSection={gererScrollSection} />

      {/* Section Hero - Présentation principale */}
      <div id="hero">
        <SectionHero onScrollToSection={gererScrollSection} />
      </div>

      {/* Section À propos - Description détaillée */}
      <div id="apropos">
        <SectionAPropos />
      </div>

      {/* Section Compétences - Affichage des compétences avec animations */}
      <div id="competences">
        <SectionCompetences competences={COMPETENCES} />
      </div>

      {/* Section Projets - Portfolio de projets réalisés */}
      <div id="projets">
        <SectionProjets projets={PROJETS} />
      </div>

      {/* Section Formation - Parcours académique */}
      <div id="formation">
        <SectionFormation />
      </div>

      {/* Section Contact - Moyens de contact et formulaire */}
      <div id="contact">
        <SectionContact />
      </div>

      {/* Pied de page */}
      <PiedPage />
    </div>
  );
}
