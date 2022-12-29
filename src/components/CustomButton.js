/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({
  btnType, title, handleClick, styles,
}) => (
  // <button
  //   type={btnType}
  //   className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
  //   onClick={handleClick}
  // >
  //   {title}
  // </button>
  <a href="#_" onClick={handleClick} type={btnType} className={`relative px-5 py-3 overflow-hidden font-medium text-white ${styles} rounded-lg shadow-inner group`}>
  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#4ca5ff] group-hover:w-full ease" />
  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#b673f8] group-hover:w-full ease" />
  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#4ca5ff] group-hover:h-full ease" />
  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#b673f8] group-hover:h-full ease" />
  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] opacity-0 group-hover:opacity-100" />
  <span className="relative transition-colors duration-300 delay-200 group-hover:text-[#000] ease">{title}</span>
</a>
);

CustomButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  btnType: PropTypes.oneOf(['button', 'submit']).isRequired,
  title: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
};

export default CustomButton;
