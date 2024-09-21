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
  threejs,
  vite,
  threejsWhiteFill,
  java,
  jsp,
  servlet,
  survey,
  highSchool,
  hcmute,
  emailList,
  ch05_email,
  _3dRotation
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

const abouts = [
  {
    title: 'Frontend Developer',
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
    title: 'Volunteer',
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

const weeklyExercises = [
  {
    name: 'Email List',
    description: 'Basic website with Java JSP Servlet with MVC model.',
    tags: [
      {
        icon: java,
        link: 'https://www.java.com/en/'
      },
      {
        icon: jsp,
        link: 'https://www.oracle.com/java/technologies/javaserver-white-paper.html'
      },
      {
        icon: servlet,
        link: 'https://tomcat.apache.org/tomcat-5.5-doc/servletapi/index.html'
      }
    ],
    image: emailList,
    source_code_link: 'https://github.com/LeTanTru/Email',
    link: 'https://two2110447javawebdeploy.onrender.com/Email/index.jsp'
  },
  {
    name: 'Murach Survey',
    description:
      'Work with form elements with Java JSP Servlet with MVC Model.',
    tags: [
      {
        icon: java,
        link: 'https://www.java.com/en/'
      },
      {
        icon: jsp,
        link: 'https://www.oracle.com/java/technologies/javaserver-white-paper.html'
      },
      {
        icon: servlet,
        link: 'https://tomcat.apache.org/tomcat-5.5-doc/servletapi/index.html'
      }
    ],
    image: survey,
    source_code_link: 'https://github.com/LeTanTru/MurachServey',
    link: 'https://two2110447javawebdeploy.onrender.com/Survey/views/index.html'
  },
  {
    name: 'ch05_ex2_email',
    description:
      'Use annotation @WebServlet to map to /test with doGet and doPost. Call doGet by replacing index.jsp with test in the url. Call doPost when click Join Now button.',
    tags: [
      {
        icon: java,
        link: 'https://www.java.com/en/'
      },
      {
        icon: jsp,
        link: 'https://www.oracle.com/java/technologies/javaserver-white-paper.html'
      },
      {
        icon: servlet,
        link: 'https://tomcat.apache.org/tomcat-5.5-doc/servletapi/index.html'
      }
    ],
    image: ch05_email,
    source_code_link: 'https://github.com/',
    link: 'https://two2110447javawebdeploy.onrender.com/ch05_ex2_email/index.jsp'
  }
];

const projects = [
  {
    name: '3D rotation',
    description: 'Infinite 3D rotation with HTML, CSS.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient'
      },
      {
        name: 'CSS',
        color: 'green-text-gradient'
      }
    ],
    image: _3dRotation,
    source_code_link: 'https://github.com/LeTanTru/3d-rotation-html-css',
    link: 'https://3d-rotation-html-css.vercel.app/'
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

const powers = [
  { tech: vite, link: 'https://vitejs.dev/' },
  { tech: reactjs, link: 'https://react.dev/' },
  { tech: threejsWhiteFill, link: 'https://threejs.org/' },
  { tech: tailwind, link: 'https://tailwindcss.com/' }
];

export {
  abouts,
  technologies,
  experiences,
  testimonials,
  weeklyExercises,
  socials,
  projects,
  powers
};
