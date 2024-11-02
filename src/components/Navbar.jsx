import { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import WaveText from './WaveText';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [active, setActive] = useState('');

  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav
        className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center bg-primary py-5`}
      >
        <div className='mx-auto flex w-full max-w-7xl items-center justify-between'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt='logo'
              className='object-container animate-zoom h-9 w-9'
            />
            <p className='cursor-pointer text-[20px] font-bold text-white'>
              <WaveText
                delay={0.05}
                text='Le Tan Tru | Front-end Web Developer'
              />
            </p>
          </Link>
          <ul className='ml-auto hidden list-none gap-10 md:ml-5 md:gap-5 lg:flex'>
            {navLinks.map((navLink) => (
              <li
                key={navLink.id}
                className={`${navLink.title === active ? 'text-white' : 'text-secondary'} cursor-pointer text-[18px] font-medium transition-all hover:-translate-y-1 hover:text-white`}
                onClick={() => setActive(navLink.title)}
              >
                {/* <a href={`#${navLink.id}`}>{navLink.title}</a>
                 */}
                <ScrollLink
                  to={`${navLink.id}`}
                  smooth={true}
                  duration={0}
                  spy={true}
                  offset={-window.innerHeight / 10}
                >
                  {navLink.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <div className='md:flex-0 block flex flex-1 items-center justify-end lg:hidden'>
            <img
              src={!toggle ? menu : close}
              alt='menu'
              className='h-[28px] w-[28px] cursor-pointer object-contain'
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${!toggle ? 'hidden' : 'flex'} absolute right-0 top-20 z-10 mx-2 my-2 min-w-[140px] rounded-xl bg-black-100 p-6`}
            >
              <ul className='flex list-none flex-col items-start justify-end gap-10 gap-4'>
                {navLinks.map((navLink) => (
                  <li
                    key={navLink.id}
                    className={`${navLink.title === active ? 'text-white' : 'text-secondary'} cursor-pointer text-[16px] font-medium hover:text-white`}
                    onClick={() => {
                      setActive(navLink.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${navLink.id}`}>{navLink.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
