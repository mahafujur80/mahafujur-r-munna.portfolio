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
  SiTypescript
} from "react-icons/si"
import TechCard from "../UI-kid/TechCard"

const TechStack = () => {

  const techStack = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
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
    id="tech"
      className="px-4 md:px-8 py-10 md:py-14 text-white"
    >

      <div className="max-w-2xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-8">
          <div className="inline-flex px-3 py-1 rounded-full border border-[#d946ef]/20 bg-[#d946ef]/10 text-[#d946ef] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
            Dev Stack
          </div>
          <h2 className="text-xl md:text-3xl font-bold text-white mb-3">
            My <span className="bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent">Dev Stack</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-transparent rounded-full mx-auto mb-3"></div>

          <p className="text-gray-400 mt-3 text-sm max-w-2xl mx-auto">
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