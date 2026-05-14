import {
  FaCode, FaServer, FaGitAlt,
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaDatabase,
  FaFigma, FaGitAlt as FaGitHub
} from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiVercel, SiBetterauth } from "react-icons/si"
import SkillCard from "../UI-kid/SkillCard"

const Skills =()=> {

  const skillsData = [
    {
      category: "Frontend",
      icon: <FaCode className="text-purple-400 text-3xl" />,
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: 88 },
        { name: "React", icon: <FaReact className="text-cyan-500" />, level: 85 },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 80 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" />, level: 90 }
      ]
    },
    {
      category: "Backend",
      icon: <FaServer className="text-green-400 text-3xl" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: 85 },
        { name: "Express.js", icon: <SiExpress className="text-white" />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 80 },
        { name: "Better Auth", icon: <SiBetterauth  className="text-gray-400" />, level: 75 },
        { name: "REST API", icon: <FaServer className="text-purple-400" />, level: 88 },
        { name: "CRUD", icon: <FaDatabase className="text-blue-400" />, level: 90 }
      ]
    },
    {
      category: "Tools",
      icon: <FaGitAlt className="text-orange-400 text-3xl" />,
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: 85 },
        { name: "GitHub", icon: <FaGitHub className="text-gray-400" />, level: 85 },
        { name: "Figma", icon: <FaFigma className="text-purple-400" />, level: 70 },
        { name: "VS Code", icon: <FaCode className="text-blue-500" />, level: 90 },
        { name: "Vercel", icon: <SiVercel className="text-white" />, level: 85 }
      ]
    }
  ]

  return (
    <section className="px-4 md:px-8 py-20 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* TITLE */}
         <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-200">
            My <span className="bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent">Expertise</span>
          </h2>
            <div className="w-30 h-1 bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-transparent mt-2 rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">
            My development expertise and capabilities.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div
         className="grid md:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => <SkillCard key={idx} category={category} index={idx}/>)}
        </div>

      </div>
    </section>
  )
}
export default Skills;