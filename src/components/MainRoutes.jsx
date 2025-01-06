import React from 'react';
import Herosection from './Herosection';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';

const MainRoutes = () => {
  return (
    <>
      <section id="home">
        <Herosection />
      </section>
      <section id="highlights">
        <Highlights />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="about">
        <About />
      </section>
    </>
  );
};

export default MainRoutes;