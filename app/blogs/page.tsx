
import React from 'react';

import AllBlogs from '@/components/blogs/AllBlogs';
import SearchBlog from '@/components/blogs/SearchBlog';
const Page = () => {

  return (
    <div>
      {/* <BlogCard blog= {} /> */}
      <SearchBlog />
      <div className='flex justify-center'>
        <AllBlogs />
      </div>
    </div>
  );
}

export default Page;
