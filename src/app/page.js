import React from 'react'
import Banner from './components/banner'
import { Hero } from './components/hero'
import { Navbar } from './components/navbar'

function page() {
  return (
    <>
      <Navbar />
      <Banner />
      <Hero />
    </>
  )
}

export default page
