
import React from 'react';
import { Mail, MapPin, CheckCircle, ExternalLink, Hammer } from 'lucide-react';
import './Booking.css';

const Booking = () => {
  return (
    <section className="booking-section" id="booking">
      <div className="container booking-container">
        <div className="booking-info">
          <span className="section-tag">Start the sequence</span>
          <h2>The First <span className="text-highlight">Iteration.</span></h2>
          <p>
            Your journey from zero to production starts with a single step. 
            Book a session to discuss your hardware strategy, engineering hurdles, or manufacturing roadmap.
          </p>
          
          <ul className="booking-points">
            <li><CheckCircle size={18} /> Deep-dive into technical feasibility</li>
            <li><CheckCircle size={18} /> Sydney-based engineering excellence</li>
            <li><CheckCircle size={18} /> IP Protection (NDA available prior to call)</li>
          </ul>

          <div className="contact-details">
            <div className="contact-item">
              <MapPin size={20} className="text-highlight" />
              <div>
                <strong>Sydney HQ</strong>
                <p>Floor 13 / 477 Pitt Street<br/>Sydney 2000, NSW</p>
              </div>
            </div>
            <div className="contact-item">
              <Hammer size={20} className="text-highlight" />
              <div>
                <strong>Workshop</strong>
                <p>L1 / 52 Whiting Street<br/>Artarmon 2064, NSW</p>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={20} className="text-highlight" />
              <div>
                <strong>Email Us</strong>
                <p>hello@iplus1.com.au</p>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-action-card">
          <div className="calendly-card">
            <h3>Ready to scale?</h3>
            <p>Select a time that works for you to chat with our lead design engineer.</p>
            <a 
              href="https://calendly.com/stan-lee89" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary full-width-btn"
            >
              Book via Calendly <ExternalLink size={18} style={{marginLeft: '8px'}} />
            </a>
            <span className="booking-hint">Session handled via Calendly.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
