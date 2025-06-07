import React, { useState, useEffect } from 'react';

const CallForSpeakersModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="wrapper h-auto bg-blend-dark p-4 my-12 mb-24 md:mb-4 mx-auto md:max-w-lg md:w-1/2 md:h-[95vh] md:items-center md:flex-col items-center justify-center shadow-lg w-full relative overflow-scroll">
        <button
          className="absolute top-2 right-7 text-cyan-600 hover:text-cyan-800 text-4xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="m-auto md:h-[78vh] flex flex-col md:flex-row md:items-center md:justify-between rounded-2xl">
          <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 rounded-lg shadow-lg p-6 md:p-8 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-teal-700">Call for Speakers</h1>
              <span className="bg-green-100 text-teal-700 text-sm font-medium px-3 py-1 rounded-full">
                In 4 months
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-6 mb-6 pb-6 border-b border-gray-200">
              <div>
                <p className="text-gray-600 text-sm mb-1">Call opens at 12:00 AM</p>
                <p className="text-lg font-bold text-teal-700">15 May 2025</p>
              </div>
              <div className="md:text-right">
                <p className="text-gray-600 text-sm mb-1">Call closes at 11:59 PM</p>
                <p className="text-lg font-bold text-teal-700">30 Sep 2025</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <div className="text-gray-600 text-sm mb-4 md:mb-0">
                <p>Call closes in Eastern Daylight Time (UTC-04:00) timezone.</p>
                <p>Closing time in your timezone (America/New_York) is <span className="font-semibold">30 Sep 2025 11:59 pm</span>.</p>
              </div>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Add to calendar</p>
              </button>
            </div>

            <div className="mb-8">
              <span className="text-lg font-semibold text-teal-700">Are you passionate about cybersecurity and eager to share your expertise?

                Become a speaker at the 2025 BSides Cybersecurity Conference at Florida Southwestern State College in Fort Myers!

                We're looking for dynamic presenters to contribute to our event.</span>
            </div>

            <div className="text-center">
              <a href='https://sessionize.com/bsidesswfl2025'>
                <button className="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-200 w-full md:w-auto">
                  Become a Speaker! <img className="inline-block w-12 h-12 ml-4" src="bsideslogo.png" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForSpeakersModal;
