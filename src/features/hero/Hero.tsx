
import React from 'react';
import { motion } from 'framer-motion';
import HardwareAnimation from './HardwareAnimation';
import { scrollToId } from '../../utils/scroll';
import './Hero.css';

const Hero = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <section className="hero">
      <div className="hero-background-effects">
        <div className="grid-overlay"></div>
        <div className="hero-gradient"></div>
        <svg className="network-lines" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 204, 0, 0.3)" />
              <stop offset="100%" stopColor="rgba(255, 204, 0, 0)" />
            </linearGradient>
          </defs>
          <path d="M0 400 Q300 350, 600 400 T1200 350" stroke="url(#goldGradient)" strokeWidth="1" fill="none" />
          <path d="M0 500 Q400 450, 800 500 T1200 450" stroke="url(#goldGradient)" strokeWidth="1" fill="none" />
          <circle cx="200" cy="380" r="4" fill="var(--primary-yellow)" opacity="0.5" />
          <circle cx="600" cy="400" r="3" fill="var(--primary-yellow)" opacity="0.4" />
          <circle cx="1000" cy="360" r="5" fill="var(--primary-yellow)" opacity="0.3" />
        </svg>
      </div>
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-badge-container">
            <span className="hero-badge">
              <span className="badge-dot"></span>
              Sydney-Based Engineering Studio
            </span>
          </div>
          <h1>From <span className="text-highlight">Prototype</span> to Production.</h1>
          <p>
            We design electronics with manufacturing reality in mind. In-house rapid prototyping, trusted partners across Australia, China, and Taiwan. One team sees your product from concept to warehouse.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary" onClick={(e) => handleClick(e, 'contact')}>Start Your Project</a>
            <a href="#services" className="btn-secondary" onClick={(e) => handleClick(e, 'services')}>Our Capabilities</a>
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
