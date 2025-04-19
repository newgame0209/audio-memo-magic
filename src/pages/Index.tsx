
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import DemoVideos from '@/components/DemoVideos';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import FeedbackForm from '@/components/FeedbackForm';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "しゃべるノート - 文字の壁を超えて、学ぶ喜びを。";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <DemoVideos />
        <Pricing />
        <CTA />
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
