
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HardwareAnimation from './HardwareAnimation';
import './Hero.css';

const Hero = () => {
  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('booking');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-background-effects">
        <div className="grid-overlay"></div>
        <div className="hero-gradient"></div>
      </div>
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-badge-container">
            <span className="hero-badge">Industrial Design & Engineering</span>
          </div>
          <h1>Beyond the <br/>First <span className="text-highlight">Iteration.</span></h1>
          <p>
            Complex hardware demands more than just a prototype. We engineer functional solutions at the intersection of electronics, firmware, and mechanical precision.
          </p>
          <div className="hero-actions">
            <a href="#booking" className="btn-primary" onClick={scrollToBooking}>Start Your Project</a>
            <a href="#services" className="btn-secondary" onClick={scrollToServices}>Our Capabilities</a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">Sydney</span>
              <span className="stat-label">Based Studio</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">FDM/SLA</span>
              <span className="stat-label">In-House Lab</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <HardwareAnimation />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
