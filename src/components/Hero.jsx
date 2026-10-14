import React, { useState, useEffect } from 'react';
import {
  MapPin,
  FileDown,
  ArrowRight,
  Mail,
  GraduationCap,
  Cpu,
  Compass,
  Languages
} from 'lucide-react';
import { Github, Linkedin, Instagram } from './Icons';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const { personal, heroTypingTexts, heroStats, contact } = portfolioData;

  // Typing effect state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  // Accessible typing effect respecting reduced motion
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayedText(heroTypingTexts[0]);
      return;
    }

    const currentFullText = heroTypingTexts[currentTextIndex];
    let timer;

    if (!isDeleting) {
      if (displayedText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % heroTypingTexts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex, heroTypingTexts]);

  // Map icon names to Lucide icons
  const renderStatIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap size={18} />;
      case 'BrainCircuit':
        return <Cpu size={18} />;
      case 'Compass':
        return <Compass size={18} />;
      case 'Languages':
        return <Languages size={18} />;
      default:
        return <GraduationCap size={18} />;
    }
  };

  return (
    <section id="hero" className="hero-wrapper" aria-label="Introduction and Overview">
      {/* Huge Faded Watermark Behind Hero */}
      <div className="hero-watermark" aria-hidden="true">
        PORTFOLIO
      </div>

      <div className="section-container" style={{ width: '100%' }}>
        {/* Top bar from reference design */}
        <div className="hero-top-bar">
          <div className="hero-top-left">
            <span className="hero-top-line" aria-hidden="true"></span>
            <span className="hero-top-label">CREATIVE PORTFOLIO</span>
          </div>
          <div className="hero-top-badge">
            <span className="glowing-dot" aria-hidden="true"></span>
            <span>OPEN TO OPPORTUNITIES</span>
          </div>
        </div>

        {/* Hero Content Grid */}
        <div className="hero-grid">
          {/* Left Column: Bio & Calls to Action */}
          <div className="hero-content-col">
            <p className="hero-greeting font-script">{personal.greeting}</p>
            <h1 className="hero-name font-heading">{personal.name}</h1>
            
            <p className="hero-role-line">{personal.roleLine}</p>

            {/* Typewriter subtitle */}
            <div className="hero-typewriter-row" aria-live="polite">
              <span className="typewriter-text">{displayedText}</span>
              <span className="cursor-blink" aria-hidden="true"></span>
            </div>

            <p className="hero-intro">{personal.intro}</p>

            <div className="hero-location">
              <MapPin size={16} className="hero-location-pin" />
              <span>Based in: {personal.location}</span>
            </div>

            {/* Action Buttons */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                <span>Explore My Projects</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <span>Contact Me</span>
              </a>

              <a
                href={personal.resumeUrl}
                download="Yashwanth_V_Resume.pdf"
                className="btn btn-outline"
                title="Download Yashwanth V Resume"
              >
                <FileDown size={18} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="hero-socials">
              <a
                href={contact.socials.find((s) => s.name === 'GitHub')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-icon"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href={contact.socials.find((s) => s.name === 'LinkedIn')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-icon"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={contact.socials.find((s) => s.name === 'Instagram')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-icon"
                aria-label="Instagram Profile"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="btn btn-icon"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo + Vertical Stat Cards */}
          <div className="hero-visual-col">
            {/* Ambient blue glow behind him */}
            <div className="hero-photo-glow" aria-hidden="true"></div>

            {/* Photo frame with gradient blend overlay */}
            <div className="hero-photo-wrapper">
              {!photoError ? (
                <img
                  src={personal.profilePhoto}
                  alt="Portrait of Yashwanth V"
                  className="hero-photo"
                  loading="eager"
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <div className="hero-photo-fallback" aria-label="Yashwanth V Monogram">
                  <span>{personal.initials}</span>
                </div>
              )}
              {/* CSS gradient mask overlay to blend photo edges softly */}
              <div className="hero-photo-overlay" aria-hidden="true"></div>
            </div>

            {/* Vertical Stack of 4 Stat Items from reference */}
            <div className="hero-stats-stack" aria-label="Key Facts">
              {heroStats.map((stat) => (
                <div key={stat.id} className="hero-stat-card">
                  <div className="stat-icon-circle" aria-hidden="true">
                    {renderStatIcon(stat.iconName)}
                  </div>
                  <div className="stat-info">
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-value">{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
