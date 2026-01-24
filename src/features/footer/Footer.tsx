
import React from 'react';
import Logo from '../../components/Logo';
import { scrollToId } from '../../utils/scroll';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <a href="#home" className="footer-brand" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
            <Logo size={40} />
            <h2>i plus 1</h2>
          </a>
          <p className="footer-philosophy">
            Based in Sydney, we help businesses scale through robust engineering, precision prototyping, and a commitment to excellence.
          </p>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="mailto:hello@iplus1.com.au" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-column">
            <h4>Services</h4>
            <a href="#services" onClick={(e) => handleSectionClick(e, 'services')}>PCB Design</a>
            <a href="#services" onClick={(e) => handleSectionClick(e, 'services')}>Firmware</a>
            <a href="#services" onClick={(e) => handleSectionClick(e, 'services')}>3D Printing</a>
            <a href="#services" onClick={(e) => handleSectionClick(e, 'services')}>Manufacturing</a>
          </div>
          <div className="footer-column">
            <h4>Inquiry</h4>
            <a href="mailto:hello@iplus1.com.au">hello@iplus1.com.au</a>
            <a href="#contact" className="footer-link" onClick={(e) => handleSectionClick(e, 'contact')}>Book a Session</a>
          </div>
          <div className="footer-column">
            <h4>Locations</h4>
            <div className="footer-address-group">
              <p><strong>HQ:</strong> Floor 13 / 477 Pitt Street<br/>Sydney 2000</p>
              <p><strong>Workshop:</strong> L1 / 52 Whiting Street<br/>Artarmon 2064</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <div className="footer-bottom-flex">
          <p>&copy; {new Date().getFullYear()} i plus 1. Sydney, Australia.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className="footer-tagline">Iterate. Improve. Deliver.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
