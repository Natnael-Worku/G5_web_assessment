import React from "react";
import Image from "next/image";
import { Blogtype } from "@/types/index";
import {colors} from '@/constants/index'
import Tags  from '@/components/blogs/Tags'
import Link from "next/link";

type BlogCardProps = {
  blog: Blogtype;
};

const BlogCard = ({ blog }: BlogCardProps) => {
  // Ensure that blog.image is

  const formatDate = (dateTime: string) => {
    const date = new Date(dateTime);

    const dateOptions: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };

    const formattedDate = date.toLocaleDateString(undefined, dateOptions);
    const formattedTime = date.toLocaleTimeString(undefined, timeOptions);

    return `${formattedDate} at ${formattedTime}`;
  };

  return (
    <Link  href={`/blogs/${blog._id}`} passHref >
      <div className="w-[100%] ">
        <div className="grid grid-cols-10 gap-14 border-y py-4 px-5 border-gray-300 items-center ">
          <div className="col-span-6">
            <div className="flex flex-col gap-10  justify-center">
              <div className="flex gap-5  items-center">
                <div className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-gray-200">
                  {blog.author ? (
                    <Image
                      src={blog.author.image}
                      width={40}
                      height={20}
                      alt="image of single blog component"
                      className="rounded-full object-cover"
                      layout="fixed"
                    />
                  ) : (
                    <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-gray-300">
                      Un
                    </div>
                  )}
                </div>
                <div>
                  <div className={`text-[18px] ${colors.text_primary}  font-semibold  `} >
                    {blog.author ? blog.author?.name : "Unknown"} .{" "}
                    <span className={`${colors.text_secondary} text-[16px]`} >{blog.updatedAt}</span>
                  </div>
                  <p  className={`${colors.text_secondary} text-[16px]`} >{blog.author ? blog.author.email : "Unkown"}</p>
                </div>
              </div>
              <div>
                <div className="flex flex-col  gap-3" >
                  <h2  className={`${colors.text_primary} text-[24px] font-extrabold  `} >{blog.title}</h2>
                  <p className={`text-[16px] ${colors.text_secondary} font-normal  `}>{blog.description}</p>
                </div>
              </div>
              <div>
                <div className="flex gap-2" >
                  {blog.tags.map((tag,index)=>{
                      return <Tags key={index} name={tag}/>
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <Image
              src={blog.image}
              width={300}
              height={200}
              alt="image of single blog component"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
