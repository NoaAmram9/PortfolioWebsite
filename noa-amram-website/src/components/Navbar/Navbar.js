import React, { useState } from 'react';
import { Mail, Home, User, Briefcase, Code, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const theme = useTheme();
  const { t, toggleLanguage, isRTL } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const tabs = [
    { id: 'home',     label: isRTL ? 'בית'      : 'Home',     icon: <Home     size={15} /> },
    { id: 'about',    label: isRTL ? 'אודות'    : 'About',    icon: <User     size={15} /> },
    { id: 'projects', label: isRTL ? 'פרויקטים' : 'Work',     icon: <Briefcase size={15} /> },
    { id: 'skills',   label: isRTL ? 'כישורים'  : 'Skills',   icon: <Code     size={15} /> },
    { id: 'contact',  label: isRTL ? 'צור קשר'  : 'Contact',  icon: <Mail     size={15} /> },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    setDrawerOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">

            {/* Logo */}
            <h2 className="navbar-logo">
              Noa Amram
              <span>{isRTL ? 'תיק עבודות' : 'Portfolio'}</span>
            </h2>

            {/* Desktop menu */}
            <div className="navbar-menu">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`navbar-tab ${activeTab === tab.id ? 'active' : ''}`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}

              <div className="navbar-divider" />

              <button
                onClick={theme.toggleTheme}
                className="navbar-icon-btn"
                aria-label="Toggle theme"
              >
                {theme.isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              <button
                onClick={toggleLanguage}
                className="navbar-icon-btn navbar-lang-btn"
                aria-label="Toggle language"
              >
                <Globe size={14} />
                {isRTL ? 'EN' : 'HE'}
              </button>
            </div>

            {/* Mobile: icon buttons + hamburger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={theme.toggleTheme}
                className="navbar-icon-btn"
                style={{ display: 'none' }}
                aria-label="Toggle theme"
                id="mobile-theme-btn"
              >
                {theme.isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              <button
                onClick={toggleLanguage}
                className="navbar-icon-btn navbar-lang-btn"
                style={{ display: 'none' }}
                aria-label="Toggle language"
                id="mobile-lang-btn"
              >
                <Globe size={14} />
                {isRTL ? 'EN' : 'HE'}
              </button>

              <button
                className={`navbar-hamburger ${drawerOpen ? 'open' : ''}`}
                onClick={() => setDrawerOpen(o => !o)}
                aria-label="Toggle navigation"
              >
                <span /><span /><span />
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer */}
        <div className={`navbar-drawer ${drawerOpen ? 'open' : ''}`}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`navbar-tab ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}

          <div className="navbar-drawer-actions">
            <button onClick={theme.toggleTheme} className="navbar-icon-btn" aria-label="Toggle theme">
              {theme.isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button onClick={toggleLanguage} className="navbar-icon-btn navbar-lang-btn" aria-label="Toggle language">
              <Globe size={14} />
              {isRTL ? 'EN' : 'HE'}
            </button>
          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;