import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ImpactStats from './components/ImpactStats';
import Portfolio from './components/Portfolio';
import WhySnacc from './components/WhySnacc';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenContact = () => setContactModalOpen(true);
  const handleCloseContact = () => setContactModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0A090F] text-zinc-100 font-sans selection:bg-[#FF5C00] selection:text-white">
      {/* Sticky Glass Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenContact={handleOpenContact} />
        <Services />
        <ImpactStats />
        <Portfolio onOpenContact={handleOpenContact} />
        <WhySnacc />
        <Process />
        <Testimonials />
        <FAQ />
        <ContactCTA onOpenContact={handleOpenContact} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Global Project Contact Modal */}
      <ContactModal isOpen={contactModalOpen} onClose={handleCloseContact} />
    </div>
  );
}
