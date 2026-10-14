import React from 'react';
import { Code2, Wrench, Users, Globe, Award, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Skills() {
  const { skillsData } = portfolioData;

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 size={22} />;
      case 'Wrench':
        return <Wrench size={22} />;
      case 'Users':
        return <Users size={22} />;
      case 'Globe':
        return <Globe size={22} />;
      default:
        return <Sparkles size={22} />;
    }
  };

  return (
    <section id="skills" className="section-wrapper" aria-label="Skills & Capabilities">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag-row">
            <span className="section-line" aria-hidden="true"></span>
            <span className="section-tag">SKILLS &amp; EXPERTISE</span>
          </div>
          <h2 className="section-title">
            TECHNICAL TOOLKIT &amp; <span className="text-gradient">CAPABILITIES</span>
          </h2>
          <p className="section-desc">
            A verified breakdown of technical proficiencies, development environments, and interpersonal strengths.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="skills-categories-grid">
          {skillsData.categories.map((category) => (
            <div key={category.title} className="skill-category-card">
              <div className="skill-category-header">
                <div className="skill-cat-icon" aria-hidden="true">
                  {getCategoryIcon(category.iconName)}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>

              <div className="skill-chips-wrap">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Programming Level Banner */}
        <div className="skills-level-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Award size={22} color="var(--accent-cyan)" />
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                Assessed Programming Proficiency
              </span>
              <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {skillsData.programmingLevel} Developer
              </p>
            </div>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '520px' }}>
            Hands-on problem solving across algorithms, data handling in Python &amp; SQL, and modern full-stack web architectures.
          </p>
        </div>
      </div>
    </section>
  );
}
