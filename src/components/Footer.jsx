import { Link } from 'react-router-dom';
import { powers, socials } from '../constants/index';
import { SectionWrapper } from '../hoc/index';

const Footer = () => {
  return (
    <div className='flex items-center justify-between'>
      <h3>Copyright © 2024 Le Tan Tru</h3>
      <div className='flex items-center gap-x-3'>
        <h4>Powered by</h4>
        <div className='flex'>
          {powers.map((item, index) => (
            <div
              key={item.tech}
              className='flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10'
              style={{ transform: `translateX(-${index * 10}px)` }}
            >
              <Link to={item.link} target='_blank'>
                <img
                  src={item.tech}
                  className='h-full w-full object-cover p-2'
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='flex items-center justify-center gap-x-3'>
        {socials.map((social) => (
          <div
            key={social.name}
            className='saturate-180 border-black-300 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border bg-slate-900 bg-opacity-75 backdrop-blur-lg backdrop-filter'
          >
            <Link to={social.link} target='_blank'>
              <img
                src={social.icon}
                alt={social.name}
                className='h-[30px] w-[30px]'
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SectionWrapper(Footer, '');
