import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { styles } from '../styles';
import { skills } from '../constants/index';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc/index';
import { useRef } from 'react';

const SkillCard = ({ index, title, icon, fromColor, viaColor, toColor }) => {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-12deg', '12deg']);

  const glowX = useTransform(springX, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(springY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      variants={fadeIn(
        `${index % 2 === 0 ? 'left' : 'right'}`,
        'spring',
        0.15 * index,
        0.75
      )}
      className='group relative h-[220px] w-full'
      style={{ perspective: '800px' }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className='skill relative h-full w-full cursor-pointer overflow-hidden rounded-2xl'
      >
        {/* Card surface */}
        <div className='absolute inset-[1.5px] overflow-hidden rounded-2xl bg-[#0d0d1a] backdrop-blur-xl'>
          {/* Animated bg gradient */}
          <div
            className={`animate-gradient-xy absolute inset-0 bg-gradient-to-br ${fromColor} ${viaColor} ${toColor} opacity-20`}
          />

          {/* Spotlight follow */}
          <motion.div
            className='pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            style={{
              background: useTransform(
                [glowX, glowY],
                ([x, y]) =>
                  `radial-gradient(280px circle at ${x} ${y}, rgba(255,255,255,0.08), transparent 70%)`
              )
            }}
          />

          {/* Shimmer line on hover */}
          <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

          {/* Content */}
          <div className='relative z-10 flex h-full flex-col items-center justify-center gap-5 p-6'>
            <motion.div
              style={{ translateZ: 30 }}
              className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${fromColor} ${viaColor} ${toColor} p-0.5 shadow-lg`}
            >
              <div className='flex h-full w-full items-center justify-center rounded-2xl bg-[#0d0d1a]/80 p-3'>
                <img src={icon} className='h-full w-full object-contain' />
              </div>
            </motion.div>

            <motion.h2
              style={{ translateZ: 20 }}
              className='text-center text-lg font-semibold tracking-wide text-white/80 transition-colors duration-200 group-hover:text-white'
            >
              {title}
            </motion.h2>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className='relative z-1'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>My Skills.</h2>
      </motion.div>
      <div className='mt-10 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center gap-6'>
        {skills.map((skill, index) => (
          <SkillCard key={skill.title} index={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, 'skill');
