import EventDetails from '@/app/components/more/EventDetails'
import Footer from '@/app/components/more/Footer'
import HeroSection from '@/app/components/more/Hero'
import { MoreNavbar } from '@/app/components/more/MoreNavbar'
import React from 'react'


export default function page() {
  return (
    <div className='overflow-x-hidden'>
      <MoreNavbar />
      <HeroSection />
      <EventDetails />
      <Footer />
    </div>
  )
}
