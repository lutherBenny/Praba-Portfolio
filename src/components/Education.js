import React, { useEffect } from 'react';
import { AcademicCapIcon, BuildingLibraryIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import backgroundImage from '../images/background-image1.jpg'; // Background image
import profileImage from '../images/profile-image1.jpg'; // Your right-side image

const Education = () => {
  useEffect(() => {
    // Log body clicks to check if clicks are registered
    const handleBodyClick = () => console.log('Body clicked!');
    document.body.addEventListener('click', handleBodyClick);

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);

  return (
    <section id="education" className="min-h-screen bg-bgGray py-20 px-10 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
          zIndex: 0,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-1 my-2 ">
        {/* Left Side - Education Text */}
        <div className="text-lg text-textGray max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-medicalBlue text-center mb-8 ">Education</h2>

          {/* B.Sc. Dialysis Technology */}
          <div className="mb-6 text-center">
            <div className="flex justify-center items-center">
              <AcademicCapIcon className="h-6 w-6 text-medicalBlue mr-2" />
              <h3 className="text-2xl font-semibold text-medicalBlue">B.Sc. Dialysis Technology</h3>
            </div>
            <p className="italic">2016</p>
            <p>Miot International Academy of Allied Health Science (A Unit of Miot Hospital, Chennai)</p>
          </div>

          {/* Higher Secondary School */}
          <div className="mb-6 text-center">
            <div className="flex justify-center items-center">
              <BuildingLibraryIcon className="h-6 w-6 text-medicalBlue mr-2" />
              <h3 className="text-2xl font-semibold text-medicalBlue">Higher Secondary (HSC)</h3>
            </div>
            <p className="italic">2012</p>
            <p>Concordia Higher Secondary School, Ambur</p>
          </div>

          {/* Additional Qualification */}
          <div className="mb-6 text-center">
            <div className="flex justify-center items-center">
              <CheckCircleIcon className="h-6 w-6 text-medicalBlue mr-2" />
              <h3 className="text-2xl font-semibold text-medicalBlue">Additional Qualification</h3>
            </div>
            <p className="italic">BONENT Exam Passed</p>
            <p className="text-textGray">Board of Nephrology Exam Technologist, US</p>
          </div>

          {/* Button to View Degree Certificate */}
          <div className="flex justify-center mt-8">
            <button 
              className="bg-medicalBlue hover:bg-accentGreen text-white font-bold py-2 px-4 rounded cursor-pointer" 
              onClick={() => window.open('/degree-certificate.pdf', '_blank')}
            >
              View Degree Certificate
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center lg:justify-end mx-10">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full max-w-sm lg:max rounded-lg shadow-lg object-cover lg:w-auto my-10 " 
           
         
         />
        </div>
      </div>
    </section>
  );
};

export default Education;
