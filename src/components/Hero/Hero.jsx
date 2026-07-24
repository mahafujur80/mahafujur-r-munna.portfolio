'use client'

import myPhoto from '@/assets/my-photo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
} from 'react-icons/fa'
import { FiDownload, FiArrowDown } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { GrInstagram } from 'react-icons/gr'

const Hero = () => {

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

    const socialLinks = [
        { icon: <FaGithub />, link: 'https://github.com/mahafujur80', label: 'GitHub', color: 'hover:text-[#a855f7]' },
        { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/mahafujur-rahman-munna/', label: 'LinkedIn', color: 'hover:text-[#d946ef]' },
        { icon: <FaFacebook />, link: 'https://www.facebook.com/mahafujurrahman480', label: 'Facebook', color: 'hover:text-[#ec4899]' },
        { icon: <GrInstagram />, link: 'https://www.instagram.com/mahafujur80?igsh=dHhhZDduazJ2ODBh', label: 'Instagram', color: 'hover:text-[#a855f7]' },
    ]

    return (
        <section id="home" className="relative px-4 md:px-8 min-h-[90vh] flex items-center pt-20">

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2  items-center">

                {/* LEFT */}
                <div className="space-y-6 md:pr-10">

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-block px-4 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm mb-4"
                    >
                        Welcome To My Portfolio
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl md:text-5xl font-bold text-white leading-tight"
                    >
                        Hi, I&apos;m
                        <br />
                        <span className="bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent">
                            Mahafujur R Munna
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
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-gray-400 max-w-lg leading-relaxed"
                    >
                        I create fast, responsive, and user-friendly web applications using React, Next.js, Tailwind CSS, and the MERN stack with a focus on performance and clean architecture.
                    </motion.p>

                    {/* BUTTONS */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-wrap gap-4"
                    >
                        {/* Resume Button */}
                        <motion.a
                            href="/Mahafujur-Rahman_Resume.pdf"
                            download
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#a855f7]/50"
                            aria-label="Download my resume"
                        >
                            <FiDownload className="group-hover:animate-bounce" />
                            Resume
                        </motion.a>

                        {/* Projects Button */}
                        <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
                            <Link
                                href="#projects"
                                className="group flex items-center gap-2 px-6 py-3 rounded-xl border border-[#a855f7] text-white font-semibold transition-all duration-300 hover:bg-[#a855f7]/20 hover:border-[#d946ef] w-full h-full"
                                aria-label="View my projects"
                            >
                                Projects
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* SOCIAL LINKS */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex gap-4 pt-4"
                    >
                        {socialLinks.map((s, i) => (
                            <motion.a
                                key={i}
                                href={s.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit my ${s.label} profile`}
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 ${s.color} hover:border-transparent hover:bg-white/10`}
                            >
                                {s.icon}
                            </motion.a>
                        ))}
                    </motion.div>

                </div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                    }}
                    className="flex justify-center lg:justify-end md:pl-8 max-sm:mt-20">
                    <div className="hero-image relative">

                        {/* Background Glow Effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] blur-2xl animate-pulse opacity-50"></div>

                        {/* Main Image Container */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">

                            {/* Animated Border Gradient */}
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] opacity-75 blur-sm animate-pulse"></div>

                            {/* Inner Border */}
                            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#a855f7]/20 to-transparent p-[2px]">

                                {/* Image Container */}
                                <div className="relative w-full h-full rounded-full overflow-hidden bg-black/50">

                                    {/* Image */}
                                    <Image
                                        src={myPhoto}
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                                        className="object-cover object-top transition-transform duration-500 hover:scale-105"
                                        alt="Mahafujur Rahman Munna - Web Developer"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#a855f7]/30 to-transparent"></div>

                                </div>
                            </div>

                            {/* Decorative Rings */}
                            <div className="absolute inset-0 rounded-full border border-[#a855f7]/30 pointer-events-none"></div>
                            <div className="absolute -inset-3 rounded-full border border-[#d946ef]/20 border-dashed pointer-events-none"></div>
                            <div className="absolute -inset-6 rounded-full border border-[#ec4899]/10 pointer-events-none"></div>

                            {/* Decorative Dots */}
                            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r from-[#a855f7] to-[#d946ef] shadow-lg shadow-[#a855f7]/50"></div>
                            <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-gradient-to-r from-[#d946ef] to-[#ec4899] shadow-lg shadow-[#ec4899]/50"></div>
                            <div className="absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-[#a855f7]"></div>
                            <div className="absolute bottom-1/3 -left-4 w-2 h-2 rounded-full bg-[#d946ef]"></div>

                        </div>

                        {/* Available for Work Indicator */}
                        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex items-center gap-1.5 bg-gray-900/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-green-500/30 shadow-lg">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[10px] text-green-400 font-medium">Available</span>
                        </div>

                        {/* MERN Expert Badge */}
                        <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 bg-gradient-to-r from-[#a855f7] to-[#d946ef] rounded-full px-3 py-1.5 shadow-lg shadow-[#a855f7]/30">
                            <p className="text-[10px] md:text-xs font-bold text-white">MERN</p>
                            <p className="text-[8px] md:text-[10px] text-purple-200">Expert</p>
                        </div>

                    </div>
                </motion.div>

            </div>

            {/* Floating Arrow */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#d946ef] text-2xl z-10 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                aria-label="Scroll down"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }) }}
            >
                <FiArrowDown className="hover:scale-125 transition-transform" />
            </motion.div>

        </section>
    )
}

export default Hero;