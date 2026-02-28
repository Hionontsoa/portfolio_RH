/**
 * DOCUMENTATION DU PROJET PORTFOLIO
 * ================================
 * 
 * Ce document décrit l'architecture refactorisée du portfolio.
 * 
 * STRUCTURE DU PROJET
 * ===================
 * 
 * src/
 * ├── App.tsx                          # Composant principal (refactorisé, maintenant très simple)
 * ├── main.tsx                         # Point d'entrée
 * ├── index.css                        # Styles globaux
 * ├── composants/
 * │   ├── BarreNavigation.tsx          # Navigation responsive avec menu mobile
 * │   ├── SectionHero.tsx              # Section héro avec présentation
 * │   ├── SectionAPropos.tsx           # Section À propos
 * │   ├── SectionCompetences.tsx       # Section compétences avec cartes
 * │   ├── SectionProjets.tsx           # Section projets/réalisations
 * │   ├── SectionFormation.tsx         # Section formation
 * │   ├── SectionContact.tsx           # Section contact + formulaire
 * │   ├── PiedPage.tsx                 # Pied de page
 * │   ├── ContactForm.tsx              # Formulaire de contact (existant)
 * │   ├── ThemeToggle.tsx              # Bascule thème clair/sombre (existant)
 * │   ├── figma/                       # Composants Figma
 * │   │   └── ImageWithFallback.tsx   # Image avec fallback
 * │   └── ui/                          # Composants d'interface Radix UI
 * ├── donnees/                         # Données centralisées
 * │   ├── ConstantsCompetences.ts      # Données des compétences
 * │   └── ConstantsProjets.ts          # Données des projets
 * └── styles/
 *     ├── theme.css
 *     ├── tailwind.css
 *     ├── fonts.css
 *     └── index.css
 * 
 * 
 * AMÉLIORATIONS APPORTÉES
 * =======================
 * 
 * 1. SÉPARATION DES RESPONSABILITÉS
 *    - Chaque section est un composant indépendant
 *    - App.tsx est maintenant un simple orchestrateur
 *    - Les données sont centralisées dans /donnees/
 * 
 * 2. NAVBAR RESPONSIVE
 *    - Menu hamburger sur mobile (< 768px)
 *    - Menu classique sur desktop
 *    - AnimatePresence pour les animations fluides
 *    - Fermeture automatique du menu après sélection
 * 
 * 3. MAINTENABILITÉ AMÉLIORÉE
 *    - Commentaires JSDoc sur tous les composants
 *    - Structure claire et prévisible
 *    - Facile d'ajouter/modifier des sections
 *    - Code dupliqué éliminé
 * 
 * 4. PERFORMANCES
 *    - Composants modulaires et réutilisables
 *    - Données externalisées (pas de recréation à chaque rendu)
 *    - Animations optimisées avec Framer Motion
 * 
 * 5. ACCESSIBILITÉ
 *    - Attributs aria-label sur les boutons
 *    - Sémantique HTML correcte
 *    - Navigation au clavier
 * 
 * 
 * DESCRIPTION DES COMPOSANTS
 * ==========================
 * 
 * • BarreNavigation
 *   - Navigation principale responsive
 *   - Menu mobile avec hamburger
 *   - Intègre le toggle de thème
 *   - Lien vers le logo (Portfolio)
 * 
 * • SectionHero
 *   - Présentation du développeur
 *   - Image de profil avec animation
 *   - Boutons d'action (Contacter, Télécharger CV)
 *   - Chevron animé pour scroller
 * 
 * • SectionAPropos
 *   - Description courte du développeur
 *   - Fond dégradé stylisé
 *   - Icône User
 * 
 * • SectionCompetences
 *   - Grille de cartes pour les compétences
 *   - CarteCompetence : affiche chaque compétence
 *   - Barre de progression animée
 *   - Badges de catégories
 *   - Effets de particules au survol
 * 
 * • SectionProjets
 *   - Galerie de 3 projets
 *   - CarteProjets : affiche chaque projet
 *   - Badges de technologies
 *   - Liens GitHub et Démo
 * 
 * • SectionFormation
 *   - Affiche le diplôme en cours
 *   - Icône et dates
 *   - Description du programme
 * 
 * • SectionContact
 *   - Coordonnées de contact
 *   - Liens Email et WhatsApp
 *   - Liens réseaux sociaux (LinkedIn, GitHub)
 *   - Formulaire de contact
 * 
 * • PiedPage
 *   - Copyright automatique
 *   - Crédits
 * 
 * 
 * DONNÉES EXTERNALISÉES
 * ====================
 * 
 * • ConstantsCompetences.ts
 *   - Tableau COMPETENCES avec tous les skills
 *   - Interface Competence
 *   - Facile de modifier/ajouter des compétences
 * 
 * • ConstantsProjets.ts
 *   - Tableau PROJETS avec tous les projets
 *   - Interface Projet
 *   - Facile de modifier/ajouter des projets
 * 
 * 
 * COMMENT AJOUTER/MODIFIER DES DONNÉES
 * ====================================
 * 
 * 1. AJOUTER UNE COMPÉTENCE
 *    - Ouvrir src/donnees/ConstantsCompetences.ts
 *    - Ajouter un objet dans le tableau COMPETENCES
 *    - La compétence apparaîtra automatiquement
 * 
 * 2. AJOUTER UN PROJET
 *    - Ouvrir src/donnees/ConstantsProjets.ts
 *    - Ajouter un objet dans le tableau PROJETS
 *    - Le projet apparaîtra automatiquement
 * 
 * 3. MODIFIER UNE SECTION
 *    - Chaque section est indépendante dans composants/
 *    - Modifiez directement la section sans impacter les autres
 * 
 * 
 * GESTION DES ÉTATS
 * ================
 * 
 * • Menu mobile (BarreNavigation)
 *   - menuOuvert : boolean, gère l'affichage du menu
 * 
 * • Hover skills (SectionCompetences)
 *   - competenceSurvole : string | null
 *   - Permet les effets de particules au survol
 * 
 * 
 * ANIMATIONS ET TRANSITIONS
 * =========================
 * 
 * Tous les composants utilisent Framer Motion pour :
 * - Animations d'entrée (initial → animate)
 * - Animations au scroll avec whileInView
 * - Animations de survol (whileHover)
 * - Transitions fluides
 * 
 * 
 * RESPONSIVE DESIGN
 * ================
 * 
 * • Tailwind CSS breakpoints utilisés
 *   - md: (768px) - Changement pour desktop
 *   - lg: (1024px) - Grille complète
 * 
 * • Navigation
 *   - Mobile : menu hamburger
 *   - Desktop (md+) : menu classique
 * 
 * • Grilles
 *   - 2 colonnes sur mobile
 *   - 3 colonnes sur tablette
 *   - 4 colonnes sur desktop
 * 
 * 
 * THÈME CLAIR/SOMBRE
 * =================
 * 
 * - Géré par next-themes
 * - Classes dark: appliquer les styles sombres
 * - Basculé via ThemeToggle
 * 
 * 
 * DÉPENDANCES PRINCIPALES
 * ========================
 * - React 19
 * - Framer Motion (animations)
 * - Lucide React (icônes)
 * - Tailwind CSS 4
 * - Radix UI (composants)
 * - React Hook Form (formulaires)
 * 
 * 
 * COMPILER ET EXÉCUTER
 * ====================
 * 
 * npm run dev      - Développement
 * npm run build    - Production
 * npm run preview  - Aperçu production
 * npm run lint     - Vérifier le code
 */
