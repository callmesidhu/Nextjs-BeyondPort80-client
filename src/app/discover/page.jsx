"use client";
import React, { useEffect, useRef } from "react";
import { EventsGrid } from "../components/discover/events";
import { Navbar } from "../components/navbar";

function Page() {

  return (
    <div>
      <Navbar />
      <EventsGrid />
    </div>
  );
}

export default Page;
