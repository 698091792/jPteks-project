import React from 'react';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white space-y-16">
      
      {/* Accomplishments Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Accomplishments</h2>
        <div className="flex justify-center space-x-16">
          
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500">10+</div>
            <img src="/path/to/your/saas-icon.svg" alt="SaaS Icon" className="mx-auto mt-2" />
            <p className="text-xl font-semibold text-gray-900 mt-4">Realised projects</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500">2</div>
            <img src="/path/to/your/saas-icon.svg" alt="SaaS Icon" className="mx-auto mt-2" />
            <p className="text-xl font-semibold text-gray-900 mt-4">Consulted projects</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500">10+</div>
            <img src="/path/to/your/saas-icon.svg" alt="SaaS Icon" className="mx-auto mt-2" />
            <p className="text-xl font-semibold text-gray-900 mt-4">Web Trainees</p>
          </div>
          
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Testimonies</h2>
        
        <div className="flex justify-center space-x-1 mb-4">
          <span className="text-2xl text-gray-800">&#9733;</span>
          <span className="text-2xl text-gray-800">&#9733;</span>
          <span className="text-2xl text-gray-800">&#9733;</span>
          <span className="text-2xl text-gray-800">&#9733;</span>
          <span className="text-2xl text-gray-800">&#9733;</span>
        </div>
        
        <p className="text-gray-700 max-w-xl mx-auto mb-4">
          Our experience with Edutek has been nothing short of exceptional. Their innovative solutions have greatly improved our online learning platform and have made a significant impact on our students' success.
        </p>
        
        <div className="flex items-center justify-center mb-4">
          <img src="/path/to/profile-pic.jpg" alt="Mr Philbert" className="w-12 h-12 rounded-full mr-4" />
          <div className="text-left">
            <p className="font-bold text-gray-900">Mr Philbert</p>
            <p className="text-gray-600">Founder, Group Scolaire les reperes</p>
          </div>
        </div>
        
        <div className="flex justify-center space-x-2">
          <span className="block w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="block w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </section>
      
    </div>
  );
}

export default App;
