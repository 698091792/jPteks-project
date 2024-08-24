import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between mb-8">
          {/* H1 on the left side */}
          <h1 className="text-4xl font-bold text-blue-900 md:text-left md:w-1/2">
            Realize Your Potential with Our Professional Web Development Services
          </h1>
          {/* P on the right side */}
          <p className="text-lg text-gray-700 md:text-right md:w-1/2 mt-4 md:mt-0">
            At our company, we provide high-quality web development, SaaS development, and web tutoring services. 
            Our team of professionals is committed to assisting you in achieving your objectives and thriving in the 
            digital realm. Whether you require a remarkable website, a robust web application, or customized web tutoring, 
            we possess the knowledge and skill to deliver outstanding outcomes.
          </p>
        </div>
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
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center justify-center mb-4">
        <img src="/path-to-icon.png" alt="icon" className="w-12 h-12" />
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
        {title}
      </h2>
      <p className="text-gray-600 text-center">
        {description}
      </p>
      <div className="text-center mt-4">
        <a href="#" className="text-yellow-600 font-semibold">
          Learn More &gt;
        </a>
      </div>
    </div>
  );
}

export default App;
