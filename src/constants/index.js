/* eslint-disable */

import {
  createCampaign, dashboard, logout, payment, profile, withdraw, bookStore, todo, web3Hackathon, metalunrLogo, metalunrLogo2,
} from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'payment',
    imgUrl: payment,
    link: '/',
    disabled: true,
  },
  {
    name: 'withdraw',
    imgUrl: withdraw,
    link: '/',
    disabled: true,
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
    disabled: true,
  },
];

export const projects =[
  {
    id: 1,
    name: 'BookStore App',
    imgUrl: bookStore,
    liveLink: '/',
    codeLink: '/',
    desc: 'A bookstore WebApp that Displays a list of books. And users can Add a book or remove a selected book.',
    stack: ['React', 'JavaScript', 'Redux', 'CSS']
  },
  {
    id: 2,
    name: 'Web3 Hackathon',
    imgUrl: web3Hackathon,
    liveLink: '/',
    codeLink: '/',
    desc: 'Web3 Hackathon is a conference event Web-App showcases detailed information about an upcoming hackathon event',
    stack: ['Figma', 'JavaScript', 'CSS']
  },
  {
    id: 3,
    name: 'Todo App',
    imgUrl: todo,
    liveLink: '/',
    codeLink: '/',
    desc: 'A single-page React todo App with dynamic routing. simply add tasks to the UI.',
    stack: ['React', 'JavaScript', 'Redux', 'CSS']
  }
]

export const experiences = [
  {
    id: 1,
    name: 'Metalunr',
    position: 'Web Developer @ Metalunr Canada',
    location: 'Remote',
    link: 'Metalunr.com',
    jobDesc: 'Developed the UI and UX eco-system for a conference event platform using modular component structures with JS, SCSS, Gulp on Node.',
    year: '2018 - 2020',
    stack: ['React', 'JavaScript', 'CSS', 'Figma'],
    logo: metalunrLogo,
  },
  {
    id: 2,
    name: 'Medic Impact',
    position: 'Software Engineer @ Medic Impact Global Ltd',
    location: 'Remote',
    link: 'medicimpact.com',
    jobDesc: 'Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK.',
    year: '2018 - 2020',
    stack: ['React', 'JavaScript', 'CSS', 'Figma'],
    logo: metalunrLogo2,
  }
]
