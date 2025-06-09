import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Workflow from '../components/Workflow'
import Pricing from '../components/Pricing'
import Testimonals from '../components/Testimonals'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Workflow/>
      <Pricing/>
      <Testimonals/>
    </div>
  )
}

export default Home