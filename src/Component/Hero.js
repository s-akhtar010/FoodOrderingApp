import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export const Hero = () => {
    const imgData=[
        {
            url:"https://i.pinimg.com/originals/c9/4a/ff/c94affe6bcb9fbf7d3508ba98977a1d1.jpg",
        },
        {
            url:"https://static.vecteezy.com/system/resources/previews/030/316/720/large_2x/cup-holds-dawn-s-aroma-window-backdrop-table-shadow-stretches-coffee-s-awakening-vertical-mobile-wallpaper-ai-generated-free-photo.jpg",
        },
        {
            url:"https://thumbs.dreamstime.com/b/indian-thali-26440162.jpg",
        }
    ];

    const [slider, setSlider] = useState(0);

    const handleLeft = () => {
        setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
    };

    const handleRight = () => {
        setSlider(slider === imgData.length - 1 ? 0 : slider + 1);
    };

   /*  useEffect(()=>{
       const sliderClear= setInterval(()=>{
         handleRight()
        },3000)

        return()=>clearInterval(sliderClear)

    },[slider]) */

    return (
        <div>
            <div className="w-[90%] mx-auto h-[80vh] my-5 relative" >
               
                <img src={imgData[slider].url} alt="" className=' w-full h-[80vh] object-cover  rounded-3xl border-gray-300'/>
            </div>
            <p className="absolute top-[50%] text-center w-full text-xl text-gray-100 font-semibold md:text-2xl">
                Welcome To the Delicious Food
            </p>
            <div className="flex justify-between w-full px-5 absolute top-[50%] text-black">
                <FaArrowAltCircleLeft size={30} className="cursor-pointer" onClick={handleLeft}/>
                <FaArrowAltCircleRight size={30} className="cursor-pointer" onClick={handleRight}/>
            </div>
        </div>
    );
};
