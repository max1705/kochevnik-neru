import { useEffect, useState } from 'react';

import { ThemeContext, themes } from '../contexts/ThemeContext';

const getTheme = () => {
  if (typeof window !== 'undefined') {
    const theme = localStorage.getItem('theme');
    if (theme && Object.values(themes).includes(theme)) return theme;
  }

  return themes.light;
};

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
