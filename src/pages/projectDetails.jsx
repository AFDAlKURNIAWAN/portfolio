// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24">
        <h2 className="text-2xl font-bold mb-4">Project Tidak Ditemukan!</h2>
        <Link to="/" className="text-blue-400 hover:underline">← Kembali ke Beranda</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8 relative z-9"
    >
      <div className="max-w-4xl mx-auto">
        
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-600 hover:underline mb-8 transition-colors"
        >
          <span className="mr-2">←</span> Kembali ke Portofolio
        </Link>

        <div className="w-full overflow-hidden rounded-2xl border border-gray-100 shadow-2xl mb-8 bg-gray-950">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto max-h-[450px] object-cover mx-auto"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((techName) => (
            <span 
              key={techName} 
              className="text-blue-400 border shadow shadow-gray-400  border-blue-500/20 px-3 py-1 rounded-md text-sm font-medium"
            >
              {techName}
            </span>
          ))}
        </div>

        <hr className="border-gray-800 mb-8" />

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Tentang Proyek</h2>
          <p className="text-gray-500 leading-relaxed text-lg whitespace-pre-line">
            {project.fullDesc}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-lg shadow-blue-600/20"
          >
            Kunjungi Website Live
          </a>
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-lg border border-gray-700 transition-colors"
          >
            Lihat Source Code (GitHub)
          </a>
        </div>
      </div>
    </motion.div>
  );
}