import './styles/App.scss';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';

export default function Home() {
  return (
    <div className='container'>
      <Navigation />
      <Header />
    </div>
  );
}
