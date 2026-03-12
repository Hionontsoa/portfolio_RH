import React from 'react';
import SectionHero from '../composants/SectionHero';
import SectionAPropos from '../composants/SectionAPropos';
import SectionCompetences from '../composants/SectionCompetences';
import SectionProjets from '../composants/SectionProjets';
import SectionServices from '../composants/SectionServices';
import SectionContact from '../composants/SectionContact';

export default function Accueil() {
  return (
    <main>
      <SectionHero />
      <SectionAPropos />
      <SectionCompetences />
      <SectionProjets />
      <SectionServices />
      <SectionContact />
    </main>
  );
}
