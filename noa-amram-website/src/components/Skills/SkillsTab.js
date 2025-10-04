import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SkillCard from './SkillCard';
import './SkillsTab.css';

const SkillsTab = () => {
  const { t } = useLanguage();
  
  const skills = [
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'JavaScript/TypeScript', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Python', level: 88, category: 'Backend' },
    { name: 'C++', level: 80, category: 'Backend' },
    { name: 'MongoDB', level: 75, category: 'Database' },
    { name: 'AI/Machine Learning', level: 82, category: 'AI' },
    { name: 'Bootstrap/Tailwind', level: 90, category: 'Frontend' },
    { name: 'Git/GitHub', level: 85, category: 'Tools' },
    { name: 'REST APIs', level: 88, category: 'Backend' }
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