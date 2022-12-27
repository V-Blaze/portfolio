import React, { useState } from 'react';
import { MdDesktopMac } from 'react-icons/md';
import {
  FaReact, FaPeopleArrows, FaGithubSquare, FaTwitterSquare, FaSlack, FaLinkedin,
} from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

// Components
import { Experties, Project, CustomAccordion } from '../components';
// Constants
import { projects, experiences } from '../constants';
// Assets
import { pProfile } from '../assets';
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

  return (
    <div className=" grid gap-6 ">
      <div className=" grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 my-20 ">
        <div className="mt-12">
          <div className=" bg-green-200 w-fit rounded-lg">
            <h1 className="my-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] bg-transparent border-[#fff] border-2 border-solid px-2 w-fit rounded-lg">Hi There! I&apos;m Valentine</h1>
          </div>
          <h3 className="text-4xl font-epilogue text-white font-extrabold leading-normal ">
            A
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] bg-transparent"> FullStack Engineer</span>
            . I Help Startups
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] bg-transparent"> Launch </span>
            And
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] bg-transparent"> Grow </span>
            Their Products
          </h3>
          <span className=" text-[#A3B3BC] text-xl font-epilogue my-3 block ">
            I am a software engineer with more than four years of experience. recognized
            as a practical and effective developer, experienced in leading cross-functional
            teams in a time-pressured setting to complete projects on schedule and within budget.
          </span>
        </div>
        <div className="flex justify-center items-center">
          <img src={pProfile} alt="profile" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-20">
        <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] bg-transparent text-5xl underline font-epilogue font-extrabold my-8">Experties</h3>
        <div className="grid grid-cols-1 sm:gap-3 lg:gap-0 md:gap-0 md:grid-cols-2 lg:grid-cols-3">
          <Experties
            title="BackEnd Development"
            Icon={MdDesktopMac}
            desc="
          Experienced in both functional and OOP: Ruby, Rails, Ruby on Rails, Node,
          JavaScript, TypeScript.
          "
          />
          <Experties
            title="FrontEnd Develpoment"
            Icon={FaReact}
            desc="
          Passionate about UI/UX. Over 4 years of development
          experience in HTML, CSS, Figma, JS, React, Redux, and NextJS frameworks.
          "
          />
          <Experties
            title="Soft Skills"
            Icon={FaPeopleArrows}
            desc="
          Excellent in Remote collaboration, pair programming, agile methodologies,
          communication, mentorship, leadership.
          "
          />
        </div>
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
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] bg-transparent text-5xl underline font-epilogue font-extrabold my-1">Professional Experience</h3>
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
          <a href="github.com" target="_blank" rel="noreferrer">
            <div className="flex items-center justify-center cursor-pointer gap-4 h-20 bg-[#252629] text-white w-[100%] md:w-[50%] lg:w-[25%] text-3xl font-epilogue font-extrabold">
              <p>Github</p>
              <FaGithubSquare />
            </div>
          </a>
          <a href="linkedin.com" target="_blank" rel="noreferrer">
            <div className="flex items-center justify-center cursor-pointer gap-4 h-20 bg-[#015684] text-white w-[100%] md:w-[50%] lg:w-[25%] text-3xl font-epilogue font-extrabold">
              <p>Linkedln</p>
              <FaLinkedin />
            </div>
          </a>
          <a href="twitter.com" target="_blank" rel="noreferrer">
            <div className="flex items-center justify-center cursor-pointer gap-4 h-20 bg-[#1DA1F2] text-white w-[100%] md:w-[50%] lg:w-[25%] text-3xl font-epilogue font-extrabold">
              <p>Twitter</p>
              <FaTwitterSquare />
            </div>
          </a>
          <a href="slack.com" target="_blank" rel="noreferrer">
            <div className="flex items-center justify-center cursor-pointer gap-4 h-20 bg-[#398DFF] text-white w-[100%] md:w-[50%] lg:w-[25%] text-3xl font-epilogue font-extrabold">
              <p>Slack</p>
              <FaSlack />
            </div>
          </a>
        </div>
        <a href="mailto:valentine6586@gmail.com" target="_blank" rel="noreferrer">
          <div className="flex justify-center items-center font-bold font-epilogue w-full bg-green-500 text-white h-12 gap-4 cursor-pointer ">
            <span>
              SHOOT ME A MAIL
            </span>
            <BiMailSend />
          </div>
        </a>
      </div>
      <div className=" flex justify-center items-center h-16 bg-[#171823 text-white font-extrabold ">
        <span>© Copyright 2022, Valentine Blaze. All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Home;
