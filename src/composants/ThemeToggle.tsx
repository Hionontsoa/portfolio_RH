import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Load theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="relative w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300"
    >
      <motion.div
        animate={{ x: isDark ? 32 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
      >
        {isDark ? (
          <Moon size={14} className="text-blue-600" />
        ) : (
          <Sun size={14} className="text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
}
