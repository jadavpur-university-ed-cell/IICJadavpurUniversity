import { Routes, Route } from 'react-router';
import { useLenis } from './hooks/useLenis';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Iic from './pages/Iic';
import Ecell from './pages/Ecell';
import Ipr from './pages/Ipr';
import Tinkering from './pages/Tinkering';
import Startup from './pages/Startup';
import Clubs from './pages/Clubs';
import StartupGenerated from './pages/StartupGenerated';

function App() {
  useLenis();

  return (
    <div className="relative">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iic" element={<Iic />} />
        <Route path="/ecell" element={<Ecell />} />
        <Route path="/ipr" element={<Ipr />} />
        <Route path="/tinkering" element={<Tinkering />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/events" element={<Events />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/startup-generated" element={<StartupGenerated />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
