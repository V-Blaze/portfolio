/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Experties = ({ desc, title, Icon }) => { 
const childVariant = {
  hidden: {opacity: 0, scale: 0.9 },
  visible: {opacity: 1, scale: 1}
}
return (
  <motion.div className="flex flex-col border-solid border-cyan-200 border-2 p-10 mt-4"
          variants={childVariant}
  >
    <div className="grid grid-cols-5 justify-center items-center gap-1 ">

      <img src={Icon} alt="TEST" className="text-white w-16 h-16" />
      <h3 className="text-white text-3xl font-bold col-span-4">{title}</h3>
    </div>
    <div className="p-8">
      <span className="text-[#A3B3BC] text-xl font-epilogue my-3 block ">
        {desc}
      </span>
    </div>
  </motion.div>
);}

Experties.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Experties;
