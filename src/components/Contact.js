import React from 'react';
import { PhoneIcon, MapPinIcon, IdentificationIcon, LinkIcon, VideoCameraIcon,EnvelopeIcon } from '@heroicons/react/24/outline';
import backgroundImage from '../images/background-image1.jpg'; // Update this path as needed

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-bgGray py-20 px-10 relative">
      
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

      {/* Main Title Centered */}
      <div className="relative z-10 text-center mb-8 ">
        <h2 className="text-4xl font-bold text-medicalBlue">Contact Me</h2>
      </div>

         {/* Message Prompt */}
         <div className="relative z-10 text-center mb-4 text-lg text-textGray">
        If you have any questions or would like to reach out, feel free to contact me at:
      </div>


      {/* Grid Layout for Form and Contact Information */}
      <div className="relative z-10 max-w-7xl mx-4 grid grid-cols-1 md:grid-cols-2 gap-10 ">
        
        {/* Left Side - Contact Form */}
        <div className="space-y-6">
          <form className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-textGray mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-medicalBlue"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-textGray mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-medicalBlue"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-textGray mb-2">Your Message</label>
              <textarea
                id="message"
                rows="5"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-medicalBlue"
                placeholder="Enter your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-medicalBlue text-white font-bold rounded-md hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Contact Information */}
        <div className="text-right mt-11">
          <div className="text-lg text-textGray space-y-4 mb-10">
          <div className="flex justify-end items-center">
              <EnvelopeIcon className="h-6 w-6 text-medicalBlue mr-2" />
              <span> prabagaran.b9@gmail.com</span> {/* Added Email */}
            </div>
          
            <div className="flex justify-end items-center">
              <PhoneIcon className="h-6 w-6 text-medicalBlue mr-2" />
              <span>+91-99447 92919</span>
            </div>
            <div className="flex justify-end items-center">
              <MapPinIcon className="h-6 w-6 text-medicalBlue mr-2" />
              <span>Tamil Nadu, India</span>
            </div>
            <div className="flex justify-end items-center">
              <IdentificationIcon className="h-6 w-6 text-medicalBlue mr-2" />
              <span>Aadhaar Number: 4145 8257 7912</span>
            </div>
            <div className="flex justify-end items-center">
              <VideoCameraIcon className="h-6 w-6 text-medicalBlue mr-2" />
              <span>Zoom ID: YourZoomIDHere</span>
            </div>
          </div>

          {/* Aadhaar Download Button */}
          <div className="text-right mb-10">
            <a
              href="/aadhaar.pdf" // Correct path for public folder
              download
              className="inline-flex items-center px-5 py-3 bg-medicalBlue text-white font-bold rounded-md hover:bg-blue-700 transition-all"
            >
              <LinkIcon className="h-6 w-6 text-white mr-2" />
              Download Aadhaar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
