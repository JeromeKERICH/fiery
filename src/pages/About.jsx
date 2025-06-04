import React, { useEffect } from 'react'
import AboutOverview from '../components/about/AboutOverview'
import FounderStory from '../components/about/Founders';
import CoreValues from '../components/about/AboutValues';

const About = () => {
  return (
    useEffect(() => {
        window.scrollTo(0, 0);

        }, []),
    <div>
      <AboutOverview/>
      <FounderStory/>
      <CoreValues/>
    </div>
  )
}

export default About
