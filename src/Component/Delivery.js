import React from 'react'

export default function Delivery() {
  return (
    <>
    <div className="w-full py-16 px-4">
        <h3 className="text-[#fbc531] font-bold text-2xl text-center">Quick Delivery App</h3>
        <div className="grid grid-cols-2 w-[90%] mx-auto my-10 ">

            <img src="https://i.pinimg.com/736x/cd/c2/a5/cdc2a5b42fa67eade3169c22893c8dd9.jpg" 
             className="w-[550px] rounded-xl" alt=""/>
            <div className="flex flex-col justify-center">
                <p className="font-bold text-[green] text-[30px]">Get The App</p>
                <h2 className="text-3xl py-2 font-bold">Limitless Convenience on Demand</h2>
                <button className="bg-black w-[150px] text-white rounded-md my-6 py-[15px] text-[20px] hover:text-[#fbc531]">Get Started</button>
            </div>

        </div>
    </div>
    </>
  )
}
