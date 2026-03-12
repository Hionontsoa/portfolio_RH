import { useState, useEffect } from 'react';

export function useSectionActive(idsSections: string[]) {
  const [sectionActive, setSectionActive] = useState<string>(idsSections[0]);

  useEffect(() => {
    const observateurs = idsSections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observateur = new IntersectionObserver(
        (entrees) => {
          entrees.forEach((entree) => {
            if (entree.isIntersecting) {
              setSectionActive(id);
            }
          });
        },
        {
          rootMargin: '-20% 0px -70% 0px',
          threshold: 0,
        }
      );

      observateur.observe(element);
      return observateur;
    });

    return () => {
      observateurs.forEach((observateur) => observateur?.disconnect());
    };
  }, [idsSections]);

  return sectionActive;
}
