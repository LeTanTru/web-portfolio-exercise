import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { skills } from '../constants/index';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc/index';

const ServiceCard = ({ index, title, icon, fromColor, viaColor, toColor }) => {
  return (
    <Tilt className='relative h-[250px] w-full overflow-hidden rounded-xl bg-white/10 backdrop-blur-lg'>
      <motion.div
        variant={fadeIn(
          `${index % 2 == 0 ? 'left' : 'right'}`,
          'spring',
          0.5 * index,
          0.75
        )}
        className='green-pink-gradient mx-auto h-full w-full rounded-xl p-[2px] shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='flex h-full flex-col items-center justify-evenly rounded-xl bg-tertiary'
        >
          <div
            className={`animate-gradient-xy absolute inset-0 bg-gradient-to-r ${fromColor} ${viaColor} ${toColor} opacity-30`}
          ></div>
          <div className='relative w-full overflow-hidden py-5 backdrop-blur-lg'>
            <div className='flex flex-col items-center justify-center gap-y-5 p-6'>
              <div className='h-[50px] w-[50px]'>
                <img src={icon} className='h-full w-full object-cover' />
              </div>
              <h2 className='text-center text-2xl font-bold text-white/80'>
                {title}
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Skills = () => {
  return (
    <div className='relative z-1'>
      <motion.div variant={textVariant()}>
        <h2 className={styles.sectionHeadText}>My Skills</h2>
      </motion.div>
      <div className='mt-5 grid grid-cols-8 grid-cols-[repeat(_auto-fit,minmax(250px,1fr)_)] place-items-center gap-6'>
        {skills.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};
export default SectionWrapper(Skills, 'skill');
