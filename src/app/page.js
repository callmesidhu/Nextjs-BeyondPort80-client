import React from 'react'
import Banner from './compoents/banner'
import { Hero } from './compoents/hero'
import { Navbar } from './compoents/navbar'

function page() {
  return (
    <div className='md:max-h-screen  '>
      <Navbar />
      <Banner />
      <Hero />
    </div>
  )
}

export default page
