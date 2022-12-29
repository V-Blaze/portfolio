import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Projects = () => (
  <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={['Projects Coming Soon !!!', 2000, 'Check back Later !!!', 2000]}
    speed={50} // Custom Speed from 1-99 - Default Speed: 40
              // style={{ fontSize: '2em' }}
    className=" min-w-full m-h-full text-white font-epilogue font-extrabold flex items-center justify-center "
    wrapper="div" // Animation will be rendered as a <span>
    repeat={Infinity}
  />
);

export default Projects;
