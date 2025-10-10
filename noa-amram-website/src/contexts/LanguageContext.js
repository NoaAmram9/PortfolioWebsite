import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // 'en' or 'he'
  
  const translations = {
    he: {
      home: 'בית',
      about: 'אודות',
      projects: 'פרויקטים',
      skills: 'כישורים',
      contact: 'צור קשר',
      showProjects: 'הצג פרויקטים',
      contactMe: 'צור קשר',
      aboutMe: 'אודותיי',
      myProjects: 'הפרויקטים שלי',
      mySkills: 'הכישורים שלי',
      all: 'הכל',
      fullName: 'שם מלא',
      email: 'אימייל',
      message: 'הודעה',
      sendMessage: 'שלח הודעה',
      contactInfo: 'פרטי התקשרות',
      education: 'השכלה',
      degree: 'תואר ראשון בהנדסת תוכנה',
      university: 'אוניברסיטת בר אילן | 2023-2027',
      intro: 'היי! אני מפתחת Full Stack עם תשוקה עזה לטכנולוגיה וחדשנות.',
      description: 'מתמחה בפיתוח אפליקציות web מתקדמות, בינה מלאכותית ופתרונות טכנולוגיים חדשניים.',
      rights: 'כל הזכויות שמורות',
      builtWith: 'נבנה באהבה '
    },
    en: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      showProjects: 'View Projects',
      contactMe: 'Contact Me',
      aboutMe: 'About Me',
      myProjects: 'My Projects',
      mySkills: 'My Skills',
      all: 'All',
      fullName: 'Full Name',
      email: 'Email',
      message: 'Message',
      sendMessage: 'Send Message',
      contactInfo: 'Contact Information',
      education: 'Education',
      degree: 'Bachelor of Software Engineering',
      university: 'Bar Ilan University | 2023-2027',
      intro: 'Hi! I\'m a Full Stack Developer with a passion for technology and innovation.',
      description: 'Specializing in advanced web applications, artificial intelligence, and innovative technological solutions.',
      rights: 'All rights reserved',
      builtWith: 'Built with love'
    }
  };
  
  const lang = {
    language,
    toggleLanguage: () => setLanguage(language === 'he' ? 'en' : 'he'),
    t: translations[language],
    isRTL: language === 'he'
  };
  
  return (
    <LanguageContext.Provider value={lang}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
