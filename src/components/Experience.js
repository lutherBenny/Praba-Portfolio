import React, { useEffect } from 'react';
import backgroundImage from '../images/background-image.jpg'; // Update this path as needed
import profileImage from '../images/profile-image3.jpg'; // Add your profile image path

const Experience = () => {
  useEffect(() => {
    console.log('Experience component mounted');
  }, []);

  const handleDownload = (fileName) => {
    const url = `/${encodeURIComponent(fileName)}`;
    console.log(`Attempting to download: ${url}`); // Log the URL being accessed
    // Open the file in a new tab
    window.open(url, '_blank');
  };

  return (
    <section id="experience" className="min-h-screen bg-bgGray py-20 px-10 relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Make sure this path is correct
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
          zIndex: 0,
        }}
      ></div>

      <h2 className="text-4xl font-bold text-medicalBlue text-center mb-8 mt-6">Experience</h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-lg text-textGray mb-8">
        
        {/* Profile Image */}
        <div className="flex justify-center order-1">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full max-w-sm rounded-lg shadow-lg"
            style={{ height: '400px', filter: 'brightness(1.2)' }} // Set custom height
          />
        </div>

        {/* Experience Text */}
        <div className="order-2 text-center lg:text-left">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-medicalBlue">Sri Narayani Hospital Research Center</h3>
            <p className="italic">Vellore, 632055</p>
            <p>(2018 - 2023) - Worked as a Technologist</p>
            <p>Tamil Nadu, India</p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-medicalBlue">Kauvery Hospital Bangalore</h3>
            <p className="italic">Marathahalli, 560037</p>
            <p>(2023 - Present) - Working as a Senior Technician</p>
            <p>Bengaluru, India</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 z-10">
        <button
          onClick={() => handleDownload('current-certificates.pdf')}
          className="bg-medicalBlue hover:bg-accentGreen text-white font-bold py-2 px-4 rounded mx-2 cursor-pointer z-20"
        >
          View Current Working Certificates
        </button>
        <button
          onClick={() => handleDownload('old-certificates.pdf')}
          className="bg-medicalBlue hover:bg-accentGreen text-white font-bold py-2 px-4 rounded mx-2 cursor-pointer z-20"
        >
          View Old Working Certificates
        </button>
      </div>
    </section>
  );
};

export default Experience;
