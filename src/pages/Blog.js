import React from 'react';
import { BlogPost } from '../components';
import { blogPosts } from '../constants';

const Blog = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="bg-white min-h-screen rounded-xl flex items-center flex-col">
      <h2 className="text-2xl font-bold font-epilogue mt-4">Recent Posts</h2>
      <hr className="bg-black w-full border-2" />
      <div className="">
        {blogPosts.map((post) => (
          <BlogPost
            key={post.id}
            post={post}
            openInNewTab={openInNewTab}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
