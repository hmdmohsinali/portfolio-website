import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
    <Analytics/>
    </div>
  );
}

export default App;
