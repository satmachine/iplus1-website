
import React from 'react';
import { Mail, MapPin, Calendar, ExternalLink, Hammer, Shield, Clock } from 'lucide-react';
import './Booking.css';

const Booking = () => {
  return (
    <section className="booking-section" id="contact">
      <div className="container booking-container">
        <div className="booking-info">
          <span className="section-tag">Start the sequence</span>
          <h2>The First <span className="text-highlight">Iteration.</span></h2>
          <p>
            Your journey from zero to production starts with a single step.
            Book a session to discuss your hardware strategy, engineering hurdles, or manufacturing roadmap.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-card-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-card-content">
                <strong>Sydney HQ</strong>
                <p>Floor 13 / 477 Pitt Street<br/>Sydney 2000, NSW</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">
                <Hammer size={24} />
              </div>
              <div className="contact-card-content">
                <strong>Workshop</strong>
                <p>L1 / 52 Whiting Street<br/>Artarmon 2064, NSW</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">
                <Mail size={24} />
              </div>
              <div className="contact-card-content">
                <strong>Email Us</strong>
                <p>hello@iplus1.com.au</p>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-action-card">
          <div className="calendly-card">
            <div className="calendar-icon-wrapper">
              <Calendar size={32} />
            </div>
            <h3>Ready to scale?</h3>
            <p>Select a time that works for you to chat with our lead design engineer.</p>

            <div className="booking-badges">
              <span className="booking-badge">
                <Shield size={14} />
                NDA Available
              </span>
              <span className="booking-badge">
                <Clock size={14} />
                Response within 24h
              </span>
            </div>

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
