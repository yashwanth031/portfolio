import React from 'react';
import { ArrowUpRight, Info } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectCard({ project, onOpenDetails }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpenDetails(project);
    }
  };

  return (
    <article
      className="project-card"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`Project ${project.id}: ${project.title}`}
    >
      <div>
        <div className="project-card-top">
          <span className="project-number" aria-hidden="true">
            {project.id}
          </span>
          <span className={`project-badge ${project.isPlaceholder ? 'placeholder' : ''}`}>
            {project.badge}
          </span>
        </div>

        <div className="project-card-body">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-desc">{project.shortDesc}</p>

          <div className="project-tags" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <span key={tech} className="badge-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="project-card-actions">
        <button
          type="button"
          className="project-btn-details"
          onClick={() => onOpenDetails(project)}
          aria-label={`View full details of ${project.title}`}
        >
          <Info size={16} />
          <span>View Details</span>
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github-btn"
            aria-label={`GitHub repository for ${project.title}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={16} />
            <span>Code</span>
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
