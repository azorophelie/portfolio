// src/components/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <span className="modal-close" onClick={onClose}>&times;</span>
        
        <h3>{project.title}</h3>
        {project.video && (
          <div className="modal-video-container">
            <video 
              src={project.video} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="modal-video"
            />
          </div>
        )} 
        <div className="modal-details">
        <div className="modal-column">
  <p className='modal-subtitle'>Description:</p>
  <p className="left-align">{project.description}</p>
  
  <p className='modal-subtitle'>Problématiques:</p>
  <p className="left-align">{project.problems}</p>
</div>
<div className="modal-column">
<p className='modal-subtitle'>Compétences développées:</p>
  <p className="left-align">{project.skillsDeveloped}</p>
  
  <p className='modal-subtitle'>Solutions:</p>
  <p className="left-align">{project.solutions}</p>
</div>
          
        </div>

        <div className="modal-buttons">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="projet-btn">
            Code GitHub
          </a>
          <a href={project.githubPages} target="_blank" rel="noopener noreferrer" className="projet-btn">
            GitHub Pages
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
