import React, { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md"; 
 

export const Header = () => {
    const [sideNav, setSideNav] = useState(false);

    const handleChange = () => {
        setSideNav(!sideNav);
    }

    return (
        <div className="bg-[rgb(245,246,250)] flex justify-between py-[20px] px-[25px] text-[15px] font-semibold border-b h-[70px] relative">
            <div>
                <p>Shahnawaz<span className="text-[#fbc531]">Food</span></p>
            </div>
            <div>
                <ul className="sm:flex gap-4 hidden cursor-pointer">
                    <li className="hover:text-[#fbc531]">
                        Home
                    </li>
                    <li className="hover:text-[#fbc531]">
                        About Us
                    </li>
                    <li className="hover:text-[#fbc531]">
                        Offers
                    </li>
                    <li className="hover:text-[#fbc531]">
                        Sign In
                    </li>
                </ul>
            </div>

           {/*  Hamburger Logic */}
            {sideNav &&
                <div className="bg-[rgb(245,246,250)] w-[200px] absolute top-[65px] right-0 text-center h-[100vh] flex items-center justify-cente px-[60px] z-10 ">
                    <MdClose size={30} className="absolute top-2 right-3 cursor-pointer" onClick={handleChange} />
                    <ul className="sm:flex gap-12  cursor-pointer flex-col absolute">
                        <li className="hover:text-[#fbc531]">
                            Home
                        </li>
                        <li className="hover:text-[#fbc531]">
                            About Us
                        </li>
                        <li className="hover:text-[#fbc531]">
                            offers
                        </li>
                        <li className="hover:text-[#fbc531]">
                            Sign In
                        </li>
                    </ul>
                </div>
            }

           {/*  Hamburger logic end */}
            <div className="flex gap-5 cursor-pointer">
                <GiHamburgerMenu size={30} className="sm:hidden" onClick={handleChange} />
                <p><FaCartPlus size={30} /></p>
            </div>
        </div>
    )
}
