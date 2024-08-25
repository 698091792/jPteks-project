import { useState } from 'react';
import Selection_010 from '../assets/Selection_010.png'; 

const ImageGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    Selection_010,  // Reference the imported image
    // Add more images as needed
  ];

  const totalSlides = images.length;

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col items-center ">
      <h2 className="text-2xl font-bold mb-4 ">Image Gallery</h2> {/* Title added */}
      <div className="  ">
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-auto rounded-md"
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
