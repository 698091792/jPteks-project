import React from 'react';
import { useTranslation } from 'react-i18next';
import IMG_20220617_133432 from '../assets/IMG_20220617_133432.jpg';
import insta from '../assets/insta.png';
import face from '../assets/face.png';
import linkedin from '../assets/linkedin.png';

function App() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "POLA WAFFO",
      title: "Founder/Ceo",
      email: "pola@jpteks.cm",
      img: "/path/to/profile-placeholder.png",
      social: {
        linkedin: "https://www.linkedin.com/in/pola-waffo",
        facebook: "https://www.facebook.com/pola.waffo",
        instagram: "https://www.instagram.com/pola_waffo"
      }
    },
    {
      name: "AWONO BILOGUE",
      title: "Co-Founder",
      email: "juniorbilogue@gmail.com",
      img: IMG_20220617_133432,
      social: {
        linkedin: "https://www.linkedin.com/in/juniorbilogue",
        facebook: "https://www.facebook.com/juniorbilogue",
        instagram: "https://www.instagram.com/juniorbilogue"
      }
    },
    {
      name: "YEBGA RUBEN",
      title: "Co-Founder",
      email: "yebga@jpteks.cm",
      img: "/path/to/profile-placeholder.png",
      social: {
        linkedin: "https://www.linkedin.com/in/yebgaruben",
        facebook: "https://www.facebook.com/yebgaruben",
        instagram: "https://www.instagram.com/yebgaruben"
      }
    },
    {
      name: "NGOUNOUO SIMO",
      title: "Co-Founder",
      email: "ngounouo@jpteks.cm",
      img: "/path/to/profile-placeholder.png",
      social: {
        linkedin: "https://www.linkedin.com/in/ngounouo-simo",
        facebook: "https://www.facebook.com/ngounouo.simo",
        instagram: "https://www.instagram.com/ngounouo_simo"
      }
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white space-y-8 pt-16 px-4 md:px-8">
      
      {/* Our Team Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          {t('our_team')}
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          
          {/* Team Member Card */}
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center border border-gray-300 p-6 rounded-lg shadow-md max-w-xs">
              <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-700">{member.title}</p>
              <p className="text-sm text-blue-500 mb-4">{member.email}</p>
              <div className="flex space-x-4">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                  </a>
                )}
                {member.social.facebook && (
                  <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                    <img src={face} alt="Facebook" className="w-6 h-6" />
                  </a>
                )}
                {member.social.instagram && (
                  <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt="Instagram" className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          ))}
          
        </div>
      </section>
      
      {/* Call to Action Button */}
      <button className="bg-yellow-600 text-white text-xl font-bold py-4 px-8 rounded-xl hover:bg-yellow-700 focus:outline-none">
        {t('join_team')}
      </button>
      
    </div>
  );
}

export default App;


