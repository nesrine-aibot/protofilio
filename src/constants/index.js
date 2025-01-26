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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
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
    title: "Data Science",
    icon: web,
  },
  {
    title: "AI Engineering",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: creator,
  },
  {
    title: "C++",
    icon: web,
  },
  {
    title: "Dart",
    icon: web,
  },

  {
    title: "JavaScript",
    icon: web,
  },
  {
    title: "Kotlin",
    icon: web,
  },
  {
    title: "PHP",
    icon: web,
  },
  {
    title: "Python",
    icon: web,
  },
  {
    title: "Arduino",
    icon: web,
  },
  {
    title: "React",
    icon: web,
  },
  {
    title: "Node.js",
    icon: web,
  },

  {
    title: "Flutter",
    icon: web,
  },
  {
    title: "Flask",
    icon: web,
  },

  {
    title: "Git",
    icon: web,
  },

  {
    title: "MySQL",
    icon: web,
  },
  {
    title: "PostgreSQL",
    icon: web,
  },

  { title: "Docker", icon: web },
  
  { title: "figma", icon: web },
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "G-JOB",
    description:
      "A job search platform tailored for the Algerian community. Users can search for jobs or post job listings, fostering connections between job seekers and employers in Algeria.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "PHP", color: "pink-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "POS Desktop Application",
    description:
      "A desktop application designed for supermarket cashiers and administrators to manage sales, inventory, and daily operations efficiently.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Next.js", color: "green-text-gradient" },
      { name: "Express.js", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Wortopia",
    description:
      "An AI-powered app to enhance language learning from books. Users can select words from books they’re reading, get context-based AI translations, and save them for personalized learning. It also generates dynamic quizzes like flashcards and multiple-choice questions to reinforce vocabulary.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "Supabase", color: "pink-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "الشبكة الوطنية للشباب الجزائري المتطور",
    description:
      "A platform for volunteers in Algeria to connect and collaborate more effectively. The website provides volunteering recommendations based on user interests, making volunteer work more accessible and organized. Developed under the supervision of the Higher Council of Youth at the request of the Ministry of Youth (not deployed yet).",
    tags: [],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tic Tac Toe with AI",
    description:
      "A classic Tic Tac Toe game built using the Minimax algorithm for unbeatable AI gameplay, complete with a Flutter-based user interface.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "Flask", color: "green-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Sonatrach Project",
    description:
      "This project tackles two challenges. First, it predicts geological data like Gamma Ray (GR), Delta Time (DT), and Neutron Porosity (NPHI) using machine learning, reducing the need for expensive drilling. This helps SONATRACH estimate reservoir sizes and improve extraction strategies. Second, it predicts the lithology of the earth based on depth, enabling cost-effective and efficient resource management.",
    tags: [{ name: "Python", color: "green-text-gradient" }],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
