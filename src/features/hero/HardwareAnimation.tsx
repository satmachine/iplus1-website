
import React from 'react';
import { motion } from 'framer-motion';
import './HardwareAnimation.css';

const HardwareAnimation = () => {
  return (
    <div className="hardware-viz-container">
      {/* Schematic Background Lines */}
      <svg className="schematic-lines" viewBox="0 0 400 400">
        <motion.path 
          d="M 50 200 L 150 200 M 250 200 L 350 200 M 200 50 L 200 150 M 200 250 L 200 350"
          stroke="rgba(255, 204, 0, 0.15)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <circle cx="200" cy="200" r="180" stroke="rgba(255, 204, 0, 0.05)" fill="none" strokeDasharray="4 4" />
      </svg>

      {/* The Core: Iterative Concept */}
      <div className="iteration-stack">
        {/* Shadow/Previous Iteration */}
        <motion.div 
          className="iteration-layer layer-back"
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [0.9, 0.95, 0.9],
            rotate: -5
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Professional Core */}
        <div className="main-iteration-module">
          <div className="module-content">
            <div className="module-grid"></div>
            <div className="module-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
            </div>
            <div className="module-label">v.04 ALPHA</div>
            <div className="module-center">
              <div className="pulsing-core"></div>
              <span className="i-plus-one-text">i+1</span>
            </div>
            <div className="module-footer">
              <div className="barcode"></div>
              <div className="serial">SN-02449-Syd</div>
            </div>
          </div>
          
          {/* Floating Components (Representing assembly) */}
          <motion.div 
            className="floating-chip chip-1"
            animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="chip-pin"></div>
            <div className="chip-body">MCU</div>
          </motion.div>

          <motion.div 
            className="floating-chip chip-2"
            animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="chip-body">RF</div>
          </motion.div>
        </div>
      </div>

      {/* Data Transmission Rings */}
      <div className="data-rings">
        {[1, 2, 3].map((i) => (
          <motion.div 
            key={i}
            className="data-ring"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.5, opacity: [0, 0.5, 0] }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: i * 1,
              ease: "easeOut" 
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HardwareAnimation;
