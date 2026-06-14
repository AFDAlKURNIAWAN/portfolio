// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from 'react';
import { projectsData, sertifData } from "../data/projectsData.js";
import { Link } from "react-router-dom";

const Project = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [activeSertifId, setActiveSertifId] = useState(null);
  const selectedSertif = sertifData.find(sertif => sertif.id === activeSertifId);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15 
      }
    }
  };

  return (
    <section className="lg:px-40 md:px-20 pt-20" id="project">
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="flex w-full items-center justify-center">
          <motion.div 
          variants={fadeIn}
          className="flex items-center gap-2 select-none rounded-full bg-blue-100 border border-blue-200 p-2.5 text-sm font-medium shadow-xl sm:p-2 sm:text-xl text-gray-800">
              
              <div 
                onClick={() => setActiveTab("projects")}
                className={`cursor-pointer rounded-full px-5 py-2.5 transition-all duration-300 ease-in-out sm:px-6 sm:py-2 ${
                  activeTab === "projects" 
                    ? "bg-blue-300 shadow-md "
                    : "hover:bg-blue-100/50"
                }`}
              >
                <h1 className="text-base font-medium sm:text-base md:text-lg">Projects</h1>
              </div>

              <div 
                onClick={() => setActiveTab("certificates")}
                className={`cursor-pointer rounded-full px-5 py-2.5 transition-all duration-300 ease-in-out sm:px-6 sm:py-2 ${
                  activeTab === "certificates" 
                    ? "bg-blue-300 shadow-md "
                    : "hover:bg-blue-100/50"
                }`}
              >
                <h1 className="text-base font-medium sm:text-base md:text-lg">Certificate</h1>
              </div>
          </motion.div>
        </motion.div>

        <div className="mt-8 px-4 sm:mt-6">
          <AnimatePresence mode="wait">
            {activeTab === "projects" ? (
                <motion.div 
                  key="projects-grid"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3 xl:gap-8 p-4 bg-gray-100 border border-gray-200 shadow shadow-gray-200 rounded-3xl"
                >
                  {projectsData.map((project) => (
                    <motion.div variants={fadeIn} key={project.id} className="h-full">
                      <Link to={`/project/${project.id}`} className="block h-full">
                        <div className="flex h-full flex-col rounded-2xl bg-white border border-gray-200 shadow-lg shadow-gray-200 transition-colors duration-300">
                          <div className="relative w-full overflow-hidden rounded-t-xl bg-gray-900">
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="h-full w-full object-cover hover:scale-110 transition duration-300 ease-in-out" 
                            />
                          </div>
                          
                          <div className="flex flex-1 flex-col justify-between pt-4">
                            <div>
                              <h3 className="text-lg px-5 font-semibold sm:text-xl line-clamp-1">
                                {project.title}
                              </h3>
                              <p className="mt-2 px-5 text-xs text-gray-600 sm:text-sm line-clamp-2 leading-relaxed">
                                {project.shortDesc}
                              </p>
                            </div>
                            
                            <div className="my-4 px-5 flex items-center justify-between pt-2">
                              <span className="inline-block text-xs font-medium hover:underline sm:text-sm">
                                Lihat Detail →
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
            ) : (
              <motion.div 
                key="certs-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3 xl:gap-8 p-4 bg-gray-100 border border-gray-200 shadow shadow-gray-200 rounded-3xl"
              >
                  {sertifData.map((sertif) => (
                    <motion.div 
                      variants={fadeIn}
                      whileHover={{ y: -5 }}
                      key={sertif.id}
                      className="block h-full cursor-pointer"
                      onClick={() => setActiveSertifId(sertif.id)}
                    >
                      <div className="flex h-full flex-col rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
                        <div className="relative w-full h-48 overflow-hidden rounded-t-2xl bg-gray-900">
                          <img 
                            src={sertif.image} 
                            alt={sertif.title} 
                            className="h-full w-full object-cover hover:scale-110 transition duration-300 ease-in-out" 
                          />
                        </div>
                        
                        <div className="flex flex-1 flex-col justify-between pt-4">
                          <div>
                            <h3 className="text-lg px-5 font-semibold sm:text-xl line-clamp-1 text-gray-800">
                              {sertif.title}
                            </h3>
                            <p className="mt-2 px-5 text-xs text-gray-600 sm:text-sm line-clamp-2 leading-relaxed">
                              {sertif.shortDesc}
                            </p>
                          </div>
                          
                          <div className="my-4 px-5 flex items-center justify-between pt-2">
                            <span className="inline-block text-xs font-medium hover:underline sm:text-sm">
                              Lihat Detail →
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {activeSertifId && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSertifId(null)}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={selectedSertif?.image} 
                  alt={selectedSertif?.title} 
                  className="w-full max-h-[70vh] object-contain bg-gray-950" 
                />
                <div className="p-6 bg-white">
                  <h2 className="text-xl font-bold text-gray-900">{selectedSertif?.title}</h2>
                  <p className="mt-2 text-sm text-gray-600">{selectedSertif?.shortDesc}</p>
                  <button 
                    onClick={() => setActiveSertifId(null)}
                    className="mt-4 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium rounded-lg transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </section>
  );
};

export default Project;