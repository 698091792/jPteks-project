import React, { useState, useEffect } from 'react';
import slide1 from '../assets/w.jpg'; 
import slide2 from '../assets/r.jpg'; 
import slide3 from '../assets/a.jpg'; 
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
    {
        title: "TRAININGS",
        description: "Unlock your tech potential with our hands-on \n training in website creation and app \n development, designed for teens and adults to \n build real-world skills and unleash creativity!",
        buttonText: "Learn more",
        image: slide1, 
    },
    {
        title: "WEB DEVELOPMENT",
        description: "Learn how to build responsive websites using \n modern technologies like HTML, CSS, and JavaScript.",
        buttonText: "Learn More",
        image: slide2, 
    },
    {
        title: "APP DEVELOPMENT",
        description: "Dive into the world of mobile apps with our \n comprehensive training in Android and iOS development.",
        buttonText: "Discover More",
        image: slide3, 
    },
];

const Carousels = () => {
  
   

    return (
        <section className='w-full h-screen  ' >
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
      <div key={index}>
        <img src={slide.image} className='w-full h-screen object-cover'  alt={`Carousel Image ${index}`} />
        <div className='relative left-[3%] w-full top-[-500px] flex flex-col gap-y-4'>
          <div className='md:left-[-100px] w-[40%]'>
            <p className='text-xl md:text-4xl font-bold text-start'>{slide.title}</p>
            <p className='text-sm md:text-2xl text-start mt-[5%]'>{slide.description}</p>
          </div>
          <div className='flex gap-x-4 relative font-bold text-sm md:text-lg'>
            <button className='bg-yellow-500 text-white p-2 rounded-xl cursor-pointer'>{slide.buttonText}</button>
          </div>
        </div>
      </div>
    ))}
  </Carousel>
</section>

    );
};

export default Carousels;
