import Hero from './components/Hero';
import { RecentActivitySection } from './components/RecentActivitySection';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.background}>
      <Hero />
      <RecentActivitySection />
      {/* Rest of your page content */}
    </div>
  );
}
