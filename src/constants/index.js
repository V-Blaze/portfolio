/* eslint-disable */

import {
  createCampaign, dashboard, profile, withdraw, bookStore, web3Hackathon, metalunrLogo, medicImpact, microverse, foodHub, spaceHub, gvashPlanes,
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
    name: 'FoodHub',
    imgUrl: foodHub,
    liveLink: 'https://v-blaze.github.io/FOODHUB/dist/',
    codeLink: 'https://github.com/V-Blaze/FOODHUB',
    desc: 'This is a JavaScript meal app built with a crowd-sourced database of Recipes from around the world.',
    stack: ['React', 'JavaScript', 'Redux', 'CSS', 'Jest']
  },
  {
    id: 4,
    name: 'SPACE TRAVELERS HUB',
    imgUrl: spaceHub,
    liveLink: 'https://space-travelers-hub-astn.onrender.com/',
    codeLink: 'https://github.com/KIsmoilov/Space-Traveler-s-Hub',
    desc: 'This is a React WebApp with the real live data from the SpaceX API. The application will allow users to book rockets and join selected space missions. Built with JavaScript, ReactJS, Redux and CSS3',
    stack: ['React', 'JavaScript', 'Redux', 'CSS', 'Jest', 'Redux-toolkit']
  },
  {
    id: 5,
    name: 'GVASH PLANES',
    imgUrl: gvashPlanes,
    liveLink: 'https://gvash-planes.vercel.app/',
    codeLink: 'https://github.com/V-Blaze/GVASH-PLANES-API',
    desc: 'GVASH PLANES is a Web-App where users can visit the home page, browse through the list of available planes, and make reservations for a given time period. ',
    stack: ['Rails', 'Postgres', 'Ruby', 'React', 'TalwindCSS', 'Redux-toolkit']
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
  },
  {
    id: 4,
    name: 'Microverse',
    position: 'Code Reviewer @ Microverse Inc.',
    location: 'UK · Remote',
    link: 'https://Microverse.com',
    jobDesc: ' Provided quality reviews on 500+ technical projects improving the quality of source code submitted to the program by 50% - Mentored 50+ junior developers on coding and UI/UX best practices, improving the technical level of developers completing the program and reducing completion time by 25%',
    year: '2023 - Present',
    stack: ['Code Review', 'Git BASH', 'Pair Programming', 'Ruby on Rails', 'Jest', 'TypeScript', 'React.js'],
    logo: microverse,
  }
]
