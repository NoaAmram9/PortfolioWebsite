import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './AboutTab.css';

const AboutTab = () => {
  const { t, language } = useLanguage();
  
  const aboutText = { 
    he: {
      label: '01 // קצת עליי',
      title: 'קצת עליי.',
      p1: 'היי! אני נועה, מעצבת חווית משתמש (UX/UI) וסטודנטית להנדסת תוכנה. אני מחברת בין ארכיטקטורת מערכות מורכבת לעיצוב אינטואיטיבי ואסתטי.',
      p2: 'הרקע ההנדסי שלי מקנה לי יתרון משמעותי: הבנה עמוקה של מבנים לוגיים, יכולת פתרון בעיות וראייה מערכתית. את הכלים האלו אני מתרגמת לממשקים נקיים, נגישים וזורמים, שפוגשים את המשתמש בדיוק איפה שהוא צריך.',
      p3: 'הגישה העיצובית שלי מבוססת על מחקר, אמפתיה ודיוק. אני מאמינה שעיצוב לא מסתכם רק בנראות יוקרתית, אלא בבניית היררכיה נכונה ופישוט תהליכים מורכבים המייצרים ערך אמיתי למוצר.',
      p4: 'כיום, במהלך לימודי התואר בהנדסת תוכנה באוניברסיטת בר-אילן, המטרה שלי היא להוביל יצירה של מוצרים דיגיטליים חכמים, המפשטים את חיי היום-יום באמצעות שילוב של טכנולוגיה ועיצוב אנושי.',
      educationTitle: 'השכלה',
      degree: 'B.Sc. הנדסת תוכנה',
      university: 'אוניברסיטת בר-אילן',
      years: '2023 - 2027',
      expertiseTitle: 'התמחות',
      skills: ['מחקר חווית משתמש (UX)', 'עיצוב ממשקים (UI)', 'חשיבה מערכתית', 'פיתוח Frontend']
    },
    en: {
      label: '01 // ABOUT ME',
      title: 'ABOUT ME.',
      p1: 'Hi! I\'m Noa, a UX/UI Designer and a Software Engineering student. I bridge the gap between complex system architecture and intuitive, aesthetically pleasing design.',
      p2: 'My engineering background gives me a distinct advantage: a deep understanding of logical structures, problem-solving, and systems thinking. I translate these skills into clean, accessible, and seamless user interfaces.',
      p3: 'My design approach is rooted in research, empathy, and precision. I believe that great design is not just about high-end visuals, but about building logical hierarchies and simplifying complex processes to create real product value.',
      p4: 'Currently pursuing my B.Sc. in Software Engineering at Bar-Ilan University, my goal is to lead the creation of smart digital products that simplify everyday life through the perfect blend of technology and human-centric design.',
      educationTitle: 'Education',
      degree: 'B.Sc. Software Engineering',
      university: 'Bar-Ilan University',
      years: '2023 - 2027',
      expertiseTitle: 'Expertise',
      skills: ['UX Research', 'UI Design', 'Systems Thinking', 'Frontend Development']
    }
  };

  const content = aboutText[language] || aboutText.en;

  return (
    <div className="about-tab">
        <div className="about-grid">
            
            {/* Left Plane: Architectural Anchor */}
            <div className="about-sidebar">
                <span className="about-label">{content.label}</span>
                <h2 className="about-title">{content.title}</h2>
            </div>

            {/* Right Plane: Layered Content */}
            <div className="about-content">
                <div className="about-text-wrapper">
                    <p className="about-text lead">{content.p1}</p>
                    <p className="about-text">{content.p2}</p>
                    <p className="about-text">{content.p3}</p>
                    <p className="about-text">{content.p4}</p>
                </div>

                {/* Info Cards (Geometric layered look) */}
                <div className="about-cards-grid">
                    <div className="info-card">
                        <h3 className="card-title">{content.educationTitle}</h3>
                        <div className="card-body">
                            <p className="card-highlight">{content.degree}</p>
                            <p className="card-sub">{content.university}</p>
                            <span className="card-meta">{content.years}</span>
                        </div>
                    </div>

                    <div className="info-card">
                        <h3 className="card-title">{content.expertiseTitle}</h3>
                        <div className="card-body">
                            <ul className="skills-list">
                                {content.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  );
};

export default AboutTab;