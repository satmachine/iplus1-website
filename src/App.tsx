
import React, { useState, useEffect } from 'react';
import Navbar from './features/navigation/Navbar';
import Hero from './features/hero/Hero';
import TrustedBy from './features/trust/TrustedClients';
import Services from './features/services/Services';
import Booking from './features/booking/Booking';
import Footer from './features/footer/Footer';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Navbar scrolled={scrolled} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <TrustedBy />
        <section id="services">
          <Services />
        </section>
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
