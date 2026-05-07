import React from 'react';
import { HeroV2 } from '../components/home/HeroV2';
import { TrustStrip } from '../components/home/Hero';
import { HowItWorks } from '../components/home/HowItWorks';
import { FeaturedCars } from '../components/home/FeaturedCars';
import { AudienceShowcase } from '../components/home/AudienceShowcase';
import { Testimonials, FinalCTA } from '../components/home/Testimonials';

const HomeV2 = () => {
  return (
    <>
      <HeroV2 />
      <TrustStrip />
      <HowItWorks />
      <AudienceShowcase />
      <FeaturedCars />
      <Testimonials />
      <FinalCTA />
    </>
  );
};

export default HomeV2;
