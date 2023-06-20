// native
import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';

// utils
import { themeSwitcher } from '../utils/theme.utils';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.theme || 'dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

  useEffect(() => {
    themeSwitcher();
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
