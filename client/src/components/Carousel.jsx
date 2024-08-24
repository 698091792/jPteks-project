import React, { useState, useEffect } from 'react';
import slide1 from '../assets/w.jpg'; 
import slide2 from '../assets/r.jpg'; 
import slide3 from '../assets/a.jpg'; 

const slides = [
    {
        title: "TRAININGS",
        description: "Unlock your tech potential with our hands-on \n training in website creation and app \n development, designed for teens and adults to \n build real-world skills and unleash creativity!",
        buttonText: "Learn more",
        bgColor: "bg-blue-900",
        image: slide1, 
    },
    {
        title: "WEB DEVELOPMENT",
        description: "Learn how to build responsive websites using \n modern technologies like HTML, CSS, and JavaScript.",
        buttonText: "Start Learning",
        bgColor: "bg-green-600",
        image: slide2, 
    },
    {
        title: "APP DEVELOPMENT",
        description: "Dive into the world of mobile apps with our \n comprehensive training in Android and iOS development.",
        buttonText: "Discover More",
        bgColor: "bg-purple-700",
        image: slide3, 
    },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 5000); // Change slide every 5 seconds

        // Clear the interval when the component is unmounted
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="w-full h-screen relative flex overflow-hidden rounded mt-6 shadow-lg">
            <div
                className="w-full h-full flex items-center justify-start text-white"
                style={{
                    backgroundImage: `url(${slides[currentIndex].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="p-40 rounded-lg text-left ml-12">
                    <h2 className="text-6xl font-bold mb-4">{slides[currentIndex].title}</h2>
                    <p className="text-lg mb-4 whitespace-pre-line">{slides[currentIndex].description}</p>
                    <button className="bg-yellow-500 px-4 py-2 rounded-md font-bold text-2xl hover:bg-yellow-600">
                        {slides[currentIndex].buttonText}
                    </button>
                </div>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between px-4">
                <button
                    onClick={goToPrevious}
                    className="bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                >
                    ❮
                </button>
                <button
                    onClick={goToNext}
                    className="bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default Carousel;
