import React from 'react';
import Bluelimage from '../images/Bluel_Projet_3.webp';
import BluelVideo from '../Video/Bluel_vid.mp4';
const images = {
  'Bluel': Bluelimage,
  
};

const Bluel = ({ projects, onProjectClick }) => {
  return (
   
      <div className="projects-container">
        {projects.length > 0 ? (
          projects
            .filter(project => project.title === 'Bluel') 
            .map((project, index) => (
              <div
              key={index}
              className="project-card"
              onClick={() => {
                const video = BluelVideo;
                console.log('Bluel video:', video);
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

export default Bluel;
