import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const HEADER_ITEMS = [
  { id: 'about', label: '<About />' },
  { id: 'skills', label: '<Skills />' },
  { id: 'portfolio', label: '<Projects />' },
  { id: 'contact', label: '<Contact />' },
];

export const FOOTER_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Projects' },
];

export const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/rafaelfelic',
    icon: faLinkedin,
    label: 'LinkedIn',
  },
  { href: 'https://github.com/RafaelFelic', icon: faGithub, label: 'GitHub' },
  { href: 'mailto:rafaelfelic@gmail.com', icon: faEnvelope, label: 'Email' },
];

export const SKILLS = [
  { name: 'HTML5', image: 'html.png' },
  { name: 'CSS3', image: 'css.svg' },
  { name: 'Bootstrap', image: 'bootstrap.svg' },
  { name: 'Sass', image: 'sass.svg' },
  { name: 'WordPress', image: 'wordpress.svg' },
  { name: 'JavaScript', image: 'js.png' },
  { name: 'React JS', image: 'react.png' },
  { name: 'Tailwind CSS', image: 'tailwind.svg' },
  { name: 'TypeScript', image: 'typescript.png' },
  { name: 'Next.js', image: 'next-js.svg' },
];

export const PROJECTS = [
  {
    title: 'JSaltyLens Photographer Website',
    description:
      'A showcase for JSaltyLens, a professional photographer, presenting a portfolio and store. Created with HTML, CSS, and JavaScript, it features smooth navigation, responsive design, and a Shopify Buy Button for straightforward purchases of photos and frames. The site ensures a seamless experience across all devices, allowing visitors to view and purchase products effortlessly on desktops, tablets, and smartphones.',
    image1: 'jsaltylens1.png',
    image2: 'jsaltylens2.png',
    image3: 'jsaltylens3.png',
    projectUrl: 'https://jsaltylens.vercel.app/',
    dataDirection: 'right',
  },
  {
    title: 'SurfLink App Platform',
    description:
      'SurfLink is an innovative social media platform designed to connect surfers and photographers. Developed with React Native, Expo, and Firebase, SurfLink provides a seamless user experience across iOS, Android, and web applications. The platform aims to create a vibrant community where surfers can easily find and buy stunning photos captured by talented photographers. Currently a work in progress, SurfLink will feature intuitive navigation, real-time updates, and robust security measures, ensuring a trusted and engaging environment for sharing and discovering breathtaking surf photography.',
    image1: 'surflink1.jpg',
    image2: 'surflink2.jpg',
    image3: 'surflink3.jpg',
    image4: 'surflink4.jpg',
    dataDirection: 'right',
  },
  {
    title: 'Planner Web App',
    description:
      'The Planner web app combines task management, scheduling, and notes with live updates on currency, Bitcoin, exchange currencies, and weather through APIs. Developed with HTML, CSS, and JavaScript, it features a responsive design, ensuring optimal functionality and user experience across all devices. This all-in-one organization tool provides real-time insights and smooth operation on desktops, tablets, and smartphones.',
    image1: 'planner1.png',
    image2: 'planner2.png',
    image3: 'planner3.png',
    projectUrl: 'https://plannerweb.vercel.app/',
    dataDirection: 'left',
  },
  {
    title: 'Pokemon Memory Game',
    description:
      'A kids memory game using Next.js and React, showcasing Pokémon characters via the Pokémon API, styled with Flowbite and TailwindCSS. It provides an engaging and educational experience with sound effects, merging play with learning. The game features a responsive design, ensuring a seamless and enjoyable experience across all devices, including desktops, tablets, and smartphones.',
    image1: 'pokemon1.png',
    image2: 'pokemon2.png',
    image3: 'pokemon3.png',
    projectUrl: 'https://pokemonmemory.vercel.app/',
    dataDirection: 'right',
  },
];
