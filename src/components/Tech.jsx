import { technologies } from '../constants/index';
import { SectionWrapper } from '../hoc/index';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import BallCanvas from './canvas/Ball';
import { motion } from 'framer-motion';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-[48px]'>
      <motion.div variant={textVariant()} className='block w-full text-center'>
        <h2 className={`${styles.sectionHeadText}`}>Tech stacks</h2>
      </motion.div>
      {technologies.map((tech) => {
        return (
          <div key={tech.name} className='group relative h-28 w-28'>
            <div className='h-full w-full text-center'>
              <BallCanvas icon={tech.icon} />
              <h3
                className={`absolute left-1/2 top-[-30px] flex -translate-x-1/2 items-center justify-center bg-clip-text ${tech.color} min-w-[130px] text-[18px] font-semibold text-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              >
                {tech.name}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, '');
