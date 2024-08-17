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
      <ul className="hidden md:flex space-x-6">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <button className="flex items-center">
            More <span className="ml-1">▼</span>
          </button>
          <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Submenu 1
            </a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
              Submenu 2
            </a>
          </div>
      </ul>

      {/* Call to Action and Language Button */}
      <div className="flex space-x-8">
        <button className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
          Contact us for a project
        </button>
        <button className="px-4 py-2 bg-blue-900 text-white rounded-md">
          EN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

