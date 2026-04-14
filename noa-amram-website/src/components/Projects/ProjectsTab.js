import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import ProjectCard from './ProjectCard';
import './ProjectsTab.css';

// --- הייבוא המקורי שלך (פיתוח) ---
import Netflix from '../../photos/netfilm.png';
import netflixImage1 from '../../photos/5.png';
import netflixVideo from '../../photos/NetApp.mp4';
import timeManagementVideo from '../../photos/Main.mp4';
import timeManagementImage from '../../photos/last.png';
import onlineStoreImage from '../../photos/Barfoo.png';
import onlineStoreImage2 from '../../photos/closet.png';
import icyTowerImage1 from '../../photos/end.png';
import icyTowerImage2 from '../../photos/start.png';
import icyTowerImage3 from '../../photos/theGame.png';

// --- תמונות דמה זמניות לפרויקטי העיצוב ---
const mockImage1 = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80';
const mockImage2 = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';

const ProjectsTab = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('dev'); // 'dev' | 'design'
  
  const content = {
    he: {
      label: '02 // תיק עבודות',
      title: 'הפרויקטים שלי.',
      tabDev: 'פיתוח והנדסת תוכנה',
      tabDesign: 'UX/UI וניהול סושיאל',
    },
    en: {
      label: '02 // PORTFOLIO',
      title: 'Selected Works.',
      tabDev: 'Software Engineering',
      tabDesign: 'UX/UI & Creative Direction',
    }
  };

  const text = content[language] || content.en;

  // הפרויקטים המקוריים שלך אחד לאחד!
  const devProjects = [
    {
      id: 1,
      title: language === 'he' ? 'נטפילם' : 'Netfilm',
      description: 'A streaming platform developed from scratch inspired by Netflix, featuring an end-to-end user experience.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS', 'JavaScript', 'HTML', 'API','CPP'],
      image: Netflix,
      images: [Netflix, netflixImage1], 
      video: netflixVideo, 
      link: 'https://github.com/avigail100/Netfilm.git'
    },
    {
      id: 2,
      title: language === 'he' ? 'חנות אונליין מלאה עם עגלת קניות ותשלומים ' : 'Online Clothing Store ',
      description: language === 'he' ? 'חנות אונליין מלאה עם עגלת קניות ותשלומים' : 'Full online store with shopping cart and payments',
      tags: ['Access', 'Python', 'MVC'],
      image: onlineStoreImage,
      images: [onlineStoreImage, onlineStoreImage2], 
      video: null,
      link: 'https://github.com/NoaAmram9/OnlineClothingStore.git'
    },
    {
      id: 3,
      title: language === 'he' ? 'מערכת חכמה לניהול מערכות שעות' : 'A smart system for managing time systems',
      description: language === 'he' 
        ? 'המערכת עוזרת לסטודנטים בקלות לסדר מערכת שעות מותאמת אישית מבין עשרות קורסים ואילוצים. היא נותנת כלי גם למזכירות - שיכולה להעלות את כל קורסי הפקולטה ולבנות מערכות שעות שלמות לכל תוכנית לימודים.' 
        : 'The system helps students easily arrange a personalized schedule from dozens of courses and constraints. It also provides a tool for the secretariat - which can upload all the faculty courses and build complete schedules for each curriculum.',
      tags: ['SQLite', 'PyQt5', 'Threads'],
      image: timeManagementImage,
      images: [timeManagementImage], 
      video: timeManagementVideo, 
      link: 'https://github.com/NoaAmram9/-Course-scheduling-system.git'
    },
    {
      id: 4,
      title: language === 'he' ? 'משחק ICYTOWER' : 'Icytower Game',
      description: language === 'he' 
        ? 'טייקאוף על משחק הICYTOWER המפורסם , תחת הצמדות לעקרונות OOP ' 
        : 'A take on the famous ICY TOWER game, under the auspices of OOP principles.',
      tags: ['OOP', 'JAVA'],
      image: icyTowerImage3,
      images: [icyTowerImage3, icyTowerImage1, icyTowerImage2], 
      video: null, 
      link: 'https://github.com/NoaAmram9/IcyTower.git'
    }
  ];

  // פרויקטי העיצוב החדשים שהוספנו
  const designProjects = [
    {
      id: 'ui1',
      title: language === 'he' ? 'CASA - בוטיק קפה ויין' : 'CASA - Coffee & Wine Boutique',
      description: language === 'he'
        ? 'ארט דיירקשן וניהול סושיאל מלא. בניית שפה ויזואלית חמה ואלגנטית, סידור קפדני של ה-Grid באינסטגרם ליצירת זרימה הרמונית. העבודה כוללת שימוש ב-AI לליטוש תמונות, דיוק תאורה ויצירת נכסים משלימים (תוך דיוק מוחלט בפרומפטים - למשל יצירת אווירה אנושית עם פרומפט של "פנסיונר טרי" הנהנה מקפה בבוקר). ניתן דגש משמעותי להנגשה: שימוש בטקסטים חלופיים (Alt-text), שמירה על קונטרסט קריא והיררכיה ברורה בסטוריז ובפוסטים.'
        : 'Full Art Direction & Social Media Management. Created a warm, elegant visual language and a meticulously curated Instagram grid. Utilized AI for advanced photo retouching and generating complementary assets with highly specific prompts (e.g., capturing the mood of a "fresh pensioner" enjoying morning coffee). Heavy emphasis on web accessibility: Alt-texts, proper color contrast, and clear hierarchy in stories and posts.',
      tags: ['Art Direction', 'AI Retouching', 'Social Grid UI', 'Accessibility'],
      image: mockImage1, 
      link: '#'
    },
    {
      id: 'ui2',
      title: language === 'he' ? 'Atlas - כלי AI למטיילים' : 'Atlas - Travel AI Tool',
      description: language === 'he'
        ? 'עיצוב ממשק ונוכחות דיגיטלית לכלי AI בתחום התיירות. תרגום פיצ\'רים טכנולוגיים מורכבים לחוויות משתמש פשוטות ואינטואיטיביות בעמוד האינסטגרם (Micro-copy מונגש). שימוש בכלי בינה מלאכותית יוצרת (Generative AI) להרחבת תמונות רקע (Outpainting), תיקוני צבע, ויצירת מוקאפים שמשדרים חדשנות ונוחות.'
        : 'UI/UX and digital presence for a travel AI tool. Translated complex technological features into simple, intuitive user experiences on the Instagram page through accessible micro-copy. Used Generative AI for background outpainting, color correction, and creating mockups that convey innovation and ease of use.',
      tags: ['UX/UI', 'Generative AI', 'Micro-copy', 'Brand Identity'],
      image: mockImage2, 
      link: '#'
    }
  ];

  const currentProjects = activeCategory === 'dev' ? devProjects : designProjects;

  return (
    <div className="projects-tab">
      <div className="projects-header">
        <span className="section-label">{text.label}</span>
        <h2 className="section-title">{text.title}</h2>
      </div>
      
      {/* Architectural Tabs Navigation */}
      <div className="projects-tabs-nav">
        <button 
          className={`tab-btn ${activeCategory === 'dev' ? 'active' : ''}`}
          onClick={() => setActiveCategory('dev')}
        >
          {text.tabDev}
        </button>
        <button 
          className={`tab-btn ${activeCategory === 'design' ? 'active' : ''}`}
          onClick={() => setActiveCategory('design')}
        >
          {text.tabDesign}
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid animate-in">
        {currentProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsTab;