import React from 'react'
import Image from 'next/image'
import {colors} from '@/constants/index'
import Link from 'next/link'
import { FaTwitter,FaFacebook,FaYoutube,FaLinkedin,FaInstagram } from "react-icons/fa";
import {  } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='flex flex-col gap-5 ' >
        <div className='flex gap-10 border-y px-10 border-gray-300 py-3 ' >
            <div className='flex gap-5' >
                <div>
                    <Image src={'/Images/footer.png'} width={240} height= {200} alt= 'footer images' />
                </div>
                <div className='flex flex-col gap-5 w-[380px] ' >
                    <p className={`text-[24px] ${colors.text_primary} font-bold  text-wrap `} >Get involved in imporving tech education in Africa</p>
                    <button className={`text-white ${colors.bg_secondary} w-[70%] rounded-md  py-3`} >Support us </button>
                </div>
            </div>
        
        
            <div className='flex gap-14'>
                <div className='flex flex-col gap-5' >
                    <p className={`${colors.text_primary} text-[22px] font-bold`}>Links</p>
                    <Link href={'/'} className={`${colors.text_secondary} text-nowrap font-light text-[18px]`} >Home</Link>
                    <Link href={'/success-stories'} className={`${colors.text_secondary} text-nowrap font-light text-[18px]`} >Success Stories</Link>
                    <Link href={'/about-us'} className={`${colors.text_secondary} text-nowrap font-light text-[18px]`} >About Us</Link>
                    <Link href={'/get-involved'} className={`${colors.text_secondary} text-nowrap font-light text-[18px]`}>Get Involved</Link>
                </div>
                <div className='flex flex-col gap-5' >
                <p className={`${colors.text_primary} text-[22px] font-bold`}>Teams</p>
                <Link className={`${colors.text_secondary} text-nowrap font-light text-[18px]`} href={'/teams/board-members'}>Board memebers</Link>
                <Link className={`${colors.text_secondary} text-nowrap font-light text-[18px]`} href={'/teams/advisors'}>Advisors/Mentors</Link>
                <Link className={`${colors.text_secondary} text-nowrap font-light text-[18px]`} href={'/teams/executives'}>Executives</Link>
                <Link className={`${colors.text_secondary} text-nowrap font-light text-[18px]`} href={'/teams/staffs'}>staffs</Link>

                </div>
                <div className='flex flex-col gap-5' >
                <p className={`${colors.text_primary} text-[22px] font-bold`}>Blogs</p>
                <Link className={`${colors.text_secondary} text-nowrap font-light text-[18px]`} href={'/blogs'}>Recent Blogs</Link>
                <Link className={`${colors.text_secondary} text-nowrap font-light text-[18px]`} href={'/blogs'}>New Blogs</Link>
                </div>
            </div>
        </div>
        <div className='flex justify-between px-10'>
            <div  >&copy;  2020 Africa to Silicon Valley, Inc. All rights reserved </div>
            <div className='flex gap-4'>

                <FaTwitter className='text-gray-500 text-3xl' />
                <FaFacebook className='text-gray-500 text-3xl' />
                <FaYoutube className='text-gray-500 text-3xl' />
                <FaLinkedin className='text-gray-500 text-3xl' />
                <FaInstagram className='text-gray-500 text-3xl' />
            </div>
        </div>
    </div>
  )
}

export default Footer