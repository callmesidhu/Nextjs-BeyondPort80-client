import React from 'react'
import { Navbar } from '../components/navbar'
import Footer from '../components/more/Footer'
import EventDetails from '../components/more/EventDetails'
import HeroSection from '../components/more/Hero'

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
