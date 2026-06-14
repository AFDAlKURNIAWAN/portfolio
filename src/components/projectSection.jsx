// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
import { Link } from "react-router-dom";

export default function ProjectSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Link 
              to={`/project/${project.id}`}
              key={project.id}
              className="block"
            >
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-800 p-6 rounded-lg cursor-pointer border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300"
              >
                <img src={project.image} alt={project.title} className="rounded mb-4 w-full h-48 object-cover" />
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.shortDesc}</p>
                <span className="text-blue-400 text-sm inline-block mt-4 hover:underline">
                  Lihat Detail →
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}