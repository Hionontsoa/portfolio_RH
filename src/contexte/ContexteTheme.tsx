import React, { createContext, useContext, useEffect, useState } from 'react';

interface ContexteThemeType {
  themeSombre: boolean;
  basculerTheme: () => void;
  changerTheme: () => void;
}

const ThemeContext = createContext<ContexteThemeType | undefined>(undefined);

export function FournisseurTheme({ children }: { children: React.ReactNode }) {
  const [themeSombre, setThemeSombre] = useState<boolean>(() => {
    const sauvegarde = localStorage.getItem('themeSombre');
    // Le thème sombre doit être actif par défaut si l’utilisateur n’a pas encore choisi.
    if (sauvegarde === null) return true;
    return sauvegarde === 'true';
  });

  useEffect(() => {
    const racine = window.document.documentElement;
    const corps = window.document.body;
    
    console.log('Changement de thème :', themeSombre ? 'Sombre' : 'Clair');

    if (themeSombre) {
      racine.classList.add('dark');
      corps.classList.add('dark');
      racine.classList.remove('light');
    } else {
      racine.classList.add('light');
      racine.classList.remove('dark');
      corps.classList.remove('dark');
    }
    
    localStorage.setItem('themeSombre', themeSombre.toString());
  }, [themeSombre]);

  const basculerTheme = () => {
    setThemeSombre((precedent) => !precedent);
  };

  const changerTheme = basculerTheme; // Alias pour correspondre à la demande

  return (
    <ThemeContext.Provider value={{ themeSombre, basculerTheme, changerTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const contexte = useContext(ThemeContext);
  if (contexte === undefined) {
    throw new Error('useTheme doit être utilisé à l\'intérieur de FournisseurTheme');
  }
  return contexte;
}
