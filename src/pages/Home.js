import React, { useState } from 'react';
// import { MdDesktopMac } from 'react-icons/md';
import {
  FaGithubSquare, FaTwitterSquare, FaSlack, FaLinkedin,
} from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
// import { Blob } from 'react-interactive-blob';

// Components
import {
  Experties, Project, CustomAccordion, CustomParticles,
} from '../components';
// Constants
import { projects, experiences } from '../constants';
// Assets
import {
  pProfile, Lcomputer, LvideoCon, LrestApi,
} from '../assets';
// import { reactIcon } from '../languages';

const Home = () => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  const container = {
    hidden: {},
    visible: { staggerChildren: 0.3 },
  };

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className=" grid gap-6 ">
      <CustomParticles />
      <div className=" grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 my-0 lg:my-20 ">
        <motion.div
          className="mt-0 lg:mt-12"
        >
          <motion.div
            className=" bg-green-200 w-fit rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -200, y: 100 },
              visible: { opacity: 1, x: 0, y: 0 },
            }}
          >

            <TypeAnimation
              sequence={['Hi There! I am Valentine', 4000, 'Hi There! I am Blaze', 4000, 'Welcome To My Portfolio', 2000]}
              speed={50}
              className="my-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] bg-transparent border-[#fff] border-2 w-fit border-solid px-2 rounded-lg"
              wrapper="h1" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </motion.div>
          <motion.h3
            className="text-4xl font-epilogue text-white font-extrabold leading-normal "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: 0, y: -200 },
              visible: { opacity: 1, x: 0, y: 0 },
            }}
          >
            A
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] bg-transparent"> FullStack Engineer</span>
            . I Help Startups
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] bg-transparent"> Launch </span>
            And
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] bg-transparent"> Grow </span>
            Their Products
          </motion.h3>
          <motion.span
            className=" text-[#A3B3BC] text-xl font-epilogue my-3 block "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.9 }}
            variants={{
              hidden: { opacity: 0, x: -50, y: -150 },
              visible: { opacity: 1, x: 0, y: 0 },
            }}
          >
            I am a software engineer with more than four years of experience. recognized
            as a practical and effective developer, experienced in leading cross-functional
            teams in a time-pressured setting to complete projects on schedule and within budget.
          </motion.span>
        </motion.div>
        <motion.div
          className="flex justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={pProfile} alt="profile" />
        </motion.div>
        {/* <Blob height={500} radius={150} className=" top-0 left-0 relative z-0" /> */}
      </div>
      <div className="flex flex-col justify-center items-center my-20">
        <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] bg-transparent text-5xl underline font-epilogue font-extrabold my-8">Experties</h3>
        <motion.div
          className="grid grid-cols-1 sm:gap-3 lg:gap-0 md:gap-0 md:grid-cols-1 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={container}
        >
          <Experties
            title="BackEnd Development"
            Icon={LrestApi}
            desc="
          Experienced in both functional and OOP: Ruby, Rails, Ruby on Rails, Node,
          JavaScript, TypeScript, Web3.Js Solidity, Blockchain, Jest.
          "
          />
          <Experties
            title="FrontEnd Develpoment"
            Icon={Lcomputer}
            desc="
          Passionate about UI/UX. Over 4 years of development
          experience in HTML, CSS, Figma, JS, React, Redux, and NextJS frameworks.
          "
          />
          <Experties
            title="Soft Skills"
            Icon={LvideoCon}
            desc="
          Excellent in Remote collaboration, pair programming, agile methodologies,
          communication, mentorship, leadership.
          "
          />
        </motion.div>
      </div>
      <div className="flex flex-col justify-center items-center my-20">
        <div className="flex flex-col items-center ">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] bg-transparent text-5xl underline font-epilogue font-extrabold my-1">Projects</h3>
          <span className="text-[#A3B3BC] text-xl font-epilogue my-1 block ">
            Each project is unique. Here are some of my works.
          </span>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-2 pt-8  sm:mx-4">
          {projects.map((project) => (
            <Project
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-20">
        <div className="flex flex-col items-center jusify-center">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] bg-transparent text-5xl underline font-epilogue font-extrabold my-1">Professional Experiences</h3>
        </div>
        <div className="h-fit">
          {experiences.map((experience, i) => (
            <CustomAccordion
              key={experience.id}
              open={open}
              num={i}
              customAnimation={customAnimation}
              handleOpenProp={handleOpen}
              experience={experience}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-auto">
        <div className="flex flex-col items-center jusify-center">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] bg-transparent text-5xl underline font-epilogue font-extrabold my-1">Connect With Me</h3>
        </div>
        <div className="flex flex-wrap w-full">
          <button
            onClick={(e) => {
              e.preventDefault();
              openInNewTab('https://github.com/V-Blaze');
            }}
            type="button"
            className="flex items-center justify-center cursor-pointer gap-4 h-20 bg-[#252629] text-white w-[100%] md:w-[50%] lg:w-[25%] text-3xl font-epilogue font-extrabold hover:translate-y-[-1rem]"
          >
            <p>Github</p>
            <FaGithubSquare />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              openInNewTab('https://www.linkedin.com/in/valentine-blaze/');
            }}
            type="button"
            className="flex items-center justify-center cursor-pointer gap-4 h-20 bg-[#015684] text-white w-[100%] md:w-[50%] lg:w-[25%] text-3xl font-epilogue font-extrabold hover:translate-y-[1rem]"
          >
            <p>Linkedln</p>
            <FaLinkedin />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              openInNewTab('https://twitter.com/blaze_valentine');
            }}
            type="button"
            className="flex items-center justify-center cursor-pointer gap-4 h-20 bg-[#1DA1F2] text-white w-[100%] md:w-[50%] lg:w-[25%] text-3xl font-epilogue font-extrabold hover:translate-y-[-1rem] "
          >
            <p>Twitter</p>
            <FaTwitterSquare />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              openInNewTab('https://slack.com');
            }}
            type="button"
            className="flex items-center justify-center cursor-pointer gap-4 h-20 bg-[#398DFF] text-white w-[100%] md:w-[50%] lg:w-[25%] text-3xl font-epilogue font-extrabold hover:translate-y-[1rem]"
          >
            <p>Slack</p>
            <FaSlack />
          </button>
        </div>
        <a href="mailto:valentine6586@gmail.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center font-bold font-epilogue w-full bg-green-500 text-white h-12 gap-4 cursor-pointer ">
          <span>
            SHOOT ME A MAIL
          </span>
          <BiMailSend />
        </a>
      </div>
      <div className=" flex justify-center items-center h-16 bg-[#171823 text-white font-extrabold ">
        <span>© Copyright 2022, Valentine Blaze. All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Home;
