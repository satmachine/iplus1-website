
import React from 'react';
import './TrustedBy.css';

const clients = [
  { initials: "GF", name: "GoFar" },
  { initials: "OC", name: "Onyx Connect" },
  { initials: "CB", name: "Code Bullet" },
  { initials: "UA", name: "Up and Atom" },
  { initials: "VL", name: "Vloggi" },
  { initials: "JD", name: "Project JDM" }
];

const TrustedBy = () => {
  return (
    <section className="trusted-section">
      <div className="container">
        <p className="trusted-label">Trusted by industry leaders and visionaries</p>
        <div className="trusted-grid">
          {clients.map((client) => (
            <div key={client.name} className="client-card">
              <div className="client-initials">{client.initials}</div>
              <span className="client-name">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
