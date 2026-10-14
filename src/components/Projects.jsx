import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section-wrapper" aria-label="Selected Projects">
      <div className="section-container">
        {/* Header with Selected Projects + View all projects link from reference */}
        <div className="projects-header-row">
          <div>
            <div className="section-tag-row">
              <span className="section-line" aria-hidden="true"></span>
              <span className="section-tag">SELECTED PROJECTS</span>
            </div>
            <h2 className="section-title">
              FEATURED <span className="text-gradient">ENGINEERING WORK</span>
            </h2>
          </div>

          <a href="#projects" className="view-all-link">
            <span>View all projects</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* 3 Numbered Project Cards */}
        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>
      </div>

      {/* Accessible Detail Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseDetails} />
      )}
    </section>
  );
}
