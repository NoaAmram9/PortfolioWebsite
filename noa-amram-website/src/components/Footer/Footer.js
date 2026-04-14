import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const isHe = language === 'he';
  
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Left Side: Copyright */}
        <div className="footer-col">
          <span className="footer-text">
            © {currentYear} {isHe ? 'נועה עמרם' : 'Noa Amram'}.
          </span>
          <span className="footer-subtext">
            {t.rights || (isHe ? 'כל הזכויות שמורות' : 'All rights reserved')}.
          </span>
        </div>
        
        {/* Right Side: Signature / Built With */}
        <div className="footer-col align-end">
          <span className="footer-text built-with">
            {isHe ? 'עוצב ופותח בקפדנות' : 'Engineered & Designed with care'}
          </span>
          <span className="footer-subtext">
            React • Architecture • UX/UI
          </span>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;