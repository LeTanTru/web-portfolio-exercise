import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc/index';
import { projects } from '../constants/index';
import { Tilt } from 'react-tilt';
import { github } from '../assets/index';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link,
  createdAt,
  completedAt,
  latestUpdatedAt
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className='mx-auto flex h-[100%] w-full flex-col rounded-2xl bg-tertiary p-5 sm:w-[360px]'
      >
        <div className='relative w-full flex-1 overflow-hidden rounded'>
          <img
            src={image}
            alt={name}
            className='h-full w-full object-contain'
          />
          <div className='card-img_hover absolute inset-0 m-3 flex justify-end'>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className={
                'black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full'
              }
            >
              <img
                src={github}
                alt='github'
                className='h-1/2 w-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-[24px] font-bold text-white'>{name}</h3>
          <p className='mt-2 text-justify text-[14px] text-secondary'>
            {description}
          </p>
        </div>
        <div className='mb-2 mt-2 w-full border-b border-solid border-violet-900'></div>
        <div className='flex items-center justify-between'>
          <span className='text-xs text-gray-300'>
            {createdAt} - {completedAt}
          </span>

          <span className='text-xs text-gray-300'>
            Latest updated: {latestUpdatedAt}
          </span>
        </div>
        <div className='mt-2 flex items-end justify-between'>
          <div className='flex flex-nowrap'>
            {tags.map((tag, index) => (
              <div
                key={tag.icon}
                className='flex h-8 w-8 flex-nowrap items-center justify-center overflow-hidden rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10'
                style={{ transform: `translateX(-${index * 10}px)` }}
              >
                <a href={tag.link} target='_blank'>
                  <img src={tag.icon} className='p-[2px]' />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className='ml-auto flex'>
          <a
            href={link}
            className='flex text-[18px] text-purple-400'
            target='_blank'
          >
            Live demo
          </a>
          <img src='./telegram.svg' className='ml-2' />
        </div>
      </Tilt>
    </motion.div>
  );
};

const Project = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className='mx-auto w-full'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 max-w-3xl text-[18px] leading-[1.5] text-secondary'
        >
          <p className='text-center md:text-left'>
            This section shows some personal projects. Click&nbsp;
            <span className='inline-flex text-[18px] text-purple-400'>
              Live Demo
              <img src='./telegram.svg' className='ml-2' />
            </span>
            &nbsp; to experience website. Click the github icon &nbsp;
            <span className='black-gradient inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full'>
              <img src={github} className='h-1/2 w-1/2 object-contain' />
            </span>
            &nbsp; on the top right to get source code.
          </p>
        </motion.p>
        <div className='mt-20 grid grid-cols-1 gap-x-5 gap-y-5 lg:mx-auto lg:grid-cols-2 xl:grid-cols-3'>
          {projects.map((project, index) => (
            <ProjectCard key={`exercise-${index}`} {...project} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};
export default SectionWrapper(Project, 'project');
