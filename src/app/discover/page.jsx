import React from 'react'
import { EventsGrid } from '../compoents/discover/events'
import { Navbar } from '../compoents/navbar'

function page() {
  return (
    <div>
      <Navbar />
      <EventsGrid />
    </div>
  )
}

export default page
