"use client";

import React from 'react'
import { PortPage } from '../../components/discover/uuid'
import { Navbar } from '../../components/navbar'

function page({params}) {
  return (
    <div>
      <Navbar />
      <PortPage params={params}/>
    </div>
  )
}

export default page
