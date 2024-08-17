import React from 'react';

const Navbar = () => {
  return (
    <nav className=' flex items-center justify-center'>
      {/* Logo Section */}
      <div >
        <img
          src="/path-to-your-logo.png" // Replace with the correct logo path
          alt="JPTEKS Logo"
          className="h-10"
        />
      </div>

      {/* Navigation Links */}
      <div className=' '>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <button className="bg-yellow-500">
            More <span className="ml-1">▼</span>
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2">
            <a href="#">
              Submenu 1
            </a>
            <a href="#">
              Submenu 2
            </a>
          </div>
          </div>

      {/* Call to Action and Language Button */}
      <div className="">
        <button className="">
          Contact us for a project
        </button>
        <button className="">
          EN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

