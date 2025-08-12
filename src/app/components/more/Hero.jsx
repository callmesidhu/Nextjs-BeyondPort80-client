export default function HeroSection() {
  return (
    <section className="w-full relative">
      {/* Background UX:80 Pattern - positioned absolutely to span full width */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
        <div className="flex items-center gap-6 text-[100px] md:text-[128px] font-bold font-urbanist text-black whitespace-nowrap">
          <span>UX:80</span>
          <span>UX:80</span>
          <span>UX:80</span>
          <span>UX:80</span>
          <span>UX:80</span>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full max-w-6xl mx-auto px-4 lg:px-8 py-8 relative z-10">
        {/* Main video/image container */}
        <div className="mb-6">
          <div className="relative mb-4">
            <img
              src="/UX.png"
              alt="UX:80 Sunday Service Celebration"
              className="w-full max-w-[584px] h-auto aspect-[584/316] object-cover shadow-[0_4px_9.2px_1px_rgba(0,0,0,0.10)] "
            />
          </div>

          {/* Watch Youtube Live text */}
          <div className="text-right max-w-[584px]">
            <span className="text-black font-urbanist text-base font-semibold">
              (Watch Youtube Live)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
