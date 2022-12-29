import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsEmojiSunglasses } from 'react-icons/bs';
import Icon from './Icon';

import { logo } from '../assets';
import { navlinks } from '../constants';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      {/* <Link to="metalunr.com">
        <Icon imgUrl={logo} link={{}} isActive="" handleClick={() => {}} />
      </Link> */}
      <img src={logo} alt="logo" className="w-[52px] h-[52px] bg-[#2c2f32] rounded-full hover:cursor-pointer" />
      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              link={link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>

        <BsEmojiSunglasses className="text-white text-2xl hover:scale-50 hover:cursor-wait " />
      </div>
    </div>
  );
};

export default Sidebar;
