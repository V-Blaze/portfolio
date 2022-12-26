/* eslint-disable */

import {
  createCampaign, dashboard, logout, payment, profile, withdraw, bookStore, todo, web3Hackathon, 
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
