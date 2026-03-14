import {
  socket,
  _3dRotation,
  adminDashboard,
  aos,
  chatApp,
  css,
  dob,
  docker,
  email,
  english,
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
  threejsWhiteFill,
  typescript,
  user,
  vite,
  web,
  zustand,
  cloudinary,
  dvms,
  moviehub,
  virtualr,
  nextjs,
  reactQuery,
  typescriptCircle,
  vidstack,
  imageConverter,
  nextjsBlack,
  github
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
    value: 'Lê Tấn Trụ'
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
  }

  // {
  //   title: 'Backend Developer',
  //   icon: backend,
  //   fromColor: 'from-[#879AF2]',
  //   viaColor: 'via-[#8233C5]',
  //   toColor: 'to-[#E963FD]'
  // }
  // {
  //   title: 'React Native Developer',
  //   icon: mobile,
  //   fromColor: 'from-[#42E695]',
  //   viaColor: 'via-[#D3208B]',
  //   toColor: 'to-[#EA6060]'
  // }
];

const technologies = [
  // Core Web
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

  // Framework / Library
  {
    name: 'React.js',
    icon: reactjs,
    color: 'bg-gradient-to-r from-indigo-400 to-cyan-400'
  },
  {
    name: 'Next.js',
    icon: nextjsBlack,
    color: 'bg-gradient-to-r from-indigo-400 to-cyan-400'
  },

  // State Management / Data Fetching
  {
    name: 'Redux Toolkit',
    icon: redux,
    color: 'bg-gradient-to-r from-fuchsia-500 to-pink-500'
  },
  {
    name: 'Zustand',
    icon: zustand,
    color: 'bg-gradient-to-r from-amber-500 to-orange-600'
  },
  {
    name: 'Tanstack Query',
    icon: reactQuery,
    color: 'bg-gradient-to-r from-red-500 to-pink-500'
  },

  // Styling / Animation
  {
    name: 'Tailwind CSS',
    icon: tailwind,
    color: 'bg-gradient-to-r from-sky-400 to-cyan-300'
  },

  // Tools / DevOps
  {
    name: 'Git',
    icon: git,
    color: 'bg-gradient-to-r from-orange-400 to-rose-400'
  },
  {
    name: 'Github',
    icon: github,
    color: 'bg-gradient-to-r from-orange-400 to-rose-400'
  },
  {
    name: 'Docker',
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
    title: 'Final-year Student',
    company_name: 'Ho Chi Minh City University of Education And Technology',
    icon: hcmute,
    iconBg: '#E6DEDD',
    date: 'Sep 2022 - Present',
    points: ['Final-year Student in Faculty of Information Technology.']
  },
  {
    title: 'Intern Frontend Developer',
    company_name: 'DVMS',
    icon: dvms,
    iconBg: '#E6DEDD',
    date: 'Jun 2025 - Sep 2025',
    points: [
      'Analyzed and worked with an existing React.js codebase to understand the system architecture and development workflow.',
      'Developed internal sample applications based on the company’s frontend architecture to practice reusable component patterns.',
      'Integrated RESTful APIs using Axios and handled asynchronous data fetching in React applications.',
      'Built and maintained CMS pages for managing content and administrative data.',
      'Collaborated with backend developers to ensure accurate API integration and consistent data flow.'
    ]
  }
];

const projects = [
  {
    name: 'MovieHub',
    description:
      'Public movie streaming website where users can discover, search, and watch movies online with responsive UI and adaptive video playback.',
    tags: [
      {
        icon: nextjs,
        link: 'https://nextjs.org/'
      },
      {
        icon: typescriptCircle,
        link: 'https://www.typescriptlang.org/'
      },
      {
        icon: tailwind,
        link: 'https://tailwindcss.com/'
      },
      {
        icon: reactQuery,
        link: 'https://tanstack.com/query/v5/docs/framework/react/overview/'
      },
      { icon: zustand, link: 'https://zustand-demo.pmnd.rs/' },
      { icon: vidstack, link: 'https://www.vidstack.io/' },
      { icon: framerMotion, link: 'https://www.framer.com/motion/' }
    ],
    image: moviehub,
    source_code_link: 'https://github.com/LeTanTru/MovieHub-Fe',
    link: 'https://moviehub-fe.vercel.app/',
    createdAt: '26/07/2025',
    completedAt: 'Present',
    latestUpdatedAt: 'Present'
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
    createdAt: '1/2/2025',
    completedAt: '5/2/2025',
    latestUpdatedAt: '5/2/2025'
  },
  {
    name: 'React Chat App',
    description:
      'Simple React Chat App. Note: Backend is deployed on Render (render.com), so it may take some minutes to wake up if there is no request for a long time.',
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
    link: 'https://mern-chat-app-xi-puce.vercel.app/',
    createdAt: '21/5/2025',
    completedAt: '7/6/2025',
    latestUpdatedAt: '14/3/2026'
  },
  {
    name: 'VirtualR',
    description: 'Virtual Reality Experience  React, and Tailwind CSS.',
    tags: [
      {
        icon: reactjs,
        link: 'https://react.dev/'
      },
      {
        icon: tailwind,
        link: 'https://tailwindcss.com/'
      }
    ],
    image: virtualr,
    source_code_link: 'https://github.com/LeTanTru/virtualr',
    link: 'https://letantru-virtualr.vercel.app/',
    createdAt: '28/6/2025',
    completedAt: '29/6/2025',
    latestUpdatedAt: '29/6/2025'
  },
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
    name: 'Image Converter',
    description:
      'An Image Converter with HTML, CSS, JavaScript to convert image with many different formats.',
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
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      }
    ],
    image: imageConverter,
    source_code_link: 'https://github.com/LeTanTru/image-converter',
    link: 'https://image-converter-virid-ten.vercel.app/',
    createdAt: '11/03/2026',
    completedAt: '11/03/2026',
    latestUpdatedAt: '11/03/2026'
  }
];

const socials = [
  {
    name: 'facebook',
    icon: './facebook-2.svg',
    link: 'https://www.facebook.com/dopaminee1311'
  },
  {
    name: 'instagram',
    icon: './instagram.svg',
    link: ''
  },
  {
    name: 'github',
    icon: './github.svg',
    link: 'https://github.com/LeTanTru'
  },
  {
    name: 'twitter',
    icon: './twitter.svg',
    link: ''
  },
  {
    name: 'linkedin',
    icon: './linkedin.svg',
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
