import React from 'react';
import backgroundImage from '../images/background-image.jpg'; // Update this path as needed
import profileImage from '../images/profile-image.jpg'; // Add your profile image path

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen relative bg-bgGray py-20 px-10"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2, // Adjust opacity here
          zIndex: 0, // Ensure the image stays behind the text
        }}
      ></div>

      {/* Content Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto mt-10">
        
        {/* Profile Image - Full screen left, mobile below text */}
        <div className="flex justify-center items-center order-2 lg:order-1">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-full max-w-sm rounded-lg shadow-lg mt-10 lg:w-auto " 
            style={{ filter: 'brightness(1.2)',height: '400px' }} // Adjust brightness level here
          />
        </div>

    

     

        {/* About Me Text - Full screen right, mobile above image */}
        <div className="flex flex-col justify-center order-1 lg:order-2">
          <h2 className="text-4xl font-bold text-medicalBlue text-center lg:text-left mb-8 mt-6">
            About Me
          </h2>
          <p className="text-lg text-textGray text-center lg:text-left">
            I studied B.Sc. in Dialysis Technology at MIOT International Academy of Allied Health Science. Since 2016, I have been deeply interested in dialysis technology and dedicated to serving people in the medical field. My commitment to this profession was further demonstrated when I worked in hospitals during the COVID-19 pandemic, providing essential care to patients. With 10 years of experience in dialysis technology, I continue to strive for excellence in my field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
