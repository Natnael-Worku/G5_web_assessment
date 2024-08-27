import React from 'react'
import { Blogtype } from '@/types'
import Image from 'next/image'
import {colors } from '@/constants/index'

interface BlogBodyProps {
    blog: Blogtype
}
const BlogBody = ({blog}:BlogBodyProps) => {
  return (
    <div>
        <div className='flex flex-col gap-10 justify-center items-center' >
            <p className={`${colors.text_primary} font-semibold text-[20px] `} > {blog.title} </p>
            <p className={`${colors.text_secondary} font-light text-[18px] w-[60%] `} >{blog.description}</p>
        </div>
    </div>
  )
}

const tets = ()=>{
return(
    <div className={`  bg-[#ffffff] text-[#737373]  `} >hi 
    
    <div className={`bg-[#264FAD]   text-[#000000] `} ></div>
    
    </div>
)
}

export default BlogBody