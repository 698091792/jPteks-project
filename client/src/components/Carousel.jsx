import React from 'react';
import slide1 from '../assets/w.png'; 
import slide2 from '../assets/r.png'; 
import slide3 from '../assets/a.png'; 
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTranslation } from 'react-i18next';

const Carousels = () => {
    const { t } = useTranslation();

    const slides = [
        {
            title: t('carousel.trainings'),
            description: t('carousel.trainings_description'),
            buttonText: t('carousel.learn_more'),
            image: slide1,
        },
        {
            title: t('carousel.web_development'),
            description: t('carousel.web_development_description'),
            buttonText: t('carousel.learn_more'),
            image: slide2,
        },
        {
            title: t('carousel.app_development'),
            description: t('carousel.app_development_description'),
            buttonText: t('carousel.learn_more'),
            image: slide3,
        }
    ];

    return (
        <section className='w-full h-screen mb-6'>
            <Carousel 
                autoPlay={true} 
                infiniteLoop={true} 
                emulateTouch={true} 
                interval={3000} 
                showIndicators={false}  
                showStatus={false} 
                showThumbs={false}  
                showArrows={false}
                stopOnHover={true}
            >
                {slides.map((slide, index) => (
                    <div key={index} className='relative w-full '>
                        {/* Image should be responsive */}
                        <img src={slide.image} className='w-full h-full object-cover max-h-screen' alt={`Carousel Image ${index}`} />
                        
                        {/* Overlay with responsive text and button */}
                        <div className='absolute  inset-0 flex flex-col items-start justify-center p-4 md:p-8'>
                            <div className='max-w-lg mt-10'>
                                <p className='text-xl sm:text-xl md:text-4xl font-bold text-white mb-4'>{slide.title}</p>
                                <p className='text-base sm:text-md md:text-2xl text-white mb-2'>{slide.description}</p>
                            </div>
                            {/* <div className='flex gap-x-4 relative  w-full  '>
                                <button className='bg-yellow-500 text-white  p-2 sm:px-6 rounded-xl cursor-pointer text-sm sm:text-base md:text-lg'>
                                    {slide.buttonText}
                                </button>
                            </div> */}
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    );
};

export default Carousels;
