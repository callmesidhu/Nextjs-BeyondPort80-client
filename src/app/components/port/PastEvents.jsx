"use client";
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
function PastEventCard({ event }) {
  return (
    <div className="flex flex-col w-full h-full bg-white border border-black/10 overflow-hidden opacity-75">
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden flex-shrink-0">
        {event.banner || event.logo ? (
          <img
            src={event.banner || event.logo}
            alt={event.title || "Event"}
            className="w-full h-full object-cover grayscale"
          />
        ) : (
          <div
            className="w-full h-full grayscale"
            style={{
              background:
                "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 40%, #a5d6a7 100%)",
            }}
          />
        )}
        <span className="absolute top-3 right-3 text-xs font-urbanist font-semibold px-2 py-1 bg-black/60 text-white tracking-wide">
          Completed
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <h3 className="font-urbanist text-lg font-bold text-black leading-snug line-clamp-2">
          {event.title || "Untitled Event"}
        </h3>

        <div className="flex flex-col gap-2 flex-1">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-black/40 flex-shrink-0" strokeWidth={2} />
            <span className="font-urbanist text-sm text-black/50">
              {formatTime(event.event_start_date)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-black/40 flex-shrink-0" strokeWidth={2} />
            <span className="font-urbanist text-sm text-black/50">
              {formatDate(event.event_start_date)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-black/40 flex-shrink-0" strokeWidth={2} />
            <span className="font-urbanist text-sm text-black/50 truncate">
              {event.place || "Venue TBA"}
            </span>
          </div>
          {event.speakers?.length > 0 && (
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-black/40 flex-shrink-0" strokeWidth={2} />
              <span className="font-urbanist text-sm text-black/50 truncate">
                {event.speakers[0].name}
              </span>
            </div>
          )}
        </div>

        {/* Completed Button */}
        <div
          className="mt-auto flex h-12 items-center justify-center font-urbanist text-sm font-semibold tracking-wide cursor-not-allowed"
          style={{ background: "rgba(0,0,0,0.06)", color: "rgba(0,0,0,0.35)" }}
        >
          Completed
        </div>
      </div>
    </div>
  );
}

// ─── PastEvents ───────────────────────────────────────────────────────────────
export function PastEvents({ apiUrl }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await axios.get(apiUrl);
        if (res.data.hasError) throw new Error(res.data.message || "Failed to fetch events");

        const completed = res.data.response?.events?.Completed || [];
        const now = new Date();
        const mapped = completed
          .map((e) => ({ ...e, isPast: new Date(e.event_end_date) < now }))
          .sort((a, b) => new Date(b.event_start_date) - new Date(a.event_start_date));

        setEvents(mapped);
        setError(null);
      } catch (err) {
        console.error("Error fetching past events:", err);
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
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-urbanist text-xs font-semibold tracking-widest text-black/40 uppercase">Past Events</span>
          <div className="flex-1 h-px bg-black/10" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse bg-gray-100 aspect-[4/5]" />
          ))}
        </div>
      </section>
    );
  }

  if (error || events.length === 0) return null;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="font-urbanist text-xs font-semibold tracking-widest text-black/40 uppercase">
          Past Events
        </span>
        <div className="flex-1 h-px bg-black/10" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {events.map((event) => (
          <PastEventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
