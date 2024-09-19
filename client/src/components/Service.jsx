import React from 'react';
import sa from '../assets/sa.png';

function App() {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24">
          {/* Heading on the left side */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left md:w-1/2">
            Realize Your Potential with Our Professional Web Development Services
          </h1>
          {/* Description on the right side */}
          <p className="text-base md:text-lg text-gray-700 md:w-1/2 mt-4 md:mt-0">
            At our company, we provide high-quality web development, SaaS development, and web tutoring services. 
            Our team of professionals is committed to assisting you in achieving your objectives and thriving in the 
            digital realm. Whether you require a remarkable website, a robust web application, or customized web tutoring, 
            we possess the knowledge and skill to deliver outstanding outcomes.
          </p>
        </div>

        {/* Service Cards Section */}
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard 
            title="Tailored SaaS Development Services to Meet Your Specific Requirements"
            description="We specialize in the development of innovative and scalable SaaS solutions aimed at helping educational institutions streamline their operations and promote growth."
          />
          <ServiceCard 
            title="Improve Your Skills through Personalized Online Tutoring"
            description="Our online tutoring services are crafted to assist you in mastering web development concepts and techniques, enabling you to confidently create professional websites."
          />
          <ServiceCard 
            title="Professional Web Development Services for Your Business"
            description="We provide customized web development solutions designed to meet your business's specific needs, enabling you to establish a powerful online presence and achieve success."
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="border border-gray-300 rounded-2xl p-6 shadow-lg transition-transform transform hover:scale-105">
      <div className="flex items-center justify-center mb-4">
        <img src={sa} alt="Service icon" className="w-16 h-16 md:w-20 md:h-20" />
      </div>
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 text-center">
        {title}
      </h2>
      <p className="text-gray-600 text-center mb-4">
        {description}
      </p>
      <div className="text-center">
        <a href="#" className="text-white rounded-md px-6 py-2 font-semibold bg-yellow-600 hover:bg-yellow-700 transition">
          Learn More &gt;
        </a>
      </div>
    </div>
  );
}

export default App;
