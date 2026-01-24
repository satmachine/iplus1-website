
import React from 'react';
import { MessageCircle, Pencil, Box, Layers, Rocket } from 'lucide-react';
import './Process.css';

const steps = [
  {
    number: "01",
    title: "Discovery",
    duration: "1-2 days",
    description: "We dive deep into your project requirements, technical constraints, and business goals to establish a clear roadmap.",
    icon: <MessageCircle size={24} />
  },
  {
    number: "02",
    title: "Design",
    duration: "2-4 weeks",
    description: "Our engineering team creates detailed schematics, PCB layouts, and 3D models with manufacturing in mind from day one.",
    icon: <Pencil size={24} />
  },
  {
    number: "03",
    title: "Prototype",
    duration: "1-2 weeks",
    description: "Rapid in-house prototyping with SLA/FDM printing and quick-turn PCB assembly for fast validation cycles.",
    icon: <Box size={24} />
  },
  {
    number: "04",
    title: "Manufacture",
    duration: "4-8 weeks",
    description: "Seamless transition to production with our trusted ISO9001 partners. Full supply chain visibility and quality control.",
    icon: <Layers size={24} />
  },
  {
    number: "05",
    title: "Launch",
    duration: "Ongoing",
    description: "Post-launch support including firmware updates, design iterations, and scaling assistance as your product grows.",
    icon: <Rocket size={24} />
  }
];

const Process = () => {
  return (
    <section className="process-section" id="process">
      <div className="container">
        <div className="section-header process-header">
          <span className="section-tag">Our Process</span>
          <h2>From Idea to <span className="text-highlight">Industry.</span></h2>
          <p className="process-subtitle">
            A battle-tested methodology refined over hundreds of successful hardware products.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`process-step ${index % 2 === 0 ? 'step-left' : 'step-right'}`}
            >
              <div className="step-content">
                <div className="step-number">{step.number}</div>
                <div className="step-details">
                  <div className="step-header">
                    <h3>{step.title}</h3>
                    <span className="step-duration">{step.duration}</span>
                  </div>
                  <p>{step.description}</p>
                </div>
                <div className="step-icon">
                  {step.icon}
                </div>
              </div>
              <div className="step-connector"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
