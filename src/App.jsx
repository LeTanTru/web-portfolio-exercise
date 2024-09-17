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
        <WeeklyExercise />
        {/* <Project /> */}
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
