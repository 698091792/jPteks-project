import React from 'react';
import { useTranslation } from 'react-i18next';
function Solution() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col items-center justify-center bg-white  md:px-10 py-8 mt-4">
      {/* Header Section */}
      <header className="text-black font-bold text-3xl md:text-4xl w-full text-left mb-8">
        IMPACT · INNOVATE · GROW
      </header>

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        {/* Text Content */}
        <div className="max-w-lg mb-8 md:mb-0">
          <h1 className="text-3xl text-left md:text-4xl font-bold text-gray-900 mb-6" data-aos="zoom-in-up" data-aos-duration="700" data-aos-easing="ease-in">
          {t('solution.title')}
          </h1>
          <p className="text-gray-700 mb-12 text-left" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in">
          {t('solution.description')}
          </p>
        </div>

        {/* SVG Illustration */}
        <div className="flex-shrink-0 mb-8 md:mb-0" data-aos="fade-left" data-aos-duration="700" data-aos-easing="ease-in">
          <svg width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" stroke="#1E3A8A" strokeWidth="20"/>
            <circle cx="100" cy="100" r="60" stroke="#EAB308" strokeWidth="20"/>
            <circle cx="100" cy="100" r="30" stroke="#1E3A8A" strokeWidth="20"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Solution;

