import { socials } from '../constants/index';
import { SectionWrapper } from '../hoc/index';

const Footer = () => {
  return (
    <div className='flex items-center justify-between'>
      <h3>Copyright © 2024 Le Tan Tru</h3>
      <div className='flex items-center justify-center gap-x-2'>
        {socials.map((social) => (
          <div
            key={social.name}
            className='saturate-180 border-black-300 flex h-10 h-5 w-10 w-5 cursor-pointer items-center justify-center rounded-lg border bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter'
          >
            <img src={social.icon} alt={social.name} width='20' height='20' />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SectionWrapper(Footer, '');
