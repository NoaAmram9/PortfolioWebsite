import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SkillCard from './SkillCard';
import './SkillsTab.css';

const SkillsTab = () => {
  const { t } = useLanguage();

    const skills = [
    // 🖥️ Frontend
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'JavaScript / TypeScript', category: 'Frontend' },
    { name: 'HTML5 / CSS3', category: 'Frontend' },
    { name: ' Bootstrap', category: 'Frontend' },
    { name: 'UI/UX Design', category: 'Frontend' },

    // ⚙️ Backend
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'FastAPI / Flask', category: 'Backend' },
    { name: 'C++', category: 'Backend' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'Authentication / JWT', category: 'Backend' },

    // 🧠 AI / Data
    { name: 'Pandas / NumPy', category: 'AI' },

    // 🗄️ Database
    { name: 'MongoDB', category: 'Database' },
    { name: 'Access ', category: 'Database' },
    { name: 'SQL / SQLite', category: 'Database' },
    

    // 🐳 DevOps & Cloud
    { name: 'Docker', category: 'DevOps' },
    { name: 'Linux / Bash', category: 'DevOps' },

    // 🧰 Tools & Workflow
    { name: 'Git / GitHub', category: 'Tools' },
    { name: 'Agile / Scrum', category: 'Tools' },
    { name: 'Figma', category: 'Tools' },
  ];

  return (
    <div className="skills-tab">
      <h2 className="section-title">{t.mySkills}</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsTab;
