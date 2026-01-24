
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './features/navigation/Navbar';
import Hero from './features/hero/Hero';
import TrustedBy from './features/trust/TrustedClients';
import './App.css';

const Services = lazy(() => import('./features/services/Services'));
const Process = lazy(() => import('./features/process/Process'));
const SupplyChain = lazy(() => import('./features/supply-chain/SupplyChain'));
const Booking = lazy(() => import('./features/booking/Booking'));
const Footer = lazy(() => import('./features/footer/Footer'));

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
      <a href="#main" className="skip-link">Skip to main content</a>
      <Navbar scrolled={scrolled} />
      <main id="main">
        <section id="home">
          <Hero />
        </section>
        <TrustedBy />
        <Suspense fallback={<div style={{ minHeight: 80 }} aria-hidden="true" />}>
          <Services />
          <Process />
          <SupplyChain />
          <Booking />
        </Suspense>
      </main>
      <Suspense fallback={<div style={{ minHeight: 60 }} aria-hidden="true" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
