
import React from 'react';
import { Layers, Printer, Cpu, Activity, Zap, Smartphone, Factory } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Layers size={32} />,
    title: "PCB Design & Development",
    description: "Multi-layer schematic design, layout optimization, and prototyping for robust embedded systems. We design with manufacturing in mind."
  },
  {
    icon: <Zap size={32} />,
    title: "Firmware Development",
    description: "Low-level C/C++ development for microcontrollers ensuring stability and energy efficiency. Production-grade code from day one."
  },
  {
    icon: <Printer size={32} />,
    title: "Rapid Prototyping & 3D Printing",
    description: "In-house SLA and FDM fabrication for fast iteration. Same-day feedback loops for your hardware validation."
  },
  {
    icon: <Activity size={32} />,
    title: "Workshop & CNC",
    description: "In-house precision machining, laser cutting, welding, and milling. From conceptual prototypes to functional assemblies."
  },
  {
    icon: <Factory size={32} />,
    title: "Manufacturing Partnership & DFM",
    description: "We don't hand off to unknown factories. Trusted ISO9001 partners in Australia, China, and Taiwan. Full supply chain visibility from DFM through to warehouse."
  },
  {
    icon: <Smartphone size={32} />,
    title: "App Development",
    description: "Native and cross-platform mobile apps for iOS and Android to control and monitor your hardware."
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
