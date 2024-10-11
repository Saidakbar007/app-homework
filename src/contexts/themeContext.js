// src/contexts/ThemeContext.js
import React, { createContext, useState, useEffect, useMemo } from 'react';

export const themes = {
  dark: 'dark',
  light: 'light',
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    const persistedTheme = localStorage.getItem('currentTheme');
    if (persistedTheme) {
      setTheme(persistedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(newTheme);
    localStorage.setItem('currentTheme', newTheme);
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
