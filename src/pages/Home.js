import React from 'react';

import { pProfile } from '../assets';

const Home = () => (
  <div className=" grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
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
);

export default Home;
