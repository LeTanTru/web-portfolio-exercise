import {
  socket,
  _3dRotation,
  adminDashboard,
  aos,
  backend,
  chatApp,
  css,
  dob,
  docker,
  email,
  english,
  figma,
  framerMotion,
  git,
  hcmute,
  highSchool,
  html,
  javascript,
  jquery,
  lovetravel,
  mongodb,
  nodejs,
  phone,
  reactjs,
  reactRouterDom,
  redux,
  tailwind,
  threejs,
  threejsWhiteFill,
  typescript,
  user,
  vite,
  web,
  zustand,
  cloudinary
} from '../assets';

const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'skill',
    title: 'Skills'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'project',
    title: 'Projects'
  }
];

const abouts = [
  {
    icon: user,
    value: 'Lê Tấn Trụ (dopamine)'
  },
  {
    icon: dob,
    value: '13/11/2004'
  },
  {
    icon: phone,
    value: '0342946956'
  },
  {
    icon: email,
    value: 'letantru@gmail.com'
  },
  {
    icon: english,
    value: 'TOEIC 795'
  }
];

const skills = [
  {
    title: 'Frontend Developer',
    icon: web,
    fromColor: 'from-[#D16BA5]',
    viaColor: 'via-[#86A8E7]',
    toColor: 'to-[#5FFBF1]'
  },

  {
    title: 'Backend Developer',
    icon: backend,
    fromColor: 'from-[#879AF2]',
    viaColor: 'via-[#8233C5]',
    toColor: 'to-[#E963FD]'
  }
  // {
  //   title: 'React Native Developer',
  //   icon: mobile,
  //   fromColor: 'from-[#42E695]',
  //   viaColor: 'via-[#D3208B]',
  //   toColor: 'to-[#EA6060]'
  // }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
    color: 'bg-gradient-to-r from-yellow-600 to-red-600'
  },
  {
    name: 'CSS 3',
    icon: css,
    color: 'bg-gradient-to-r from-indigo-500 to-blue-500'
  },
  {
    name: 'JavaScript',
    icon: javascript,
    color: 'bg-gradient-to-r from-amber-200 to-yellow-400'
  },
  {
    name: 'TypeScript',
    icon: typescript,
    color: 'bg-gradient-to-r from-blue-500 to-blue-600'
  },
  {
    name: 'React JS',
    icon: reactjs,
    color: 'bg-gradient-to-r from-indigo-400 to-cyan-400'
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
    color: 'bg-gradient-to-r from-fuchsia-500 to-pink-500'
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
    color: 'bg-gradient-to-r from-sky-400 to-cyan-300'
  },
  {
    name: 'Node JS',
    icon: nodejs,
    color: 'bg-gradient-to-r from-emerald-500 to-lime-600'
  },
  {
    name: 'MongoDB',
    icon: mongodb,
    color: 'bg-gradient-to-r from-lime-400 to-lime-500'
  },
  {
    name: 'Three JS',
    icon: threejs,
    color: 'bg-gradient-to-r from-gray-400 to-slate-600'
  },
  {
    name: 'git',
    icon: git,
    color: 'bg-gradient-to-r from-orange-400 to-rose-400'
  },
  {
    name: 'figma',
    icon: figma,
    color: 'bg-gradient-to-r from-rose-400 to-red-500'
  },
  {
    name: 'docker',
    icon: docker,
    color: 'bg-gradient-to-r from-blue-600 to-violet-600'
  }
];

const experiences = [
  {
    title: 'High School Student',
    company_name: 'An Nghia High School',
    icon: highSchool,
    iconBg: '#eeeeee',
    date: '2019 - 2022',
    points: []
  },
  {
    title: 'Third-year Student',
    company_name: 'Ho Chi Minh City University of Education And Technology',
    icon: hcmute,
    iconBg: '#E6DEDD',
    date: 'Sep 2022 - Present',
    points: ['Third-year Student in Faculty of Information Technology.']
  }
];

const projects = [
  {
    name: '3D rotation',
    description: 'Infinite 3D rotation with HTML, CSS.',
    tags: [
      {
        icon: html,
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
      },
      {
        icon: css,
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
      }
    ],
    image: _3dRotation,
    source_code_link: 'https://github.com/LeTanTru/3d-rotation-html-css',
    link: 'https://letantru3d-rotation.vercel.app/',
    createdAt: '14/9/2024',
    completedAt: '14/9/2024',
    latestUpdatedAt: '14/9/2024'
  },
  {
    name: 'Love Travel UI Clone',
    description:
      'Love Travel UI Clone with HTML, CSS, JavaScript, Jquery, Animate On Scroll (AOS)',
    tags: [
      {
        icon: html,
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
      },
      {
        icon: css,
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
      },
      {
        icon: javascript,
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
      },
      {
        icon: jquery,
        link: 'https://jquery.com/'
      },
      {
        icon: aos,
        link: 'https://michalsnik.github.io/aos/'
      }
    ],
    image: lovetravel,
    source_code_link: 'https://github.com/LeTanTru/Love-Travel-Clone-UI',
    link: 'https://letantrulovetravel.vercel.app/',
    createdAt: '28/8/2021',
    completedAt: '8/9/2021',
    latestUpdatedAt: '27/9/2024'
  },
  {
    name: 'React Admin Dashboard',
    description: 'Simple React Admin Dashboard.',
    tags: [
      {
        icon: reactjs,
        link: 'https://react.dev/'
      },
      {
        icon: tailwind,
        link: 'https://tailwindcss.com/'
      },
      {
        icon: framerMotion,
        link: 'https://framermotion.framer.website/'
      },
      {
        icon: reactRouterDom,
        link: 'https://reactrouter.com/'
      }
    ],
    image: adminDashboard,
    source_code_link: 'https://github.com/LeTanTru/react-admin-dashboard',
    link: 'https://letantru-admin-dashboard.vercel.app/',
    createdAt: '1/2/2024',
    completedAt: '5/2/2024',
    latestUpdatedAt: '5/2/2024'
  },
  {
    name: 'React Admin Dashboard',
    description: 'Simple React Admin Dashboard.',
    tags: [
      {
        icon: reactjs,
        link: 'https://react.dev/'
      },
      {
        icon: tailwind,
        link: 'https://tailwindcss.com/'
      },
      {
        icon: nodejs,
        link: 'https://nodejs.org/en'
      },
      {
        icon: mongodb,
        link: 'https://www.mongodb.com/'
      },
      {
        icon: reactRouterDom,
        link: 'https://reactrouter.com/'
      },
      {
        icon: socket,
        link: 'https://socket.io/'
      },
      {
        icon: zustand,
        link: 'https://zustand-demo.pmnd.rs/'
      },
      {
        icon: cloudinary,
        link: 'https://cloudinary.com/'
      }
    ],
    image: chatApp,
    source_code_link: 'https://github.com/LeTanTru/MERN-Chat-App',
    link: 'https://mern-chat-app-sepia.vercel.app/',
    createdAt: '21/5/2025',
    completedAt: '7/6/2025',
    latestUpdatedAt: '7/6/2025'
  }
];

const socials = [
  {
    name: 'facebook',
    icon: '/facebook-2.svg',
    link: 'https://www.facebook.com/dopaminee1311'
  },
  {
    name: 'instagram',
    icon: '/instagram.svg',
    link: ''
  },
  {
    name: 'github',
    icon: '/github.svg',
    link: 'https://github.com/LeTanTru'
  },
  {
    name: 'twitter',
    icon: '/twitter.svg',
    link: ''
  },
  {
    name: 'linkedin',
    icon: '/linkedin.svg',
    link: ''
  }
];

const powers = [
  { tech: vite, link: 'https://vitejs.dev/' },
  { tech: reactjs, link: 'https://react.dev/' },
  { tech: threejsWhiteFill, link: 'https://threejs.org/' },
  { tech: tailwind, link: 'https://tailwindcss.com/' }
];

export {
  abouts,
  experiences,
  navLinks,
  powers,
  projects,
  skills,
  socials,
  technologies
};
