import projectData from '@/assets/projects.json'
import ProjectCard from '../UI-kid/ProjectCard';

const Projects = () => {
    console.log(projectData)
    return (
        <section
            className="px-4 md:px-8 py-20 text-white"
        >

            <div className="max-w-6xl mx-auto">

                {/* TITLE */}
                <div className="text-center mb-14">

                    <h2 className="text-2xl md:text-4xl font-bold">
                        Code & <span className="bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent">Creations</span>
                    </h2>
                    <div className="w-30 h-1 bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-transparent mt-2 rounded-full mx-auto"></div>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Real-world projects crafted using modern technologies to deliver fast, scalable and user-friendly digital experiences.
                    </p>

                </div>

                {/* TECH GRID */}
                <div className='grid md:grid-cols-4 gap-5' >

                    {
                     projectData.map(project => <ProjectCard project={project} key={project.id}/>)
                    }

                </div>

            </div>

        </section>
    );
};

export default Projects;