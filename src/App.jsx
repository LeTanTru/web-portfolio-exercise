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
import Particle from './components/Particle';

const App = () => {
  return (
    <BrowserRouter>
      <Particle></Particle>
      <div className='relative bg-primary'>
        <div className='w-full bg-hero-pattern bg-cover bg-center bg-no-repeat'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />

        <Works />
        <Feedbacks />
        <div className='z-2 relative'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
