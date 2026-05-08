'use client'

import myPhoto from '../../../public/my-photo.png';
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaTwitter,
} from 'react-icons/fa'
import { FiDownload, FiArrowDown } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

export default function Hero() {

    const roles = [
        "Frontend Developer",
        "Next.js Developer",
        "MERN Stack Developer",
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="px-4 min-h-screen flex items-center  pt-28">

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT */}
                <div className="space-y-6">

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm tracking-widest uppercase text-purple-400"
                    >
                        Welcome To My Portfolio
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold text-white leading-tight"
                    >
                        Hi, I'm <span className="text-purple-400">Mahafujur 
                            <span className='mx-2'>
                                <div className="tooltip" data-tip="Rahman">
                                <button className="">R</button>
                            </div>
                            </span>
                            Munna
                        </span>
                    </motion.h1>

                    {/* 🔥 ANIMATED ROLE */}
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={roles[index]}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="text-xl md:text-3xl text-gray-300 font-semibold"
                        >
                            {roles[index]}
                        </motion.h2>
                    </AnimatePresence>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gray-400 max-w-lg leading-relaxed"
                    >
                        I build modern responsive web apps using React, Next.js and Tailwind CSS.
                        Focused on clean UI and smooth UX.
                    </motion.p>

                    {/* BUTTONS */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a href="/resume.pdf" download className="btn-primary">
                            <FiDownload />
                            Resume
                        </a>

                        <Link href="/projects" className="btn-outline">
                            Projects
                        </Link>
                    </motion.div>

                    {/* SOCIAL */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-4 pt-4"
                    >
                        {[
                            { icon: <FaGithub />, link: 'https://github.com' },
                            { icon: <FaLinkedin />, link: 'https://linkedin.com' },
                            { icon: <FaFacebook />, link: 'https://facebook.com' },
                            { icon: <FaTwitter />, link: 'https://twitter.com' },
                        ].map((s, i) => (
                            <motion.a
                                key={i}
                                href={s.link}
                                target="_blank"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="social-icon"
                            >
                                {s.icon}
                            </motion.a>
                        ))}
                    </motion.div>

                </div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-full shadow-[0_0_40px_rgba(217,70,239,0.6)]  p-1">

                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-900">

                            <Image
                                src={myPhoto}
                                height={400}
                                width={400}
                                alt="profile"
                                className="w-full h-full object-cover"
                            />

                        </div>
                    </div>
                </motion.div>

            </div>

            {/* 🔽 Floating Arrow */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-purple-400 text-2xl"
            >
                <FiArrowDown />
            </motion.div>

        </section>
    )
}