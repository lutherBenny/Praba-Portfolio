import React from 'react';
import myPhoto from '../images/my-photo.jpg'; // Update this path as needed
import backgroundImage from '../images/background-image1.jpg'; // Update this path as needed

const Hero = () => {
  return (

    <section
    id="hero"
    className="h-screen relative flex flex-col md:flex-row items-center justify-center bg-cover bg-center bg-bgGray p-4"
  >
    {/* Background image that covers the entire section */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        opacity: 0.2, // Adjust opacity here
        zIndex: 0,    // Ensure the image stays behind the text
      }}
    ></div>
  
    {/* Text section */}
    <div className="flex flex-col items-center text-center md:text-left md:mr-8 mb-4 z-10 mt-10">
      <h4 className="text-2xl font-semibold text-medicalBlue" style={{ fontFamily: 'Cursive, sans-serif' }}>
        Hi, I'm
      </h4>
      <h1 className="text-3xl md:text-5xl font-bold text-medicalBlue">Prabagaran B</h1>
      <p className="text-xl md:text-3xl font-semibold text-medicalBlue mt-2">
        Dialysis Technician
      </p>
      <p className="text-base md:text-lg text-textGray mt-4 max-w-md">
        A dialysis technician focused on delivering life-saving treatments with precision. I believe that empathy is just as important as expertise in providing the best care for my patients. 10 years of experience.
      </p>
      <a href="/cv.pdf" download>
        <button className="bg-medicalBlue hover:bg-accentGreen text-white font-bold py-2 px-4 rounded mt-6 cursor-pointer">
          Download CV
        </button>
      </a>
    </div>
  
    {/* Photo section */}
    <div className="flex-none mt-4 md:mt-0 md:ml-8">
      <img
        src={myPhoto}
        alt="Prabagaran"
        className="w-40 h-46 md:w-64 md:h-66 rounded-full object-cover "
       
      />
    </div>
  </section>
  
    
   
  );
};

export default Hero;
