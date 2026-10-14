import React from 'react';
import { Trophy, Award, Calendar, Shield, Activity, CheckCircle2, BookmarkCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="section-wrapper" aria-label="Achievements & Competitions">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag-row">
            <span className="section-line" aria-hidden="true"></span>
            <span className="section-tag">HONORS &amp; ACTIVITIES</span>
          </div>
          <h2 className="section-title">
            ACHIEVEMENTS &amp; <span className="text-gradient">COMPETITIONS</span>
          </h2>
          <p className="section-desc">
            Competitive programming hackathons, symposium awards, certifications, and leadership activities.
          </p>
        </div>

        {/* Section 1: Competitions & Awards */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', letterSpacing: '0.1em', marginBottom: '20px' }}>
            🏆 Awards &amp; Recognitions
          </h3>
          <div className="achievements-grid">
            {achievements.awards.map((award, idx) => (
              <div key={idx} className="achievement-card">
                <span className="achievement-badge-pill">{award.badge}</span>
                <h4 className="achievement-title">{award.title}</h4>
                <p className="achievement-desc">{award.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Hackathons & Developer Events */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', textTransform: 'uppercase', color: 'var(--accent-blue-bright)', letterSpacing: '0.1em', marginBottom: '20px' }}>
            ⚡ Hackathons &amp; Developer Events
          </h3>
          <div className="achievements-grid">
            {achievements.events.map((event, idx) => (
              <div key={idx} className="achievement-card">
                <span className="achievement-badge-pill" style={{ background: 'rgba(47, 107, 255, 0.15)', borderColor: 'var(--border-subtle)', color: 'var(--accent-blue-bright)' }}>
                  {event.status}
                </span>
                <h4 className="achievement-title">{event.title}</h4>
                <p className="achievement-desc">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Certifications & Extracurriculars */}
        <div className="achievements-grid">
          {/* Certification */}
          {achievements.certifications.map((cert, idx) => (
            <div key={idx} className="achievement-card" style={{ borderColor: 'var(--border-glow)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <BookmarkCheck size={20} color="var(--accent-cyan)" />
                <span className="achievement-badge-pill" style={{ margin: 0 }}>Certification</span>
              </div>
              <h4 className="achievement-title">{cert.title}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                {cert.duration}
              </p>
              <p className="achievement-desc">{cert.description}</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '12px' }}>
                {cert.status}
              </p>
            </div>
          ))}

          {/* NCC Volunteer & District Volleyball */}
          {achievements.other.map((item, idx) => (
            <div key={idx} className="achievement-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                {item.iconName === 'Shield' ? (
                  <Shield size={20} color="var(--accent-cyan)" />
                ) : (
                  <Trophy size={20} color="var(--accent-cyan)" />
                )}
                <span className="achievement-badge-pill" style={{ margin: 0 }}>Leadership &amp; Sports</span>
              </div>
              <h4 className="achievement-title">{item.title}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                {item.role}
              </p>
              <p className="achievement-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
