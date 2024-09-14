import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer
} from './components';
import Particle from '@components/Particle';
import ScrollProgressBar from '@components/ScrollProgressBar';
import Loading from '@components/Loading';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => {
      setLoading(false);
    });
  }, []);

  return (
    <BrowserRouter>
      {loading && <Loading />}
      <Particle />
      <div className={`relative bg-primary ${loading ? 'hidden' : ''}`}>
        <ScrollProgressBar />
        <div className='w-full bg-hero-pattern bg-cover bg-center bg-no-repeat'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-2'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
