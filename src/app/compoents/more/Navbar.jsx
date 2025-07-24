import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex w-full max-w-6xl mx-auto justify-between items-center px-4 py-6 lg:px-8">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/7288416af14be0d8eab3753347c111cb4f4bf56d?width=244" 
          alt="FAYA:80 Logo" 
          className="h-7 w-auto"
        />
      </div>

      {/* Navigation Links - Hidden on mobile */}
      <div className="hidden md:flex items-center gap-12">
        <Link 
          to="/about" 
          className="text-black font-urbanist text-base font-normal hover:text-gray-600 transition-colors"
        >
          About
        </Link>
        <Link 
          to="/partners" 
          className="text-black font-urbanist text-base font-normal hover:text-gray-600 transition-colors"
        >
          Partners
        </Link>
        <Link 
          to="/speakers" 
          className="text-black font-urbanist text-base font-normal hover:text-gray-600 transition-colors"
        >
          Speakers
        </Link>
      </div>

      {/* Book Tickets Button */}
      <button className="bg-[#87C041] text-white px-4 py-4 font-urbanist text-base font-normal hover:bg-[#7AB037] transition-colors flex-shrink-0">
        Book Tickets
      </button>

      {/* Mobile Menu Button - Visible on mobile */}
      <button className="md:hidden text-black p-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </nav>
  );
}
