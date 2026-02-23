"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Navbar } from "../../components/navbar";
import { CurrentEvents } from "../../components/port/LiveEvents";
import { PastEvents } from "@/app/components/port/PastEvents";

// Per-port configuration: add liveApi / pastApi / meta as ports go live
const portConfig = {
  ux: {
    label: "UX:80",
    description: "Connect with UX enthusiasts to design user-centric experiences.",
    schedule: "Every First Wednesday",
    time: "05:00 PM",
    venue: "ICFOSS, Greenfield Stadium, Trivandrum",
    contact: "uxport80@gmail.com",
    liveApi: process.env.NEXT_PUBLIC_UX_LIVE,
    pastApi: process.env.NEXT_PUBLIC_UX_PAST,
    whatsapp: process.env.NEXT_PUBLIC_UX_WHATSAPP,
  },
  ai: {
    label: "AI:80",
    description: "Explore the frontiers of artificial intelligence, LLMs and responsible AI.",
    schedule: "Monthly",
    time: "05:00 PM",
    venue: "Trivandrum, Kerala",
    contact: null,
    liveApi: null,
    pastApi: process.env.NEXT_PUBLIC_AI_PAST,
    whatsapp: process.env.NEXT_PUBLIC_AI_WHATSAPP,
  },
  comics: {
    label: "Comics:80",
    description: "Celebrate the art of storytelling through comics and visual narratives.",
    schedule: "Monthly",
    time: "05:00 PM",
    venue: "Trivandrum, Kerala",
    contact: null,
    liveApi: null,
    pastApi: process.env.NEXT_PUBLIC_COMICS_PAST,
    whatsapp: process.env.NEXT_PUBLIC_COMICS_WHATSAPP,
  },
  ev: {
    label: "EV:80",
    description: "Drive the future with electric vehicles and sustainable mobility.",
    schedule: "Monthly",
    time: "05:00 PM",
    venue: "Trivandrum, Kerala",
    contact: null,
    liveApi: null,
    pastApi: process.env.NEXT_PUBLIC_EV_PAST,
    whatsapp: process.env.NEXT_PUBLIC_EV_WHATSAPP,
  },
  space: {
    label: "Space:80",
    description: "Reach for the stars — astronomy, aerospace and beyond.",
    schedule: "Monthly",
    time: "05:00 PM",
    venue: "Trivandrum, Kerala",
    contact: null,
    liveApi: null,
    pastApi: process.env.NEXT_PUBLIC_SPACE_PAST,
    whatsapp: process.env.NEXT_PUBLIC_SPACE_WHATSAPP,
  },
  aecb: {
    label: "AEC&B:80",
    description: "Architecture, engineering, construction and beyond.",
    schedule: "Monthly",
    time: "05:00 PM",
    venue: "Trivandrum, Kerala",
    contact: null,
    liveApi: null,
    pastApi: process.env.NEXT_PUBLIC_AECB_PAST,
    whatsapp: process.env.NEXT_PUBLIC_AECB_WHATSAPP,
  },
  game: {
    label: "Game:80",
    description: "Level up with indie games, pixel art and 8-bit culture.",
    schedule: "Monthly",
    time: "05:00 PM",
    venue: "Trivandrum, Kerala",
    contact: null,
    liveApi: null,
    pastApi: process.env.NEXT_PUBLIC_GAME_PAST,
    whatsapp: process.env.NEXT_PUBLIC_GAME_WHATSAPP,
  },
  iot: {
    label: "IoT:80",
    description: "Connect the physical world with Arduino, sensors and edge AI.",
    schedule: "Monthly",
    time: "05:00 PM",
    venue: "Kochi, Kerala",
    contact: null,
    liveApi: null,
    pastApi: process.env.NEXT_PUBLIC_IOT_PAST,
    whatsapp: process.env.NEXT_PUBLIC_IOT_WHATSAPP,
  },
};

export default function Page() {
  const { ports } = useParams();
  const config = portConfig[ports];

  // Fallback for unknown slugs
  if (!config) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="font-urbanist text-xl text-black/60">Port not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="w-full max-w-3xl mx-auto px-6 pt-14 pb-10 text-center">
        <h1 className="font-urbanist text-[56px] sm:text-[72px] font-bold text-black leading-none tracking-tight mb-4">
          {config.label}
        </h1>
        <p className="font-urbanist text-lg sm:text-xl text-black/60 max-w-lg mx-auto">
          {config.description}
        </p>

        {/* Event Meta */}
        <div className="mt-8 flex flex-row flex-wrap gap-4 justify-center">
          {config.time && (
            <div className="flex items-center gap-2 bg-black/4 px-3 py-2" style={{ background: 'rgba(0,0,0,0.04)' }}>
              <svg className="w-4 h-4 text-black/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="font-urbanist text-sm text-black/70">{config.time}</span>
            </div>
          )}
          {config.schedule && (
            <div className="flex items-center gap-2 px-3 py-2" style={{ background: 'rgba(0,0,0,0.04)' }}>
              <svg className="w-4 h-4 text-black/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span className="font-urbanist text-sm text-black/70">{config.schedule}</span>
            </div>
          )}
          {config.venue && (
            <div className="flex items-center gap-2 px-3 py-2" style={{ background: 'rgba(0,0,0,0.04)' }}>
              <svg className="w-4 h-4 text-black/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <span className="font-urbanist text-sm text-black/70">{config.venue}</span>
            </div>
          )}
        </div>

        {config.contact && (
          <p className="mt-4 font-urbanist text-sm text-black/50">
            Contact: <a href={`mailto:${config.contact}`} className="underline underline-offset-2 hover:text-black transition-colors">{config.contact}</a>
          </p>
        )}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-black/8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10" style={{ background: 'rgba(0,0,0,0.06)' }} />

      {/* WhatsApp CTA */}
      {config.whatsapp && (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
          <a
            href={config.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center justify-between gap-6 w-full border border-black/10 px-8 py-7 hover:border-[#25D366]/40 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(37,211,102,0.12)]"
          >
            <div className="flex items-center gap-5">
              {/* WhatsApp icon with pulse */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping" />
                <div className="relative w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="font-urbanist text-lg font-bold text-black leading-snug">
                  Join the {config.label} Community
                </p>
                <p className="font-urbanist text-sm text-black/50 mt-0.5">
                  Stay updated with events, talks & discussions on WhatsApp
                </p>
              </div>
            </div>
            <span className="flex-shrink-0 flex items-center gap-2 font-urbanist text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5d] px-6 py-3 transition-colors group-hover:bg-[#1ebe5d]">
              Join WhatsApp Group
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      )}

      {/* Events Sections — only shown when API is configured */}
      <div>
        {config.liveApi && <CurrentEvents apiUrl={config.liveApi} slug={ports} />}
        {config.pastApi && <PastEvents apiUrl={config.pastApi} />}
        {!config.liveApi && !config.pastApi && (
          <div className="flex items-center justify-center py-24">
            <p className="font-urbanist text-xl text-black/40">Events coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
