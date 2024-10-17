'use client';

import { useState, useEffect } from 'react';

export default function Popup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the popup after 5 seconds
    const timer = setTimeout(() => setIsVisible(true), 1000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 max-w-sm mx-4 relative">
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4 text-red-600">Exciting Offers!</h2>
        <p className="mb-4">
          Don't miss out on our limited-time deals! Get up to 50% off on selected local services.
        </p>
        <button
          onClick={closePopup}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
        >
          Check Offers
        </button>
      </div>
    </div>
  );
}