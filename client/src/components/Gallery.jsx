import { useState } from 'react';

const ImageGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'path/to/image1.png', // Replace with your image paths
    'path/to/image2.png',
    'path/to/image3.png',
    'path/to/image4.png',
  ];

  const totalSlides = images.length;

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-lg">
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
