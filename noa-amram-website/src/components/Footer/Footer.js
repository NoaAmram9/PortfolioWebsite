import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t, language } = useLanguage();
  
  return (
    <footer className="footer">
      <p className="footer-text">
        {language === 'he' ? `© 2025 נועה עמרם. ${t.rights}.` : `© 2025 Noa Amram. ${t.rights}.`}
      </p>
      <p className="footer-subtext">
        {t.builtWith} ❤️
      </p>
    </footer>
  );
};

export default Footer;
