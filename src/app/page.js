import React from 'react'
import { BannerImages } from './compoents/banner'
import { Hero } from './compoents/hero'
import { Navbar } from './compoents/navbar'

function page() {
  return (
    <div>
      <Navbar />
      <BannerImages />
      <Hero />
    </div>
  )
}

export default page
