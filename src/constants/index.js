import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  github,
  githubi,
  html,
  css,
  python,
  reactjs,
  django,
  tailwind,
  canva,
  bootstrap,
  git,
  figma,
  docker,
  youvah,
  americanchase,
  portfolio,
  notes_app,
  dajngo_crm,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Django",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "Bootstrap",
  //   icon: bootstrap,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Python",
    icon: python,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: githubi,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "canva",
  //   icon: canva,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "J.r React.js Developer",
    company_name: "YouVah",
    icon: youvah,
    iconBg: "#383E56",
    date: "March 2022 - June 2022",
    points: [
      "Developing and maintaining web application using React.js and other related technologies.",
      "Implementing UI/UX of the web application and helping in redesign the look.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "J.r Full Stack Developer",
    company_name: "American Chase",
    icon: americanchase,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js, Django and other related technologies.",
      "Implementing database design and structure and working with backend APIs requests.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Worked on new technologies like  Cookiecutter-djangio, bubble.io and many more...",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D Developer Protfolio",
    description:
      "A 3d interactive developer portfolio based on three.js, The most impressive websites in the world use 3D graphics and animations to bring their content to life.",
    tags: [
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link:
      "https://github.com/Abubakar-Siddiqui/3D_developer_portfolio/",
  },
  {
    name: "Notes App",
    description:
      "Web application that enables users to create notes for there daily work and because the notes saves in localstorage so they don't need to login to some random websites.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "localstorage",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: notes_app,
    source_code_link: "https://github.com/Abubakar-Siddiqui/notes_app_react",
  },
  {
    name: "Django CRM",
    description:
      "A CRM (Customer Relationship Management) build in Django allows users to add records, update records, and delete, a basic CRUD operations.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: dajngo_crm,
    source_code_link: "https://github.com/Abubakar-Siddiqui/Django-CRM",
  },
];

export { services, technologies, experiences, testimonials, projects };
