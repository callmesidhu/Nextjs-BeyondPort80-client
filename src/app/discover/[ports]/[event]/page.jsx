import EventDetails from '@/app/components/more/EventDetails'
import Footer from '@/app/components/more/Footer'
import HeroSection from '@/app/components/more/Hero'
import { Navbar } from '@/app/components/navbar'
import React from 'react'


export default function page() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <HeroSection />
      <EventDetails />
      <Footer />
    </div>
  )
}
