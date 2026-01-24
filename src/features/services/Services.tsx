
import React from 'react';
import { Layers, Printer, Activity, Zap, Smartphone, Factory, ArrowRight } from 'lucide-react';
import { scrollToId } from '../../utils/scroll';
import './Services.css';

const services = [
  {
    icon: <Layers size={28} />,
    title: "PCB Design & Development",
    description: "Multi-layer schematic design, layout optimization, and prototyping for robust embedded systems.",
    tags: ["Schematic Capture", "Multi-layer Layout", "Signal Integrity", "Thermal Management"],
    color: "yellow"
  },
  {
    icon: <Zap size={28} />,
    title: "Firmware Development",
    description: "Low-level C/C++ development for microcontrollers ensuring stability and energy efficiency.",
    tags: ["RTOS Integration", "BLE/WiFi Stacks", "OTA Updates", "Power Optimization"],
    color: "cyan"
  },
  {
    icon: <Printer size={28} />,
    title: "3D Printing & Rapid Prototyping",
    description: "In-house SLA and FDM fabrication for fast iteration. Same-day feedback loops.",
    tags: ["SLA Printing", "FDM Printing", "Material Selection", "Design for Print"],
    color: "pink"
  },
  {
    icon: <Activity size={28} />,
    title: "Workshop & CNC",
    description: "In-house precision machining, laser cutting, welding, and milling for functional assemblies.",
    tags: ["CNC Machining", "Laser Cutting", "Sheet Metal", "Assembly"],
    color: "green"
  },
  {
    icon: <Factory size={28} />,
    title: "Manufacturing Partnership",
    description: "Trusted ISO9001 partners in Australia, China, and Taiwan. Full supply chain visibility.",
    tags: ["DFM Analysis", "Partner Network", "Quality Control", "Logistics"],
    color: "orange"
  },
  {
    icon: <Smartphone size={28} />,
    title: "App Development",
    description: "Native and cross-platform mobile apps for iOS and Android to control your hardware.",
    tags: ["iOS & Android", "BLE Integration", "Cloud Backend", "UI/UX Design"],
    color: "purple"
  }
];

const Services = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToId('contact');
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">End-to-End Capabilities</span>
          <h2>Comprehensive Hardware <span className="text-highlight">Solutions.</span></h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div className={`service-card service-card--${service.color}`} key={service.title}>
              <div className={`service-icon service-icon--${service.color}`}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="services-cta">
          <a href="#contact" className="services-link" onClick={handleClick}>
            Discuss your project requirements
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
