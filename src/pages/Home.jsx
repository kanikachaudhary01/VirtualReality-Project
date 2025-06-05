import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Workflow from '../components/Workflow'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Workflow/>
    </div>
  )
}

export default Home