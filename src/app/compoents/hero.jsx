import Link from "next/link";

export function Hero() {
  return (
    <div className="px-6 lg:px-[120px] py-16 lg:py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
          {/* Hero Content */}
          <div className="flex flex-col gap-6 lg:max-w-[455px]">
            <div className="flex flex-col gap-2">
              <h1 className="font-urbanist text-4xl md:text-5xl lg:text-6xl font-bold leading-tight lg:leading-[70px] text-black">
                Ignite Everyone Everywhere
              </h1>
              <p className="font-urbanist text-sm lg:text-xl font-normal text-black tracking-wide">
                A global network of knowledge enthusiasts hosting niche meet ups to shape the future.
              </p>
            </div>

            <Link 
              href="/discover"
              className="font-urbanist text-lg lg:text-xl font-semibold text-black underline decoration-2 underline-offset-4 hover:text-gray-600 transition-colors self-start"
            >
              Discover All :80s
            </Link>
          </div>

          {/* Watch Reel Component */}
          <div className="flex flex-col items-center gap-2 lg:max-w-[253px] lg:ml-auto">
            <div className="w-full max-w-[320px]">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/9194fe9ed9bdc24865bb8112ef37f1d4d539961d?width=506" 
                alt="Watch Reel"
                className="w-full h-auto aspect-[253/174] object-cover"
              />
            </div>
            <span className="font-urbanist text-md font-semibold text-black text-center">
              (Watch Reel)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
