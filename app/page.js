import Image from "next/image";
import Navbar from './components/Navbar'; // Assuming you'll create this component

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Welcome to Yelp</h1>
        <p className="text-xl mb-8">Discover great local businesses in your area.</p>
        {/* You can add more content here */}
      </main>
    </div>
  );
}
