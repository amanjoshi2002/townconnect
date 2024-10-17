'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar({ className = '' }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/explorelocal", text: "Explore Local" },
    { href: "/", text: "Start A Project" },
    { href: "/communityevent", text: "Community Events" },
    { href: "#", text: "About" },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className={`bg-transparent ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 -ml-4">
           <a href="/">
           <Image
              src="/images/logo.png"
              alt="TownConnect"
              width={240}
              height={120}
              className="object-contain"
            />
            </a>
            
          </div>
          
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-start">
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
          
          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-white hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                {link.text}
              </Link>
            ))}
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

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Black gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-95"></div>
          
          {/* Menu content */}
          <div className="relative z-50 px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                {link.text}
              </Link>
            ))}
            <a href="#" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">User Profile</a>
          </div>
        </div>
      )}
    </nav>
  );
}
