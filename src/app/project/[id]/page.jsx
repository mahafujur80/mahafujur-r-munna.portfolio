'use client'

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaRocket, FaTools, FaLightbulb, FaCheckCircle, FaClock, FaUser, FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import projectData from '@/assets/projects.json'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function ProjectDetails() {
  const params = useParams()
  const router = useRouter()
  
  const id = parseInt(params.id)
  const project = projectData.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-400 mb-6">The project you&apos;re looking for doesn&apos;t exist.</p>
        <button 
          onClick={() => router.push('/')}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#d946ef] text-white font-semibold transition-all hover:scale-105"
          aria-label="Go back to home page"
        >
          <FaArrowLeft /> Back to Home
        </button>
      </div>
    )
  }

  const metaItems = [
    { icon: <FaUser />, label: 'Role', value: project.role },
    { icon: <FaClock />, label: 'Duration', value: project.duration },
    { icon: <FaStar />, label: 'Status', value: project.status },
    { icon: <FaCode />, label: 'Architecture', value: project.architecture },
  ].filter(item => item.value)

  return (
    <div className="min-h-screen text-white pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <motion.div {...fadeUp} transition={{ duration: 0.3 }}>
          <button
            onClick={() => router.push('/#projects')}
            className="flex items-center gap-2 px-4 py-2 mb-8 rounded-xl bg-white/5 border border-white/10 hover:border-[#d946ef]/50 text-gray-300 hover:text-white transition-all duration-300"
            aria-label="Go back to projects section"
          >
            <FaArrowLeft /> Back to Projects
          </button>
        </motion.div>

        {/* Hero Banner */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm mb-10 group"
        >
          <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title || project.name}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />
          </div>

          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <span className="inline-flex px-3 py-1 rounded-full bg-gradient-to-r from-[#a855f7] to-[#d946ef] text-white text-xs font-semibold shadow-md mb-3">
              {project.category}
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              {project.title || project.name}
            </h1>
            <p className="text-gray-300 text-sm mt-2 max-w-2xl">
              {project.shortDescription || ''}
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          <Link
            href={project.liveDemo}
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] text-white font-bold transition-all shadow-md shadow-[#a855f7]/25 hover:shadow-lg hover:shadow-[#d946ef]/40 hover:scale-[1.02]"
            aria-label="View live project demo"
          >
            <FaExternalLinkAlt size={14} />
            Live Demo
          </Link>
          
          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-black/60 border border-white/10 text-white font-bold transition-all hover:bg-[#a855f7]/20 hover:border-[#a855f7]/50 hover:scale-[1.02]"
            aria-label="View GitHub client repository"
          >
            <FaGithub size={16} />
            GitHub Client
          </Link>
        </motion.div>

        {/* Meta Info Grid */}
        {metaItems.length > 0 && (
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
          >
            {metaItems.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[#d946ef] mb-1">
                  {item.icon}
                  <span className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</span>
                </div>
                <p className="text-white text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Overview */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <h2 className="text-xl font-bold flex items-center gap-2 mb-4 text-[#d946ef]">
                <FaCode /> Project Overview
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.fullDescription || project.overview}
              </p>
            </motion.div>

            {/* Problem & Solution */}
            {(project.problem || project.solution) && (
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {project.problem && (
                  <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm border-l-4 border-l-[#ec4899]">
                    <h2 className="text-lg font-bold flex items-center gap-2 mb-3 text-[#ec4899]">
                      <FaLightbulb /> The Problem
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                )}
                {project.solution && (
                  <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm border-l-4 border-l-green-500">
                    <h2 className="text-lg font-bold flex items-center gap-2 mb-3 text-green-400">
                      <FaCheckCircle /> The Solution
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <h2 className="text-xl font-bold flex items-center gap-2 mb-4 text-[#d946ef]">
                  <FaStar /> Key Features
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-[#d946ef] mt-0.5 shrink-0">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Challenges */}
            {project.challenges && (
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm border-l-4 border-l-[#a855f7]"
              >
                <h2 className="text-xl font-bold flex items-center gap-2 mb-4 text-[#a855f7]">
                  <FaRocket /> Challenges Faced
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.challenges}
                </p>
              </motion.div>
            )}

            {/* Future Plans */}
            {project.futurePlans && (
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm border-l-4 border-l-[#ec4899]"
              >
                <h2 className="text-xl font-bold flex items-center gap-2 mb-4 text-[#ec4899]">
                  <FaRocket /> Future Plans & Improvements
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.futurePlans}
                </p>
              </motion.div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="flex flex-col gap-6">

            {/* Tech Stack */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <h2 className="text-lg font-bold flex items-center gap-2 mb-4 text-[#d946ef]">
                <FaTools /> Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {(project.technologies || project.tech).map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-[#a855f7]/10 border border-[#a855f7]/20 text-[#d946ef] text-xs font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <h2 className="text-lg font-bold mb-4 text-white">Project Info</h2>
              <div className="space-y-3">
                {[
                  { label: 'Year', value: project.year },
                  { label: 'Category', value: project.category },
                  { label: 'Client', value: project.client },
                  { label: 'Design Tools', value: project.designTools?.join(', ') },
                ].filter(i => i.value).map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                    <span className="text-gray-400 text-xs uppercase tracking-wider">{item.label}</span>
                    <span className="text-white text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gallery */}
            {project.images && project.images.length > 1 && (
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <h2 className="text-lg font-bold mb-4 text-white">Gallery</h2>
                <div className="grid grid-cols-2 gap-2">
                  {project.images.map((img, idx) => (
                    <div key={idx} className="relative h-24 rounded-xl overflow-hidden border border-white/10">
                      <Image
                        src={img}
                        alt={`${project.title || project.name} screenshot ${idx + 1}`}
                        fill
                        sizes="150px"
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
