"use client";

import Image from "next/image";
import React, { createContext, useState, useContext, useRef, useEffect } from "react";
import Link from "next/link";

const MouseEnterContext = createContext(undefined);

const CardContainer = ({
  children,
  className,
  containerClassName
}) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (e) => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("py-20 flex items-center justify-center", containerClassName)}
        style={{
          perspective: "1000px",
        }}>
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}>
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

const CardBody = ({
  children,
  className
}) => {
  return (
    <div
      className={cn(
        "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}>
      {children}
    </div>
  );
};

const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
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
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}>
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

const recentActivities = [
  {
    id: 1,
    user: "Kevin N.",
    action: "wrote a review",
    time: "Just now",
    businessName: "Thuy's Bait And Tackle",
    review: "Great brick and mortar bait shop. Everything you need such as live bait, tackle, and equipment.",
    imageSrc: "/images/hotel.jpg",
  },
  {
    id: 2,
    user: "Sarah L.",
    action: "added a photo",
    time: "2 hours ago",
    businessName: "Joe's Diner",
    review: "Best pancakes in town! The atmosphere is cozy and the staff is friendly.",
    imageSrc: "/images/dineee2.webp",
  },
  {
    id: 3,
    user: "Mike R.",
    action: "checked in",
    time: "Yesterday",
    businessName: "City Gym",
    review: "Great equipment and clean facilities. The trainers are very helpful.",
    imageSrc: "/images/gym.png",
  },
  {
    id: 4,
    user: "Emily T.",
    action: "wrote a review",
    time: "2 days ago",
    businessName: "Green Leaf Bookstore",
    review: "A book lover's paradise! They have an amazing selection of both new and used books.",
    imageSrc: "/images/book.jpg",
  },
  {
    id: 5,
    user: "David W.",
    action: "updated their review",
    time: "3 days ago",
    businessName: "Tasty Thai",
    review: "Updated: The owner reached out and the service has greatly improved. Food is still amazing!",
    imageSrc: "/images/tasty.jpg",
  },
  {
    id: 6,
    user: "Lisa M.",
    action: "wrote a review",
    time: "4 days ago",
    businessName: "Pet Paradise",
    review: "Fantastic pet store with a wide variety of supplies. The staff is knowledgeable and friendly.",
    imageSrc: "/images/pet.jpg",
  },
];

export function RecentActivitySection() {
  return (
    <section className="py-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Recent Activity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentActivities.map((activity) => (
            <RecentActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentActivityCard({ activity }) {
  return (
    <CardContainer className="w-full">
      <CardBody className="bg-gray-100 relative group/card hover:shadow-xl hover:shadow-gray-300/[0.1] w-full h-auto rounded-xl p-4 border border-gray-200">
        <CardItem translateZ="20" className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <div>
            <CardItem
              translateZ="30"
              className="text-base font-semibold text-black"
            >
              {activity.user} {activity.action}
            </CardItem>
            <CardItem translateZ="25" className="text-xs text-gray-600">
              {activity.time}
            </CardItem>
          </div>
        </CardItem>

        <CardItem translateZ="50" className="w-full mb-3">
          <Image
            src={activity.imageSrc}
            height="1000"
            width="1000"
            className="h-40 w-full object-cover rounded-lg group-hover/card:shadow-xl"
            alt={activity.businessName}
          />
        </CardItem>

        <CardItem
          translateZ="60"
          className="text-lg font-bold text-black mb-2"
        >
          {activity.businessName}
        </CardItem>

        <CardItem
          translateZ="30"
          className="text-gray-700 text-xs mb-3 line-clamp-2"
        >
          {activity.review}
        </CardItem>

        <CardItem
          translateZ="20"
          as={Link}
          href="#"
          className="text-blue-600 hover:text-blue-800 text-xs font-medium"
        >
          Read more
        </CardItem>

        <div className="flex justify-between items-center mt-3">
          <CardItem
            translateZ="20"
            className="flex items-center space-x-1 text-gray-600"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            <span className="text-xs">Useful</span>
          </CardItem>
          <CardItem
            translateZ="20"
            className="flex items-center space-x-1 text-gray-600"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xs">Cool</span>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
