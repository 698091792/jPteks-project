import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Solution from './components/Solution'
import Accomplishments from './components/Accomplishments'
import Team from './components/Team'
import Gallery from './components/Gallery'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Service from './components/Service'
import Technology from './components/Technology'


export default function App() {
  return (
   <div>
    <Navbar/>
    <Carousel/>
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
