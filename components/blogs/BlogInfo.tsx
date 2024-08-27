import React from 'react'
import { Blogtype } from '@/types'
import Image from 'next/image'
import {colors } from '@/constants/index'

interface BlogInfoProps {
    blog: Blogtype
}
const BlogInfo = ({blog}:BlogInfoProps) => {
  return (
    <div>
       <div className='flex flex-col gap-5 justify-center items-center' >
        <div className={`${colors.text_primary} text-[22px] font-bold `} >{blog.title}</div>
        <div className={`${colors.text_secondary} text-[18px] font-normal `} >programming Tech | 6 min</div>
        <div>
            <Image src={`${blog.image}`} width={600} height={500} alt="image of the blog" />
        </div>
        <div className='flex flex-col gap-2 justify-center items-center' >
            <div>
            {
                blog.author ? (
            <Image src={`${blog.author.image}`} width={40} height={20} alt="image of the blog author" />

                ) : (
                    <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-gray-300">
                      Un
                    </div>
                )
            }    
            </div>
            <div>
                {
                    blog.author ? (
                        <div className='flex gap-1' >
                            <div>{blog.author.name}</div> |
                            <div>{blog.author.email}</div>
                        </div>
                    ):
                    (
                        <div className='flex gap-1' >
                            <div> Unknown </div> |
                            <div> Uknown </div>
                        </div>
                    )
                }
            </div>
            <div></div>
        </div>
        
        </div> 

    </div>
  )
}

export default BlogInfo