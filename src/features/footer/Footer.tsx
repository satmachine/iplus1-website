
import React from 'react';
import Logo from '../../components/Logo';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <div className="footer-brand" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
            <Logo size={40} />
            <h2>i plus 1</h2>
          </div>
          <p className="footer-philosophy">
            Based in Sydney, we help businesses scale through robust engineering, precision prototyping, and a commitment to excellence.
          </p>
        </div>
        
        <div className="footer-right">
          <div className="footer-column">
            <h4>Inquiry</h4>
            <a href="mailto:hello@iplus1.com.au">hello@iplus1.com.au</a>
            <a href="#booking" className="footer-link" onClick={(e) => scrollToSection(e, 'booking')}>Book a Session</a>
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
          <div className="footer-tagline">Iterate. Improve. Deliver.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
