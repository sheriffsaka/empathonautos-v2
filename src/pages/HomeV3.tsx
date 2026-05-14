import React from 'react';
import { HeroV3 } from '../components/home/HeroV3';
import { TrustStrip } from '../components/home/Hero';
import { HowItWorks } from '../components/home/HowItWorks';
import { FeaturedCars } from '../components/home/FeaturedCars';
import { AudienceShowcase } from '../components/home/AudienceShowcase';
import { Testimonials, FinalCTA } from '../components/home/Testimonials';

const HomeV3 = () => {
  return (
    <div className="bg-[#001440]">
      <HeroV3 />
      <div className="bg-white/5">
        <TrustStrip />
      </div>
      <div className="[&_*]:text-white [&_.bg-white]:bg-white/10 [&_.bg-black]:bg-transparent">
        <HowItWorks />
        <AudienceShowcase />
        <FeaturedCars />
      </div>
      <Testimonials />
      <FinalCTA />
    </div>
  );
};

export default HomeV3;
