import React from 'react'
import { FaTwitter,FaAirbnb,FaLinkedin,FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <div className='flex flex-row justify-between bg-slate-950 gap-10 w-full p-10 min-h-min text-gray-400'>
      <div className='flex flex-col gap-10'>
      <div className="text-2xl font-bold text-purple-400">
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
        <ul><b className='text-lg'>Social Links</b>
          <li><FaLinkedin/></li>
          <li><FaGithub/></li>
          <li><FaAirbnb /></li>
          <li><FaTwitter /></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer