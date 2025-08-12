import Link from "next/link";
import { Clock, Calendar, MapPin, User } from "lucide-react";

const events = [
  {
    id: 1,
    uuid: "a9726f69-7ae1-469e-bcda-281a7ccc9318",
    title: "Designing Accessible Interfaces",
    image: "/UX.png",
    time: "05:00 PM",
    date: "13th Aug 2025",
    location: "ICFOSS, Greenfield Stadium, Trivandrum",
    speaker: "Krishnan Ramachandran",
    buttonType: "book",
    bookingLink: "https://makemypass.com/event/uxport80"
  }
];

function EventCard({ event, position }) {
  const borderClasses = {
    left: "border-[0.5px] border-dashed border-black/60",
    center:
      "border-t-[0.5px] border-r-[0.5px] border-b-[0.5px] border-dashed border-black/60",
    right:
      "border-t-[0.5px] border-r-[0.5px] border-b-[0.5px] border-dashed border-black/60"
  };

  return (
    <div
      className={`flex flex-col m-5 ${borderClasses[position]} hover:shadow-lg transition-shadow`}
    >
      {/* Card Click Area */}
      <Link href={`/discover/ux/${event.uuid}`} className="cursor-pointer">
        <img
          src={event.image}
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
              {event.time}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-black/70" strokeWidth={2} />
            <span className="font-urbanist text-base text-black/70">
              {event.date}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-black/70" strokeWidth={2} />
            <span className="font-urbanist text-base text-black/70">
              {event.location}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <User className="w-6 h-6 text-black" strokeWidth={2} />
            <span className="font-urbanist text-base text-black/70">
              {event.speaker}
            </span>
          </div>
        </div>

        {/* Button now goes directly to booking link */}
        <a
          href={event.bookingLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex h-14 justify-center items-center gap-[10px] font-urbanist text-xl font-normal transition-colors ${
            event.buttonType === "book"
              ? "bg-[#87C041] hover:bg-[#87C041]/90 text-white"
              : "border-[0.5px] border-solid border-black/70 hover:bg-gray-50 text-[#87C041]"
          }`}
        >
          {event.buttonType === "book"
            ? "Book Tickets Now"
            : "View Event Video"}
        </a>
      </div>
    </div>
  );
}

export function HomePage() {
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
                  Every First Thursday
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
          <div className="grid grid-cols-1 md:grid-cols-3 w-full">
            {events.map((event, index) => {
              const position =
                index % 3 === 0 ? "left" : index % 3 === 1 ? "center" : "right";
              return (
                <EventCard key={event.id} event={event} position={position} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
