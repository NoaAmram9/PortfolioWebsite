import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const theme = {
    isDarkMode,
    toggleTheme: () => setIsDarkMode(!isDarkMode),
    colors: isDarkMode ? {
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
      cardBg: 'rgba(30, 30, 30, 0.6)',
      navBg: 'rgba(20, 20, 20, 0.95)',
      text: '#ffffff',
      textSecondary: '#b0b0b0',
      textTertiary: '#888',
      accent: '#ff69b4',
      accentGradient: 'linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)',
      border: 'rgba(255, 105, 180, 0.2)',
      shadow: 'rgba(0, 0, 0, 0.5)'
    } : {
      background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
      cardBg: 'rgba(255, 255, 255, 0.9)',
      navBg: 'rgba(255, 255, 255, 0.98)',
      text: '#1a1a1a',
      textSecondary: '#4a4a4a',
      textTertiary: '#666',
      accent: '#ff1493',
      accentGradient: 'linear-gradient(135deg, #ff1493 0%, #ff69b4 100%)',
      border: 'rgba(255, 20, 147, 0.2)',
      shadow: 'rgba(0, 0, 0, 0.1)'
    }
  };
  
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
