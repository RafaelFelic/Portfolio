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
      'A showcase for JSaltyLens, a professional photographer, presenting a portfolio and store. Created with HTML, CSS, and JavaScript, it features smooth navigation and a Shopify Buy Button for straightforward purchases of photos and frames.',
    image1: 'jsaltylens1.png',
    image2: 'jsaltylens2.png',
    image3: 'jsaltylens3.png',
    projectUrl: 'https://jsaltylens.netlify.app/',
    dataDirection: 'right',
  },
  {
    title: 'Planner App',
    description:
      'The Planner app combines task management, scheduling, and notes with live updates on currency, Bitcoin, and weather through APIs. Developed with HTML, CSS, and JavaScript, it is an all-in-one organization tool with real-time insights.',
    image1: 'planner1.png',
    image2: 'planner2.png',
    image3: 'planner3.png',
    projectUrl: 'https://planner-rafael.netlify.app/',
    dataDirection: 'left',
  },
  {
    title: 'Pokemon Memory Game',
    description:
      'A kids memory game using Next.js and React, showcasing Pokémon characters via the Pokémon API, styled with Flowbite and TailwindCSS. It provides an engaging and educational experience with sound effects, merging play with learning.',
    image1: 'pokemon1.png',
    image2: 'pokemon2.png',
    image3: 'pokemon3.png',
    projectUrl: 'https://pokemonme.netlify.app/',
    dataDirection: 'right',
  },
];
