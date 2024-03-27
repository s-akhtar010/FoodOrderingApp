import React from 'react';
import SliderData from './SliderData';

export default function Slider() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <div classname="py-20">
        {SliderData.map((item, i) => (
            
        <div className="bg-white rounded-md"  key={item.id}>
               
          <div > 
           <img src={item.img} alt="" className="w-[400px] h-[400px]"/>
          </div>
          <div  > 
            <p>{item.title}</p>
          </div>
            </div>
        ))}
        </div>
      
      </div>
    </>
  );
}
