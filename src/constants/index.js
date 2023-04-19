/* eslint-disable */

import {
  createCampaign, dashboard, profile, withdraw, bookStore, web3Hackathon, metalunrLogo, medicImpact, microverse, foodHub, spaceHub, cryptoPedia, gvashPlanes
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
    name: 'CryptoPedia',
    imgUrl: cryptoPedia,
    liveLink: 'https://cryptopedia.onrender.com/',
    codeLink: 'https://github.com/V-Blaze/cryptopedia',
    desc: 'Cryptopedia is a Web-App for real-time data about crypto exchanges and market activity for over 75 cryptocurrencies exchanges around the World. Users can see Exchanges categorized by their country and also get to see different informations like Trading volumes, trading pairs and ranks.',
    stack: ['React', 'JavaScript', 'Redux', 'CSS', 'Jest', 'Tailwind']
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
  },
  {
    id: 6,
    name: 'BookStore App',
    imgUrl: bookStore,
    liveLink: 'https://bookstore-nsxm.onrender.com',
    codeLink: 'https://github.com/V-Blaze/Bookstore',
    desc: 'A bookstore WebApp that Displays a list of books. And users can Add a book or remove a selected book.',
    stack: ['React', 'JavaScript', 'Redux', 'CSS', 'API']
  },

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

export const blogPosts = [
  {
    id: 1,
    title: 'What has been the biggest challenge that I faced so far in My journey with software development?',
    slug: 'Drifting in an endless space of tutorials and no clear direction to my destination is a deadlock I never knew I will get myself out of one day. Being a self-taught developer before joining Microverse, the two biggest challenges I have faced so far are The tutorial hell trap and shiny object syndrome...',
    date: 'Dec 16, 2022',
    readTime: '2 min read',
    imageUrl: 'https://miro.medium.com/max/828/1*kcgdlmbz6RSfbvQqlAisCg.webp',
    link: 'https://medium.com/@V-Blaze/what-has-been-the-biggest-challenge-that-you-have-faced-so-far-in-your-journey-with-software-397a2f668b9c',
  }
]
