import React from 'react';
import { HeroV4 } from '../components/home/HeroV4';
import { TrustStrip } from '../components/home/Hero';
import { HowItWorks } from '../components/home/HowItWorks';
import { FeaturedCars } from '../components/home/FeaturedCars';
import { AudienceShowcase } from '../components/home/AudienceShowcase';
import { Testimonials, FinalCTA } from '../components/home/Testimonials';

const HomeV4 = () => {
  return (
    <div className="bg-white">
      <HeroV4 />
      <div className="bg-neutral-50 border-y border-black/5">
        <TrustStrip />
      </div>
      <div className="[&_*]:!text-black [&_.bg-black]:!bg-white [&_.bg-neutral-950]:!bg-neutral-50 [&_.border-white\/5]:border-black/10 [&_.text-white\/30]:text-black/30 [&_.text-white\/50]:text-black/50 [&_.text-white\/10]:text-black/10">
        <HowItWorks />
        <AudienceShowcase />
        <FeaturedCars />
        <Testimonials />
        <FinalCTA />
      </div>
    </div>
  );
};

export default HomeV4;
