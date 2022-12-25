/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({
  btnType, title, handleClick, styles,
}) => (
  <button
    type={btnType}
    className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles}`}
    onClick={handleClick}
  >
    {title}
  </button>
);

CustomButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  btnType: PropTypes.oneOf(['button', 'submit']).isRequired,
  title: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
};

export default CustomButton;
