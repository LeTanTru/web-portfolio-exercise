import { useRef, useEffect, useState } from 'react';
import { technologies } from '../constants/index';
import { SectionWrapper } from '../hoc/index';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import BallCanvas from './canvas/Ball';
import { motion } from 'framer-motion';

// Lazy-loaded Ball component that only creates WebGL context when visible
const LazyBall = ({ tech }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className='h-full w-full text-center'>
      {isVisible && <BallCanvas icon={tech.icon} />}
    </div>
  );
};

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-[48px]'>
      <motion.div variant={textVariant()} className='block w-full text-center'>
        <h2 className={`${styles.sectionHeadText}`}>Tech stacks</h2>
      </motion.div>
      {technologies.map((tech) => {
        return (
          <div key={tech.name} className='group relative h-28 w-28'>
            <LazyBall tech={tech} />
            <h3
              className={`absolute left-1/2 top-[-30px] flex -translate-x-1/2 items-center justify-center bg-clip-text ${tech.color} min-w-[130px] whitespace-nowrap text-[18px] font-semibold text-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            >
              {tech.name}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, '');
