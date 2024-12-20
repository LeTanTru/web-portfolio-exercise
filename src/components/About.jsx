import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc/index';
import { abouts } from '@constants';
import { Element } from 'react-scroll';
import { avatar } from '../assets/index';

const InformationItem = ({ icon, value }) => {
  return (
    <div className='mb-2 flex items-center gap-x-2'>
      <div className='h-[25px] w-[25px]'>
        <img src={icon} className='h-full w-full object-cover' />
      </div>
      <p className='text-xl font-bold text-white/80'>{value}</p>
    </div>
  );
};

const AboutCard = () => {
  return (
    <div className='relative w-full overflow-hidden rounded-xl bg-white/10 backdrop-blur-lg'>
      <motion.div
        variant={fadeIn('right', 'spring', 0.5, 0.75)}
        className='about relative mx-auto h-full w-full overflow-hidden rounded-xl shadow-card'
      >
        <div className='relative left-[5px] top-[5px] z-[999] flex h-[calc(100%_-_10px)] w-[calc(100%_-_10px)] flex-col items-center justify-evenly'>
          <div className='animate-gradient-xy absolute inset-0 h-[calc(100%_-_10px)] rounded-xl bg-gradient-to-r opacity-30'></div>
          <div className='relative z-999 flex items-center'>
            <div className='h-[200px] w-[300px] overflow-hidden  bg-red-500 rounded-md'>
              <img src={avatar} alt='' className='h-full w-full object-cover' />
            </div>
            <div className='relative h-full w-full p-6'>
              {abouts.map((about) => (
                <InformationItem key={about.icon} {...about} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <Element name='about' className='relative z-1'>
      <motion.div variant={textVariant()}>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>
      <AboutCard />
    </Element>
  );
};
export default SectionWrapper(About, 'about');
