import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Carousels from './components/Carousel';
import Solution from './components/Solution';
import Team from './components/Team';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Service from './components/Service';
import FAQ from './components/FAQ';
import AOS from 'aos';
import './App.css'
import 'aos/dist/aos.css';
import './i18n'; // Ensure that i18n is properly set up for translations
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import frTranslations from './locales/fr.json';
import { Product } from './components/Products';


// i18n initialization
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      fr: { translation: frTranslations },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export { i18n }; // Named export for i18n

export default function App() {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: false
      });
  }, []);

  return (
    <div >
      <Navbar />
      <div id="home">
        <Carousels />
      </div>
      <div id="about-us">
        <Solution />
      </div>
      <div id="products">
        <Product/>
      </div>
      <div id="services">
        <Service />
      </div>
    
     
      
      <Team />
      <div id="gallery">
        <Gallery />
      </div>
      <div id="faq">
        <FAQ/>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
