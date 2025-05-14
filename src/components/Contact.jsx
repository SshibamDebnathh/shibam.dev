import React from 'react'
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className='flex lg:basis-1/2 min-w-1/3 bg-purple-500 rounded-xl flex-wrap justify-evenly hover:shadow-2xl hover:shadow-purple-300 lg:text-xl border-2 border-purple-300 lg:p-10 m-10 gap-5 p-10 text-sm' id="contact">
        <div className='flex flex-col lg:gap-10 gap-2 lg:py-10 py-2 font-sans font-medium'>
          <h1 className='lg:text-4xl text-2xl text-center text-white font-sans justify-center items-center'>Lets talk</h1>
          <div
          className='flex flex-col lg:gap-5 lg:py-6 px-5 flex-wrap '>
          
            <p> <span className='text-white'>Lets talk </span>on something great together</p>
            <p className='flex items-center gap-2'><FaEnvelope />shibam.hi@gmail.com</p>
          </div>
        </div>
        <form action="/submit" method="POST" className='flex flex-col gap-3 lg:w-72 md:w-60 lg:p-6 border-2 border-black bg-gray-700 rounded-xl lg:text-lg p-5 text-sm min-w-44 mt-0'>
          <label htmlFor="name" className='text-white'>Name</label>
          <input type="text" id="name" name="name" required className='rounded-md lg:p-2 outline-purple-400 p-1' />

          <label htmlFor="email" className='text-white'>Email</label>
          <input type="email" id="email" name="email" required className='rounded-md lg:p-2 outline-purple-400 p-1' />

          <label htmlFor="message" className='text-white'>Message</label>
          <textarea id="message" name="message" rows="4" required className='rounded-md lg:p-2 p-1 outline-purple-400'></textarea>

          <button
            type="submit"
            className='border-2 border-white bg-purple-600 text-white py-2 px-5 rounded-lg text-center mx-auto'>
            Send</button>
        </form>

      </div>
    </>

  )
}

export default Contact