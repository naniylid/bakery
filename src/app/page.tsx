import { Navigation } from '@/components/Navigation';
import '../styles/App.scss';
import { Header } from '@/components/Header';
import { AboutUs } from '@/components/AboutUs';
import { HowItsMade } from '@/components/HowItMade';
import { Chefs } from '@/components/Chefs';

export default function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <AboutUs />
      <HowItsMade />
      <Chefs />
    </>
  );
}
