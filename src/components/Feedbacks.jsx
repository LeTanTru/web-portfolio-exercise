import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc/index';
import { testimonials } from '../constants/index';

const FeedBackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image
}) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className='w-[200px] rounded-3xl bg-black-200 p-10 xs:w-full'
    >
      <p className='text-[48px] font-black text-white'>&quot;</p>
      <div className='mt-1'>
        <p className='text-[18[x] tracking-wider text-white'>{testimonial}</p>
        <div className='mt-7 flex items-center justify-center gap-1'>
          <div className='flex flex-1 flex-col'>
            <p className='text-[16px] font-medium text-white'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>
            <p className='mt-1 text-[12px] text-secondary'>
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className='object cover h-10 w-10 rounded-full'
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className='mt-12 rounded-[20px] bg-gradient-to-b from-purple-800 to-slate-800'>
      <div className={`min-h-[300px] rounded-2xl p-[40px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20 grid grid-cols-1 gap-7 pb-14 lg:grid-cols-3`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedBackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};
export default SectionWrapper(Feedbacks, '');
