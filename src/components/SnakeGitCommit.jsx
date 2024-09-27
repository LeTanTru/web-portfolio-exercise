import { SectionWrapper } from '../hoc/index';

const SnakeGitCommit = () => {
  return (
    <div className='rounded-[20px] bg-gradient-to-b from-purple-800 to-slate-800'>
      <img
        src='https://raw.githubusercontent.com/platane/platane/output/github-contribution-grid-snake-dark.svg'
        className='w-full'
      />
    </div>
  );
};
export default SectionWrapper(SnakeGitCommit, '');
