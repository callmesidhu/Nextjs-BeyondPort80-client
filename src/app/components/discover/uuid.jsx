"use client";

import { Clock, Calendar, MapPin, User } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

function EventCard({ event, position }) {
  const borderClasses = {
    left: "border-b-[0.5px] md:border-r-[0.5px] border-dashed border-black/60",
    center: "border-b-[0.5px] md:border-r-[0.5px] border-dashed border-black/60",
    right: "border-b-[0.5px] border-dashed border-black/60",
  };

  const isBookable = !!event.booking_url;

  const handleButtonClick = () => {
    if (isBookable) {
      window.open(event.booking_url, '_blank', 'noopener,noreferrer');
    } else if (event.video_url) {
      window.open(event.video_url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`flex flex-col h-full ${borderClasses[position]}`}>
      <img
        src={event.event_poster_url}
        alt={event.event_name}
        className="w-full h-[200px] object-cover"
      />
      <div className="flex flex-col flex-grow p-4 md:p-6 gap-5">
        <h3 className="font-urbanist text-2xl font-bold text-black leading-tight">
          {event.event_name}
        </h3>
        <div className="flex flex-col gap-3 text-base text-black/80 font-urbanist">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-black/70 flex-shrink-0" />
            <span>{event.event_time}</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-black/70 flex-shrink-0" />
            <span>{formatDate(event.event_date)}</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-black/70 flex-shrink-0 mt-1" />
            <span>{event.event_location}</span>
          </div>
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-black/70 flex-shrink-0" />
            <span>{event.speaker_name}</span>
          </div>
        </div>
        <div className="mt-auto pt-4">
          <button
            onClick={handleButtonClick}
            className={`w-full h-12 text-lg font-semibold font-urbanist rounded-md transition-all duration-300 ${
              isBookable
                ? "bg-[#87C041] text-white hover:bg-[#76a93a]"
                : "border border-black/50 text-black/80 hover:bg-gray-100"
            }`}
          >
            {isBookable ? "Book Tickets" : "View Event"}
          </button>
        </div>
      </div>
    </div>
  );
}

export function PortPage({ params }) {
  const { uuid } = params;
  const [portDetails, setPortDetails] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!uuid) return;

    const fetchAllData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch both ports and events data at the same time
        const [portsResponse, eventsResponse] = await Promise.all([
          axios.get("https://server.fayaport80.com/api/ports/show"),
          axios.get("https://server.fayaport80.com/api/events/show")
        ]);

        // Find the specific port that matches the UUID from the URL
        const currentPort = portsResponse.data.find(port => port.uuid === uuid);

        if (currentPort) {
          setPortDetails(currentPort);

          // Filter the events to find only those that belong to the current port
          const associatedEvents = eventsResponse.data.filter(event => event.port_uuid === currentPort.uuid);
          setEvents(associatedEvents);
        } else {
          setError("Port not found.");
        }

      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [uuid]); 

  // Display a loading screen while data is being fetched
  if (loading) {
    return <div className="min-h-screen flex justify-center items-center font-urbanist text-2xl">Loading Port...</div>;
  }

  // Display an error message if something went wrong
  if (error) {
    return <div className="min-h-screen flex justify-center items-center font-urbanist text-2xl text-red-600">{error}</div>;
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {portDetails && (
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-black font-urbanist mb-4">
              {portDetails.port_name}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-black/80 font-urbanist mb-6">
              {portDetails.port_description}
            </p>
            <p className="text-base text-black/60 font-urbanist">
              Contact: {portDetails.port_email}
            </p>
          </div>
        )}

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center font-urbanist mb-10">Events</h2>
          {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t-[0.5px] border-l-[0.5px] border-dashed border-black/60">
              {events.map((event, index) => (
                <EventCard
                  key={event.uuid}
                  event={event}
                  position={
                    (index + 1) % 3 === 0 ? "right" : (index + 1) % 3 === 2 ? "center" : "left"
                  }
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-black/70 font-urbanist">
              There are no upcoming events for this port right now.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}