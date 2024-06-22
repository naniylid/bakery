import './styles/App.scss';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { Slider } from './components/Slider';

export default function Home() {
  return (
    <div className='container'>
      <Navigation />
      <Header />
      <Slider />
    </div>
  );
}
