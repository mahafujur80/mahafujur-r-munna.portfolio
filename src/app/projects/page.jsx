import projectData from '@/assets/projects.json'
import ProjectCard from '@/components/UI-kid/ProjectCard';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export const metadata = {
  title: "All Projects | MRM Portfolio",
  description: "Browse all projects by Mahafujur Rahman Munna — modern web applications built with React, Next.js, Node.js, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen text-white pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-xl bg-white/5 border border-white/10 hover:border-[#d946ef]/50 text-gray-300 hover:text-white transition-all duration-300"
        >
          <FaArrowLeft /> Back to Home
        </Link>

        {/* Page Title */}
        <div className="text-center mb-14">
          <div className="inline-flex px-4 py-1.5 rounded-full border border-[#d946ef]/20 bg-[#d946ef]/10 text-[#d946ef] text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
            Portfolio
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            All <span className="bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent">Projects</span>
          </h1>
          <div className="w-24 h-[3px] bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of all my projects — from full-stack applications to frontend experiments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <ProjectCard project={project} key={project.id} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
}
