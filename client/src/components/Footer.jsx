import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">JPTEKS</h2>
          <p className="mb-4">IMPACT - INNOVATE - GROW</p>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="path-to-linkedin-icon" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="path-to-facebook-icon" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="path-to-instagram-icon" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <img src="path-to-whatsapp-icon" alt="WhatsApp" className="w-6 h-6 mr-2" />
              <span>+237 651118070</span>
            </div>
            <div className="flex items-center">
              <img src="path-to-email-icon" alt="Email" className="w-6 h-6 mr-2" />
              <span>contact@jpteks.cm</span>
            </div>
            <div className="flex items-center">
              <img src="path-to-location-icon" alt="Location" className="w-6 h-6 mr-2" />
              <span>Logbessou, Douala</span>
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">QUICK LINKS</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Services</a></li>
            <li><a href="#" className="hover:underline">Achievements</a></li>
            <li><a href="#" className="hover:underline">Testimonies</a></li>
            <li><a href="#" className="hover:underline">Our Team</a></li>
            <li><a href="#" className="hover:underline">Gallery</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Please Subscribe</h2>
          <p className="mb-4">Join our newsletter to stay updated on new features and releases.</p>
          <form className="flex items-center mb-4">
            <input
              type="email"
              placeholder="your email"
              className="p-2 w-full rounded-l-md border-none focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-600 text-white px-4 py-2 rounded-r-md hover:bg-yellow-700"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs">
            By subscribing, you are acknowledging your agreement to our Privacy Policy and providing consent to receive updates from our company.
          </p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        <p>© 2024 JPTEKS. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
