  const stripHtmlTags = (html) => {
    if (!html) return '';
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };


    const formatDate = (dateString) => {
    if (!dateString) return '13th Aug 2025';
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
    if (!dateString) return '05:00 PM';
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };
  
export default function EventDetails({ eventData }) {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row border-dashed border-[0.5px] border-black/60">
        {/* Event Information Section */}
        <div className="flex-1 p-4 lg:p-6 border-r-0 lg:border-r-dashed lg:border-r-[0.5px] lg:border-black/60">
          <div className="space-y-6">
            {/* Title */}
            <h2 className="text-2xl lg:text-4xl font-bold font-urbanist text-black leading-normal">
              {eventData?.title || 'UX:80 - Demystifying Accessible Interface Design'}
           </h2>

            {/* Description */}
            <p className="text-base font-urbanist text-black leading-7 tracking-[0.32px]">
{stripHtmlTags(eventData?.description) }
            </p>

            {/* Event Details */}
            <div className="space-y-2">
              {/* Location */}
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="black" strokeOpacity="0.72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="black" strokeOpacity="0.72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-base font-urbanist text-black/72 font-medium truncate">
                  ICFOSS, Greenfield Stadium, Trivandrum
                </span>
              </div>

              {/* Time and Date */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                <div className="flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="black" strokeOpacity="0.72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-base font-urbanist text-black/72 font-medium">
                   {formatTime(eventData?.event_start_date)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z" stroke="black" strokeOpacity="0.72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-base font-urbanist text-black/72 font-medium">
                    {formatDate(eventData?.event_start_date)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Speaker Profile Section */}
        <div className="flex flex-col lg:flex-row border-t-dashed border-t-[0.5px] border-black/60 lg:border-t-0">
          {/* Speaker Image */}
         <div className="w-52 lg:w-[300px] h-72 md:h-full overflow-hidden relative">
          <img
            src={eventData?.banner}
            alt="UX PORT Speaker"
            className="w-full h-full object-cover object-right" 
          />
        </div>

          {/* Speaker Info */}
          <div className="flex-1 p-4 lg:p-6 flex flex-col h-full">
  <div className="space-y-2 max-w-[350px] flex-1">
    <h3 className="text-2xl lg:text-4xl font-semibold font-urbanist text-black">
      {eventData?.speakers?.[0]?.name}
    </h3>
    <p className="text-base font-urbanist text-black font-medium">
      {eventData?.speakers?.[0]?.position}
    </p>
    <p className="text-base font-urbanist text-black/72 leading-7 tracking-[0.32px]">
      {eventData?.speakers?.[0]?.bio}
    </p>
  </div>

  {/* Book Tickets Button at Bottom */}
  <div className="mt-auto pt-4">
    <a
      href={`https://makemypass.com/event/${event.name}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-14 justify-center items-center gap-[10px] font-urbanist text-xl font-normal transition-colors bg-[#87C041] hover:bg-[#87C041]/90 text-white"
      onClick={(e) => e.stopPropagation()} // prevent triggering parent link
    >
      Book Tickets Now
    </a>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
