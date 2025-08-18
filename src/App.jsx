import { useState, useEffect, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import Loading from './components/Loading';
import Particle from '@/components/Particle';
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
} from '@/components';

import heroBg from '@/assets/herobg.png'; // ✅ import ảnh đúng cách

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // chờ tối đa 1s, hoặc bỏ hẳn setTimeout
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    };

    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className='hidden md:block'>
        {loading ? (
          <Loading />
        ) : (
          // ✅ Suspense phải bọc toàn bộ app
          <Suspense fallback={<Loading />}>
            <Particle />
            <div className='relative bg-primary'>
              <ScrollProgressBar />
              <div
                className='w-full bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${heroBg})` }}
              >
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
