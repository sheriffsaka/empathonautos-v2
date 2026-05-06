import React from 'react';
import { Hero, TrustStrip } from '../components/home/Hero';
import { HowItWorks } from '../components/home/HowItWorks';
import { FeaturedCars } from '../components/home/FeaturedCars';
import { AudienceShowcase } from '../components/home/AudienceShowcase';
import { Testimonials, FinalCTA } from '../components/home/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <AudienceShowcase />
      <FeaturedCars />
      <Testimonials />
      <FinalCTA />
    </>
  );
};

export default Home;
