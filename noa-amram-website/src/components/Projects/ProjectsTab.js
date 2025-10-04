import React, { useState } from 'react';
import { Filter, Import } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import ProjectCard from './ProjectCard';
import './ProjectsTab.css';

import Netflix  from '../../photos/5.png';
import netflixVideo from '../../photos/netflixApp1.mp4';
import timeManagementVideo from '../../photos/Main.mp4';

import timeManagementImage from '../../photos/last.png';
import onlineStoreImage from '../../photos/logo.png';
import icyTowerImage1 from '../../photos/end.png';
import icyTowerImage2 from '../../photos/start.png';
import icyTowerImage3 from '../../photos/theGame.png';

const ProjectsTab = () => {
  const { t, language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const projects = [
   {
    id: 1,
    title:  language === 'he' ? 'נטפילם':' Netfilm',
    description: 'A streaming platform developed from scratch inspired by Netflix, featuring an end-to-end user experience.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS', 'JavaScript', 'HTML', 'API','CPP'],
    image: Netflix,
    images: [Netflix], 
    video: netflixVideo, 
    link: 'https://github.com/avigail100/Netfilm.git'
  },
    {
      id: 2,
      title: language === 'he' ? 'חנות אונליין מלאה עם עגלת קניות ותשלומים ' : 'Online Clothing Store ',
      description: language === 'he' ? 'חנות אונליין מלאה עם עגלת קניות ותשלומים' : 'Full online store with shopping cart and payments',
      tags: ['Acess', 'Python', 'MVC'],
      image: onlineStoreImage,
      images: [onlineStoreImage], 
      video: null,
      link: 'https://github.com/NoaAmram9/OnlineClothingStore.git'
    },
    {
      id: 3,
      title: language === 'he' ? 'מערכת חכמה לניהול מערכות שעות' : 'A smart system for managing time systems',
      description: language === 'he' ? ' המערכת עוזרת לסטודנטים בקלות לסדר מערכת שעות מותאמת אישית מבין עשרות קורסים ואילוצים. היא נותנת כלי גם למזכירות - שיכולה להעלות את כל קורסי הפקולטה ולבנות מערכות שעות שלמות לכל תוכנית לימודים.' : 'The system helps students easily arrange a personalized schedule from dozens of courses and constraints. It also provides a tool for the secretariat - which can upload all the faculty courses and build complete schedules for each curriculum.',
      tags: ['SQLite', 'PyQt5', 'Threads'],
      image: timeManagementImage,
      images: [timeManagementImage], 
      video: timeManagementVideo, 
      link: 'https://github.com/NoaAmram9/-Course-scheduling-system.git'
    },
    {
      id: 4,
      title: language === 'he' ? 'משחק ICYTOWER' : 'Icytower Game',
      description: language === 'he' ? 'טייקאוף על משחק הICYTOWER המפורסם , תחת הצמדות לעקרונות OOP ' : 'A take on the famous ICY TOWER game, under the auspices of OOP principles.',
      tags: ['OOP', 'JAVA'],
      image: icyTowerImage3,
      images: [icyTowerImage3, icyTowerImage1, icyTowerImage2], 
      video: null, 
      link: 'https://github.com/NoaAmram9/IcyTower.git'
    }
  ];
  
  const allTags = ['all', ...new Set(projects.flatMap(p => p.tags))];
  const filteredProjects = selectedFilter === 'all' ? projects : projects.filter(p => p.tags.includes(selectedFilter));
  
  return (
    <div className="projects-tab">
      <h2 className="section-title">{t.myProjects}</h2>
      
      <div className="projects-filter">
        <Filter size={20} className="filter-icon" />
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedFilter(tag)}
            className={`filter-btn ${selectedFilter === tag ? 'active' : ''}`}
          >
            {tag === 'all' ? t.all : tag}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsTab;