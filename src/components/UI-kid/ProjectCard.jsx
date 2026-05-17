'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ y: -5 }}
    >
      <div className="card bg-white/5 backdrop-blur-sm shadow-lg border border-white/10 overflow-hidden group hover:border-[#d946ef]/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300">
        
        {/* Image - সাইজ ছোট করা */}
        <figure className="overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            width={400}
            height={300}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="w-full h-48 object-fill group-hover:scale-105 transition-transform duration-500"
          />
        </figure>

        <div className="card-body p-4">
          
          {/* Category Badge - সাইজ ছোট */}
          <div>
            <span className="inline-flex px-2 py-0.5 rounded-full bg-gradient-to-r from-[#a855f7] to-[#d946ef] text-white text-xs font-medium shadow-md">
              {project.category}
            </span>
          </div>

          {/* Title - সাইজ ছোট */}
          <h2 className="text-lg line-clamp-2 font-bold text-white group-hover:text-[#d946ef] transition-colors duration-300">
            {project.name}
          </h2>

          {/* Year - সাইজ ছোট */}
          <div className="text-[10px] text-purple-400">
            {project.year}
          </div>

          {/* Overview - সাইজ ছোট, লাইন কম */}
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
            {project.overview}
          </p>

          {/* Tech Stack - সাইজ ছোট */}
          <div className="flex flex-wrap gap-1.5 mt-2">
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

          {/* Buttons - সাইজ ছোট */}
          <div className="flex gap-2 mt-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={project.github}
                target="_blank"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/50 border border-white/10 text-white text-xs font-medium hover:bg-[#a855f7]/20 hover:border-[#a855f7]/50 transition-all"
              >
                <FaGithub size={12} />
                GitHub
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={project.liveDemo}
                target="_blank"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#a855f7] to-[#d946ef] text-white text-xs font-medium hover:from-[#d946ef] hover:to-[#ec4899] transition-all shadow-md shadow-[#a855f7]/25"
              >
                <FaExternalLinkAlt size={10} />
                Live Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard