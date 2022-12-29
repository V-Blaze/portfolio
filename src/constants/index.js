/* eslint-disable */

import {
  createCampaign, dashboard, profile, withdraw, bookStore, todo, web3Hackathon, metalunrLogo, medicImpact, microverse,
} from '../assets';

export const navlinks = [
  {
    name: 'home',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'blog',
    imgUrl: createCampaign,
    link: '/blog',
  },
  {
    name: 'projects',
    imgUrl: profile,
    link: '/projects',
  },
  {
    name: 'bussines',
    imgUrl: withdraw,
    link: '/bussines',
    disabled: true,
  }
];

export const projects =[
  {
    id: 1,
    name: 'BookStore App',
    imgUrl: bookStore,
    liveLink: 'https://bookstore-nsxm.onrender.com',
    codeLink: 'https://github.com/V-Blaze/Bookstore',
    desc: 'A bookstore WebApp that Displays a list of books. And users can Add a book or remove a selected book.',
    stack: ['React', 'JavaScript', 'Redux', 'CSS', 'API']
  },
  {
    id: 2,
    name: 'Web3 Hackathon',
    imgUrl: web3Hackathon,
    liveLink: 'https://v-blaze.github.io/Web3_Hackathon/',
    codeLink: 'https://github.com/V-Blaze/Web3_Hackathon',
    desc: 'Web3 Hackathon is a conference event Web-App showcases detailed information about an upcoming hackathon event',
    stack: ['Figma', 'JavaScript', 'CSS']
  },
  {
    id: 3,
    name: 'Todo App',
    imgUrl: todo,
    liveLink: 'https://github.com/V-Blaze/react-to-do-app',
    codeLink: 'https://github.com/V-Blaze/react-to-do-app',
    desc: 'A single-page React todo App with dynamic routing. simply add tasks to the UI.',
    stack: ['React', 'JavaScript', 'Redux', 'CSS', 'Jest']
  }
]

export const experiences = [
  {
    id: 1,
    name: 'Medic Impact',
    position: 'Technical Support @ Medic Impact Global Ltd',
    location: 'Remote',
    link: 'https://twitter.com/medicimpact',
    jobDesc: ' Awarded staff of the year due to my remarkable relationship with customers. - Contributed immensely to better improvement and ease of usage of user guide  documentation.',
    year: '2018 - 2020',
    stack: ['Remote', 'Pair-Programming', 'Teamwork', 'Mentoring'],
    logo: medicImpact,
  },
  {
    id: 2,
    name: 'Metalunr',
    position: 'Web Developer @ Metalunr Singapore',
    location: 'Singapore · Remote',
    link: 'https://mobile.twitter.com/metalunr',
    jobDesc: 'Part of a team that delivered an outstanding product that was recognized in the blockchain community. - Key member of a team that built a metaverse project with currently over 50,000 users. - Developed consumer based features and applications using React, Solidity, Web3Js, JavaScript, and JQuery. - Implemented and enhanced CRUD operations for applications using the MVC (Model View Controller) architecture.',
    year: '2021 - 2022',
    stack: ['React', 'JavaScript', 'Solidity', 'Blockchain', 'Node.js', 'web3.js'],
    logo: metalunrLogo,
  },
  {
    id: 3,
    name: 'Microverse',
    position: 'Student Mentor @ Microverse Inc.',
    location: 'UK · Remote',
    link: 'https://Microverse.com',
    jobDesc: 'Providing technical and professional advice on how to improve on coding and professional projects. - Reviewing both technical and professional projects by students. - Provided advice and tips on how to maintain motivation to maintain longevity in the program.',
    year: '2022 - Present',
    stack: ['Code Review', 'Git BASH', 'Pair Programming', 'Ruby on Rails', 'Jest', 'TypeScript', 'React.js'],
    logo: microverse,
  }
]
