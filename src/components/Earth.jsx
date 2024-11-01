import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc/index';
import { slideIn } from '../utils/motion';
import EarthCanvas from './canvas/Earth';

const Earth = () => {
  return (
    <div className='relative z-2'>  
      <motion.div
        variants={slideIn('down', 'tween', 0.2, 1)}
        className='h-[600px] flex-1 xl:flex-1'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};
export default SectionWrapper(Earth, '');
