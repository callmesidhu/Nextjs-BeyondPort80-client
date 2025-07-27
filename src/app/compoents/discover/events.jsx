"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const locationTags = ["Trivandrum", "Kochi", "Kozhikode", "Bangalore", "Hyderabad"];

const events = [
  {
    id: 1,
    title: "UX:80",
    location: "Trivandrum,Kerala",
    fontFamily: "font-vina-sans",
    fontSize: "text-4xl sm:text-5xl lg:text-7xl xl:text-8xl",
    style: "tracking-wide",
    tags: ["Design Thinking", "User Flow", "UI Kits"]
  },
  {
    id: 2,
    title: "AI:80",
    location: "Trivandrum,Kerala",
    fontFamily: "font-unbounded",
    fontSize: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl",
    style: "font-bold",
    tags: ["ML", "LLMs", "AI Ethics"]
  },
  {
    id: 3,
    title: "BLOCK\nCHAIN",
    location: "Kottayam,Kerala",
    fontFamily: "font-satoshi",
    fontSize: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl",
    style: "font-black tracking-wide",
    tags: ["Web3", "Smart Contracts", "DAOs"]
  },
  {
    id: 4,
    title: "CYBER\nSECURITY",
    location: "Trivandrum,Kerala",
    fontFamily: "font-advio",
    fontSize: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl",
    style: "tracking-wide",
    tags: ["Pen Testing", "Zero Trust", "Firewalls"]
  },
  {
    id: 5,
    title: "Data Science.",
    location: "Trivandrum,Kerala",
    fontFamily: "font-poppins",
    fontSize: "text-2xl sm:text-3xl lg:text-3xl xl:text-4xl",
    style: "font-semibold leading-tight tracking-wide",
    tags: ["Python", "Pandas", "Data Viz"]
  },
  {
    id: 6,
    title: "VR:80",
    location: "Kozhikode ,Kerala",
    fontFamily: "font-epilogue",
    fontSize: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl",
    style: "font-bold italic tracking-wide",
    tags: ["Immersion", "Metaverse", "Unity"]
  },
  {
    id: 7,
    title: "Game:80",
    location: "Trivandrum,Kerala",
    fontFamily: "font-tiny5",
    fontSize: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl",
    style: "tracking-wide",
    tags: ["8-bit", "Indie Games", "Pixel Art"]
  },
  {
    id: 8,
    title: "IoT:80",
    location: "Kochi, Kerala",
    fontFamily: "font-antonio",
    fontSize: "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl",
    style: "tracking-widest",
    tags: ["Arduino", "Sensors", "Edge AI"]
  }
];

export function EventsGrid() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="max-w-full mb-12 lg:mb-16">
          {/* Search Input */}
          <div className="mb-8">
            <div className="flex items-center gap-2 p-3 border border-[1.5px] border-dashed border-black/40 border-[dashed] bg-white">
              <Search className="w-6 h-6 text-black text-opacity-60" strokeWidth={2} />
              <input
                type="text"
                placeholder="Search For Keywords, Topics"
                className="flex-1 text-base font-urbanist font-medium text-black text-opacity-60 placeholder-black placeholder-opacity-60 bg-transparent border-none outline-none"
              />
            </div>
          </div>

          {/* Location Tags - horizontal scroll */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {locationTags.map((location, index) => (
              <button
                key={index}
                className="whitespace-nowrap px-3 py-2 border border-dashed border-black/40 bg-white text-black text-opacity-60 font-urbanist text-base font-medium hover:bg-gray-50 transition-colors"
              >
                {location}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-dashed border-black/30">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative group h-72 lg:h-80 p-6 sm:p-8 lg:p-12 flex flex-col justify-center items-center text-center bg-white
              border-dashed border-black/30
              ${index % 2 === 1 ? 'sm:border-l' : ''}
              ${index >= 2 ? 'sm:border-t' : ''}
              ${index % 4 !== 0 ? 'lg:border-l' : ''}
              ${index >= 4 ? 'lg:border-t' : ''}
              hover:bg-gray-50 transition-colors cursor-pointer`}
            >
              <div className="flex flex-col items-center gap-4">
                <h3 className={`
                  whitespace-pre-line text-black text-center leading-none
                  ${event.fontFamily} ${event.fontSize} ${event.style}
                `}>
                  {event.title}
                </h3>
                <p className="text-black text-center font-urbanist text-base sm:text-lg lg:text-xl font-normal tracking-wide">
                  {event.location}
                </p>
              </div>

              {/* Hover Tags */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-6  left-6 right-6 hidden group-hover:flex flex-wrap justify-center gap-2"
              >
                {event.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 border border-green-400 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
