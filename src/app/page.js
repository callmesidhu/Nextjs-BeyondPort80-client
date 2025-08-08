import React from 'react'
import Banner from './components/banner'
import { Hero } from './components/hero'
import { Navbar } from './components/navbar'

function page() {
  return (
    <div className='max-h-screen overflow-y-hidden'>
      <Navbar />
      <Banner />
      <Hero />
    </div>
  )
}

export default page
