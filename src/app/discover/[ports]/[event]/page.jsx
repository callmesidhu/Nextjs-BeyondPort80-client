'use client';

import EventDetails from '@/app/components/more/EventDetails'
import Footer from '@/app/components/more/Footer'
import HeroSection from '@/app/components/more/Hero'
import { MoreNavbar } from '@/app/components/more/MoreNavbar'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Page() {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          process.env.NEXT_PUBLIC_UX_LIVE
        );

        if (response.data.hasError) {
          throw new Error(response.data.message || 'Failed to fetch event data');
        }
        
        setEventData(response.data.response);
        setError(null);
      } catch (err) {
        console.error('Error fetching event data:', err);
        setError(err.message || 'Failed to fetch event data');
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className='overflow-x-hidden'>
        <MoreNavbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-2xl font-urbanist text-black">Loading event...</div>
        </div>
        <Footer />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className='overflow-x-hidden'>
        <MoreNavbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-urbanist text-red-500 mb-4">
              Error loading event
            </div>
            <div className="text-lg font-urbanist text-gray-600">
              {error}
            </div>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 bg-[#87C041] hover:bg-[#87C041]/90 text-white font-urbanist px-6 py-2 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className='overflow-x-hidden'>
      <MoreNavbar />
      <HeroSection eventData={eventData} />
      <EventDetails eventData={eventData} />
      <Footer />
    </div>
  )
}