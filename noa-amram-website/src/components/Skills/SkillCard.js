import React from 'react';
import './SkillCard.css';

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <div className="skill-name">{skill.name}</div>
      <div className="skill-category">{skill.category}</div>
    </div>
  );
};

export default SkillCard;
