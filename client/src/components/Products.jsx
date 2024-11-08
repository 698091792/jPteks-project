import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/mentorguru.png'
export function Product() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col items-center justify-center h-screen  ">
      <div className='flex flex-col items-center justify-center h-screen  pb-16' >
      <h1 className='font-bold md:text-3xl font-serif mb-10'>Products</h1>
      <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto px-4">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img src={logo} alt=""  className='w-[40%]'/>
        </div>
        <div className="md:ml-12 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4"  data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in">
          {t('Technology.title')} 
          </h2>
          <p className="text-gray-600 "  data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in">
          {t('Technology.description')} 
          </p>
        </div>
      </div>
      </div>
    
    </section>
  );
}


