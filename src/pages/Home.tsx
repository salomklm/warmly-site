import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <main className="pt-[72px]">
      <Hero />
      <HowItWorks />
      <Testimonials />
    </main>
  );
};

export default Home;