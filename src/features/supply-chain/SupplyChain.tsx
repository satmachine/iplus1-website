import React from 'react';
import { Globe, CheckCircle, Zap } from 'lucide-react';
import './SupplyChain.css';

const SupplyChain = () => {
  const regions = [
    {
      region: "Australia",
      factories: "PCB Manufacturing, Injection Molding, ISO9001 Certified"
    },
    {
      region: "China",
      factories: "High-volume PCB, Assembly, Electronics Manufacturing"
    },
    {
      region: "Taiwan",
      factories: "Specialized Components, Precision Machining"
    }
  ];

  return (
    <section className="supply-chain-section" id="supply-chain">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Your Supply Chain, Connected</span>
          <h2>Manufacturing <span className="text-highlight">You Know.</span></h2>
        </div>
        
        <div className="chain-content">
          <div className="chain-description">
            <p>
              We don't hand off to factories you don't know. We've built long-term relationships with trusted manufacturing partners across Australia, China, and Taiwan. ISO9001 certified, vetted, and proven.
            </p>
            <p>
              Your project gets the same oversight from prototype through production. One team. Full visibility. No surprises.
            </p>
            
            <div className="chain-benefits">
              <div className="benefit-item">
                <CheckCircle size={20} className="text-highlight" />
                <span>Supply chain continuity from prototype to warehouse</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={20} className="text-highlight" />
                <span>DFM expertise embedded in design phase</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={20} className="text-highlight" />
                <span>Packaging and logistics handled end-to-end</span>
              </div>
            </div>
          </div>

          <div className="regions-grid">
            {regions.map((item, index) => (
              <div key={index} className="region-card">
                <Globe size={24} className="text-highlight" />
                <h3>{item.region}</h3>
                <p>{item.factories}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyChain;
