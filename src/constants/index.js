import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  emailList,
  jobit,
  tripguide,
  threejs,
  survey
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'exercise',
    title: 'Weekly Exercise'
  },
  {
    id: 'project',
    title: 'Projects'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
];

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'React Native Developer',
    icon: mobile
  },
  {
    title: 'Backend Developer',
    icon: backend
  },
  {
    title: 'Content Creator',
    icon: creator
  }
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
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  }
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
];

const projects = [
  {
    name: 'Email List',
    description: 'Basic website with Java JSP Servlet with MVC model.',
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient'
      },
      {
        name: 'JSP',
        color: 'green-text-gradient'
      },
      {
        name: 'Servlet',
        color: 'pink-text-gradient'
      }
    ],
    image: emailList,
    source_code_link: 'https://github.com/',
    link: 'https://two2110447javawebdeploy.onrender.com/Email/index.html'
  },
  {
    name: 'Murach Survey',
    description:
      'Work with form elements with Java JSP Servlet with MVC Model.',
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient'
      },
      {
        name: 'JSP',
        color: 'green-text-gradient'
      },
      {
        name: 'Servlet',
        color: 'pink-text-gradient'
      }
    ],
    image: survey,
    source_code_link: 'https://github.com/',
    link: 'https://two2110447javawebdeploy.onrender.com/W4_22110447/views/index.html'
  },
  {
    name: 'Email List Update',
    description:
      'Update Email List with validate input and keep input data when return the main form.',
    tags: [
      {
        name: 'Java',
        color: 'blue-text-gradient'
      },
      {
        name: 'JSP',
        color: 'green-text-gradient'
      },
      {
        name: 'Servlet',
        color: 'pink-text-gradient'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/'
  }
];

const socials = [
  {
    name: 'facebook',
    icon: '/facebook-2.svg'
  },
  {
    name: 'instagram',
    icon: '/instagram.svg'
  },
  {
    name: 'github',
    icon: '/github.svg'
  },
  {
    name: 'twitter',
    icon: '/twitter.svg'
  },
  {
    name: 'linkedin',
    icon: '/linkedin.svg'
  }
];

export { services, technologies, experiences, testimonials, projects, socials };
