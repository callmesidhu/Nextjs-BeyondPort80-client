"use client";
import React, { useState } from 'react';
import axios from 'axios'; 

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    designation: '',
    domain: '', 
    location: '',
    reason: ''
  });

  const [reasonLength, setReasonLength] = useState(0);
  const [submissionStatus, setSubmissionStatus] = useState({ state: 'idle', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'reason') {
      setReasonLength(value.length);
    }
  };

  // 4. Implement the async handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus({ state: 'submitting', message: '' });

    try {
      // Make the POST request to your API endpoint
      const response = await axios.post('https://server.fayaport80.com/api/request/send', formData);

      // Handle success
      console.log('Form submitted successfully:', response.data);
      setSubmissionStatus({ state: 'success', message: 'Your request has been sent successfully!' });
      // Optionally, reset the form
      // setFormData({ name: '', email: '', organization: '', designation: '', domain: '', location: '', reason: '' });
      // setReasonLength(0);

    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error);
      setSubmissionStatus({ state: 'error', message: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header remains the same */}
      <header className="flex justify-between items-center px-6 md:px-[120px] py-[45px]">
        <div className="flex items-center">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/a8c4d2ac6fd248084c6f1b74fd857f324914ce8f?width=244" 
            alt="FAYA:80 Logo" 
            className="h-7 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center gap-12">
          <button className="font-urbanist text-black text-base font-normal hover:font-medium transition-all">About</button>
          <button className="font-urbanist text-black text-base font-normal hover:font-medium transition-all">Partners</button>
          <button className="font-urbanist text-black text-base font-normal hover:font-medium transition-all">Speakers</button>
        </nav>
      </header> 

      {/* Main Content */}
      <main className="mt-20 mx-auto px-6 md:px-32 pb-20 max-w-screen-xl">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-16">
          <div className="flex-1 lg:max-w-md mt-2">
            <h1 className="font-urbanist text-4xl font-bold text-black mb-6">
              Start Your Own :80
            </h1>
            <p className="font-urbanist text-lg font-normal text-black/80 leading-7">
              Launch a niche tech meetup with FAYA:80! Fill out this form to propose your event, connect with enthusiasts, and shape the future of technology.
            </p>
          </div>

          <div className="lg:w-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 md:gap-[72px]">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Fields are the same, just ensure they are wired correctly */}
                  <div className="space-y-2">
                    <label className="block font-ibm-plex text-xs font-normal text-gray-500 tracking-wider">Name</label>
                    <div className="w-72">
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" className="w-full px-4 py-3 bg-white font-ibm-plex text-sm text-black border-b border-gray-300 focus:border-orange-500 focus:outline-none transition-colors" required />
                    </div>
                  </div>
                   <div className="space-y-2">
                    <label className="block font-ibm-plex text-xs font-normal text-gray-500 tracking-wider">Email Address</label>
                    <div className="w-72">
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your personal email" className="w-full px-4 py-3 bg-white font-ibm-plex text-sm text-black border-b border-gray-300 focus:border-orange-500 focus:outline-none transition-colors" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block font-ibm-plex text-xs font-normal text-gray-500 tracking-wider">Organization/Company</label>
                    <div className="w-72">
                      <input type="text" name="organization" value={formData.organization} onChange={handleInputChange} placeholder="Enter your organization/ company" className="w-full px-4 py-3 bg-white font-ibm-plex text-sm text-black border-b border-gray-300 focus:border-orange-500 focus:outline-none transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block font-ibm-plex text-xs font-normal text-gray-500 tracking-wider">Designation</label>
                    <div className="w-72">
                      <input type="text" name="designation" value={formData.designation} onChange={handleInputChange} placeholder="Enter your designation" className="w-full px-4 py-3 bg-white font-ibm-plex text-sm text-black border-b border-gray-300 focus:border-orange-500 focus:outline-none transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* 5. Update Niche field to Domain */}
                  <div className="space-y-2">
                    <label className="block font-ibm-plex text-xs font-normal text-gray-500 tracking-wider">Niche/Domain</label>
                    <div className="w-72">
                      <input type="text" name="domain" value={formData.domain} onChange={handleInputChange} placeholder="What kind of :80 are you planning?" className="w-full px-4 py-3 bg-white font-ibm-plex text-sm text-black border-b border-gray-300 focus:border-orange-500 focus:outline-none transition-colors" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block font-ibm-plex text-xs font-normal text-gray-500 tracking-wider">Proposed Location</label>
                    <div className="w-72">
                      <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Enter proposed location" className="w-full px-4 py-3 bg-white font-ibm-plex text-sm text-black border-b border-gray-300 focus:border-orange-500 focus:outline-none transition-colors" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-end w-72">
                      <label className="font-ibm-plex text-xs font-normal text-gray-500 tracking-wider">The Reason</label>
                      <span className="font-ibm-plex text-xs font-normal text-gray-500">{reasonLength}/300</span>
                    </div>
                    <div className="w-72">
                      <textarea name="reason" value={formData.reason} onChange={handleInputChange} placeholder="Why are you interested to host :80s" maxLength={300} rows={5} className="w-full px-4 py-3 bg-white font-ibm-plex text-sm text-black border-b border-gray-300 focus:border-orange-500 focus:outline-none resize-none transition-colors" required />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button & Status Message */}
              <div className="flex flex-col items-end">
                <button
                  type="submit"
                  disabled={submissionStatus.state === 'submitting'}
                  className="bg-orange-600 text-white font-urbanist text-base font-medium px-4 py-3 w-40 flex justify-center items-center rounded-md hover:bg-orange-700 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {submissionStatus.state === 'submitting' ? 'Submitting...' : 'Request'}
                </button>
                {/* 6. Display success or error messages */}
                {submissionStatus.state === 'success' && (
                  <p className="mt-4 text-green-600 font-urbanist">{submissionStatus.message}</p>
                )}
                {submissionStatus.state === 'error' && (
                  <p className="mt-4 text-red-600 font-urbanist">{submissionStatus.message}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}