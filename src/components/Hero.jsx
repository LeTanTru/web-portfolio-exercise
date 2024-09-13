import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { useTypewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Hi, I'm Le Tan Tru", 'Front-end Web Developer'],
    loop: {}
  });

  return (
    <section className='relative mx-auto h-screen w-full'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5`}
      >
        <div className='mt-5 flex flex-col items-center justify-center'>
          <div className='h-5 w-5 rounded-full bg-[#915eff]' />
          <div className='violet-gradient h-40 w-1 bg-black sm:h-80'></div>
        </div>
        <div className='w-full text-center'>
          <h1 className={`${styles.heroHeadText} block`}>
            <span className='pink-text-gradient'>{text}</span>
            <span className='pink-text-gradient smooth-blinking-cursor ml-2'>
              |
            </span>
          </h1>
          <p
            className={`${styles.heroSubText} animate-zoom block bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent`}
          >
            Welcome to my website
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute bottom-32 flex w-full items-center justify-center xs:bottom-10'>
        <a href='#about'>
          <div className='flex h-[64px] w-[35px] items-center justify-center rounded-3xl border-4 border-solid border-secondary'>
            <motion.div
              animate={{ y: [-5, 15, -5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='mb-1 h-3 w-3 rounded-full bg-secondary'
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};
export default Hero;
