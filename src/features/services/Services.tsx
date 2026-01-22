
import React from 'react';
import { Layers, Printer, Cpu, Activity, Zap, Smartphone, Factory } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Printer size={32} />,
    title: "Rapid Prototyping & 3D Printing",
    description: "Iterative physical models to test form, fit, and function using state-of-the-art SLA and FDM technology."
  },
  {
    icon: <Layers size={32} />,
    title: "PCB Design & Development",
    description: "Multi-layer schematic design, layout optimization, and prototyping for robust embedded systems."
  },
  {
    icon: <Activity size={32} />,
    title: "CNC Machining",
    description: "Precision subtractive manufacturing for high-performance mechanical parts and enclosures."
  },
  {
    icon: <Zap size={32} />,
    title: "Firmware Development",
    description: "Low-level C/C++ development for microcontrollers ensuring stability and energy efficiency."
  },
  {
    icon: <Smartphone size={32} />,
    title: "App Development",
    description: "Native and cross-platform mobile apps for iOS and Android to control and monitor your hardware."
  },
  {
    icon: <Factory size={32} />,
    title: "DFM & Scale",
    description: "Design for Manufacturing services to ensure your product is ready for mass production assembly lines."
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">End-to-End Capabilities</span>
          <h2>Comprehensive Hardware <span className="text-highlight">Solutions.</span></h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
