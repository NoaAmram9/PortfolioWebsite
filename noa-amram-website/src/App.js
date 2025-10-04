// ============================================
// src/App.js
// ============================================
import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar/Navbar';
// import HomeTab from './components/Home/HomeTab';
import AboutTab from './components/About/AboutTab';
// import ProjectsTab from './components/Projects/ProjectsTab';
// import SkillsTab from './components/Skills/SkillsTab';
// import ContactTab from './components/Contact/ContactTab';
// import Footer from './components/Footer/Footer';
import { useTheme } from './contexts/ThemeContext';
import { useLanguage } from './contexts/LanguageContext';
import './App.css';

const AppContent = ({ activeTab, setActiveTab }) => {
  const theme = useTheme();
  const { isRTL } = useLanguage();
  
  return (
    <div className={`app ${theme.isDarkMode ? 'dark-mode' : 'light-mode'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="main-content">
        {/* {activeTab === 'home' && <HomeTab  />} */}
        {activeTab === 'about' && <AboutTab setActiveTab={setActiveTab}/>}
        {/* {activeTab === 'projects' && <ProjectsTab />}
        {activeTab === 'skills' && <SkillsTab />}
        {activeTab === 'contact' && <ContactTab />} */}
      </div>
      
      {/* <Footer /> */}
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent activeTab={activeTab} setActiveTab={setActiveTab} />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;