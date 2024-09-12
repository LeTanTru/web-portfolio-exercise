import { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} f fixed top-0 z-20 flex w-full items-center bg-primary py-5`}
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
          <img src={logo} alt='logo' className='object-container h-9 w-9' />
          <p className='cursor-pointer text-[18px] font-bold text-white'>
            Le Tan Tru &nbsp;
            <span className='hidden sm:inline'>
              |&nbsp; Front-end Web Developer
            </span>
          </p>
        </Link>
        <ul className='hidden list-none gap-10 sm:flex'>
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              className={`${navLink.title === active ? 'text-white' : 'text-secondary'} cursor-pointer text-[18px] font-medium hover:text-white`}
            >
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>
        <div className='flex1 flex items-center justify-end sm:hidden'>
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
  );
};
export default Navbar;
