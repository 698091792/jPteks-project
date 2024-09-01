import React,{useEffect} from 'react'
import Navbar from './components/Navbar'
import Carousels from './components/Carousel'
import Solution from './components/Solution'
import Accomplishments from './components/Accomplishments'
import Team from './components/Team'
import Gallery from './components/Gallery'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Service from './components/Service'
import Technology from './components/Technology'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
   <div className='w-[100%]'>
    <Navbar/>
    <Carousels/>
    <Solution/>
    <Service/>
    <Technology/>
    <Accomplishments/>
    <Team/>
    <Gallery/>
    <ContactForm/>
    <Footer/>
   </div>
  )
}
