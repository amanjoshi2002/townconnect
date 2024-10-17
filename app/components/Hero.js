"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';

const images = [
  '/images/bus.jpg',
  '/images/funds.jpg',
  '/images/fruits.jpg',
  '/images/men.jpg'
];

const marathiText = [
  "शहर जोडा,प्रगती साधा,",
  "नव्या संधी निर्माण करा,",
  "एकत्र येऊन भविष्य घडा"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [displayText, setDisplayText] = useState(['', '', '', '']);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;

    const timer = setInterval(() => {
      if (lineIndex < marathiText.length) {
        if (charIndex < marathiText[lineIndex].length) {
          setDisplayText(prev => {
            const newText = [...prev];
            newText[lineIndex] = marathiText[lineIndex].slice(0, charIndex + 1);
            return newText;
          });
          charIndex++;
        } else {
          lineIndex++;
          charIndex = 0;
        }
      } else {
        clearInterval(timer);
      }
    }, 50); // Adjust the speed of text appearance here

    return () => clearInterval(timer);
  }, []);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative">
      <Navbar className="absolute top-0 left-0 right-0 z-20" />
      
      <div className="relative h-screen overflow-hidden">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`Background ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}

        <div className="relative z-10 flex flex-col justify-center items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          {displayText.map((line, index) => (
            <h1 key={index} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
              {line}
            </h1>
          ))}

          <div className="flex justify-center space-x-3 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                } transition-all duration-300 hover:bg-white`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
