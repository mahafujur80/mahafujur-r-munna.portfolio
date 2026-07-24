'use client'
import { useRef } from 'react'
import { FaGraduationCap } from "react-icons/fa"
import { motion, useScroll, useTransform } from 'framer-motion'
import TimelineItem from "../UI-kid/TimelineItem";

const Qualifications = () => {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    })

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    const educationData = [
        {
            year: "2020 — 2022",
            title: "Secondary School Certificate (SSC)",
            institution: "Science Group | Board: Dinajpur",
            description: "Completed my Secondary School Certificate (SSC) in the Science Group with a GPA of 4.72 under the Dinajpur Board. This stage built a strong foundation in Mathematics, Physics, analytical thinking, and problem-solving.",
            skills: [
                "Science Group",
                "GPA 4.72",
                "Mathematics",
                "Physics",
                "Problem Solving"
            ],
            side: "left"
        },
        {
            year: "2023 — 2026",
            title: "Diploma In Engineering (CST)",
            institution: "Dinajpur Polytechnic Institute (DPI)",
            description: "Currently pursuing a Diploma in Computer Science & Technology at Dinajpur Polytechnic Institute. I have gained practical knowledge in programming, web development, databases, and software engineering while working on hands-on projects.",
            skills: [
                "Programming",
                "Web Development",
                "Database",
                "Software Engineering"
            ],
            side: "right"
        },
        {
            year: "2026 — Present",
            title: "Complete Web Development",
            institution: "Programming Hero",
            description: "Alongside my diploma studies, I am mastering modern web development through Programming Hero by building real-world MERN Stack projects using React, Next.js, TypeScript, Node.js, Express.js, and MongoDB.",
            skills: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Express.js",
                "MongoDB"
            ],
            side: "left"
        }
    ]

    return (
        <section id="education" ref={sectionRef} className="px-4 md:px-8 py-10 md:py-14 text-white relative overflow-hidden">
            
            {/* Background Depth */}
            <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-pink-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex px-3 py-1 rounded-full border border-[#d946ef]/20 bg-[#d946ef]/10 text-[#d946ef] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                        Education
                    </div>
                    <h2 className="text-xl md:text-3xl font-bold text-white mb-3 flex items-center justify-center gap-3">
                        Academic <span className="bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent">Journey</span>
                        <FaGraduationCap className="text-[#d946ef] text-2xl md:text-3xl drop-shadow-[0_0_15px_rgba(217,70,239,0.3)]"/>
                    </h2>
                    <div className="w-20 h-[2px] bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-transparent rounded-full mx-auto mb-3"></div>
                    <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
                        A timeline of my academic background and continuous technical learning.
                    </p>
                </motion.div>

                {/* Custom Grid Timeline */}
                <div className="relative w-full max-w-5xl mx-auto">
                    
                    {/* The Background Line */}
                    <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] md:-ml-[1px] bg-white/10"></div>
                    
                    {/* The Animated Gradient Line */}
                    <motion.div 
                        style={{ height: lineHeight }}
                        className="absolute left-[24px] md:left-1/2 top-0 w-[3px] md:-ml-[1.5px] bg-gradient-to-b from-[#a855f7] via-[#d946ef] to-[#ec4899] shadow-[0_0_15px_rgba(217,70,239,0.6)]"
                    ></motion.div>

                    {/* Timeline Items */}
                    <div className="flex flex-col gap-1 md:gap-0 relative">
                        {educationData.map((item, idx) => (
                            <TimelineItem key={idx} item={item} idx={idx} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Qualifications;