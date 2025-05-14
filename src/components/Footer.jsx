import React from 'react'
import { FaTwitter,FaAirbnb,FaLinkedin,FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <div className='flex flex-row justify-center bg-slate-950 gap-10 lg:w-full md:w-full p-16 min-h-min text-gray-400 text-sm lg:text-lg'>
      <div className='flex flex-col gap-10'>
      <div className="lg:text-2xl text-lg font-bold text-purple-400">
          Shibam.dev
        </div>
        <p><b>Getting better everyday</b></p>
        
          <ul className='flex flex-col'>
            <li><a href="#about" >About</a></li>
            <li><a href="#testimonials" >Testimonials</a></li>
            <li><a href="#contact" >Contact</a></li>
          </ul>
        
        <p>Owner © <b>wwww.shibam.dev copyright @2025 || All Rights reserved</b></p>

      </div>
      <div className='flex w-full gap-16 justify-end'>

        <ul><b className='text-lg'>Open to Roles</b>
          <li>React</li>
          <li>Javascript</li>
          <li>Frontend</li>
          <li>Nodejs</li>
          <li>Redux</li>
        </ul>
        <div>
        <b className='text-lg'>Social Links</b>
        <ul className='flex flex-wrap gap-2'>
          <li><FaLinkedin/></li>
          <li><FaGithub/></li>
          <li><FaAirbnb /></li>
          <li><FaTwitter /></li>
        </ul>
        </div>
      </div>

    </div>
  )
}

export default Footer