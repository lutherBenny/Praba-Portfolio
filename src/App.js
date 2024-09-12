import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';

import Education from './components/Education';

import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';


function App() {
  return (
    <div className='bg-mintGreen'>
      <NavBar />
      <Hero />
      <About />
      <Education/>
      <Experience/> 
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
