import './App.css';
import Category from './components/Category';
import Footer from './components/Footer';
import HeroCarousel from './components/HeroCarousel';
import Navbar from './components/Navbar';
import RecentCard from './components/RecentCard';
import SectionCard from './components/SectionCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroCarousel />
      <SectionCard />
      <RecentCard />
      <Category />
      <hr className='mb-2' />
      <Footer />
    </div>
  );
}

export default App;
