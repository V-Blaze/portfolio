import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import { FaReact, FaPeopleArrows } from 'react-icons/fa';

// Components
import { Experties, Project } from '../components';

// Constants
import { projects } from '../constants';

// Assets
import { pProfile } from '../assets';
// import { reactIcon } from '../languages';

const Home = () => (
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
      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] bg-transparent text-5xl underline font-epilogue font-extrabold my-8">My Experties</h3>
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
        <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] bg-transparent text-5xl underline font-epilogue font-extrabold my-1">My Projects</h3>
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
  </div>
);

export default Home;
