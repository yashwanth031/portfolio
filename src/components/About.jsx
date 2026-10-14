import React, { useState } from 'react';
import { Target, Sparkles, Code, Brain } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function About() {
  const { personal, quote } = portfolioData;
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="about" className="section-wrapper" aria-label="About Yashwanth V">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag-row">
            <span className="section-line" aria-hidden="true"></span>
            <span className="section-tag">ABOUT ME</span>
          </div>
          <h2 className="section-title">
            DRIVEN BY LOGIC, <span className="text-gradient">SHAPED BY DATA</span>
          </h2>
          <p className="section-desc">
            An overview of my academic foundation, technical passions, and long-term ambition.
          </p>
        </div>

        {/* Content Layout */}
        <div className="about-grid">
          {/* Visual Column: Cropped Photo + Highlighted Quote Panel */}
          <div className="about-visual-side">
            <div className="about-image-card">
              {!photoError ? (
                <img
                  src={personal.profilePhoto}
                  alt="Portrait of Yashwanth V in blazer"
                  className="about-image"
                  loading="lazy"
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <div
                  className="hero-photo-fallback"
                  style={{ height: '380px' }}
                  aria-label="Yashwanth V Monogram"
                >
                  <span>{personal.initials}</span>
                </div>
              )}
            </div>

            {/* Highlighted Quote Panel from reference layout */}
            <aside className="quote-panel" aria-label="Personal Motto">
              <div className="quote-mark" aria-hidden="true">&ldquo;</div>
              <p className="quote-text">{quote.text}</p>
            </aside>
          </div>

          {/* Text & Key Fact Cards */}
          <div className="about-content-side">
            <div className="about-paragraphs">
              {personal.aboutText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Fact Cards */}
            <div className="about-facts-grid">
              <div className="about-fact-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Target size={16} color="var(--accent-cyan)" />
                  <span className="fact-title">Career Goal</span>
                </div>
                <p className="fact-desc">{personal.careerGoal}</p>
              </div>

              <div className="about-fact-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Brain size={16} color="var(--accent-cyan)" />
                  <span className="fact-title">Current Program</span>
                </div>
                <p className="fact-desc">3rd Year B.E./B.Tech AI &amp; DS</p>
              </div>

              <div className="about-fact-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Code size={16} color="var(--accent-cyan)" />
                  <span className="fact-title">Web &amp; AI Focus</span>
                </div>
                <p className="fact-desc">React, Python &amp; LLM Integration</p>
              </div>

              <div className="about-fact-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Sparkles size={16} color="var(--accent-cyan)" />
                  <span className="fact-title">Mindset</span>
                </div>
                <p className="fact-desc">Problem Solving &amp; Logical Thinking</p>
              </div>
            </div>

            {/* Core Interests Chips */}
            <div style={{ marginTop: '16px' }}>
              <span className="fact-title" style={{ display: 'block', marginBottom: '10px' }}>
                Key Areas of Interest
              </span>
              <div className="interest-chips">
                {personal.interests.map((interest) => (
                  <span key={interest} className="badge-tag">
                    #{interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
