import React from 'react';
import { Mail, Home, User, Briefcase, Code, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const theme = useTheme();
  const { t, toggleLanguage, isRTL } = useLanguage();
  
  const tabs = [
    { id: 'home', label: t.home, icon: <Home size={18} /> },
    { id: 'about', label: t.about, icon: <User size={18} /> },
    { id: 'projects', label: t.projects, icon: <Briefcase size={18} /> },
    { id: 'skills', label: t.skills, icon: <Code size={18} /> },
    { id: 'contact', label: t.contact, icon: <Mail size={18} /> }
  ];
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <h2 className="navbar-logo">Portfolio - Noa Amram</h2>
          
          <div className="navbar-menu">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`navbar-tab ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
            
            <button onClick={theme.toggleTheme} className="navbar-icon-btn">
              {theme.isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button onClick={toggleLanguage} className="navbar-icon-btn navbar-lang-btn">
              <Globe size={18} />
              {isRTL ? 'EN' : 'HE'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
