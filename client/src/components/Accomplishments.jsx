import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import sa from '../assets/sa.png';
import A from '../assets/A.jpg';  // Import profile images
import B from '../assets/B.jpg';
import C from '../assets/C.jpg';
import E from '../assets/E.jpg';

export function Accomplishments() {
  const { t } = useTranslation();

  // Array of imported images for each testimonial profile
  const profileImages = [A, B, C, E];

  return (
    <div className="flex flex-col items-center justify-center px-4 pt-10 bg-white">
      
      {/* Accomplishments Section */}
      <section className="text-center mb-2" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in">
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
      <section className="text-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('testimonials.title')}</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="max-w-lg"
        >
          {/* Dynamic Testimonials Rendering */}
          {t('testimonials.list', { returnObjects: true }).map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="text-center">
                <div className="flex justify-center space-x-1 mb-2">
                  <span className="text-2xl text-gray-800">&#9733;</span>
                  <span className="text-2xl text-gray-800">&#9733;</span>
                  <span className="text-2xl text-gray-800">&#9733;</span>
                  <span className="text-2xl text-gray-800">&#9733;</span>
                  <span className="text-2xl text-gray-800">&#9733;</span>
                </div>
                <p className="text-gray-700 max-w-xl mx-auto mb-4 px-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center mb-4">
                  <img
                    src={profileImages[index]}  // Dynamically load profile image from the array
                    alt={testimonial.person_name}
                    className="w-16 h-16 rounded-full mb-4 md:mb-0 md:mr-4"
                  />
                  <div className="text-left">
                    <p className="font-bold text-gray-900">{testimonial.person_name}</p>
                    <p className="text-gray-600">{testimonial.person_title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      
    </div>
  );
}





