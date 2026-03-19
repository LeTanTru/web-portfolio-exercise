import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc/index';
import { abouts } from '@constants';
import { Element } from 'react-scroll';
import { avatar } from '../assets/index';

const InformationItem = ({ icon, value, index }) => {
  return (
    <motion.div
      variants={fadeIn('left', 'spring', 0.3 + index * 0.1, 0.6)}
      className='group flex items-center gap-x-3 py-2'
    >
      <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 p-1.5 ring-1 ring-white/20 transition-all duration-300 group-hover:bg-white/20 group-hover:ring-white/40'>
        <img src={icon} className='h-full w-full object-contain' />
      </div>
      <p className='text-sm font-medium tracking-wide text-white/75 transition-colors duration-200 group-hover:text-white'>
        {value}
      </p>
    </motion.div>
  );
};

const AboutCard = () => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.2, 0.8)}
      className='about relative mt-8 w-full overflow-hidden rounded-2xl'
    >
      {/* Outer glow border */}
      <div className='animate-gradient-xy absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 opacity-60 blur-sm' />

      {/* Card body */}
      <div className='relative m-1.5 overflow-hidden rounded-2xl bg-[#0d0d1a] backdrop-blur-xl'>
        {/* Subtle inner gradient overlay */}
        <div className='animate-gradient-xy absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-cyan-900/20 opacity-60' />

        {/* Noise texture */}
        <div
          className='absolute inset-0 opacity-[0.03]'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}
        />

        <div className='relative z-10 flex flex-col items-center gap-8 p-8 md:flex-row md:items-stretch'>
          {/* Avatar */}
          <motion.div
            variants={fadeIn('right', 'spring', 0.4, 0.75)}
            className='relative shrink-0'
          >
            {/* Avatar glow */}
            <div className='animate-gradient-xy absolute -inset-1 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 opacity-50 blur-md' />
            <div className='relative h-[220px] w-[180px] overflow-hidden rounded-xl ring-1 ring-white/10 md:h-[260px] md:w-[210px]'>
              <img
                src={avatar}
                alt='avatar'
                className='h-full w-full object-cover transition-transform duration-700 hover:scale-105'
              />
              {/* Bottom fade */}
              <div className='absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0d0d1a]/80 to-transparent' />
            </div>
          </motion.div>

          {/* Divider */}
          <div className='hidden w-px self-stretch bg-gradient-to-b from-transparent via-white/15 to-transparent md:block' />
          <div className='h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent md:hidden' />

          {/* Info */}
          <div className='flex flex-1 flex-col justify-center gap-1'>
            <motion.p
              variants={fadeIn('left', 'spring', 0.2, 0.6)}
              className='mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/30'
            >
              Personal Info
            </motion.p>
            <div className='divide-y divide-white/5'>
              {abouts.map((about, index) => (
                <InformationItem key={about.icon} {...about} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <Element name='about' className='relative z-1'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>
      <AboutCard />
    </Element>
  );
};

export default SectionWrapper(About, 'about');
