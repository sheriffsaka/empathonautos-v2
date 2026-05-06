import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/common/Layout';
import Home from './pages/Home';
import Showroom from './pages/Showroom';
import Corporate from './pages/Corporate';
import Dealers from './pages/Dealers';
import PreOrder from './pages/PreOrder';
import TrackOrder from './pages/TrackOrder';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="showroom" element={<Showroom />} />
          <Route path="corporate" element={<Corporate />} />
          <Route path="dealers" element={<Dealers />} />
          <Route path="pre-order" element={<PreOrder />} />
          <Route path="track" element={<TrackOrder />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
