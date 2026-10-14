import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Sparkles, Layers, Cpu } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);

  // Close on Escape key & trap focus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Focus the modal container
    modalRef.current?.focus();

    // Prevent body background scroll while modal is active
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="modal-content"
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project details modal"
        >
          <X size={20} />
        </button>

        <span className="modal-num">{project.id}</span>
        <h3 id="modal-project-title" className="modal-title">
          {project.title}
        </h3>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <span className={`project-badge ${project.isPlaceholder ? 'placeholder' : ''}`}>
            {project.badge}
          </span>
          <span className="project-badge">{project.category}</span>
        </div>

        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {project.fullDesc}
        </p>

        {project.isPlaceholder && (
          <div
            style={{
              marginTop: '16px',
              padding: '14px 18px',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              color: '#fbbf24',
              fontSize: '0.92rem'
            }}
          >
            <strong>Note:</strong> {project.placeholderMessage}
          </div>
        )}

        {/* Role & Contribution */}
        <h4 className="modal-section-title">My Role &amp; Contribution</h4>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 500 }}>
          {project.role}
        </p>

        {/* Highlights */}
        {project.highlights && (
          <>
            <h4 className="modal-section-title">Key Highlights &amp; Scope</h4>
            <ul className="modal-list">
              {project.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {/* Tech Stack Chips */}
        <h4 className="modal-section-title">Technologies Used</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
          {project.technologies.map((tech) => (
            <span key={tech} className="badge-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div
          style={{
            marginTop: '28px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }}
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Github size={18} />
              <span>View Repository</span>
            </a>
          )}
          <button type="button" className="btn btn-outline" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
