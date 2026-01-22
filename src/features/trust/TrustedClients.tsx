
import React from 'react';
import './TrustedBy.css';

const clients = [
  "GoFar", "Onyx Connect", "Code Bullet", 
  "Up and Atom", "Vloggi", "Aus Home", "Project JDM"
];

const TrustedBy = () => {
  return (
    <section className="trusted-section">
      <div className="container">
        <p className="trusted-label">Trusted by industry leaders and visionaries</p>
        <div className="trusted-grid">
          {clients.map((client) => (
            <div key={client} className="client-logo-placeholder">
              <span className="client-name">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
