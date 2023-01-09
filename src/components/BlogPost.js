import React from 'react';
import PropTypes from 'prop-types';
import { logo } from '../assets';

const BlogPost = ({ post, openInNewTab }) => {
  const {
    title, slug, date, readTime, imageUrl, link,
  } = post;
  return (
    <div className="px-8 py-4 m-4 shadow-lg border-l-8 border-green-600 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=" col-span-2">
          <div className="flex gap-2 items-center">
            <img src={logo} alt="logo" className="bg-black rounded-full w-8 h-8" />
            <span className=" text-gray-700 font-semibold">V-Blaze</span>
            <span className=" text-gray-400 italic my-4">{date}</span>
          </div>
          <h3 className="text-2xl font-black font-epilogue">{title}</h3>
          <span className=" text-gray-500">{slug}</span>
        </div>
        <div className="">
          <img src={imageUrl} alt="post" className=" h-48 w-full hover:scale-105 rounded-xl" />
        </div>
      </div>
      <div className="flex justify-start gap-4 mt-4">
        <span className="italic text-green-700">{readTime}</span>
        <button
          type="button"
          onClick={() => {
            openInNewTab(link);
          }}
          className="border border-green-600 px-5 rounded-2xl hover:bg-green-600 hover:text-white"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  post: PropTypes.oneOfType([PropTypes.object]).isRequired,
  openInNewTab: PropTypes.func.isRequired,
};

export default BlogPost;
