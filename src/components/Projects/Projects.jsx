import projectData from '@/assets/projects.json'
import ProjectCard from '../UI-kid/ProjectCard';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { ScaleOnTap } from '../UI-kid/AnimatedSection';

const Projects = () => {
    const featuredProjects = projectData.filter(p => p.featured).slice(0, 3);

    return (
        <section
            id="projects"
            className="px-4 md:px-8 py-10 md:py-14 text-white"
        >
            <div className="max-w-6xl mx-auto">
                {/* TITLE */}
                <div className="text-center mb-8">
                    <div className="inline-flex px-3 py-1 rounded-full border border-[#d946ef]/20 bg-[#d946ef]/10 text-[#d946ef] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                        Projects
                    </div>
                    <h2 className="text-xl md:text-3xl font-bold text-white mb-3">
                        Code & <span className="bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent">Creations</span>
                    </h2>
                    <div className="w-20 h-[2px] bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-transparent rounded-full mx-auto mb-3"></div>

                    <p className="text-gray-400 mt-3 text-sm max-w-2xl mx-auto">
                        Real-world projects crafted using modern technologies to deliver fast, scalable and user-friendly digital experiences.
                    </p>
                </div>

                {/* FEATURED PROJECTS GRID */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                     featuredProjects.map((project, index) => <ProjectCard project={project} key={project.id} index={index}/>)
                     }
                </div>

                {/* VIEW MORE WORK BUTTON */}
                <div className="text-center mt-10">
                    <ScaleOnTap
                        className="inline-block"
                        scale={0.95}
                        hoverScale={1.05}
                    >
                        <Link
                            href="/projects"
                            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-[#a855f7]/40 bg-white/5 backdrop-blur-sm text-white text-sm font-semibold transition-all duration-300 hover:bg-[#a855f7]/20 hover:border-[#d946ef] hover:shadow-lg hover:shadow-[#a855f7]/20"
                        >
                            View More Work
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </ScaleOnTap>
                </div>
            </div>
        </section>
    );
};

export default Projects;
