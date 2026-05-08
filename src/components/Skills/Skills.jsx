import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaDatabase,
  FaServer,
  FaFire,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa"

export default function Skills() {

  

  return (
    <section className="px-4 md:px-8 py-20 text-white">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="text-purple-400">Skills</span>
          </h2>

          <p className="text-gray-400 mt-4">
            My development expertise and capabilities.
          </p>

        </div>

        

        <div className="grid md:grid-cols-3 gap-6">

                {/* FRONTEND */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-purple-400/40 transition-all duration-300">

                    <h3 className="text-2xl font-semibold text-purple-400 mb-6">
                        Frontend
                    </h3>

                    <div className="flex flex-wrap gap-3">

                        <span className="skill-badge">HTML</span>
                        <span className="skill-badge">CSS</span>
                        <span className="skill-badge">JavaScript</span>
                        <span className="skill-badge">React</span>
                        <span className="skill-badge">Next.js</span>
                        <span className="skill-badge">Tailwind CSS</span>

                    </div>

                </div>

                {/* BACKEND */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-purple-400/40 transition-all duration-300">

                    <h3 className="text-2xl font-semibold text-purple-400 mb-6">
                        Backend
                    </h3>

                    <div className="flex flex-wrap gap-3">

                        <span className="skill-badge">Node.js</span>
                        <span className="skill-badge">Express.js</span>
                        <span className="skill-badge">MongoDB</span>
                        <span className="skill-badge">Better Auth</span>
                        <span className="skill-badge">REST API</span>
                        <span className="skill-badge">CRUD</span>

                    </div>

                </div>

                {/* TOOLS */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-purple-400/40 transition-all duration-300">

                    <h3 className="text-2xl font-semibold text-purple-400 mb-6">
                        Tools
                    </h3>

                    <div className="flex flex-wrap gap-3">

                        <span className="skill-badge">Git</span>
                        <span className="skill-badge">GitHub</span>
                        <span className="skill-badge">Figma</span>
                        <span className="skill-badge">VS Code</span>
                        <span className="skill-badge">Vercel</span>

                    </div>

                </div>

            </div>

      </div>

    </section>
  )
}