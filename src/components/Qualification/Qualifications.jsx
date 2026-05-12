import { FaGraduationCap } from "react-icons/fa"

const Qualifications =()=> {

    const educationData = [
        {
            year: "2020 - 2022",
            title: "Secondary School Certificate (SSC)",
            institution: "Science Group | Board: [Dinajpur]",
            description: "Completed SSC in Science with GPA [4.72]. Built strong foundation in Mathematics, Physics & Chemistry. Developed analytical thinking and problem-solving mindset.",
            side: "left"
        },

        {
            year: "2023 - 2026",
            title: "Diploma In Engineering (CST)",
            institution: "Dinajpur Polytechnic Institute (DPI)",
            description: "Learning programming, web development, databases, and software development. Working on hands-on projects",
            side: "right"
        }
        ,
        {
            year: "2026 - Present",
            title: "Complete Web Development (PH)",
            institution: "Programming Hero",
            description: "Learning MERN Stack development including HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Tailwind CSS. Building multiple real-world projects and working on daily assignments.",
            side: "left"
        }
    ]

    return (
        <section className="px-4 md:px-8 py-20 text-white relative overflow-hidden">

            <div className="max-w-5xl mx-auto">

                {/* TITLE - Improved */}
                <div className="text-center mb-16">
                    <h2 className="flex items-center gap-4 justify-center  text-2xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                        <span className="flex items-center gap-4">Qualification <FaGraduationCap /> </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-transparent mx-auto mt-4 rounded-full"></div>
                    <p className="text-gray-400 mt-4 max-w-md mx-auto">
                        My academic journey and continuous learning path
                    </p>
                </div>

                {/* TIMELINE - Improved */}
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

                    {educationData.map((item, idx) => (
                        <li
                            key={idx}>
                            {idx !== 0 && <hr />}

                            <div className="timeline-middle">
                                <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 shadow-lg shadow-purple-500/50"></div>
                            </div>

                            <div className={`${item.side === 'left' ? 'timeline-start' : 'timeline-end'} md:mb-10 ${item.side === 'left' ? 'md:text-end' : 'md:text-start'}`}>

                                <time className="font-mono text-sm text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full inline-block mb-2">
                                    {item.year}
                                </time>

                                <div className="text-xl font-bold text-white mt-2">
                                    {item.title}
                                </div>

                                <div className="text-purple-400 text-sm font-medium mt-1">
                                    {item.institution}
                                </div>

                                <p className="text-gray-400 mt-2 text-sm leading-relaxed max-w-md">
                                    {item.description}
                                </p>

                                {/* Optional: Decorative line */}
                                {item.side === 'left' && (
                                    <div className="hidden md:block absolute right-0 top-1/2 w-4 h-px bg-purple-500/30"></div>
                                )}
                            </div>

                            <hr />
                        </li>
                    ))}

                </ul>

                {/* Optional: Certification Note */}
                <div className="text-center mt-12">
                    <p className="text-gray-500 text-sm">
                        🎓 Continuously learning and upgrading skills
                    </p>
                </div>

            </div>
        </section>
    )
}
export default Qualifications;