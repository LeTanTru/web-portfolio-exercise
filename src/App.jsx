import { useState, useEffect, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollProgressBar from '@components/ScrollProgressBar';
import Loading from './components/Loading';
import Particle from '@components/Particle';
import {
  About,
  Earth,
  Experience,
  Footer,
  Hero,
  Navbar,
  Project,
  Skills,
  SnakeGitCommit,
  StarsCanvas,
  Tech
} from '@components/index';

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
      <div className='fixed z-999 flex h-full w-full items-center justify-center bg-black-200 md:hidden'>
        <p className='text-xl font-bold text-purple-700'>
          Unsupported device !!!
        </p>
      </div>

      <div className='hidden md:block'>
        {loading ? (
          <Loading />
        ) : (
          <Suspense fallback={<Loading />}>
            <Particle />
            <div className={`relative bg-primary`}>
              <ScrollProgressBar />
              <div className='w-full bg-hero-pattern bg-cover bg-center bg-no-repeat'>
                <Navbar />
                <Hero />
              </div>
              <About />
              <Skills />
              <Experience />
              <Tech />
              <Project />
              <SnakeGitCommit />
              <div className='relative z-2'>
                <Earth />
                <StarsCanvas />
              </div>
              <Footer />
            </div>
          </Suspense>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
