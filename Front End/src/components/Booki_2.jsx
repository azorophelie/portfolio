import React from 'react';
import BookiImage from '../images/Booki_Projet_2.webp';
import BookiVideo from '../Video/Booki_vid.mp4';


const images = {
  'Booki': BookiImage,
};
const Booki = ({ projects, onProjectClick }) => {
  return (
    <div className="projects-container">
      {projects.length > 0 ? (
        projects
          .filter(project => project.title === 'Booki')
          .map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => {
                const video = BookiVideo;
                console.log('Booki video:', video);
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

export default Booki;
