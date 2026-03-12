import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEOProps : Propriétés du composant SEO.
 * @property activeSection - La section actuellement visible pour adapter les métadonnées.
 */
interface SEOProps {
  activeSection: string;
}

/**
 * METADONNEES_SECTIONS : Configuration des titres et descriptions par section.
 */
const METADONNEES_SECTIONS: Record<string, { titre: string; description: string }> = {
  accueil: {
    titre: 'Hionontsoa Rabemalala | Développeur Web Freelance',
    description: 'Bienvenue sur le portfolio de Hionontsoa Rabemalala, développeur web freelance passionné basé à Madagascar, spécialisé en React, Django et solutions web modernes.',
  },
  'a-propos': {
    titre: 'À Propos | Hionontsoa Rabemalala',
    description: 'Découvrez le parcours de Hionontsoa Rabemalala, étudiant en informatique et développeur freelance dédié à la création d\'applications web performantes.',
  },
  competences: {
    titre: 'Expertise Technique | Hionontsoa Rabemalala',
    description: 'Explorez les compétences techniques de Hionontsoa Rabemalala : React, TypeScript, Python, Django, Supabase et plus encore.',
  },
  projets: {
    titre: 'Projets Réalisés | Hionontsoa Rabemalala',
    description: 'Découvrez une sélection des projets récents de Hionontsoa Rabemalala, incluant OptimaLife et d\'autres applications web modernes.',
  },
  services: {
    titre: 'Services Freelance | Hionontsoa Rabemalala',
    description: 'Services professionnels de développement web par Hionontsoa Rabemalala : applications sur mesure, optimisation SEO et design UI/UX.',
  },
  contact: {
    titre: 'Contact | Hionontsoa Rabemalala',
    description: 'Contactez Hionontsoa Rabemalala pour votre prochain projet web. Disponible pour des opportunités de freelance et collaborations.',
  },
};

/**
 * Composant SEO : Gère les balises meta du document pour l'optimisation des moteurs de recherche.
 * Utilise react-helmet-async pour injecter dynamiquement les balises dans le <head>.
 */
export const SEO: React.FC<SEOProps> = ({ activeSection }) => {
  const metadonnees = METADONNEES_SECTIONS[activeSection] || METADONNEES_SECTIONS.accueil;

  return (
    <Helmet>
      {/* Titre et Description de base */}
      <title>{metadonnees.titre}</title>
      <meta name="description" content={metadonnees.description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metadonnees.titre} />
      <meta property="og:description" content={metadonnees.description} />
      <meta property="og:image" content="https://picsum.photos/seed/portfolio-seo/1200/630" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={metadonnees.titre} />
      <meta property="twitter:description" content={metadonnees.description} />
      <meta property="twitter:image" content="https://picsum.photos/seed/portfolio-seo/1200/630" />
      
      {/* URL Canonique */}
      <link rel="canonical" href={window.location.origin + (activeSection === 'accueil' ? '' : `#${activeSection}`)} />
    </Helmet>
  );
};
