import { useLanguage } from '../../contexts/LanguageContext';
import './HomeTab.css';
import NoaAmramLogo1 from '../../NoaAmramLogo1.png'; 

const HomeTab = ({ setActiveTab }) => {
  const { t, language } = useLanguage();

  return (
    <div className="home-tab">
      <div className="home-avatar">
        <img
          src={NoaAmramLogo1}
          alt="Noa Amram Logo"
          style={{ width: '180px', height: '180px' }}
        />
      </div>
      
      <h1 className="home-title">
        {language === 'he' ? 'ברוכים הבאים' : 'Welcome'}
      </h1>
         
      <p className="home-subtitle">
        {language === 'he' 
          ? 'סטודנטית שנה ג׳ להנדסת תוכנה | תשוקה לטכנולוגיה, עיצוב וחוויית משתמש |  Full Stack Developer' 
          : 'Third-year Software Engineering student | Passionate about technology, design & UX |  Full Stack Developer'}
      </p>
      
      <p className="home-description">
        {language === 'he'
          ? 'מאז שאני זוכרת את עצמי אני אוהבת ליצור, לפתור בעיות ולהביא רעיונות לחיים דרך קוד. אני שואפת ללמוד, להתפתח ולבנות פרויקטים חדשניים שמשלבים יצירתיות, טכנולוגיה והשפעה אמיתית על המשתמשים. כל קוד שאני כותבת הוא הזדמנות לצמוח, להתנסות ולהעניק ערך.'
          : 'Ever since I can remember, I have loved creating, solving problems, and bringing ideas to life through code. I strive to learn, grow, and build innovative projects that combine creativity, technology, and real impact for users. Every line of code I write is an opportunity to grow, experiment, and deliver value.'}
      </p>
      
      <div className="home-buttons">
        <button className="btn btn-primary" onClick={() => setActiveTab('projects')}>
          {t.showProjects}
        </button>
        <button className="btn btn-secondary" onClick={() => setActiveTab('contact')}>
          {t.contactMe}
        </button>
      </div>
    </div>
  );
};

export default HomeTab;
