import React from 'react';
import linkedin from '../assets/linkedin.png';
import face from '../assets/face.png'; 
import insta from '../assets/insta.png'; 
import whatsapp from '../assets/whatsapp.png'; 
import location from '../assets/location.png'; 
import { GiMailbox } from 'react-icons/gi'; // Ensure correct icon import
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <a href="https://www.instagram.com/jpteks_2023" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <img src={whatsapp} alt="WhatsApp" className="w-6 h-6 mr-2" />
                <span className="text-sm lg:text-base">
                  + (237) 651 118 070
                </span>
              </div>
              <div className="flex items-center">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6 text-blue-900 mr-2"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
                <span className="text-sm lg:text-base">contact@jpteks.cm</span>
              </div>
              <div className="flex items-center">
                <img src={location} alt="Location" className="w-6 h-6 mr-2" />
                <span className="text-sm lg:text-base">Logbessou, Douala</span>
              </div>
            </div>
          </div>

          {/* Center Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">{t('footer.quick_links_title')}</h2>
            <ul className="space-y-2 text-sm lg:text-base">
              <li><a href="1" className="hover:underline">{t('footer.home')}</a></li>
              <li><a href="2" className="hover:underline">{t('footer.about_us')}</a></li>
              <li><a href="3" className="hover:underline">{t('footer.services')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.achievements')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.testimonials')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.team')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.gallery')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.contact_us')}</a></li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">{t('footer.subscribe_title')}</h2>
            <p className="mb-4">{t('footer.subscribe_description')}</p>
            <form className="flex flex-col sm:flex-row items-center mb-4">
              <input
                type="email"
                placeholder={t('footer.email_placeholder')}
                className="p-2 w-full text-black sm:w-auto rounded-tl-md rounded-bl-md border-none focus:outline-none mb-2 sm:mb-0 sm:rounded-l-md"
              />
              <button
                type="submit"
                className="bg-yellow-600 text-white px-4 py-2 rounded-tr-md rounded-br-md hover:bg-yellow-700"
              >
               {t('footer.subscribe_button')}
              </button>
            </form>
            <p className="text-xs lg:text-sm">
            {t('footer.subscribe_notice')}
            </p>
          </div>
        </div>
        <div className="text-center mt-8 text-sm">
          <p>© 2024 JPTEKS. {t('footer.rights_reserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
