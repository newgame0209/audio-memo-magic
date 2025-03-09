
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import DemoVideos from '@/components/DemoVideos';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "しゃべるノート - 書いて覚える。聞いて定着する。";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <DemoVideos />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
