import React from 'react'
import { Navbar } from '../compoents/navbar'
import { HomePage } from '../compoents/port/list'

export default function page() {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  )
}
