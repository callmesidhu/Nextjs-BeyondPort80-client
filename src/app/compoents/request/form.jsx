"use client";
import React, { useState } from 'react';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    designation: '',
    niche: '',
    location: '',
    reason: ''
  });

  const [reasonLength, setReasonLength] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'reason') {
      setReasonLength(value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-[120px] py-[45px]">
        <div className="flex items-center">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/a8c4d2ac6fd248084c6f1b74fd857f324914ce8f?width=244" 
            alt="FAYA:80 Logo" 
            className="h-7 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center gap-12">
          <button className="font-urbanist text-black text-base font-normal hover:font-medium transition-all">
            About
          </button>
          <button className="font-urbanist text-black text-base font-normal hover:font-medium transition-all">
            Partners
          </button>
          <button className="font-urbanist text-black text-base font-normal hover:font-medium transition-all">
            Speakers
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-[120px] pb-20">
        <div className="flex flex-col lg:flex-row lg:justify-end lg:items-start gap-8 lg:gap-[98px]">
          {/* Left Side - Description */}
          <div className="flex-1 lg:max-w-md">
            <h1 className="font-urbanist text-2xl font-bold text-black mb-6">
              Start Your Own :80
            </h1>
            <p className="font-urbanist text-base font-normal text-black leading-6 tracking-[0.32px]">
              Launch a niche tech meetup with FAYA:80! Fill out this form to propose your event, connect with enthusiasts, and shape the future of technology.
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Left Column */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-[72px]">
                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="block font-ibm-plex text-xs font-normal text-faya-text-secondary tracking-[0.32px] leading-4">
                      Name
                    </label>
                    <div className="w-72">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-[15px] bg-white font-ibm-plex text-sm font-normal text-faya-placeholder tracking-[0.16px] leading-[18px] placeholder:text-faya-placeholder border-0 border-b border-faya-border-strong focus:border-faya-orange focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="block font-ibm-plex text-xs font-normal text-faya-text-secondary tracking-[0.32px] leading-4">
                      Email Address
                    </label>
                    <div className="w-72">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your personal email"
                        className="w-full px-4 py-[15px] bg-white font-ibm-plex text-sm font-normal text-faya-placeholder tracking-[0.16px] leading-[18px] placeholder:text-faya-placeholder border-0 border-b border-faya-border-strong focus:border-faya-orange focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Organization Field */}
                  <div className="space-y-2">
                    <label className="block font-ibm-plex text-xs font-normal text-faya-text-secondary tracking-[0.32px] leading-4">
                      Organization/Company
                    </label>
                    <div className="w-72">
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="Enter your organization/ company"
                        className="w-full px-4 py-[15px] bg-white font-ibm-plex text-sm font-normal text-faya-placeholder tracking-[0.16px] leading-[18px] placeholder:text-faya-placeholder border-0 border-b border-faya-border-strong focus:border-faya-orange focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Designation Field */}
                  <div className="space-y-2">
                    <label className="block font-ibm-plex text-xs font-normal text-faya-text-secondary tracking-[0.32px] leading-4">
                      Designation
                    </label>
                    <div className="w-72">
                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        placeholder="Enter your designation"
                        className="w-full px-4 py-[15px] bg-white font-ibm-plex text-sm font-normal text-faya-placeholder tracking-[0.16px] leading-[18px] placeholder:text-faya-placeholder border-0 border-b border-faya-border-strong focus:border-faya-orange focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Niche Field */}
                  <div className="space-y-2">
                    <label className="block font-ibm-plex text-xs font-normal text-faya-text-secondary tracking-[0.32px] leading-4">
                      Niche/Domain
                    </label>
                    <div className="w-72">
                      <input
                        type="text"
                        name="niche"
                        value={formData.niche}
                        onChange={handleInputChange}
                        placeholder="What kind of :80 are you planning?"
                        className="w-full px-4 py-[15px] bg-white font-ibm-plex text-sm font-normal text-faya-placeholder tracking-[0.16px] leading-[18px] placeholder:text-faya-placeholder border-0 border-b border-faya-border-strong focus:border-faya-orange focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Location Field */}
                  <div className="space-y-2">
                    <label className="block font-ibm-plex text-xs font-normal text-faya-text-secondary tracking-[0.32px] leading-4">
                      Proposed Location
                    </label>
                    <div className="w-72">
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Enter proposed location"
                        className="w-full px-4 py-[15px] bg-white font-ibm-plex text-sm font-normal text-faya-placeholder tracking-[0.16px] leading-[18px] placeholder:text-faya-placeholder border-0 border-b border-faya-border-strong focus:border-faya-orange focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Reason Field */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-end w-72">
                      <label className="font-ibm-plex text-xs font-normal text-faya-text-secondary tracking-[0.32px] leading-4">
                        The Reason
                      </label>
                      <span className="font-ibm-plex text-xs font-normal text-faya-text-secondary tracking-[0.32px] leading-4">
                        {reasonLength}/300
                      </span>
                    </div>
                    <div className="w-72">
                      <textarea
                        name="reason"
                        value={formData.reason}
                        onChange={handleInputChange}
                        placeholder="Why are you interested to host :80s"
                        maxLength={300}
                        rows={5}
                        className="w-full px-4 py-3 bg-white font-ibm-plex text-sm font-normal text-faya-placeholder tracking-[0.16px] leading-[18px] placeholder:text-faya-placeholder border-0 border-b border-faya-border-strong focus:border-faya-orange focus:outline-none resize-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-faya-orange text-white font-urbanist text-base font-medium px-4 py-4 w-[150px] flex justify-center items-center hover:bg-opacity-90 transition-opacity"
                >
                  Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
