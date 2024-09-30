import React from 'react';
import Kasaimage from '../images/Kasa_Projet_5.webp';
import KasaVideo from '../Video/Kasa_vid.mp4';



const images = {
    'Kasa': Kasaimage,
    
};

const Kasa = ({ projects, onProjectClick }) => {
  return (
   
    <div className="projects-container">
        {projects.length > 0 ? (
              projects
              .filter(project => project.title === 'Kasa') 
              .map((project, index) =>  (
                
                <div key={index} className="project-card" onClick={() => onProjectClick({ ...project, video: KasaVideo })}> 
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

export default Kasa;
