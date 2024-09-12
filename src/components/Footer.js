import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-bgGray py-4 fixed bottom-0 left-0 w-full text-center text-textGray z-50">
      <div className="max-w-6xl mx-auto">
        <p className="mb-0">&copy; {new Date().getFullYear()} Prabagaran. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
