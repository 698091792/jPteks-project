import React from 'react';

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-60">
      {/* Align header to the left */}
      <header className="text-black font-bold text-sm w-full text-left">
        IMPACT·INNOVATE·GROW
      </header>
      <div className="flex justify-between items-center w-full max-w-6xl">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-10">
            Advancing Education with Technology Solutions
          </h1>
          <p className="text-gray-700 mb-52">
            At our organization, we envision a future where education is accessible to all, empowered by leading-edge technology. We are dedicated to harnessing the latest advancements in technology to create innovative software-as-a-service (SaaS) solutions, websites, and web apps that transform the learning and teaching landscape. Our team is devoted to ongoing research and implementation of new technologies to continuously improve the educational experience for students, educators, and lifelong learners globally.
          </p>
        </div>
        <div className="flex-shrink-0 mb-52 animate-bounceBall">
          <svg width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" stroke="#1E3A8A" strokeWidth="20"/>
            <circle cx="100" cy="100" r="60" stroke="#EAB308" strokeWidth="20"/>
            <circle cx="100" cy="100" r="30" stroke="#1E3A8A" strokeWidth="20"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;

