
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Cpu, Zap, Image } from 'lucide-react';
import './HardwareAnimation.css';

const HardwareAnimation = () => {
  const shouldReduceMotion = useReducedMotion();

  const floatTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 3, repeat: Infinity, ease: 'easeInOut' };

  const pulseTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 2, repeat: Infinity, ease: 'easeInOut' };

  return (
    <div className="hardware-viz-container">
      {/* Dotted Connection Lines */}
      <svg className="connection-lines" viewBox="0 0 400 400">
        <line x1="100" y1="100" x2="200" y2="200" className="dotted-line" />
        <line x1="300" y1="100" x2="200" y2="200" className="dotted-line" />
        <line x1="100" y1="300" x2="200" y2="200" className="dotted-line" />
        <line x1="300" y1="300" x2="200" y2="200" className="dotted-line" />
        <circle cx="100" cy="100" r="3" fill="var(--primary-yellow)" opacity="0.6" />
        <circle cx="300" cy="100" r="3" fill="var(--primary-yellow)" opacity="0.6" />
        <circle cx="100" cy="300" r="3" fill="var(--primary-yellow)" opacity="0.6" />
        <circle cx="300" cy="300" r="3" fill="var(--primary-yellow)" opacity="0.6" />
      </svg>

      {/* Icon Grid */}
      <div className="icon-grid">
        <motion.div
          className="icon-square"
          animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
          transition={{ ...floatTransition, delay: 0 }}
        >
          <Cpu size={24} />
        </motion.div>
        <motion.div
          className="icon-square"
          animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
          transition={{ ...floatTransition, delay: 0.3 }}
        >
          <Zap size={24} />
        </motion.div>
        <motion.div
          className="icon-square"
          animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
          transition={{ ...floatTransition, delay: 0.6 }}
        >
          <Image size={24} />
        </motion.div>
      </div>

      {/* Main Module */}
      <div className="main-iteration-module">
        <div className="module-content">
          <div className="module-grid"></div>
          <div className="module-header">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
          </div>
          <div className="module-label">v.04 ALPHA</div>
          <div className="module-center">
            <motion.div
              className="pulsing-core"
              animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={pulseTransition}
            />
            <span className="i-plus-one-text">i+1</span>
          </div>
          <div className="module-footer">
            <div className="barcode"></div>
            <div className="serial">SN-02449-Syd</div>
          </div>
        </div>
      </div>

      {/* Circuit Traces */}
      <svg className="circuit-traces" viewBox="0 0 400 400">
        <path
          d="M 50 200 L 80 200 L 100 180 L 140 180"
          className="trace-path"
        />
        <path
          d="M 260 180 L 300 180 L 320 200 L 350 200"
          className="trace-path"
        />
        <path
          d="M 200 50 L 200 80 L 180 100 L 180 140"
          className="trace-path"
        />
        <path
          d="M 180 260 L 180 300 L 200 320 L 200 350"
          className="trace-path"
        />
      </svg>
    </div>
  );
};

export default HardwareAnimation;
