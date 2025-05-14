import { motion } from "framer-motion";
import shibam from '../assets/sshibam.png'


export default function HeroSection() {

  
  
  return (
    <div id="home" className="flex flex-wrap lg:justify-between w-full gap-10 mt-12 min-h-screen justify-center items-center lg:px-16">

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col text-center bg-gray-500 lg:h-80 rounded-lg lg:px-10 px-3 justify-center items-center lg:gap-5 border-2 border-purple-300 shadow-purple-400 shadow-xl lg:ml-14 h-56 text-purple-200"
      >
        <h1 className="text-3xl font-bold mb-4">Hi, I'm Shibam 👋</h1>
        <p className="text-base">Frontend Developer | React | Tailwind</p>
        <div className="mt-6">
          <a
            href="#projects"
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition border-2 border-white"
          >
            See My Work
          </a>
        </div>

      </motion.div>
      <div className="flex items-center animate-bounce lg:mr-10 px-20 justify-center">
        <div className="absolute border-4 border-purple-300 z-0 skew-x-12 skew-y-12 shadow-purple-300 shadow-2xl lg:w-40 lg:h-48 w-32 h-40 min-w-32" ></div>
        <img src={shibam} alt="shibam" className="relative rounded-full shadow-purple-400 shadow-2xl border-4 p-2 border-purple-300 z-20 lg:w-40 lg:h-40 w-32 h-32 min-w-32" />
        <div className=" absolute border-4 border-purple-300 z-10 -skew-x-12 -skew-y-12 shadow-purple-300 shadow-2xl lg:w-40 lg:h-48 w-32 h-40"></div>
      </div>
    </div>

  );
}
