import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // את יכולה לשנות ל-false אם את מעדיפה שהדיפולט יהיה Light Mode
  const [isDarkMode, setIsDarkMode] = useState(false); 

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  
  const theme = {
    isDarkMode,
    toggleTheme: () => setIsDarkMode(!isDarkMode),
    

    colors: isDarkMode ? {
      background: '#1E1E1E',
      surface: '#2A2A2A',
      surface2: '#333333',
      textPri: '#F5F5F5',
      textSec: '#B0B0B0',
      taupe: '#3F3F3F',
      accent: '#D8CBBE',
      divider: 'rgba(255, 255, 255, 0.05)',
      shadow: 'rgba(0, 0, 0, 0.4)'
    } : {
      background: '#F9F8F6',
      surface: '#E8E1D9',
      surface2: '#D8CBBE',
      textPri: '#2B2B2B',
      textSec: '#6E6E6E',
      taupe: '#CBBBAA',
      accent: '#3A3A3A',
      divider: 'rgba(0, 0, 0, 0.05)',
      shadow: 'rgba(0, 0, 0, 0.05)'
    }
  };
  
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);