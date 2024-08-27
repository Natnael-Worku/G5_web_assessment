'use client'
import React from 'react';
import { useAppSelector } from '@/lib/redux/store';

import AllBlogs from '@/components/blogs/AllBlogs';
import SearchBlog from '@/components/blogs/SearchBlog';
const Page = () => {
  // Use the selector to access the value from the allblogs slice
  const value = useAppSelector((state) => state.allblogs.value);

  // Log the value to the console
  // console.log('Value from allblogs:', value);

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
