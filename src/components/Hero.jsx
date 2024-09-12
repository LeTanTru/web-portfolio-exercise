import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative mx-auto h-screen w-full'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5`}
      >
        <div className='mt-5 flex flex-col items-center justify-center'>
          <div className='h-5 w-5 rounded-full bg-[#915eff]' />
          <div className='violet-gradient h-40 w-1 bg-black sm:h-80'></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I&apos;m <span className='text-[#915eff]'>Le Tan Tru</span>
          </h1>
          <p className={`${styles.heroSubText} mt text-white`}>
            I&apos;m a front-end web developer !!!
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};
export default Hero;
