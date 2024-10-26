import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { abouts } from '../constants/index';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc/index';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='mx-auto w-full xs:w-[250px]'>
      <motion.div
        variant={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='green-pink-gradient mx-auto w-full rounded-[20px] p-[2px] shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5'
        >
          <img src={icon} alt={title} className='h-16 w-16 object-contain' />
          <h3 className='text-center text-[20px] font-bold text-white'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className='relative z-1'>
      <motion.div variant={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variant={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-justify text-[18px] leading-[30px] text-secondary'
      >
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aut
        nam, hic laudantium nostrum deleniti libero molestias illum placeat
        dolorem voluptatum laboriosam corporis nulla sint, nemo labore ea minus
        alias. */}
      </motion.p>

      <div className='mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {abouts.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};
export default SectionWrapper(About, 'about');
