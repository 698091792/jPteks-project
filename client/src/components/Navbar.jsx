import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next'; // Import the hook
import logo from '../assets/logo.png';

export default function Navbar() {
  const { t, i18n } = useTranslation(); // Get the t function for translation and the i18n instance
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('click', closeDropdown);
    } else {
      document.removeEventListener('click', closeDropdown);
    }

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [isDropdownOpen]);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage); // Change the language
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-white px-4 py-4 md:px-[10%] top-0 sticky z-[999]">
      {/* Logo Section */}
      <div className='w-1/4 md:w-[20%]'>
        <img
          src={logo}
          alt="JPTEKS Logo"
          className="w-24 md:w-[40%]"
        />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button 
          className="text-gray-700"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`md:flex space-x-6 items-center ${isMenuOpen ? 'block' : 'hidden'} md:space-x-6`}>
        <a href="#home" className="block md:inline hover:text-gray-700">{t('navbar.home')}</a>
        <a href="#about-us" className="block md:inline hover:text-gray-700">{t('navbar.about_us')}</a>
        <a href="#services" className="block md:inline hover:text-gray-700">{t('navbar.services')}</a>

        <div className="relative" ref={dropdownRef}>
          <button 
            className="flex items-center block md:inline hover:text-gray-700" 
            onClick={toggleDropdown}
          >
            {t('navbar.more')} <span className="ml-1">▼</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <a 
                href="#gallery" 
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('navbar.gallery')}
              </a>
              <a 
                href="#projects" 
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('navbar.projects')}
              </a>
            </div>
          )}
        </div>
      </ul>

      {/* Actions Section */}
      <div className="hidden md:flex space-x-8 w-[40%] items-center">
        <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
          {t('navbar.contact_us')}
        </button>
        <button 
          className="px-4 py-2 bg-blue-900 text-white rounded-md"
          onClick={toggleLanguage}
        >
          {i18n.language.toUpperCase()} {/* Display current language */}
        </button>
      </div>
    </nav>
  );
}
