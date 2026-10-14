import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Linkedin, Github, Instagram } from './Icons';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const { contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a message subject.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Please enter a message (at least 10 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Honest mailto fallback
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hi Yashwanth,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:${contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Show status and trigger email client
    setStatusMessage({
      type: 'success',
      text: `Drafting your email to ${contact.email}. Your default mail application will open shortly to send it!`
    });

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section-wrapper" aria-label="Contact Information and Inquiries">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag-row">
            <span className="section-line" aria-hidden="true"></span>
            <span className="section-tag">LET'S CONNECT</span>
          </div>
          <h2 className="section-title">
            LET'S WORK <span className="text-gradient">TOGETHER</span>
          </h2>
          <p className="section-desc">
            Have a project idea, academic collaboration, hackathon team, or inquiry? Feel free to reach out anytime.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left: Contact Info Channels */}
          <div className="contact-info-card">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
              DIRECT CONTACT CHANNELS
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Feel free to call, email, or connect with me through my verified social profiles.
            </p>

            <div className="contact-channels-list">
              {/* Email */}
              <a href={`mailto:${contact.email}`} className="contact-channel-item">
                <div className="channel-icon-wrap" aria-hidden="true">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="channel-label">Email Address</span>
                  <p className="channel-value">{contact.email}</p>
                </div>
              </a>

              {/* Phone */}
              <a href={`tel:${contact.phone}`} className="contact-channel-item">
                <div className="channel-icon-wrap" aria-hidden="true">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="channel-label">Direct Phone / Call</span>
                  <p className="channel-value">{contact.displayPhone}</p>
                </div>
              </a>

              {/* Location */}
              <div className="contact-channel-item" style={{ cursor: 'default' }}>
                <div className="channel-icon-wrap" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="channel-label">Current Location</span>
                  <p className="channel-value">{contact.location}</p>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href={contact.socials.find((s) => s.name === 'LinkedIn')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
              >
                <div className="channel-icon-wrap" aria-hidden="true">
                  <Linkedin size={20} />
                </div>
                <div>
                  <span className="channel-label">LinkedIn Profile</span>
                  <p className="channel-value">yashwanth-v-6a5181416</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={contact.socials.find((s) => s.name === 'GitHub')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
              >
                <div className="channel-icon-wrap" aria-hidden="true">
                  <Github size={20} />
                </div>
                <div>
                  <span className="channel-label">GitHub Repository</span>
                  <p className="channel-value">github.com/yashwanth031</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={contact.socials.find((s) => s.name === 'Instagram')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
              >
                <div className="channel-icon-wrap" aria-hidden="true">
                  <Instagram size={20} />
                </div>
                <div>
                  <span className="channel-label">Instagram</span>
                  <p className="channel-value">@yashwanth031</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-card">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
              SEND A MESSAGE
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Fill in the form below to send an inquiry or message directly to my inbox.
            </p>

            {statusMessage && (
              <div
                className={`form-status-alert ${statusMessage.type}`}
                role="alert"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {statusMessage.type === 'success' ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}
                  <span>{statusMessage.text}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Full Name <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Kumar"
                  className="form-input"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="form-error">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email Address <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="form-input"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="form-error">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject / Topic <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Project Discussion / Hackathon Collaboration"
                  className="form-input"
                  aria-required="true"
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && <p className="form-error">{errors.subject}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Your Message <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="form-textarea"
                  aria-required="true"
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="form-error">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '8px' }}
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
