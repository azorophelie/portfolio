// src/pages/ProjectsPage.jsx
import React, { useState } from 'react';
import projectData from '../data/details.json';
import Booki from '../components/Booki_2';
import Modal from '../components/Modal'; 
import Bluel from '../components/Bluel';
import Kasa from '../components/Kasa';
import Grimoire from '../components/Grimoire';

const Projects = () => {

  
        const [isModalOpen, setModalOpen] = useState(false);
        const [selectedProject, setSelectedProject] = useState(null);
        const projects = projectData.skills.projects || []; 
      
        const openModal = (project) => {
          setSelectedProject(project);
          setModalOpen(true);
        };
      
        const closeModal = () => {
          setModalOpen(false);
          setSelectedProject(null);
        };
      
        return (
          <div className='project'>
            <h2>Mes Projets</h2>
            <div className="projects-container">  
                <Booki projects={projects} onProjectClick={openModal} />
                <Bluel projects={projects} onProjectClick={openModal} />
                <Kasa projects={projects} onProjectClick={openModal} />
                <Grimoire projects={projects} onProjectClick={openModal} />
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
        </div>

        );
      
  };
  export default Projects;  