import React, { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md"; 
import { Link } from 'react-router-dom';
 

export const Header = ({count}) => {
    const [sideNav, setSideNav] = useState(false);

    const handleChange = () => {
        setSideNav(!sideNav);
    }

 

    return (
        <div className="fixed z-50 top-0 left-0 w-full bg-white">
        <div className="bg-[rgb(245,246,250)] flex justify-between py-[20px] px-[25px] text-[15px] font-semibold border-b h-[70px] relative">
            <div>
                <p className="font-bold text-xl">Shahnawaz<span className="text-[#fbc531]">Food</span></p>
            </div>
            <div className="">
                <ul className="sm:flex gap-4 hidden cursor-pointer">
                    <Link to='/'>
                    <li className="hover:text-[#fbc531] font-semibold text-xl">
                        Home
                    </li>
                    </Link>

                    <Link to='ourfoods'>
                   <li className="hover:text-[#fbc531] font-semibold text-xl">
                        Our Foods
                    </li>
                   </Link>
                   <Link to='aboutus'>
                   <li className="hover:text-[#fbc531] font-semibold text-xl">
                        About Us
                    </li>
                   </Link>
                  
                   <Link to='signin'>
                   <li className="hover:text-[#fbc531] font-semibold text-xl">
                        Sign In
                    </li>
                   </Link>
                </ul>
            </div>

           {/*  Hamburger Logic */}
            {sideNav &&
                <div className="bg-[rgb(245,246,250)] w-[200px] absolute top-[65px] right-0 text-center h-[450px] flex items-center justify-cente px-[60px] z-10 ">
                    <MdClose size={30} className="absolute top-2 right-3 cursor-pointer" onClick={handleChange} />
                    <ul className="sm:flex gap-12  cursor-pointer flex-col absolute">
                    <Link to='/'>
                    <li className="hover:text-[#fbc531]" onClick={handleChange}>
                        Home
                    </li>
                    </Link>

                    <Link to='ourfoods'>
                   <li className="hover:text-[#fbc531]" onClick={handleChange}>
                        Our Foods
                    </li>
                   </Link>
                   <Link to='aboutus'>
                   <li className="hover:text-[#fbc531]" onClick={handleChange}>
                        About Us
                    </li>
                   </Link>
                  
                   <Link to='signin'>
                   <li className="hover:text-[#fbc531]" onClick={handleChange}>
                        Sign In
                    </li>
                   </Link>
                    </ul>
                </div>
            }

           {/*  Hamburger logic end */}
            <div className="flex gap-5 cursor-pointer justify-center items-center">
                <GiHamburgerMenu size={30} className="sm:hidden" onClick={handleChange} />
                <p className=''>{count}<FaCartPlus size={28}  /></p>
                {/* <p className=''>{count}<FaCartPlus size={28}  /></p> */}
            </div>
        </div>

        </div>
    )
}
