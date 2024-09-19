import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import sa from '../assets/sa.png';

function App() {
  const { t } = useTranslation(); // Get the translation function

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 bg-white">
      
      {/* Accomplishments Section */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('accomplishments.title')}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          
          <div className="text-center flex flex-col items-center">
            <img src={sa} alt="SaaS Icon" className="w-16 h-16 mb-2" />
            <div className="text-3xl font-bold text-yellow-500">10+</div>
            <p className="text-lg font-extrabold text-gray-900 mt-4">{t('accomplishments.projects')}</p>
          </div>
          
          <div className="text-center flex flex-col items-center">
            <img src={sa} alt="SaaS Icon" className="w-16 h-16 mb-2" />
            <div className="text-3xl font-bold text-yellow-500">2</div>
            <p className="text-lg font-extrabold text-gray-900 mt-4">{t('accomplishments.consulted_projects')}</p>
          </div>
          
          <div className="text-center flex flex-col items-center">
            <img src={sa} alt="SaaS Icon" className="w-16 h-16 mb-2" />
            <div className="text-3xl font-bold text-yellow-500">10+</div>
            <p className="text-lg font-extrabold text-gray-900 mt-4">{t('accomplishments.trainees')}</p>
          </div>
          
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('testimonials.title')}</h2>
        
        <div className="flex justify-center space-x-1 mb-4">
          <span className="text-2xl text-gray-800">&#9733;</span>
          <span className="text-2xl text-gray-800">&#9733;</span>
          <span className="text-2xl text-gray-800">&#9733;</span>
          <span className="text-2xl text-gray-800">&#9733;</span>
          <span className="text-2xl text-gray-800">&#9733;</span>
        </div>
        
        <p className="text-gray-700 max-w-xl mx-auto mb-4 px-4">
          {t('testimonials.quote')}
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center mb-4">
          <img src="/path/to/profile-pic.jpg" alt={t('testimonials.person_name')} className="w-16 h-16 rounded-full mb-4 md:mb-0 md:mr-4" />
          <div className="text-left">
            <p className="font-bold text-gray-900">{t('testimonials.person_name')}</p>
            <p className="text-gray-600">{t('testimonials.person_title')}</p>
          </div>
        </div>
        
        <div className="flex justify-center space-x-2">
          <span className="block w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </section>
      
    </div>
  );
}

export default App;

