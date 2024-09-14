import { socials } from '../constants/index';
import { SectionWrapper } from '../hoc/index';

const Footer = () => {
  return (
    <div className='flex items-center justify-between'>
      <h3>Copyright © 2024 Le Tan Tru</h3>
      <div className='flex items-center justify-center gap-x-3'>
        {socials.map((social) => (
          <div
            key={social.name}
            className='saturate-180 border-black-300 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border bg-slate-900 bg-opacity-75 backdrop-blur-lg backdrop-filter'
          >
            <img
              src={social.icon}
              alt={social.name}
              className='h-[30px] w-[30px]'
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SectionWrapper(Footer, '');
