// src/pages/HomePage.js
import React from 'react';
import About from '../components/About';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <div>
      <About />
      <Experience />
      <Certificates />
      <Contact />
      <Hero />
    </div>
  );
};

export default HomePage;
