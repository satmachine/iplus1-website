
import React from 'react';
import Logo from '../../components/Logo';
import './Navbar.css';

const Navbar = ({ scrolled }: { scrolled: boolean }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
          <Logo size={32} />
          <span className="brand-text">i plus 1</span>
        </div>
        <div className="nav-links">
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
          <a href="#booking" className="nav-cta" onClick={(e) => scrollToSection(e, 'booking')}>Free Session</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
