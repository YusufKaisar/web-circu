import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/homePage/Hero'
import About from '../components/homePage/About'
import Service from '../components/homePage/Service'
import Research from '../components/homePage/Research'
import Researchtwo from '../components/homePage/Research2'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Service />
        <Research />
        <Researchtwo />
        <Footer />
        
        
    </>
  )
}

export default Home