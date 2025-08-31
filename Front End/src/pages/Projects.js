// src/pages/Projects.js
import React, { useState } from "react";
import projectData from "../data/details.json";
import Modal from "../components/Modal";
import ProjectList from "../components/ProjectCard";

const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = projectData.projects || [];

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="project">
      <h2>Mes Projets</h2>
      <ProjectList projects={projects} onProjectClick={openModal} />
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
      )}
    </div>
  );
};

export default Projects;
