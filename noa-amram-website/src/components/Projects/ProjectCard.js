import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {}
      <div className="project-card" onClick={() => setIsOpen(true)}>
        <img src={project.image} alt={project.title} className="project-image" />
        <h3>{project.title}</h3>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsOpen(false)}>×</button>

            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-git">
            Open on GitHub
            </a>
            {}
            {project.images && project.images.map((img, index) => (
              <img key={index} src={img} alt={`${project.title} ${index}`} className="modal-image" />
            ))}

            {}
            {project.video && (
              <video controls className="modal-video">
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

          
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
