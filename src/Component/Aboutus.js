import React from 'react'

export default function Aboutus() {
  return (
    <>
    <h2 className='font-bold text-2xl text-[#fbc531] flex justify-center'>About Us</h2>

   <div className="sm:grid grid-cols-1 md:grid grid-cols-2 w-[90%] mx-auto mt-[20px] rounded-md " >
   <div className='w-[90%]  '>
      <h1 className='font-bold text-2xl pl-2  pt-5 '>
      Have No time to Prepare Food?
      </h1>
     <p className="pl-2 pt-[40px] text-xl ">
      We build innovative products & solutions that deliver unparalleled convenience to urban consumers.
     
     </p>

     <p className="pl-2 pt-[40px] text-xl">
      We Provide delecious and health food at your Home. we take care of health conditionof our Custemoer.
     
     </p>
   </div>

   <div className="w-[90%] ">
    <img src="https://credencys.com/wp-content/uploads/2020/10/features-of-online-food-ordering-system.jpg" className='object-cover rounded-xl w-full ' alt=""/>
   </div>
   </div>
    </>
  )
}
