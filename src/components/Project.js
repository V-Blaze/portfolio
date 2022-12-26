import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import CustomButton from './CustomButton';

const Project = ({ project }) => {
  const navigate = useNavigate();
  const {
    id, name, imgUrl, liveLink, codeLink, desc, stack,
  } = project;

  return (
    <div className="flex flex-col justify-between border-solid border-2 border-[#33354b] bg-[#171823] rounded-xl p-4 h-[460px] ">
      <div className="grid grid-cols-2 gap-6">
        <img src={imgUrl} alt={name} className=" h-[250px] rounded-xl " />
        <div className="flex flex-col">
          <h3 className=" text-white text-3xl font-bold mb-4 ">{name}</h3>
          <span className="text-[#A3B3BC] text-normal font-epilogue my-3 block truncate">{desc}</span>
          <button type="button" id={id} className=" border-none bg-transparent text-white self-center underline">Preview</button>
        </div>
      </div>
      <div className=" flex justify-around my-4">
        {stack.map((item) => (
          <span key={item} className="text-[#fff] border-[#fff] border-2 border-solid px-2 w-fit rounded-lg bg-gray-700  ">{item}</span>
        ))}
      </div>
      <div className="flex items-center justify-evenly ">
        {/* <a href={liveLink}><button type="button">view live</button></a> */}
        <CustomButton
          btnType="button"
          title="View Live"
          styles="bg-[#1dc071]"
          handleClick={() => {
            navigate(liveLink);
          }}
        />
        <CustomButton
          btnType="button"
          title="Source Code"
          styles="bg-[#1dc071]"
          handleClick={() => {
            navigate(codeLink);
          }}
        />
        {/* <a href={codeLink}><button type="button">source code</button></a> */}
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Project;