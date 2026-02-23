"use client";
import Link from "next/link";
import { Clock, Calendar, MapPin, User } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

// ─── Helpers ────────────────────────────────────────────────────────────────
const formatDate = (dateString) => {
  if (!dateString) return "TBA";
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const year = date.getFullYear();
  const suffix =
    day > 3 && day < 21
      ? "th"
      : ["th", "st", "nd", "rd"][day % 10] || "th";
  return `${day}${suffix} ${month} ${year}`;
};

const formatTime = (dateString) => {
  if (!dateString) return "TBA";
  return new Date(dateString).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

// ─── Card ────────────────────────────────────────────────────────────────────
function EventCard({ event, slug }) {
  const isPast = event.isPast;

  const inner = (
    <div
      className={`group flex flex-col w-full h-full bg-white border border-black/10 overflow-hidden transition-all duration-300 ${isPast
        ? "cursor-not-allowed opacity-70"
        : "hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 cursor-pointer"
        }`}
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden flex-shrink-0">
        {event.banner || event.logo ? (
          <img
            src={event.banner || event.logo}
            alt={event.title || "Event"}
            className={`w-full h-full object-cover transition-transform duration-500 ${isPast ? "grayscale" : "group-hover:scale-105"
              }`}
          />
        ) : (
          <div
            className={`w-full h-full transition-transform duration-500 ${isPast ? "grayscale" : "group-hover:scale-105"
              }`}
            style={{
              background:
                "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 40%, #a5d6a7 100%)",
            }}
          />
        )}
        {/* Status badge */}
        <span
          className={`absolute top-3 right-3 text-xs font-urbanist font-semibold px-2 py-1 tracking-wide ${isPast ? "bg-black/60 text-white" : "bg-[#87C041] text-white"
            }`}
        >
          {isPast ? "Completed" : "Upcoming"}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <h3 className="font-urbanist text-lg font-bold text-black leading-snug line-clamp-2">
          {event.title || "Untitled Event"}
        </h3>

        <div className="flex flex-col gap-2 flex-1">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-black/50 flex-shrink-0" strokeWidth={2} />
            <span className="font-urbanist text-sm text-black/60">
              {formatTime(event.event_start_date)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-black/50 flex-shrink-0" strokeWidth={2} />
            <span className="font-urbanist text-sm text-black/60">
              {formatDate(event.event_start_date)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-black/50 flex-shrink-0" strokeWidth={2} />
            <span className="font-urbanist text-sm text-black/60 truncate">
              {event.place || "Venue TBA"}
            </span>
          </div>
          {event.speakers?.length > 0 && (
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-black/50 flex-shrink-0" strokeWidth={2} />
              <span className="font-urbanist text-sm text-black/60 truncate">
                {event.speakers[0].name}
              </span>
            </div>
          )}
        </div>

        {/* CTA */}
        <div
          className={`mt-auto flex h-12 items-center justify-center font-urbanist text-sm font-semibold tracking-wide transition-colors ${isPast
            ? "bg-black/8 text-black/40 cursor-not-allowed"
            : "bg-[#87C041] hover:bg-[#6fa832] text-white"
            }`}
          style={isPast ? { background: "rgba(0,0,0,0.06)" } : {}}
        >
          {isPast ? "Past Event" : "Book Tickets Now"}
        </div>
      </div>
    </div>
  );

  return isPast ? (
    <div className="flex w-full">{inner}</div>
  ) : (
    <Link
      href={`/discover/${slug || "ux"}/${event.id}`}
      className="flex w-full"
      onClick={(e) => e.stopPropagation()}
    >
      {inner}
    </Link>
  );
}

// ─── Section wrapper ─────────────────────────────────────────────────────────
function SectionShell({ label, children }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
      {label && (
        <div className="flex items-center gap-4 mb-8">
          <span className="font-urbanist text-xs font-semibold tracking-widest text-black/40 uppercase">
            {label}
          </span>
          <div className="flex-1 h-px bg-black/10" />
        </div>
      )}
      {children}
    </section>
  );
}

// ─── CurrentEvents ────────────────────────────────────────────────────────────
export function CurrentEvents({ apiUrl, slug }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await axios.get(apiUrl);
        if (res.data.hasError) throw new Error(res.data.message || "Failed to fetch events");
        const liveEvents = [res.data.response].map((e) => ({ ...e, isPast: false }));
        setEvents(liveEvents);
        setError(null);
      } catch (err) {
        console.error("Error fetching live events:", err);
        setError(err.message || "Failed to fetch events");
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [apiUrl]);

  if (loading) {
    return (
      <SectionShell label="Upcoming Events">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse bg-gray-100 aspect-[4/5]" />
          ))}
        </div>
      </SectionShell>
    );
  }

  if (error || events.length === 0) return null;

  return (
    <SectionShell label="Upcoming Events">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {events.map((event) => (
          <EventCard key={event.id} event={event} slug={slug} />
        ))}
      </div>
    </SectionShell>
  );
}
