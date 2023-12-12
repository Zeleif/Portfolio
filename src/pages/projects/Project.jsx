import React, { useState, useEffect } from 'react';
import projectData from '../../data/project_data.json';
import ScrollDownButton from '../../components/scroll/ScrollDownButton';
import ScrollUpButton from '../../components/scroll/ScrollUpButton';

const ProjectCard = ({ title, description, image, additionalInfo }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  const handleGitHubClick = (event) => {
    event.preventDefault();
    window.open(additionalInfo.github, '_blank', 'noopener noreferrer');
  };
  return (
    <div className={`project-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card front">
        <h3>{title}</h3>
        <img src={`${process.env.PUBLIC_URL}/assets/img/${image}`} alt={`title`} />
        <p>{description}</p>
      </div>
      <div className="card back">
        <p>Language: {additionalInfo.language}</p>
        <a href={additionalInfo.github} target="_blank" rel="noopener noreferrer" onClick={handleGitHubClick}>
          Voir GitHub
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    setProjectsData(projectData);
  }, []);



  return (
    <div id='projects' className="projects-page">
      <ScrollUpButton targetSection="about" />
      <ScrollDownButton targetSection="contact" />

      <div className="projects-container">
        <h2 className="project-title">Mes Projets</h2>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
export default Projects;

