import React, { useEffect } from 'react'
import ServicesOverview from '../components/services/ServiceOverview'
import ServicesPricing from '../components/home/Services'
import StrategicServices from '../components/services/ServiceSection'
import CaseStudies from '../components/services/ServiceCase'

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <ServicesOverview/>
      <StrategicServices/>
      <CaseStudies/>
    </div>
  )
}

export default Services
