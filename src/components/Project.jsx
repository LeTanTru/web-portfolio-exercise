import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc/index';
import { projects } from '../constants/index';
import { Tilt } from 'react-tilt';
import WaveText from './WaveText';
import { Link } from 'react-router-dom';
import { github } from '../assets/index';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className='w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]'
      >
        <div className='relative h-[250px] w-full'>
          <img
            src={image}
            alt={name}
            className='h-full w-full rounded-2xl object-cover'
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
        <div className='mt-4 flex items-center justify-between'>
          <div className='flex flex-wrap'>
            {tags.map((tag, index) => (
              <div
                key={tag.icon}
                className='flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10'
                style={{ transform: `translateX(-${index * 10}px)` }}
              >
                <Link to={tag.link}>
                  <img src={tag.icon} className='p-[6px]' />
                </Link>
              </div>
            ))}
          </div>
          <div className='flex'>
            <Link
              to={link}
              className='flex text-sm text-purple-400'
              target='_blank'
            >
              Live demo
            </Link>
            <img src='/telegram.svg' className='ml-2' />
          </div>
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
      <div>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-[18px] leading-[1.5] text-secondary'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          dignissimos tenetur dolore et officia, corrupti fuga enim, asperiores
          mollitia, ullam sapiente pariatur laudantium molestias veniam nam
          incidunt eaque quia quidem?
        </motion.p>
        <div className='mt-20 flex flex-wrap gap-7'>
          {projects?.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                {...project}
                index={index}
              />
            ))
          ) : (
            <div className='mx-auto text-center text-[50px]'>
              <WaveText text='Updating...' />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default SectionWrapper(Project, 'project');
