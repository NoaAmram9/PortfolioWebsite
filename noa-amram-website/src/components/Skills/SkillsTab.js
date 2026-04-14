import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './SkillsTab.css';

const SkillsTab = () => {
  const { t, language } = useLanguage();

  const textContent = {
    he: {
      label: '03 // ארגז הכלים',
      title: 'עיצוב פוגש טכנולוגיה.',
      intro: 'השילוב בין הנדסת תוכנה לעיצוב מאפשר לי לא רק לאפיין חוויות משתמש מדויקות ואסתטיות, אלא גם להבין לעומק את הארכיטקטורה שמאחורי הקלעים. כך אני מבטיחה שכל עיצוב הוא לא רק יפה, אלא גם ישים, יעיל ומותאם למערכת.',
      categories: {
        ux: 'מחקר ואפיון (UX)',
        ui: 'עיצוב חזותי (UI)',
        frontend: 'פיתוח ממשקים (Frontend)',
        backend: 'הנדסה ומערכות (Backend)',
        tools: 'כלים ומתודולוגיות'
      }
    },
    en: {
      label: '03 // TOOLKIT',
      title: 'Where design meets tech.',
      intro: 'Bridging software engineering and design allows me to not only create precise and aesthetic user experiences but also deeply understand the architecture behind the scenes. This ensures every design is feasible, efficient, and system-ready.',
      categories: {
        ux: 'UX Research & Strategy',
        ui: 'UI & Visual Design',
        frontend: 'Frontend Engineering',
        backend: 'Backend & Systems',
        tools: 'Tools & Workflow'
      }
    }
  };

  const content = textContent[language] || textContent.en;

  // חילקנו מחדש את הכישורים והוספנו עולם תוכן שלם של UX/UI
  const skillsData = [
    {
      id: 'ux',
      categoryTitle: content.categories.ux,
      items: ['User Research', 'Wireframing & Prototyping', 'Figma', 'Usability Testing', 'User Journeys']
    },
    {
      id: 'ui',
      categoryTitle: content.categories.ui,
      items: ['Design Systems', 'Figma', 'Typography & Layout', 'Micro-interactions', 'Responsive Design']
    },
    {
      id: 'frontend',
      categoryTitle: content.categories.frontend,
      items: ['React / Next.js', 'JavaScript / TypeScript', 'HTML5 / CSS3', 'Tailwind / UI Libraries']
    },
    {
      id: 'backend',
      categoryTitle: content.categories.backend,
      items: ['Node.js / Express', 'Python', 'C++', 'REST APIs', 'SQL / MongoDB', 'System Architecture']
    },
    {
      id: 'tools',
      categoryTitle: content.categories.tools,
      items: ['Figma', 'Git / GitHub', 'Agile / Scrum', 'Docker / Linux']
    }
  ];

  return (
    <div className="skills-tab">
      <div className="skills-layout">
        
        {/* Left Side: Context & Philosophy */}
        <div className="skills-sidebar">
          <span className="skills-label">{content.label}</span>
          <h2 className="skills-title">{content.title}</h2>
          <p className="skills-intro">{content.intro}</p>
        </div>

        {/* Right Side: Architectural Grid of Skills */}
        <div className="skills-content">
          <div className="skills-masonry">
            {skillsData.map((group) => (
              <div key={group.id} className="skill-category-card">
                <h3 className="category-header">{group.categoryTitle}</h3>
                <div className="skill-tags">
                  {group.items.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SkillsTab;