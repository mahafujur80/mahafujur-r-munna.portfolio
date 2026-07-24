'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ y: -5 }}
    >
      <div className="card bg-white/5 backdrop-blur-sm shadow-lg border border-white/10 overflow-hidden group hover:border-[#d946ef]/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 h-full flex flex-col">
        
        {/* Image */}
        <figure className="overflow-hidden" aria-label={`Screenshot of ${project.name}`}>
          <Image
            src={project.image}
            alt={project.name}
            width={400}
            height={300}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-44 object-fill group-hover:scale-105 transition-transform duration-500"
          />
        </figure>

        <div className="card-body p-4 flex flex-col flex-1">
          
          {/* Category Badge */}
          <div>
            <span className="inline-flex px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#a855f7] to-[#d946ef] text-white text-xs font-medium shadow-md">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base line-clamp-2 font-bold text-white group-hover:text-[#d946ef] transition-colors duration-300 mt-2">
            {project.name}
          </h3>

          {/* Year */}
          <div className="text-[10px] text-purple-400">
            {project.year}
          </div>

          {/* Overview */}
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 mt-1">
            {project.shortDescription || project.overview}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tech.slice(0, 4).map((item, idx) => (
              <span
                key={idx}
                className="px-1.5 py-0.5 rounded-md bg-[#a855f7]/10 border border-[#a855f7]/20 text-[#d946ef] text-[10px] font-medium"
              >
                {item}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-gray-400 text-[10px]">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 mt-auto pt-3">
            {/* View Details - Primary */}
            <Link
              href={`/project/${project.id}`}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] text-white text-xs font-bold transition-all shadow-md shadow-[#a855f7]/25 hover:shadow-lg hover:shadow-[#d946ef]/40 hover:scale-[1.02]"
              aria-label={`View details of ${project.name}`}
            >
              <FaInfoCircle size={12} />
              View Details
            </Link>

            {/* GitHub Quick Access */}
            <Link
              href={project.github}
              target="_blank"
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-black/50 border border-white/10 text-gray-400 hover:text-white hover:bg-[#a855f7]/20 hover:border-[#a855f7]/50 transition-all"
              aria-label={`GitHub repository for ${project.name}`}
            >
              <FaGithub size={14} />
            </Link>

            {/* Live Demo Quick Access */}
            <Link
              href={project.liveDemo}
              target="_blank"
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-black/50 border border-white/10 text-gray-400 hover:text-white hover:bg-[#d946ef]/20 hover:border-[#d946ef]/50 transition-all"
              aria-label={`Live demo of ${project.name}`}
            >
              <FaExternalLinkAlt size={12} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard