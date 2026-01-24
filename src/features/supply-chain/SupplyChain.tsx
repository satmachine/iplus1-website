
import React from 'react';
import { CheckCircle } from 'lucide-react';
import './SupplyChain.css';

const regions = [
  {
    region: "Australia",
    flag: "🇦🇺",
    status: "ISO9001 Certified",
    capabilities: ["PCB Manufacturing", "Injection Molding", "Local Assembly"]
  },
  {
    region: "China",
    flag: "🇨🇳",
    status: "Mass Production",
    capabilities: ["High-volume PCB", "Electronics Assembly", "Cost-effective Scaling"]
  },
  {
    region: "Taiwan",
    flag: "🇹🇼",
    status: "Premium Quality",
    capabilities: ["Specialized Components", "Precision Machining", "Advanced Materials"]
  }
];

const SupplyChain = () => {
  return (
    <section className="supply-chain-section" id="network">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Global Manufacturing Network</span>
          <h2>Manufacturing You Can <span className="text-highlight-cyan">Trust.</span></h2>
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
                <CheckCircle size={20} className="text-highlight-cyan" />
                <span>Supply chain continuity from prototype to warehouse</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={20} className="text-highlight-cyan" />
                <span>DFM expertise embedded in design phase</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={20} className="text-highlight-cyan" />
                <span>Packaging and logistics handled end-to-end</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={20} className="text-highlight-cyan" />
                <span>Full transparency and quality control</span>
              </div>
            </div>
          </div>

          <div className="regions-grid">
            {regions.map((item) => (
              <div key={item.region} className="region-card">
                <div className="region-header">
                  <span className="region-flag">{item.flag}</span>
                  <span className="region-status">{item.status}</span>
                </div>
                <h3>{item.region}</h3>
                <div className="region-capabilities">
                  {item.capabilities.map((cap) => (
                    <span key={cap} className="capability-tag">{cap}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="chain-footer">
          All partners ISO9001 certified - Full supply chain transparency
        </div>
      </div>
    </section>
  );
};

export default SupplyChain;
