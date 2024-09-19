import React from 'react';
import slide1 from '../assets/w.jpg'; 
import slide2 from '../assets/r.jpg'; 
import slide3 from '../assets/a.jpg'; 
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
            buttonText: t('carousel.discover_more'),
            image: slide3,
        }
    ];

    return (
        <section className='w-full h-screen'>
            <Carousel 
                autoPlay={true} 
                infiniteLoop={true} 
                emulateTouch={true} 
                interval={2000} 
                showIndicators={false}  
                showStatus={false} 
                showThumbs={false}  
                showArrows={false}
            >
                {slides.map((slide, index) => (
                    <div key={index} className='relative'>
                        <img src={slide.image} className='w-full h-full object-cover' alt={`Carousel Image ${index}`} />
                        <div className='absolute inset-0 flex flex-col items-start justify-center p-4 md:p-8'>
                            <div className='max-w-lg'>
                                <p className='text-2xl md:text-4xl font-bold text-white mb-4'>{slide.title}</p>
                                <p className='text-lg md:text-2xl text-white mb-6'>{slide.description}</p>
                            </div>
                            <div className='flex gap-x-4'>
                                <button className='bg-yellow-500 text-white py-2 px-4 rounded-xl cursor-pointer text-sm md:text-lg'>{slide.buttonText}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    );
};

export default Carousels;

