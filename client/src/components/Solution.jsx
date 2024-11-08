import React from 'react';
import sa from '../assets/sa.png';
import { useTranslation } from 'react-i18next';
function Solution() {
  const { t } = useTranslation();
  return (
    <div className='-my-24'>
      {/* Mission and Values Section */}
      <section className="py-16 bg-gray-900 ">
        <div className="container mx-auto px-4 mt-10 ">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Our Mission & Values</h2>
          <p className="text-center text-lg mb-8 max-w-2xl mx-auto text-white">
            We understand that education is one of the critical challenges outlined in the United Nation Sustainable Development Goal(SDGs). By harnessing technology, we are dedicated to overcoming the lack of access to education and delivering inclusive learning opportunities that can bridge the education gap in Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-8 ">
            <div className="w-72 text-center p-6 bg-gradient-to-r from-blue-100 text-white to-blue-900 shadow-md rounded-lg  transition-transform transform hover:scale-105">
            <img src={sa} alt="Impact icon" className="w-16 h-16 md:w-20 md:h-20 mx-20" />
              <h3 className="text-xl font-semibold">Impact</h3>
              <p>We aim to impact the lives of Africa students by equipping them with valuable IT skills and fostering a love for learning through technology.</p>
            </div>
            <div className="w-72 text-center p-6 bg-gradient-to-r from-blue-100 text-white to-blue-900 shadow-md rounded-lg transition-transform transform hover:scale-105">
            <img src={sa} alt="Innovate icon" className="w-16 h-16 md:w-20 md:h-20 mx-20" />
              <h3 className="text-xl font-semibold">Innovate</h3>
              <p>Through innovative solutions, we create tools and resources that empower teachers, students, and communities.</p>
            </div>
            <div className="w-72 text-center p-6 bg-gradient-to-r from-blue-100 text-white to-blue-900 shadow-md rounded-lg transition-transform transform hover:scale-105">
            <img src={sa} alt="Grow icon" className="w-16 h-16 md:w-20 md:h-20 mx-20" />
              <h3 className="text-xl font-semibold">Grow</h3>
              <p>As we impact lives and innovate, we grow together, building a brighter future for Africa with education as its foundation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Vision and Goals</h2>
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            <div className="pl-4">
              <p>At JPTEKS, we envision becoming a renowned leader in the Edtech industry, know for driving positive change and fosting educational progress across the continent. We believe that the access to quality education is fundamental to achieving Sustainable development goals, and we are committed to eradicating barriers to education through technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">About JPTEKS </h2>
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            <div className="pl-4">
              <p>JPTEKS is an Edtech company dedicated to transforming the education sector in Cameroon and, ultimately, across Africa throungh the power of technology. Our Mission is to increase youth engagement in IT, with a target of empowering at least 80% of teenagers to pursue skills in technology. Achieving this goal will be a significant milestone in realizing our mission within Cameroon, after which we aim to expand our impact through Africa. </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Solution;

