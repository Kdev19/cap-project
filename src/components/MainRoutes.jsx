import React from 'react';
import Herosection from './Herosection';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import BookingForm from './BookingForm';

const MainRoutes = ({ availableTimes }) => {
  const formData = {}; // Initialize formData as needed
  const handleChange = () => {}; // Define handleChange as needed

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
      <section id="booking">
        <BookingForm availableTimes={availableTimes} formData={formData} handleChange={handleChange} />
      </section>
    </>
  );
};

export default MainRoutes;