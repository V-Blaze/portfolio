import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ link, isActive, handleClick }) => {
  const {
    styles, name, imgUrl, disabled,
  } = link;

  return (
    <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick} onKeyDown={handleClick} onTouchStart={handleClick} role="presentation">
      {!isActive ? (
        <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
      ) : (
        <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
      )}
    </div>
  );
};

Icon.propTypes = {
  link: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleClick: PropTypes.func.isRequired,
  isActive: PropTypes.string.isRequired,
};

export default Icon;
