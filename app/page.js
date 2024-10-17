import Hero from './components/Hero';
import { RecentActivitySection } from './components/RecentActivitySection';

export default function Home() {
  return (
    <div className="min-h-screen" style={{
      background: 'rgb(2,0,36)',
      background: 'linear-gradient(54deg, rgba(2,0,36,1) 0%, rgba(0,0,90,1) 40%, rgba(0,159,214,1) 75%, rgba(0,175,226,1) 100%, rgba(0,212,255,1) 100%)',
      backgroundAttachment: 'fixed'
    }}>
      <Hero />
      <RecentActivitySection />
      {/* Rest of your page content */}
    </div>
  );
}
