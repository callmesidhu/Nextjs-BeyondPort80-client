"use client";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useCursor } from "../CustomCursor";
import { useRouter } from "next/navigation";

const locationTags = ["Trivandrum", "Kochi", "Kozhikode", "Bangalore", "Hyderabad"];

const events = [
  { id: 1, title: "UX:80", location: "Trivandrum,Kerala", fontFamily: "font-vina-sans", fontSize: "text-4xl sm:text-5xl lg:text-7xl xl:text-8xl", style: "tracking-wide", tags: ["Design Thinking", "User Flow", "UI Kits"], slug: "ux", active: true },
  { id: 2, title: "AI:80", location: "Trivandrum,Kerala", fontFamily: "font-unbounded", fontSize: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl", style: "font-bold", tags: ["ML", "LLMs", "AI Ethics"], slug: "ai", active: true },
  { id: 3, title: "Comics:80", location: "Trivandrum,Kerala", fontFamily: "font-satoshi", fontSize: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl", style: "font-black tracking-wide", tags: ["Web3", "Smart Contracts", "DAOs"], slug: "comics", active: true },
  { id: 4, title: "EV:80", location: "Trivandrum,Kerala", fontFamily: "font-advio", fontSize: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl", style: "tracking-wide", tags: ["Pen Testing", "Zero Trust", "Firewalls"], slug: "ev", active: true },
  { id: 5, title: "Space:80", location: "Trivandrum,Kerala", fontFamily: "font-poppins", fontSize: "text-2xl sm:text-3xl lg:text-3xl xl:text-4xl", style: "font-semibold leading-tight tracking-wide", tags: ["Python", "Pandas", "Data Viz"], slug: "space", active: true },
  { id: 6, title: "AEC&B:80", location: "Trivandrum,Kerala", fontFamily: "font-epilogue", fontSize: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl", style: "font-bold italic tracking-wide", tags: ["Immersion", "Metaverse", "Unity"], slug: "aecb", active: true },
  { id: 7, title: "Game:80", location: "Trivandrum,Kerala", fontFamily: "font-tiny5", fontSize: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl", style: "tracking-wide", tags: ["8-bit", "Indie Games", "Pixel Art"], slug: "game", active: false },
  { id: 8, title: "IoT:80", location: "Trivandrum,Kerala", fontFamily: "font-antonio", fontSize: "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl", style: "tracking-widest", tags: ["Arduino", "Sensors", "Edge AI"], slug: "iot", active: false }
];

const tagVariants = {
  initial: { opacity: 0, y: 10 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

export function EventsGrid() {
  const { handleMouseEnter, handleMouseLeave } = useCursor();
  const router = useRouter();

  const handleCardClick = (slug, active) => {
    if (active) {
      router.push(`/discover/${slug}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Search & Tags Section */}
        <div className="max-w-full mb-12 lg:mb-16">
          <div className="mb-8">
            <div className="relative flex items-center gap-2 p-3 w-1/3">
              <div className="absolute top-0 left-0 right-0 h-px bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.5)_0px,rgba(0,0,0,0.5)_10px,transparent_10px,transparent_20px)]"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.8)_0px,rgba(0,0,0,0.8)_10px,transparent_10px,transparent_20px)]"></div>
              <div className="absolute top-0 left-0 bottom-0 w-px bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.5)_0px,rgba(0,0,0,0.5)_10px,transparent_10px,transparent_20px)]"></div>
              <div className="absolute top-0 right-0 bottom-0 w-px bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.5)_0px,rgba(0,0,0,0.5)_10px,transparent_10px,transparent_20px)]"></div>
              <Search className="w-6 h-6 text-black text-opacity-60" strokeWidth={2} />
              <input type="text" placeholder="Search For Keywords, Topics" className="relative z-10 flex-1 text-base font-urbanist font-medium bg-transparent border-none outline-none" />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {locationTags.map((location) => (
              <button
                key={location}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative whitespace-nowrap px-3 py-2 text-black text-opacity-60 font-urbanist text-base font-medium transition-colors"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.5)_0px,rgba(0,0,0,0.5)_10px,transparent_10px,transparent_18px)]"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.8)_0px,rgba(0,0,0,0.8)_10px,transparent_10px,transparent_18px)]"></div>
                <div className="absolute top-0 left-0 bottom-0 w-px bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.5)_0px,rgba(0,0,0,0.5)_10px,transparent_10px,transparent_15px)]"></div>
                <div className="absolute top-0 right-0 bottom-0 w-px bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.5)_0px,rgba(0,0,0,0.5)_10px,transparent_10px,transparent_15px)]"></div>
                <span className="relative z-10">{location}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="relative">
          {/* Outer border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.5)_0px,rgba(0,0,0,0.5)_10px,transparent_10px,transparent_20px)] z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.8)_0px,rgba(0,0,0,0.8)_10px,transparent_10px,transparent_20px)] z-10"></div>
          <div className="absolute top-0 left-0 bottom-0 w-px bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.5)_0px,rgba(0,0,0,0.5)_10px,transparent_10px,transparent_20px)] z-10"></div>
          <div className="absolute top-0 right-0 bottom-0 w-px bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.5)_0px,rgba(0,0,0,0.5)_10px,transparent_10px,transparent_20px)] z-10"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((event, index) => {
              const isLastInRowSm = (index + 1) % 2 === 0;
              const isLastInRowLg = (index + 1) % 4 === 0;
              const isLastRowSm = index >= events.length - 2;
              const isLastRowLg = index >= events.length - 4;

              return (
                <motion.div
                  key={event.id}
                  initial="initial"
                  whileHover={event.active ? "hover" : ""}
                  onMouseEnter={event.active ? handleMouseEnter : undefined}
                  onMouseLeave={event.active ? handleMouseLeave : undefined}
                  onClick={() => handleCardClick(event.slug, event.active)}
                  className={`relative h-72 lg:h-80 p-6 sm:p-8 lg:p-12 flex flex-col justify-center items-center text-center transition-colors ${event.active
                    ? "bg-white hover:bg-gray-50 cursor-pointer"
                    : "bg-gray-200 opacity-60 cursor-not-allowed"
                    }`}
                >
                  {/* Inner borders */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-px bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.5)_0px,rgba(0,0,0,0.5)_10px,transparent_10px,transparent_20px)] ${isLastRowLg ? "lg:hidden" : "lg:block"
                      } ${isLastRowSm ? "sm:hidden lg:hidden" : "sm:block"} ${index === events.length - 1 ? "hidden sm:hidden" : "block sm:hidden"
                      }`}
                  ></div>
                  <div
                    className={`absolute  top-0 right-0 bottom-0 w-px bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.5)_0px,rgba(0,0,0,0.5)_10px,transparent_10px,transparent_20px)] ${isLastInRowLg ? "lg:hidden" : ""
                      } ${isLastInRowSm ? "sm:hidden lg:block" : ""}`}
                  ></div>

                  {/* Content */}
                  <motion.div
                    initial={{ scale: 0.95, opacity: 1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-4"
                  >
                    <h3
                      className={`whitespace-pre-line text-black text-center leading-none ${event.fontFamily} ${event.fontSize} ${event.style}`}
                    >
                      {event.title}
                    </h3>
                    <p className="text-black text-center font-urbanist text-base sm:text-lg lg:text-xl font-normal tracking-wide">
                      {event.location}
                    </p>
                  </motion.div>

                  {event.tags && (
                    <motion.div
                      variants={tagVariants}
                      className="absolute bottom-6 left-6 right-6 flex flex-wrap justify-center gap-2"
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
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
