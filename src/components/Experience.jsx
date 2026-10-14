import React from 'react';
import { Briefcase, Code, CheckCircle, GitFork } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-wrapper" aria-label="Practical Experience & Project Work">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag-row">
            <span className="section-line" aria-hidden="true"></span>
            <span className="section-tag">PRACTICAL EXPERIENCE</span>
          </div>
          <h2 className="section-title">
            ENGINEERING &amp; <span className="text-gradient">PROJECT WORK</span>
          </h2>
          <p className="section-desc">
            Hands-on technical implementation, team-based development, and open problem-solving during my undergraduate studies.
          </p>
        </div>

        {/* Experience List */}
        <div style={{ maxWidth: '900px' }}>
          {experience.map((exp, idx) => (
            <div key={idx} className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <p className="timeline-subtitle">{exp.organization}</p>
                </div>
                <span className="timeline-badge">{exp.period}</span>
              </div>

              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '18px', lineHeight: 1.6 }}>
                {exp.description}
              </p>

              <div>
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--accent-cyan)', letterSpacing: '0.08em', display: 'block', marginBottom: '10px' }}>
                  Core Contributions:
                </span>
                <ul className="modal-list">
                  {exp.keyPoints.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
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
