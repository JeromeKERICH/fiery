import React from 'react'
import Hero from '../components/home/Hero'
import WhoWeServe from '../components/home/OurClients'
import ServicesPricing from '../components/home/Services'
import HowItWorks from '../components/home/Process'
import Testimonials from '../components/home/Testimonials'

const Home = () => {
  return (
    <div>
      <Hero/>
      <WhoWeServe/>
      <ServicesPricing/>
      <HowItWorks/>
      <Testimonials/>
    </div>
  )
}

export default Home
