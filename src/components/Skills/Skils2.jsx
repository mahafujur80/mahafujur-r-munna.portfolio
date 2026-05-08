import {
  FaCode, FaServer, FaGitAlt,
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaDatabase,
  FaFigma, FaGitAlt as FaGitHub
} from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiVercel, SiBetterauth } from "react-icons/si"

export default function Skills2() {

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
         <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">
            My development expertise and capabilities.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-transparent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* SKILLS GRID */}
        <div data-aos="fade-up" data-aos-delay="500"
         className="grid md:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => (
            <div 
              key={idx}
              className="hover:scale-105 hover:-translate-y-1 shadow-lg shadow-purple-500/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30   p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300"
         
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-2xl font-semibold ">{category.category}</h3>
              </div>
              
              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex items-center gap-2 mb-1">
                      {skill.icon}
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-xs text-purple-400 ml-auto">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-800 to-purple-400 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}