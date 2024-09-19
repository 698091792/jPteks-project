import { useState, useEffect } from 'react';
import Selection_010 from '../assets/Selection_010.png'; 
import Selection_013 from '../assets/Selection_013.png';
import Selection_014 from '../assets/Selection_014.png';
import Selection_015 from '../assets/Selection_015.png';
import Selection_016 from '../assets/Selection_016.png';
import Selection_017 from '../assets/Selection_017.png';
import Selection_018 from '../assets/Selection_018.png';

const ImageGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    Selection_010, 
    Selection_013,
    Selection_014,
    Selection_015,
    Selection_016,
    Selection_017,
    Selection_018,
    // Add more images as needed
  ];

  const totalSlides = images.length;

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [totalSlides]);

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Image Gallery</h2>
      <div className="relative w-full h-64 md:h-96 max-w-full overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`mx-1 w-3 h-3 rounded-full cursor-pointer ${index === currentSlide ? 'bg-yellow-500' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
