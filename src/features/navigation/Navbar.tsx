
import React, { useState } from 'react';
import Logo from '../../components/Logo';
import { scrollToId } from '../../utils/scroll';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ scrolled }: { scrolled: boolean }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToId(id);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#home" className="nav-brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <Logo size={32} />
          <span className="brand-text">i plus 1</span>
        </a>

        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-links ${mobileMenuOpen ? 'nav-links-open' : ''}`}>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
          <a href="#process" onClick={(e) => handleNavClick(e, 'process')}>Process</a>
          <a href="#network" onClick={(e) => handleNavClick(e, 'network')}>Network</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          <a href="#contact" className="nav-cta" onClick={(e) => handleNavClick(e, 'contact')}>Start Your Project</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
