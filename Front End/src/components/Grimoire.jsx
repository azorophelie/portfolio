import React from 'react';
import Grimoireimage from '../images/Vieux_Grimoire.webp';
import GrimoireVideo from '../Video/Grimoire_vid.mp4';

const images = {
    'Mon Vieux Grimoire': Grimoireimage,
    
};

const Grimoire = ({ projects, onProjectClick }) => {
  return (
   
    <div className="projects-container">
        {projects.length > 0 ? (
              projects
              .filter(project => project.title === 'Mon Vieux Grimoire') 
              .map((project, index) =>  (
                <div
                key={index}
                className="project-card"
                onClick={() => {
                  const video = GrimoireVideo;
                  console.log('Grimoire video:', video);
                  onProjectClick({ ...project, video });
                }}
              >
                <img
                  src={images[project.title] || 'chemin/vers/image/par_defaut.webp'}
                  alt={project.title}
                  className="project-image"
                />
              </div>
            ))
        ) : (
            <p>Aucun projet disponible.</p> 
        )}
    </div>

  );
};

export default Grimoire;
