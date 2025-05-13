import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "10MegaBlog",
      link: "https://10megablog.vercel.app/",
    },
    {
      title: "Note Detection App",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-12 bg-gray-500 text-center max-h-screen w-full">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 px-4 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="block bg-purple-500 border-2 border-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-lg font-medium text-white">{project.title}</h3>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
