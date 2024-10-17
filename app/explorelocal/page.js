'use client';

import { useState, createContext, useContext, useRef, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const businesses = [
  { id: 1, name: "Joe's Diner", category: "Restaurants", rating: 4.5, image: "/images/restaurant.jpg", description: "Classic American diner" },
  { id: 2, name: "Main Street Books", category: "Retail", rating: 4.2, image: "/images/bookstore.jpg", description: "Independent bookstore" },
  { id: 3, name: "City Gym", category: "Health", rating: 4.7, image: "/images/gym.jpg", description: "24/7 fitness center" },
  { id: 4, name: "Local Theater", category: "Entertainment", rating: 4.0, image: "/images/theater.jpg", description: "Live performances and shows" },
  { id: 5, name: "Quick Fix Auto", category: "Services", rating: 4.8, image: "/images/auto.jpg", description: "Reliable auto repair" },
  // Add more businesses as needed
];

const categories = ["All", "Restaurants", "Retail", "Services", "Entertainment", "Health"];

const MouseEnterContext = createContext(undefined);

const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 10;
    const y = (e.clientY - top - height / 2) / 10;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div className={`py-4 flex items-center justify-center ${containerClassName}`} style={{ perspective: "1000px" }}>
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`flex items-center justify-center relative transition-all duration-200 ease-linear ${className}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

const CardBody = ({ children, className }) => {
  return (
    <div className={`h-full w-full [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] ${className}`}>
      {children}
    </div>
  );
};

const CardItem = ({ as: Tag = "div", children, className, translateX = 0, translateY = 0, translateZ = 0, rotateX = 0, rotateY = 0, rotateZ = 0, ...rest }) => {
  const ref = useRef(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    <Tag ref={ref} className={`w-fit transition duration-200 ease-linear ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

export default function ExploreLocal() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("rating");

  const filteredBusinesses = businesses
    .filter(business => selectedCategory === "All" || business.category === selectedCategory)
    .sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-white">Explore Local Businesses</h1>
        
        <div className="mb-6 flex justify-between items-center">
          <div>
            <label htmlFor="category" className="mr-2">Category:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border rounded p-2"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="sort" className="mr-2">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded p-2"
            >
              <option value="rating">Rating</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBusinesses.map(business => (
            <CardContainer key={business.id} className="w-full h-full">
              <CardBody className="border rounded-lg overflow-hidden shadow-lg bg-white">
                <CardItem translateZ="100">
                  <Image
                    src={business.image}
                    alt={business.name}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </CardItem>
                <div className="p-4">
                  <CardItem translateZ="50" as="h2" className="text-xl font-semibold mb-2">{business.name}</CardItem>
                  <CardItem translateZ="60" as="p" className="text-gray-600 mb-2">{business.description}</CardItem>
                  <div className="flex justify-between items-center">
                    <CardItem translateZ="40" as="span" className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {business.category}
                    </CardItem>
                    <CardItem translateZ="40" as="span" className="text-yellow-500">★ {business.rating.toFixed(1)}</CardItem>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </>
  );
}
