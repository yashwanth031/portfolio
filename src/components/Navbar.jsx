import React, { useState } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { portfolioData } from '../data/portfolio';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar" role="banner">
      <div className="navbar-container">
        {/* Brand */}
        <a href="#hero" className="nav-brand" aria-label="Yashwanth V Portfolio Home">
          <div className="nav-logo-badge" aria-hidden="true">
            {portfolioData.personal.initials}
          </div>
          <div className="nav-brand-text">
            <span className="nav-name">{portfolioData.personal.name}</span>
            <span className="nav-sub">Data Science &amp; AI</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links-desktop" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions-desktop">
          <a
            href={portfolioData.personal.resumeUrl}
            download="Yashwanth_V_Resume.pdf"
            className="btn btn-secondary"
            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
          >
            <FileDown size={16} />
            <span>Resume</span>
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            {link.name}
          </a>
        ))}
        <div style={{ marginTop: '12px', display: 'flex', gap: '12px', alignItems: 'center' }}>
          <a
            href={portfolioData.personal.resumeUrl}
            download="Yashwanth_V_Resume.pdf"
            className="btn btn-primary"
            style={{ flex: 1, padding: '10px 18px', fontSize: '0.9rem' }}
            onClick={handleLinkClick}
          >
            <FileDown size={16} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
