import React from 'react';
import './SkillCard.css';

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <span className="skill-category-label">{skill.category}</span>
      <h4 className="skill-name">{skill.name}</h4>
    </div>
  );
};

export default SkillCard;