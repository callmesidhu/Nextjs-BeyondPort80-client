import React from 'react'
import { Navbar } from '../../components/navbar'
import { CurrentEvents } from '../../components/port/list'

export default function page() {
  return (
    <div>
      <Navbar />
      <CurrentEvents />
    </div>
  )
}
