'use client';

import Link from "next/link";
import { useCursor } from "./CustomCursor";

export function Hero() {
  const { handleMouseEnter, handleMouseLeave } = useCursor();

  return (
    <div className="px-6 lg:px-[120px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
          {/* Hero Content */}
          <div className="flex flex-col gap-6 lg:max-w-[455px]">
            <div className="flex flex-col gap-2">
              <h1 className="font-urbanist text-4xl md:text-5xl lg:text-6xl font-bold leading-tight lg:leading-[70px] text-black">
                Ignite Everyone Everywhere
              </h1>
              <p className="font-urbanist text-sm lg:text-xl font-normal text-black tracking-wide">
                A global network of knowledge enthusiasts hosting niche meet ups
                to shape the future.
              </p>
            </div>

            <Link
              href="/discover"
              className="font-urbanist text-lg lg:text-xl font-semibold text-black underline decoration-2 underline-offset-4 hover:text-gray-600 transition-colors self-start"
              onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            >
              Discover All :80s
            </Link>
          </div>

          {/* Watch Reel Component */}
          <div className="flex flex-col items-center gap-2 lg:max-w-[253px] lg:ml-auto">
<div className="w-full max-w-[400px]">
  <iframe
    src="https://www.youtube.com/embed/yZg21bnatrE?autoplay=1&loop=1&mute=1&playlist=yZg21bnatrE&controls=0&modestbranding=1&showinfo=0&rel=0&fs=0"
    title="Watch Reel"
    className="w-full h-full"
    frameBorder="0"
    allow="autoplay; fullscreen"
  ></iframe>
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
