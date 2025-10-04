import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './AboutTab.css';

const AboutTab = () => {
  const { t, language } = useLanguage();
  
const aboutText = { 
  he: {
    p1: 'היי! אני נועה, סטודנטית שנה ג׳ להנדסת תוכנה 🎓 עם אהבה אמיתית לטכנולוגיה, עיצוב ויצירה.',
    p2: 'מאז שאני זוכרת את עצמי אהבתי לפתור בעיות וליצור דברים חדשים - והיום אני עושה את זה דרך קוד.',
    p3: 'אני שואפת להמשיך ללמוד, להתפתח ולעבוד על פרויקטים שמשלבים יצירתיות, משמעות והשפעה אמיתית.',
    p4: 'השאיפה שלי היא לקחת חלק בפיתוח מערכות חכמות ומוצרים חדשניים שמשפרים את חיי היום-יום של אנשים, ולהמשיך לצמוח כמפתחת שמביאה ערך אמיתי לעולם.'
  },
  en: {
    p1: 'Hi! I\'m Noa, a third-year Software Engineering student 🎓 with a real passion for technology, design, and creativity.',
    p2: 'Ever since I can remember, I\'ve loved solving problems and building things - and now I do it through code.',
    p3: 'I aspire to keep learning, growing, and working on projects that combine creativity, meaning, and real impact. There\'s nothing like seeing an idea come to life on screen 💡',
    p4: 'My goal is to take part in developing smart systems and innovative products that make people’s lives better, and to keep growing as a developer who creates real value in the world.'
  }
};

return (
    <div className="about-tab">
        <h2 className="section-title">{t.aboutMe}</h2>
        <div className="about-card">
            <p className="about-text">{aboutText[language].p1}</p>
            <p className="about-text">{aboutText[language].p2}</p>
            <p className="about-text">{aboutText[language].p3}</p>
            <p className="about-text">{aboutText[language].p4}</p>
            <div className="about-education">
                <h3 className="education-title">{t.education}</h3>
                <p className="education-degree"><strong>{t.degree}</strong></p>
                <p className="education-university">{t.university}</p>
            </div>
        </div>
    </div>
);
};

export default AboutTab;
