import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next'; // Import the hook
import logo from '../assets/logo.png';
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
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

  // useEffect(() => {
  //   if (isDropdownOpen) {
  //     document.addEventListener('click', closeDropdown);
  //   } else {
  //     document.removeEventListener('click', closeDropdown);
  //   }

  //   return () => {
  //     document.removeEventListener('click', closeDropdown);
  //   };
  // }, [isDropdownOpen]);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLanguage); // Change the language
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center mx-auto px-2 md:px-10 max-w-md font-serif text-md xl:text-xl md:max-w-full  justify-between h-20 bg-white  top-0 sticky z-[999]">
      {/* Logo Section */}
      <div className='w-[15%]'>
        <img
          src={logo}
          alt="JPTEKS Logo"
          className="object-fill w-[80%]"
        />
      </div>

      {/* Mobile Menu Button */}
      <div onClick={toggleMenu} className='md:hidden'>
       {!isMenuOpen ? <FaBars/> : <AiOutlineClose/>}
        </div>

      {/* Navigation Links */}
      <ul className={`md:flex hidden justify-center space-x-5 ml-4  md:w-[80%] font-serif text-xl px-10 md:mx-0 mx-auto md:flex-row flex-col md:bg-transparent bg-white items-center relative md:space-x-6 md:top-0 top-[170px] -right-5 `}>
        <li className="py-2">
          <a href="#home" className="block pl-5 hover:text-gray-700 ">{t('navbar.home')}</a>
        </li>
        <li className="py-2">
          <a href="#about-us" className="block w-20 hover:text-gray-700">{t('navbar.about_us')}</a>
        </li>
        <li className="py-2">
          <a href="#products" className="block w-20 hover:text-gray-700">{t('Products')}</a>
        </li>
        <li className="py-2 ">
          <a href="#services" className="block  hover:text-gray-700">{t('navbar.services')}</a>
        </li>
        <li className="py-2 relative " ref={dropdownRef}>
          <button 
            className="flex items-center  hover:text-gray-700" 
            onClick={toggleDropdown}
          >
            {t('navbar.more')} <span className="ml-1">▼</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
                <a 
                href="#Achievement" 
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('Achievement')}
              </a>
              <a 
                href="#Testimonies" 
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('Testimonies')}
              </a>

              <a 
                href="#Our Team" 
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('Our Team')}
              </a>
              <a 
                href="#gallery" 
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('navbar.gallery')}
              </a>

              <a 
                href="#faq" 
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('FAQ')}
              </a>

              <a 
                href="#contact us" 
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('Contact us')}
              </a>
            
            
              
            </div>
          )}
        </li>
        <button className="mt-2 p-2  md:hidden bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
         <a href="">{t('navbar.contact_us')}</a> 
        </button>
        <button 
          className="p-4 mt-6 bg-blue-900 md:hidden text-white rounded-md"
          onClick={toggleLanguage}
        >
          {i18n.language.toUpperCase()} {/* Display current language */}
        </button>
      </ul>
      {/* Navigation Links on small screens */}
      <ul className={`lg:hidden gap-4 flex flex-col items-end text-xl font-serif bg-white p-4 ${isMenuOpen? 'flex' : 'hidden'} absolute top-24 right-0 w-full pr-4 pb-4 transition-all duration-700 ease-in-out`}>
        <li className="py-2">
          <a href="#home" className="block pl-5 hover:text-gray-700 ">{t('navbar.home')}</a>
        </li>
        <li className="py-2">
          <a href="#about-us" className="block w-20 hover:text-gray-700">{t('navbar.about_us')}</a>
        </li>
        <li className="py-2">
          <a href="#products" className="block w-20 hover:text-gray-700">{t('Products')}</a>
        </li>
        <li className="py-2 ">
          <a href="#services" className="block  hover:text-gray-700">{t('navbar.services')}</a>
        </li>
        <li className="py-2 relative " ref={dropdownRef}>
          <button 
            className="flex items-center  hover:text-gray-700" 
            onClick={toggleDropdown}
          >
            {t('navbar.more')} <span className="ml-1">▼</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-1 mt-2 w-48 bg-white border rounded shadow-lg">
                <a 
                href="#Achievement" 
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('Achievement')}
              </a>
              <a 
                href="#Testimonies" 
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('Testimonies')}
              </a>

              <a 
                href="#Our Team" 
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('Our Team')}
              </a>
              <a 
                href="#gallery" 
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('navbar.gallery')}
              </a>

              <a 
                href="#faq" 
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('FAQ')}
              </a>

              <a 
                href="#contact us" 
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('Contact us')}
              </a>
            
            
              
            </div>
          )}
        </li>
        <button className="mt-2 p-2  md:hidden bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
         <a href="">{t('navbar.contact_us')}</a> 
        </button>
        <button 
          className="p-4 mt-6 bg-blue-900 md:hidden text-white rounded-md"
          onClick={toggleLanguage}
        >
          {i18n.language.toUpperCase()} {/* Display current language */}
        </button>
      </ul>

      {/* Actions Section */}
      <div className="hidden md:flex gap-x-4  items-center">
        <button className="p-2 md:w-[210px] bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
        <a href="">{t('navbar.contact_us')}</a> 
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
