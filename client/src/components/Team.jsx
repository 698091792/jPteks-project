import React from 'react';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white space-y-8 pb-96">
      
      {/* Our Team Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Team</h2>
        <div className="flex justify-center space-x-8">
          
          {/* Team Member Card */}
          {[
            { name: "POLA WAFFO", title: "Founder/Ceo", email: "pola@jpteks.cm", img: "/path/to/profile-placeholder.png" },
            { name: "AWONO BILOGUE", title: "Co-Founder", email: "awono@jpteks.cm", img: "/path/to/profile-placeholder.png" },
            { name: "YEBGA RUBEN", title: "Co-Founder", email: "yebga@jpteks.cm", img: "/path/to/profile-placeholder.png" },
            { name: "NGOUNOUO SIMO", title: "Co-Founder", email: "pola@jpteks.cm", img: "/path/to/profile-placeholder.png" }
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center  border border-black p-6 rounded-lg ">
              <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mb-4" />
              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-700">{member.title}</p>
              <p className="text-sm text-blue-500 mb-4">{member.email}</p>
              <div className="flex space-x-4">
                {/* Icons (replace with actual icons) */}
                <a href="#"><img src="/path/to/linkedin-icon.svg" alt="LinkedIn" className="w-6 h-6" /></a>
                <a href="#"><img src="/path/to/facebook-icon.svg" alt="Facebook" className="w-6 h-6" /></a>
                <a href="#"><img src="/path/to/instagram-icon.svg" alt="Instagram" className="w-6 h-6" /></a>
              </div>
            </div>
          ))}
          
        </div>
      </section>
      
      {/* Call to Action Button */}
      <button className="bg-yellow-600 text-white text-2xl font-extrabold py-8 px-16 rounded-xl  hover:bg-yellow-700 focus:outline-none">
        Wish to join team
      </button>
      
    </div>
  );
}

export default App;
