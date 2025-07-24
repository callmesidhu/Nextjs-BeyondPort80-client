'use client'; // Only if you're using Next.js App Router

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full px-8 py-6 lg:px-[120px] lg:py-[45px]">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/7288416af14be0d8eab3753347c111cb4f4bf56d?width=244" 
            alt="Logo" 
            className="h-7 w-auto"
          />
        </div>

        {/* Navigation Links - Hidden on mobile, shown on desktop */}
        <div className="hidden md:flex items-center gap-12">
          <Link 
            href="/about" 
            className="font-urbanist text-base font-medium text-black hover:text-gray-600 transition-colors"
          >
            About
          </Link>
          <Link 
            href="/partners" 
            className="font-urbanist text-base font-medium text-black hover:text-gray-600 transition-colors"
          >
            Partners
          </Link>
          <Link 
            href="/speakers" 
            className="font-urbanist text-base font-medium text-black hover:text-gray-600 transition-colors"
          >
            Speakers
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex-shrink-0">
          <button className="bg-brand-orange px-4 py-4 text-white font-urbanist text-base font-medium hover:bg-orange-700 bg-orange-600 transition-colors">
            Request New :80
          </button>
        </div>

        {/* Mobile menu button - shown on mobile only */}
        <div className="md:hidden">
          <button className="p-2 text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
