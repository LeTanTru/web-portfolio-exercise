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

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {
      setIsMobile(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className='fixed flex h-full w-full items-center justify-center md:hidden'>
        <p className='text-xl font-bold text-purple-700'>
          This website only supports on PC or Laptop.
        </p>
      </div>
      {isMobile ? (
        <div className='fixed flex h-full w-full items-center justify-center md:hidden'>
          <p className='text-xl font-bold text-purple-700'>
            This website only supports on PC or Laptop.
          </p>
        </div>
      ) : (
        <>
          {loading && <Loading />}
          <Particle />
          <div className={`relative bg-primary`}>
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
