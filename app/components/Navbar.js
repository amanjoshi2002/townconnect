'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Navbar({ className = '' }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className={`bg-transparent ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 -ml-4">
            <Image
              src="/images/logo.png"
              alt="TownConnect"
              width={240}
              height={120}
              className="object-contain"
            />
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-start">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <input id="search" name="search" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm" placeholder="things to do, nail salons, plumbers" type="search" />
              </div>
            </div>
            <button type="submit" className="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
            <a href="/explorelocal" className="text-white hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Explore Local</a>
            <a href="#" className="text-white hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Business Profile</a>
            <a href="#" className="text-white hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Community Events</a>
            <a href="#" className="text-white hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Map View</a>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-white hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                User Profile
                <svg className="ml-2 -mr-0.5 h-4 w-4 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">My Account</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
