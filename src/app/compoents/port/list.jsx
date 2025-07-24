import { Clock, Calendar, MapPin, User } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Designing Accessible Interfaces",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/f74dfd129ff0413e4930ab323b14434bf4bbd537?width=684",
    time: "05:00 PM",
    date: "7th Aug 2025",
    location: "ICFOSS, Greenfield Stadium, Trivandrum",
    speaker: "Laura Klein",
    buttonType: "book"
  },
  {
    id: 2,
    title: "Prototyping for Rapid Iteration",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ac5edcc6a47f4966f8d5d82af211ab0a9ef4af6a?width=684",
    time: "05:00 PM",
    date: "7th Aug 2025",
    location: "ICFOSS, Greenfield Stadium, Trivandrum",
    speaker: "Andy Budd",
    buttonType: "video"
  },
  {
    id: 3,
    title: "Mastering Wireframing Techniques",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/4013469b7311e851b25887b386a96590c8091464?width=684",
    time: "05:00 PM",
    date: "7th Aug 2025",
    location: "ICFOSS, Greenfield Stadium, Trivandrum",
    speaker: "Erika Hall",
    buttonType: "video"
  },
  {
    id: 4,
    title: "Conducting Effective Usability Testing",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/ca5b142292e084049e5057654e2ab615f3aef7ff?width=684",
    time: "05:00 PM",
    date: "7th Aug 2025",
    location: "ICFOSS, Greenfield Stadium, Trivandrum",
    speaker: "Jared Spool",
    buttonType: "video"
  },
  {
    id: 5,
    title: "Microinteractions for Enhanced UX",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/2c904014a8102d005ee2c9cb5fe4afb17ea0b138?width=684",
    time: "05:00 PM",
    date: "7th Aug 2025",
    location: "ICFOSS, Greenfield Stadium, Trivandrum",
    speaker: "Vivianne Castillo",
    buttonType: "video"
  },
  {
    id: 6,
    title: "Behavioral Psychology in UX",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/8196ca0179daedcce8637888bb31cb7197015b06?width=684",
    time: "05:00 PM",
    date: "7th Aug 2025",
    location: "ICFOSS, Greenfield Stadium, Trivandrum",
    speaker: "Steve Krugg",
    buttonType: "video"
  }
];

function EventCard({ event, position }: { event: typeof events[0], position: 'left' | 'center' | 'right' }) {
  const borderClasses = {
    left: "border-[0.5px] border-dashed border-black/60",
    center: "border-t-[0.5px] border-r-[0.5px] border-b-[0.5px] border-dashed border-black/60",
    right: "border-t-[0.5px] border-r-[0.5px] border-b-[0.5px] border-dashed border-black/60"
  };

  return (
    <div className={`flex flex-col w-[342px] ${borderClasses[position]}`}>
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-[185px] object-cover"
      />
      <div className="flex flex-col gap-6 w-[320px] px-2 py-6">
        <h3 className="font-urbanist text-xl font-bold text-black leading-normal">
          {event.title}
        </h3>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-black/70" strokeWidth={2} />
            <span className="font-urbanist text-base font-normal text-black/70">
              {event.time}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-black/70" strokeWidth={2} />
            <span className="font-urbanist text-base font-normal text-black/70">
              {event.date}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-black/70" strokeWidth={2} />
            <span className="font-urbanist text-base font-normal text-black/70">
              {event.location}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <User className="w-6 h-6 text-black" strokeWidth={2} />
            <span className="font-urbanist text-base font-normal text-black/70">
              {event.speaker}
            </span>
          </div>
        </div>
        
        <button
          className={`flex h-14 px-[94px] justify-center items-center gap-[10px] self-stretch font-urbanist text-xl font-normal leading-normal transition-colors ${
            event.buttonType === "book"
              ? "bg-[#87C041] hover:bg-[#87C041]/90 text-white"
              : "border-[0.5px] border-solid border-black/70 hover:bg-gray-50 text-[#87C041]"
          }`}
        >
          {event.buttonType === "book" ? "Book Tickets Now" : "View Event Video"}
        </button>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col items-center gap-[81px] pt-[32px] pb-[160px] px-[120px]">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-[72px] w-full max-w-[1138px]">
          <div className="flex flex-col items-center gap-4 w-[653px]">
            <h1 className="font-urbanist text-[64px] font-bold text-black text-center leading-normal">
              UX:80
            </h1>
            <p className="font-urbanist text-xl font-normal text-black text-center leading-normal">
              Connect with UX enthusiasts to design user-centric experiences.
            </p>
            
            {/* Event Details */}
            <div className="flex items-start gap-6 self-stretch">
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-black/70" strokeWidth={2} />
                <span className="font-urbanist text-base font-normal text-black/70">
                  05:00 PM
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-black/70" strokeWidth={2} />
                <span className="font-urbanist text-base font-normal text-black/70">
                  Every First Thursday
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-black/70" strokeWidth={2} />
                <span className="font-urbanist text-base font-normal text-black/70">
                  ICFOSS, Greenfield Stadium, Trivandrum
                </span>
              </div>
            </div>
            
            <p className="font-urbanist text-base font-normal text-black/70 text-center w-[653px]">
              Contact Team: uxport80@gmail.com
            </p>
          </div>

          {/* Events Grid */}
          <div className="flex flex-col items-start gap-6 self-stretch">
            {/* First Row */}
            <div className="flex justify-center items-center self-stretch">
              <EventCard event={events[0]} position="left" />
              <EventCard event={events[1]} position="center" />
              <EventCard event={events[2]} position="right" />
            </div>
            
            {/* Second Row */}
            <div className="flex justify-center items-center self-stretch">
              <EventCard event={events[3]} position="left" />
              <EventCard event={events[4]} position="center" />
              <EventCard event={events[5]} position="right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
