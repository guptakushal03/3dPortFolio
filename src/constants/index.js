import {
  mobile,
  backend,
  creator,
  web,
  starbucks,
  carrent,
  jobit,
  tripguide,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI & Automation Engineer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "R&D Software Engineer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "NeuroBot Technology",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2025 - Present",
    points: [
      "Collaborated with the development team to design and implement software applications, focusing on feature enhancements and performance optimization.",
      "Developed and maintained code, ensuring adherence to project requirements and coding standards.",
      "Conducted manual, unit, and integration testing to ensure software functionality, quality, and reliability.",
      "Participated in code reviews and debugging sessions to identify and resolve software issues efficiently.",
    ],
  },
];

const projects = [
  {
    name: "AI Powered Desktop Assistant",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Crowdsourced Translation",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Automated Online UI Generator",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/guptakushal03/UI-Generator",
  },
];

export { services, experiences, projects };
