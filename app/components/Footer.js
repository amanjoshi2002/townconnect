import Link from 'next/link';
    import Image from 'next/image';

    export default function Footer() {
    return (
        <footer className="bg-white text-black">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-6 md:mb-0">
                <Image
                src="/images/logo.png"
                alt="Company Logo"
                width={200}
                height={120}
                className="mb-2"
                style={{ filter: 'brightness(0)' }}
                priority
                quality={100}
                />
                <p className="text-gray-600 text-sm mt-2">
                Connecting communities and local businesses.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-6 md:gap-12">
                <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-2">
                    Explore
                </h3>
                <ul className="space-y-2">
                    <li>
                    <Link href="/explorelocal" className="text-sm text-gray-600 hover:text-black">
                        Explore Local
                    </Link>
                    </li>
                    <li>
                    <Link href="/communityevents" className="text-sm text-gray-600 hover:text-black">
                        Community Events
                    </Link>
                    </li>
                </ul>
                </div>
                <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-2">
                    Company
                </h3>
                <ul className="space-y-2">
                    <li>
                    <Link href="/about" className="text-sm text-gray-600 hover:text-black">
                        About Us
                    </Link>
                    </li>
                    <li>
                    <Link href="/privacy" className="text-sm text-gray-600 hover:text-black">
                        Privacy Policy
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            <div className="mt-6 border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-600 text-center">
                &copy; {new Date().getFullYear()} TownConnect. All rights reserved.
            </p>
            </div>
        </div>
        </footer>
    );
    }