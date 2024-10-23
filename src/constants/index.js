import {
  _3dRotation,
  backend,
  ch05_email,
  creator,
  css,
  docker,
  emailList,
  figma,
  git,
  hcmute,
  highSchool,
  html,
  java,
  javascript,
  jsp,
  lovetravel,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  servlet,
  shoppingCart,
  survey,
  tailwind,
  threejs,
  threejsWhiteFill,
  typescript,
  vite,
  web,
  jquery,
  aos,
  sqlgateway,
  mysql,
  sendEmail,
  paging,
  ajax
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

const weeklyExercises = [
  {
    name: 'Email List',
    description:
      'Basic website with Java JSP Servlet with MVC model. Updated with Connection Pool.',
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
      },
      {
        icon: mysql,
        link: 'https://www.mysql.com/'
      }
    ],
    image: emailList,
    source_code_link: 'https://github.com/LeTanTru/Email',
    link: 'https://letantru.onrender.com/Email/index.jsp'
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
    link: 'https://letantru.onrender.com/Survey/views/index.html'
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
    link: 'https://letantru.onrender.com/ch05_ex2_email/index.jsp'
  },
  {
    name: 'Shopping Cart',
    description: 'Basic Shopping Cart with session and cookie.',
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
      },
      {
        icon: mysql,
        link: 'https://www.mysql.com/'
      }
    ],
    image: shoppingCart,
    source_code_link: 'https://github.com/LeTanTru/ShoppingCart',
    link: 'https://letantru.onrender.com/ShoppingCart/home'
  },
  {
    name: 'SQL Gateway',
    description: 'Interact with database by using JDBC and MySQL.',
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
      },
      {
        icon: mysql,
        link: 'https://www.mysql.com/'
      }
    ],
    image: sqlgateway,
    source_code_link: 'https://github.com/LeTanTru/SqlGateway',
    link: 'https://letantru.onrender.com/SqlGateway/home'
  },
  {
    name: 'Email List JPA',
    description: 'Email List JPA + Connection Pool by Hikari.',
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
      },
      {
        icon: mysql,
        link: 'https://www.mysql.com/'
      }
    ],
    image: emailList,
    source_code_link: 'https://github.com/LeTanTru/EmailJPA',
    link: 'https://letantru.onrender.com/EmailJPA/index.jsp'
  },
  {
    name: 'Send email with Java Mail API.',
    description: 'Send email with Java Mail API.',
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
    image: sendEmail,
    source_code_link: 'https://github.com/LeTanTru/SendEmail',
    link: 'https://letantru.onrender.com/SendEmail/'
  },
  {
    name: 'Paging with JDBC.',
    description: 'Basic paging app with JDBC and Ajax.',
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
      },
      {
        icon: mysql,
        link: 'https://www.mysql.com/'
      },
      {
        icon: ajax,
        link: 'https://api.jquery.com/jQuery.ajax/'
      }
    ],
    image: paging,
    source_code_link: 'https://github.com/LeTanTru/PagingServlet',
    link: 'https://letantru.onrender.com/Paging/'
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
    link: 'https://letantru3d-rotation.vercel.app/'
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
    link: 'https://letantrulovetravel.vercel.app/'
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
  technologies,
  experiences,
  weeklyExercises,
  socials,
  projects,
  powers
};
