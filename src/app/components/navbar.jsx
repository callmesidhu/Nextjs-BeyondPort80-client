'use client';

import Link from "next/link";
import { useState } from "react";
import { useCursor } from './CustomCursor';
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { handleMouseEnter, handleMouseLeave } = useCursor();

  return (
    <nav className="w-full px-8 lg:px-[120px] py-6">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7288416af14be0d8eab3753347c111cb4f4bf56d?width=244"
            alt="Logo"
            className="h-7 w-auto"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-12">
          <Link
            href="/"
            className="font-urbanist text-base font-medium text-black hover:text-gray-600 transition-colors"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            About
          </Link>
          <Link
            href="/"
            className="font-urbanist text-base font-medium text-black hover:text-gray-600 transition-colors"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Partners
          </Link>
          <Link
            href="/"
            className="font-urbanist text-base font-medium text-black hover:text-gray-600 transition-colors"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Speakers
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block flex-shrink-0">
          <button
            onClick={() => router.push('/request')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="bg-orange-600 px-4 py-4 text-white font-urbanist text-base font-medium hover:bg-orange-700 transition-colors"
          >
            Request New :80
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 p-4 space-y-4 rounded-xl shadow-xl bg-white absolute top-14 left-7 z-50 h-[28%] w-[310px]">
          <Link href="/" className="block font-urbanist text-base font-medium text-black hover:text-gray-600">
            About
          </Link>
          <Link href="/" className="block font-urbanist text-base font-medium text-black hover:text-gray-600">
            Partners
          </Link>
          <Link href="/" className="block font-urbanist text-base font-medium text-black hover:text-gray-600">
            Speakers
          </Link>
          <button
            onClick={() => router.push('/request')}
            className="bg-orange-600 px-8 py-3 text-white font-urbanist text-base font-medium hover:bg-orange-700 transition-colors"
          >
            Request New :80
          </button>
        </div>
      )}
    </nav>
  );
}
