import React from 'react';
import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useAppStore } from '../../store/use-app-store';

const ThemeToggle: React.FC = () => {
  // const [theme, setTheme] = useState<'light' | 'dark'>(() => {
  //   const stored = localStorage.getItem('theme');
  //   return stored === 'dark' ? 'dark' : 'light';
  // });

  const mode = useAppStore((s) => s.themeMode);
  const toggleTheme = useAppStore((s) => s.toggleTheme);

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );

  //   useEffect(() => {
  //     document.body.classList.toggle('dark-theme', theme === 'dark');
  //     localStorage.setItem('theme', theme);
  //   }, [theme]);

  //   const handleToggle = () => {
  //     setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  //   };

  //   return (
  //     <button className="themeToggle" onClick={handleToggle}>
  //       {theme === 'light' ? '🌙' : '🔆'}
  //     </button>
  //   );
};

export default ThemeToggle;
