import React from 'react';
import './SkillCard.css';

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-category">{skill.category}</span>
      </div>
      <div className="skill-bar-container">
        <div className="skill-bar" style={{ width: `${skill.level}%` }} />
      </div>
      <div className="skill-level">{skill.level}%</div>
    </div>
  );
};

export default SkillCard;
