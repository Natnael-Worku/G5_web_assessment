import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {colors} from '@/constants/index';
const NavBar = () => {
  return (
    <div className="w-full  px-4 py-2 ">
      <div className="flex justify-between items-center max-w-7xl mx-auto"> {/* Center content and set max-width */}
        
        <div className=" self-start flex items-center py-3"> {/* Center the logo vertically */}
          <Image src={'/Images/logo.png'} width={200} height={50} alt="logo of A2SV" />
        </div>
        
        <div className="flex gap-5"> {/* Adjust spacing between links */}
          <Link href="/">Home</Link>
          <Link href="/teams">Teams</Link>
          <Link href="/success-stories">Success Stories</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/blogs" className='text-[#264FAD] border-b-2  font-bold border-b-[#264FAD] ' >Blogs</Link>
          <Link href="/get-involved">Get Involved</Link>
        </div>
        
        <div className="flex gap-4"> {/* Adjust spacing between buttons */}
          <button className="text-black ">Login</button>
          <button className={`text-white ${colors.bg_secondary} p-2 `}>Donate</button>

        </div>
      </div>
    </div>
  );
}

export default NavBar;
