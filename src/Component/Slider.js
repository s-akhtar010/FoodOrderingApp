import React from 'react';
import SliderData from './SliderData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function MySlider({addToCart}) { // Changed component name to MySlider
   /* 1024,  if screen size less than 1024px it will show only 3 items */
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,  
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <>
      <div className="w-[90%] mx-auto">
        <h2 className="font-bold text-3xl pl-10 flex justify-center mb-2 text-[rgba(255,187,51,1)]">Whats in Your Mind?</h2>
        <div className="py-20"> 
          <Slider {...settings}> 
            {SliderData.map((item, i) => (
              <div className="bg-white rounded-md" key={item.id}>
                <div className="flex justify-center items-center rounded-t-xl" > 
                  <img src={item.img} alt="" className="w-[200px] h-[200px] rounded-full object-cover gap-[10px]"/>
                </div>
                <div className="flex flex-col justify-center items-center"  > 
                  <p className="text-xl font-semibold uppercase">{item.title}</p>
                  <p className="text-xl font-semibold uppercase">{item.price}</p>
                  <button className="bg-black w-[100px] text-white rounded-md my-6 py-[10px] text-[15px] gap-2 hover:text-[#fb3]" onClick={addToCart}>Add to Cart</button>
                </div>
              </div>
            ))}
          </Slider> 
        </div>
      </div>
    </>
  );
}
