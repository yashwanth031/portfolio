import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin, Instagram } from './Icons';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const { personal, contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-wrap" role="contentinfo">
      <div className="footer-container">
        {/* Top Row: Brand & Tagline + Socials */}
        <div className="footer-top-row">
          <div>
            <h2 className="footer-brand-title">{personal.name}</h2>
            <p className="footer-brand-tagline">
              Aspiring Data Scientist | AI &amp; Data Science Student | Creative Developer
            </p>
          </div>

          <div className="footer-social-row">
            <a
              href={contact.socials.find((s) => s.name === 'GitHub')?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={contact.socials.find((s) => s.name === 'LinkedIn')?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={contact.socials.find((s) => s.name === 'Instagram')?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon"
              aria-label="Instagram Profile"
            >
              <Instagram size={18} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="btn btn-icon"
              aria-label="Email Yashwanth"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Row: Dynamic Copyright + Back to Top Button */}
        <div className="footer-bottom-row">
          <p>
            &copy; {currentYear} {personal.name}. All rights reserved. Built with React &amp; Vite.
          </p>

          <button
            type="button"
            className="btn-back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
