import React from 'react'

export default function Signin() {
  return (
   <>


    
<div className="w-[95%]  rounded-md bg-[rgb(245,246,250)] mx-auto my-10">
  <div className="container mx-auto px-4 py-8 rounded-2xl w-full">
    <form action="https://api.web3forms.com/submit" method="POST" className="sm:w-[90%] mx-auto bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 md:w-[50%]">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold mb-4">Get in <span className="text-[#fbc531]">Touch</span></h2>
        <hr className="border-gray-300" />
      </div>
      <input type="hidden" name="access_key" value="43d0d465-84ce-4f28-8adc-eee6d4a2b400" />
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Subject" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
        <textarea id="message" name="message" placeholder="Your Message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
      </div>
    </form>
  </div>

 
</div>

   </>
  )
}
