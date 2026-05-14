import { FaGraduationCap } from "react-icons/fa"
import TimelineItem from "../UI-kid/TimelineItem";

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
        <section id="education" className="px-4 md:px-8 py-20 text-white relative overflow-hidden">

            <div className="max-w-5xl mx-auto">

                {/* TITLE - Improved */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-4xl text-gray-200 font-bold text-center flex justify-center">
                      Edu<span className="flex items-center gap-4 bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent">cation<FaGraduationCap  className="text-purple-400"/> </span>
                    </h2>
                   <div className="w-30 h-1 bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-transparent mt-2 rounded-full mx-auto"></div>
                    <p className="text-gray-400 mt-4 max-w-md mx-auto">
                        My academic journey and continuous learning path
                    </p>
                </div>

                {/* TIMELINE - Improved */}
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

                    {educationData.map((item, idx) =><TimelineItem key={idx} item={item} idx={idx}/> )}

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