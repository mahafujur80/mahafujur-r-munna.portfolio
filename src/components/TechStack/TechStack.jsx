import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa"

import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiFigma,
  SiVercel,
} from "react-icons/si"
import TechCard from "../UI-kid/TechCard"

const TechStack = () => {

  const techStack = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
  ]

  return (
    <section
      className="px-4 md:px-8 py-20 text-white"
    >

      <div className="max-w-2xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-14">

          <h2 className="text-2xl md:text-4xl font-bold">
            Dev <span className="bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent">Stack</span>
          </h2>
          <div className="w-30 h-1 bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-transparent mt-2 rounded-full mx-auto"></div>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build modern,
            scalable and user-friendly web applications.
          </p>

        </div>

        {/* TECH GRID */}
        <div className="flex items-center justify-center gap-3 flex-wrap">

          {techStack.map((tech, i) => (
            <TechCard tech={tech} key={i} index={i} />
          ))}

        </div>

      </div>

    </section>
  )
}
export default TechStack;