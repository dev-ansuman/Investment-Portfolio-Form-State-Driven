import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button className="themeToggle" onClick={handleToggle}>
      {theme === 'light' ? '🌙' : '🔆'}
    </button>
  );
};

export default ThemeToggle;
