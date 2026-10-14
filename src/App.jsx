import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Sticky Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Projects Section (Right after About, before Skills) */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Education Section */}
        <Education />

        {/* Experience Section */}
        <Experience />

        {/* Achievements Section */}
        <Achievements />

        {/* Contact Section ("Let's Work Together") */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating FAQ Portfolio Assistant */}
      <Chatbot />
    </div>
  );
}
