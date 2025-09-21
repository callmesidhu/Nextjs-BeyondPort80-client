"use client";
import React from "react";
import { Navbar } from "../../components/navbar";
import { CurrentEvents } from "../../components/port/LiveEvents";
import { Clock, Calendar, MapPin } from "lucide-react";
import { PastEvents } from "@/app/components/port/PastEvents";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center gap-4 md:w-[653px] w-[300px] mx-auto mt-10">
        <h1 className="font-urbanist text-[64px] font-bold text-black text-center leading-normal">
          UX:80
        </h1>
        <p className="font-urbanist text-xl text-black text-center">
          Connect with UX enthusiasts to design user-centric experiences.
        </p>

        {/* Static Event Info */}
        <div className="mt-4 flex flex-row flex-wrap gap-6 justify-center">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-black/70" />
            <span className="font-urbanist text-base text-black/70">
              05:00 PM
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-black/70" />
            <span className="font-urbanist text-base text-black/70">
              Every First Wednesday
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-black/70" />
            <span className="font-urbanist text-base text-black/70">
              ICFOSS, Greenfield Stadium, Trivandrum
            </span>
          </div>
        </div>

        <p className="mt-2 font-urbanist text-base text-black text-center">
          Contact Team: uxport80@gmail.com
        </p>
      </div>

      {/* Current Events Section */}
      <div className="">
        <CurrentEvents />
        <PastEvents />
      </div>
    </div>
  );
}
