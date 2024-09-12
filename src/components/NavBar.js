import React, { useState } from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-medicalBlue shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-white">Welcome To My Portfolio</h1>

        {/* Button to toggle mobile menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        
        {/* Navbar items for desktop */}
        <ul className="hidden md:flex md:space-x-6">
          <li>
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer text-white hover:text-accentGreen">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer text-white hover:text-accentGreen">
              About
            </Link>
          </li>
    

          <li>
  <Link to="education" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer text-white hover:text-accentGreen">
    Education
  </Link>
</li>
<li>
  <Link to="experience" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer text-white hover:text-accentGreen">
    Experience
  </Link>
</li>

          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer text-white hover:text-accentGreen">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-medicalBlue z-40">
          <div className="flex flex-col items-end p-4">
            <button onClick={toggleMenu} className="text-white mb-4">
              Close
            </button>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link to="hero" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer text-white hover:text-accentGreen">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer text-white hover:text-accentGreen">
                  About
                </Link>
              </li>
              <li>
                <Link to="education" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer text-white hover:text-accentGreen">
                Education
                </Link>
              </li>
              <li>
                <Link to="experience" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer text-white hover:text-accentGreen">
                Experience
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} onClick={toggleMenu} className="cursor-pointer text-white hover:text-accentGreen">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
