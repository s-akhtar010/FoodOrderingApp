import React from 'react'

export default function Footer() {
  return (
   <>
   <div className="w-full bg-black rounded-md text-white">
      <div className="grid grid-cols-1  justify-center sm:grid-cols-2 md:grid-cols-4 py-10 px-5">
        <div>
           <h3 className='font-bold mb-3 text-[30px]'>Shahnawaz <span className="text-[#fbc531]">Food</span></h3> 
           <p className="text-[20px] text-[gray]">Shahnawaz Technologies Pvt Ltd</p>
        </div>
         
        <div>
           <h3 className="font-bold mb-3 text-[25px]">Company</h3> 
           <p className="text-[20px] mb-2 text-[gray]">Abouts</p>
           <p className="text-[20px] mb-2 text-[gray]">Carrers</p>
           <p className="text-[20px] mb-2 text-[gray]">Teams</p>
        </div>

        <div>
           <h3 className="font-bold mb-3 text-[25px]">Help N Support</h3> 
           <p className="text-[20px] mb-2 text-[gray]">Partner With Us</p>
           <p className="text-[20px] mb-2 text-[gray]">Grow With Us</p>
           <p className="text-[20px] mb-2 text-[gray]">@support </p>
        </div>

        <div >
           <h3 className="font-bold mb-3 text-[25px]">We Deliver Too</h3> 
           <p className=" text-[20px] mb-2 text-[gray]">pune</p>
           <p className="text-[20px] mb-2 text-[gray]">Noida</p>
           <p className="text-[20px] mb-2 text-[gray]">Gurgoan</p>
        </div>
     </div>
   </div>
   </>
  )
}
