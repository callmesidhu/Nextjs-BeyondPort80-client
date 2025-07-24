import React from 'react'
import { Navbar } from '../compoents/navbar'
import Footer from '../compoents/more/Footer'
import EventDetails from '../compoents/more/EventDetails'
import HeroSection from '../compoents/more/Hero'

export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <EventDetails />
      <Footer />
    </div>
  )
}
