import React from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import { FaLink, FaMapMarkerAlt } from 'react-icons/fa';

const CustomAccordion = ({
  open, num, customAnimation, handleOpenProp, experience,
}) => {
  const {
    position, location, link, jobDesc, stack, logo, year,
  } = experience;

  return (
    <>
      <Accordion open={open === (num + 1)} animate={customAnimation}>
        <AccordionHeader onClick={() => { handleOpenProp((num + 1)); }} className=" flex items-center justify-between text-[0.75rem] text-white bg-[#1DC071] w-full rounded-xl px-2 m-auto">
          <span className="w-[75%] mr-auto">{position}</span>
          <span>{year}</span>
          <span className="ml-auto">{open !== (num + 1) ? '+' : '-'}</span>
        </AccordionHeader>
        <AccordionBody className="bg-[#1f372b] rounded-xl my-4 px-3 ">
          <div className="grid grid-cols-1 md:grid-cols-5 items-center mb-4">
            <div className="flex justify-center md:order-1 ">
              <img src={logo} alt="thirdweb" className=" w-24 h-24 " />
            </div>
            <div className="col-span-4">
              <div className="flex gap-6 flex-wrap">
                <span className="flex items-center justify-center gap-2 text-[#A3B3Bc] my-2">
                  <FaMapMarkerAlt />
                  {location}
                </span>
                <span className="flex items-center justify-center gap-2 text-[#A3B3Bc] my-2">
                  <FaLink />
                  <a href={link} target="_blank" rel="noreferrer">{link}</a>
                </span>
              </div>
              <div>
                <span className="text-[#fff] text-normal font-epilogue my-3 block ">
                  {jobDesc}
                </span>
              </div>
              <div className=" my-4 flex justify-around">
                {stack.map((item) => (
                  <span key={item} className="text-[#fff] border-[#fff] border-2 border-solid px-2 w-fit rounded-lg bg-gray-700 ">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
};

CustomAccordion.propTypes = {
  customAnimation: PropTypes.oneOfType([PropTypes.object]).isRequired,
  experience: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleOpenProp: PropTypes.func.isRequired,
  num: PropTypes.number.isRequired,
  open: PropTypes.number.isRequired,
};

export default CustomAccordion;
