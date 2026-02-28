/**
 * PiedPage - Composant de pied de page
 * Affiche le copyright, la version et les crédits
 */
export function PiedPage() {
  const anneeActuelle = new Date().getFullYear();
  const VERSION = '1.0.0';

  return (
    <footer className="py-12 px-4 bg-gray-900 dark:bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {anneeActuelle} RABEMALALA Hionontsoa
            </p>
          </div>

          {/* Version */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Version <span className="text-blue-400 font-semibold">{VERSION}</span>
            </p>
          </div>

          {/* Crédits */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              Fait avec ❤️ et <span className="text-blue-400 font-semibold">React</span>
            </p>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-500 text-xs">
            Développé avec Vite • TypeScript • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
