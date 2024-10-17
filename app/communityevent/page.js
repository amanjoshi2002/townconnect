'use client';

import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import {
  IconMusic,
  IconPalette,
  IconBook,
  IconRun,
  IconPlant2,
  IconChefHat,
  IconBalloon,
} from "@tabler/icons-react";

export default function CommunityEvents() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-green-900">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Community Events</h1>
        <BentoGridDemo />
      </div>
    </div>
  );
}

function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const ImageContainer = ({ src, alt }) => (
  <div className="relative w-full h-48 rounded-xl overflow-hidden">
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
    />
  </div>
);

const items = [
  {
    title: "Local Music Festival",
    description: "Enjoy live performances from local bands and artists.",
    header: <ImageContainer src="/images/music.jpg" alt="Local Music Festival" />,
    icon: <IconMusic className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Art in the Park",
    description: "Outdoor exhibition featuring works from local artists.",
    header: <ImageContainer src="/images/art.jpg" alt="Art in the Park" />,
    icon: <IconPalette className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Community Book Fair",
    description: "Discover new reads and meet local authors.",
    header: <ImageContainer src="/images/book1.jpg" alt="Community Book Fair" />,
    icon: <IconBook className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Annual Marathon",
    description: "Join runners of all levels in our city-wide race.",
    header: <ImageContainer src="/images/marathon.jpg" alt="Annual Marathon" />,
    icon: <IconRun className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Green Thumb Workshop",
    description: "Learn gardening tips and tricks from local experts.",
    header: <ImageContainer src="/images/garden.jpg" alt="Green Thumb Workshop" />,
    icon: <IconPlant2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Culinary Festival",
    description: "Taste diverse cuisines from local restaurants and food trucks.",
    header: <ImageContainer src="/images/culinary.jpg" alt="Culinary Festival" />,
    icon: <IconChefHat className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Family Fun Day",
    description: "A day filled with games, activities, and entertainment for all ages.",
    header: <ImageContainer src="/images/paint.jpg" alt="Family Fun Day" />,
    icon: <IconBalloon className="h-4 w-4 text-neutral-500" />,
  },
];