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
  Project,
  StarsCanvas,
  Footer,
  WeeklyExercise
} from './components';
import Particle from './components/Particle';
import ScrollProgressBar from '@components/ScrollProgressBar';
import Loading from './components/Loading';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {
      setIsMobile(true);
    }
  }, []);

  return (
    <BrowserRouter>
      {isMobile ? (
        <div className='suggestion'>
          For the best experience, please use a PC or laptop.
        </div>
      ) : (
        <>
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
            <WeeklyExercise />
            {/* <Project /> */}
            <Feedbacks />
            <div className='relative z-2'>
              <Contact />
              <StarsCanvas />
            </div>
            <Footer />
          </div>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
