import React from 'react';

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 pb-16">
      <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto px-4">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <div className="w-80 h-80 bg-blue-900 rounded-full flex items-center justify-center">
            <div className="w-48 h-48 bg-yellow-600 rounded-full flex items-center justify-center">
              <div className="w-24 h-24 bg-blue-900 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="md:ml-12 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 animate-fadeIn">
            Realizing the Potential of Educational Technology for a Promising Future
          </h2>
          <p className="text-gray-600 animate-slideUp">
            Our services provide enhanced efficiency, user-friendliness, and cost-effectiveness,
            empowering educators and learners alike.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
