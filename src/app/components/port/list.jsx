"use client";
import Link from "next/link";
import { Clock, Calendar, MapPin, User } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

function EventCard({ event, position }) {
  const borderClasses = {
    left: "border-[0.5px] border-dashed border-black/60",
    center:
      "border-t-[0.5px] border-r-[0.5px] border-b-[0.5px] border-dashed border-black/60",
    right:
      "border-t-[0.5px] border-r-[0.5px] border-b-[0.5px] border-dashed border-black/60"
  };

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const year = date.getFullYear();
    
    const getOrdinalSuffix = (day) => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
    
    return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
  };

  // Format time function
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div
      className={`flex flex-col m-5 ${borderClasses[position]} hover:shadow-lg transition-shadow`}
    >
      {/* Card Click Area */}
      <Link href={`/discover/ux/${event.id}`} className="cursor-pointer">
        <img
          src={event.banner || event.logo || "/UX.png"}
          alt={event.title}
          className="w-full h-[185px] object-cover"
        />
      </Link>

      <div className="flex flex-col gap-6 px-2 py-6">
        <h3 className="font-urbanist text-xl font-bold text-black leading-normal">
          {event.title}
        </h3>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-black/70" strokeWidth={2} />
            <span className="font-urbanist text-base text-black/70">
              {formatTime(event.event_start_date)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-black/70" strokeWidth={2} />
            <span className="font-urbanist text-base text-black/70">
              {formatDate(event.event_start_date)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-black/70" strokeWidth={2} />
            <span className="font-urbanist text-base text-black/70">
              {event.place || "ICFOSS, Greenfield Stadium, Trivandrum"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <User className="w-6 h-6 text-black" strokeWidth={2} />
            <span className="font-urbanist text-base text-black/70">
              {event.speakers && event.speakers.length > 0 
                ? event.speakers[0].name 
                : "TBA"}
            </span>
          </div>
        </div>

        {/* Book Tickets Button */}
        <a
          href={`https://makemypass.com/event/${event.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 justify-center items-center gap-[10px] font-urbanist text-xl font-normal transition-colors bg-[#87C041] hover:bg-[#87C041]/90 text-white"
        >
          Book Tickets Now
        </a>
      </div>
    </div>
  );
}

export function HomePage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(process.env.NEXT_PUBLIC_UX);
        
        if (response.data.hasError) {
          throw new Error(response.data.message || 'Failed to fetch events');
        }
        
        // Convert single event to array format for consistency
        const eventData = response.data.response;
        setEvents([eventData]);
        setError(null);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(err.message || 'Failed to fetch events');
        // Fallback to empty array or could use hardcoded events as fallback
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-urbanist">Loading events...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-urbanist text-red-500">
          Error loading events: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center md:gap-[81px] md:pt-[32px] md:pb-[160px] md:px-[120px]">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-[72px] w-full md:max-w-[1138px]">
          <div className="flex flex-col items-center gap-4 md:w-[653px] w-[300px]">
            <h1 className="font-urbanist text-[64px] font-bold text-black text-center leading-normal">
              UX:80
            </h1>
            <p className="font-urbanist text-xl text-black text-center">
              Connect with UX enthusiasts to design user-centric experiences.
            </p>

            {/* Event Details */}
            <div className="mt-4 flex flex-row flex-wrap gap-6">
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

          {/* Dynamic Events Grid */}
          {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 w-full">
              {events.map((event, index) => {
                const position =
                  index % 3 === 0 ? "left" : index % 3 === 1 ? "center" : "right";
                return (
                  <EventCard key={event.id} event={event} position={position} />
                );
              })}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              No events available at the moment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}