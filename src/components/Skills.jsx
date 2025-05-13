import { motion } from "framer-motion";

// trying the shadow emerald color as theme color of the site

export default function Skills() {
  return (
    <section className="flex flex-col p-12 bg-gray-400 overflow-hidden max-h-screen justify-center w-full" id='skills'>
      <h2 className="text-2xl font-semibold mb-6 text-center">Skills</h2>

      <div className="flex w-full overflow-x-hidden items-center gap-5 flex-wrap lg:flex-nowrap justify-center p-10">
        
          {techStack.map(([skill,url,hueA,hueB],i) => (
            <div
              key={i}
              className = "flex bg-indigo-200 text-black px-4 py-2 rounded-xl text-sm lg:w-full font-medium flex-col items-center lg:min-h-56 lg:max-w-48 justify-center w-24 border-1 border-white shadow-xl lg:hover:scale-200 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-black"
            >
              <img src={url} alt={skill}/>
              <h1>{skill}</h1>
            </div>
          ))}
        
      </div>
    </section>
  );
}
const techStack = [
  ["React", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 200, 260],
  ["HTML5", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 20, 60],
  ["CSS3", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 40, 80],
  ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 50, 100],
  ["Node.js", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 90, 140],
  ["Git", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", 160, 200],
  ["VS Code", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", 110, 180],
  ["MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", 130, 190],
]

