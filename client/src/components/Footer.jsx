import React from 'react';
import linkedin from '../assets/linkedin.png';
import face from '../assets/face.png'; 
import insta from '../assets/insta.png'; 
import whatsapp from '../assets/whatsapp.png'; 
import download from '../assets/download.png'; 
import location from '../assets/location.png'; 

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">JPTEKS</h2>
          <p className="mb-4">IMPACT - INNOVATE - GROW</p>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={face} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/jpteks_2023?igsh=MThvZzQwbmNubXQ2aA==" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <img src={whatsapp} alt="WhatsApp" className="w-6 h-6 mr-2" />
              <span>
              + (237) 651 118 070 <br />
              + (237) 679 845 608 <br />
              + (237) 698 111 891 <br />
              + (237) 698 091 792
              </span>
            </div>
            <div className="flex items-center">
              <img src={download} alt="Email" className="w-6 h-6 mr-2" />
              <span>contact@jpteks.cm</span>
            </div>
            <div className="flex items-center">
              <img src={location} alt="Location" className="w-6 h-6 mr-2" />
              <span>Logbessou, Douala</span>
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">QUICK LINKS</h2>
          <ul className="space-y-2">
            <li><a href="1" className="hover:underline">Home</a></li>
            <li><a href="2" className="hover:underline">About Us</a></li>
            <li><a href="3" className="hover:underline">Our Services</a></li>
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
