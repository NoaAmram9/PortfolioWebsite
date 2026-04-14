import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './HomeTab.css';
import NoaAmramLogo1 from '../../NoaAmramLogo1.png';

const HomeTab = ({ setActiveTab }) => {
  const { t, language } = useLanguage();
  const isHe = language === 'he';

  return (
    <div className="home-tab">
      
      {/* ── Geometric Architectural Canvas ── */}
      <div className="geometric-canvas">
      
        <div className="geo-line vertical-2"></div>
        <div className="geo-line horizontal-1"></div>
   
        <div className="geo-shape circle-2"></div>

        <div className="geo-shape rect-2"></div>
        <div className="geo-shape square-1"></div>
      </div>

      {/* ── Left: Text Content ── */}
      <div className="home-left">
        <span className="home-label animate-fade-in">
          {isHe ? '00 // תיק עבודות' : '00 // Portfolio'}
        </span>

        <h1 className="home-title animate-slide-up">
          {isHe ? (
            <>נועה<br /><em>עמרם</em></>
          ) : (
            <>Noa<br /><em>Amram</em></>
          )}
        </h1>

        <p className="home-subtitle animate-slide-up-delay">
          {isHe
            ? 'סטודנטית שנה ג׳ להנדסת תוכנה. מתמחה בחיבור שבין ארכיטקטורת מערכות חכמה לחוויית משתמש (UX/UI) מדויקת ואסתטית.'
            : 'Third-year Software Engineering student. Specializing in the intersection of smart system architecture and precise, aesthetic UX/UI.'}
        </p>

        <div className="home-tags animate-fade-in-delay">
          <span className="home-tag">UX / UI Design</span>
          <span className="home-tag">Frontend</span>
          <span className="home-tag">System Architecture</span>
          <span className="home-tag">{isHe ? 'שנה ג׳ • הנדסת תוכנה' : '3rd Year • B.Sc SE'}</span>
        </div>

        <div className="home-buttons animate-fade-in-delay">
          <button className="btn btn-primary" onClick={() => setActiveTab('projects')}>
            {t.showProjects || (isHe ? 'צפייה בפרויקטים' : 'View Projects')}
          </button>
          <button className="btn btn-secondary" onClick={() => setActiveTab('contact')}>
            {t.contactMe || (isHe ? 'יצירת קשר' : 'Contact Me')}
          </button>
        </div>
      </div>

      {/* ── Right: Avatar + Stats ── */}
      <div className="home-right animate-fade-in">
        <div className="home-avatar-wrap">
          <div className="home-avatar-bg"></div>
          <div className="home-avatar">
            <img
              src={NoaAmramLogo1}
              alt={isHe ? 'נועה עמרם' : 'Noa Amram'}
            />
          </div>
          {/* Small architectural accent dot */}
          <div className="avatar-accent-dot"></div>
        </div>

        <div className="home-stats">
          <div className="home-stat">
            <span className="home-stat-num">03</span>
            <span className="home-stat-label">{isHe ? 'שנות לימוד אקדמי' : 'Years Academic Study'}</span>
          </div>
          <div className="home-stat">
            <span className="home-stat-num">∞</span>
            <span className="home-stat-label">{isHe ? 'שאיפה לדיוק וחדשנות' : 'Drive for Precision'}</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomeTab;