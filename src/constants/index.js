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
    title: "Python",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCHi18uXFtRb1_q7pQIVxYlwqvhVzCzZ4PQ&s", // Python is versatile, can be used in various fields, including web
  },
  {
    title: "TensorFlow",
    icon: "https://icon2.cleanpng.com/20180531/xqy/avpv0lrdr.webp", // TensorFlow logo (replace this URL with actual TensorFlow logo)
  },
  {
    title: "React",
    icon: reactjs, // Assuming reactjs is available for use here
  },
  {
    title: "Node.js",
    icon: "https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png",
  },
  {
    title: "Git",
    icon: git,
  },
  {
    title: "Flutter",
    icon: "https://w7.pngwing.com/pngs/537/866/png-transparent-flutter-hd-logo.png", // Flutter mobile-focused framework
  },
  {
    title: "Firebase",
    icon: web, // Firebase logo URL (use actual logo)
  },
  {
    title: "Dart",
    icon: "https://e7.pngegg.com/pngimages/666/815/png-clipart-dart-google-chrome-web-application-flutter-darts-blue-angle.png", // Dart is used with Flutter
  },
  {
    title: "MySQL",
    icon: "https://cdn.intuji.com/2023/10/MySQL.png", // MySQL is often used in web development
  },
  {
    title: "PostgreSQL",
    icon: web, // PostgreSQL is also commonly used in web development
  },
  {
    title: "Docker",
    icon: docker,
  },
  {
    title: "PHP",
    icon: "https://icon2.cleanpng.com/20180519/vhg/kisspng-php-computer-icons-scripting-language-5b0036f80c39f9.1336093515267407280501.jpg", // PHP is commonly used for web development
  },
  {
    title: "Kotlin",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkD0hl4RMkT1HCsSWKPEG-UqrOfJa8l7wx5w&s", // Kotlin is used in Android development
  },
  {
    title: "Arduino",
    icon: "https://w7.pngwing.com/pngs/174/620/png-transparent-arduino-hd-logo.png", // Arduino is associated with embedded systems
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "Flask",
    icon: "https://e7.pngegg.com/pngimages/508/316/png-clipart-flask-by-example-python-web-framework-bottle-bottle-white-black.png", // Flask is a web framework
  },
  {
    title: "Supabase",
    icon: "data:image/jpeg;base64,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",
  },
  {
    title: "Figma",
    icon: figma,
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
    name: "الشبكة الوطنية للشباب الجزائري المتطور",
    description:
      "A platform for volunteers in Algeria to connect and collaborate more effectively. The website provides volunteering recommendations based on user interests, making volunteer work more accessible and organized. Developed under the supervision of the Higher Council of Youth at the request of the Ministry of Youth (not deployed yet).",
    tags: [],
    image: tripguide,
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
  {
    name: "ENSIA time table generation",
    description:
      "developing an optimal timetable generation system for ENSIA, using real data and comparing AI algorithms like A*, DFS, BFS, and Hill Climbing. The heuristic function considers both students' and professors' perspectives, optimizing availability and preferences. The interface will be built with Tkinter, offering an intuitive way to interact with the timetable system while analyzing each algorithm's performance in solving the scheduling problem",
    tags: [{ name: "Python", color: "green-text-gradient" }],
    image: jobit,
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
    name: "APMS Project",
    description:
      "The APMS project aims to create a centralized system for the Ministry of Agriculture to manage critical agricultural data. It will handle farmer registration (including ID, land details, SSN, demographics, and helpers), track farm sales (category, price, quantity, penalties, consumption), and integrate geolocation data (linked to Algerian cities and farmer IDs). Additionally, the system will analyze farmer performance, identify best practices, and award monthly recognition to the top-performing farmer nationwide",
    tags: [{ name: "C++", color: "blue-text-gradient" }],
    image: jobit,
    source_code_link: "https://github.com/",
  },
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
    name: "Tic Tac Toe with AI",
    description:
      "This project creates two versions of Tic Tac Toe: one using the Minimax algorithm for unbeatable AI, and another integrating Grover's algorithm from quantum computing to accelerate move selection with a heuristic function. Both versions feature a Flutter-based interface, allowing users to play against the AI, with the quantum version offering faster performance using quantum techniques.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "Flask", color: "green-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
