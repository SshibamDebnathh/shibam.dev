import React from 'react'

function About() {
    return (
        <div className='flex p-10 w-full justify-start'>
            <div className="flex flex-col about-section lg:max-w-2xl p-6 font-sans border-2 border-white bg-purple-500 m-10 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p className="mb-4">
                    Hey, I’m <strong>Shibam Debnath</strong> — a frontend developer who loves building clean, user-friendly web apps with <strong>React</strong> and <strong>JavaScript</strong>.
                </p>
                <p className="mb-4">
                    I enjoy bringing ideas to life in the browser, whether it's a sleek UI, a smooth user experience, or a fun side project. One of my favorite creations is{' '}
                    <a href="https://10megablog.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        <strong>10MegaBlog</strong>
                    </a>{' '}
                    — a blog app with image uploads, rich text editing, and search functionality.
                </p>
                <p className="mb-4">
                    Right now, I’m diving deeper into <strong>JavaScript algorithms</strong> through freeCodeCamp and working on some creative frontend ideas (like a snake that shows my skills as it moves 🐍).
                </p>
                <p className="mb-4">
                    Outside of code, I’m into <strong>music</strong> — I sing and play guitar whenever I get the chance.
                </p>
                <p className="mb-4">
                    I’m currently looking for frontend roles where I can learn, grow, and build awesome stuff with a great team.
                </p>
                <p>
                    <strong>Let’s connect:</strong><br />
                    📧 <a href="mailto:shibam.hi@gmail.com" className="text-white underline">shibam.hi@gmail.com</a><br />
                    💻 <a href="https://github.com/SshibamDebnathh" target="_blank" rel="noopener noreferrer" className="text-white underline">GitHub</a><br />
                    🔗 <a href="https://www.linkedin.com/in/shibam-debnath-aa5a12151/" target="_blank" rel="noopener noreferrer" className="text-white underline">LinkedIn</a>
                </p>
            </div>

        </div>
    )
}

export default About