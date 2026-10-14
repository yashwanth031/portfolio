import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-wrapper" aria-label="Education History">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag-row">
            <span className="section-line" aria-hidden="true"></span>
            <span className="section-tag">ACADEMIC JOURNEY</span>
          </div>
          <h2 className="section-title">
            EDUCATION &amp; <span className="text-gradient">ACADEMICS</span>
          </h2>
          <p className="section-desc">
            Formal engineering education focused on artificial intelligence, data systems, and algorithmic reasoning.
          </p>
        </div>

        {/* Education Timeline */}
        <div style={{ maxWidth: '900px' }}>
          {education.map((edu, idx) => (
            <div key={idx} className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">{edu.institution}</h3>
                  <p className="timeline-subtitle">{edu.degree}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <span className="timeline-badge">{edu.yearStatus}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <Calendar size={14} />
                    <span>Graduation: {edu.expectedGraduation}</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '16px' }}>
                <ul className="modal-list">
                  {edu.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
