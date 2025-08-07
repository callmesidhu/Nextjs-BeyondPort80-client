import React from 'react'
import { EventsGrid } from '../components/discover/events'
import { Navbar } from '../components/navbar'

function page() {
  return (
    <div>
      <Navbar />
      <EventsGrid />
    </div>
  )
}

export default page
