'use client'

import myPhoto from '@/assets/my-photo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaBriefcase,
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

    return (
        <section  className="relative px-4 min-h-screen flex items-center pt-28">

            <div className="max-w-6xl  mx-auto grid lg:grid-cols-2 gap-22 items-center">

                {/* LEFT */}
                <div className="space-y-6">

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      className="inline-block px-4 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm mb-4"
                    >
                        Welcome To My Portfolio
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold text-white leading-tight"
                    >
                        Hi, I'm
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
                        className="text-gray-400 max-w-lg leading-relaxed"
                    >
                        I build modern responsive web apps using React, Next.js and Tailwind CSS.
                        Focused on clean UI and smooth UX.
                    </motion.p>

                    {/* BUTTONS - Hire Me Button Added */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap gap-4"
                    >
                        {/* Resume Button */}
                        <a
                            href="#"
                            download
                            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#a855f7]/50"
                        >
                            <FiDownload className="group-hover:animate-bounce" />
                            Resume
                        </a>

                        {/* Projects Button */}
                        <Link
                            href="#"
                            className="group flex items-center gap-2 px-6 py-3 rounded-xl border border-[#a855f7] text-white font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#a855f7]/20 hover:border-[#d946ef]"
                        >
                            Projects
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>

                        {/* 🔥 NEW: Hire Me Button */}
                        <Link
                            href="#"
                            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#a855f7] hover:to-[#ec4899] hover:border-transparent hover:shadow-lg hover:shadow-[#ec4899]/50"
                        >
                            <FaBriefcase />
                            Hire Me
                        </Link>
                    </motion.div>

                    {/* SOCIAL - With Hover Effect */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-4 pt-4"
                    >
                        {[
                            { icon: <FaGithub />, link: 'https://github.com/mahafujur80', label: 'GitHub', color: 'hover:text-[#a855f7]' },
                            { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/mahafujur-rahman-munna/', label: 'LinkedIn', color: 'hover:text-[#d946ef]' },
                            { icon: <FaFacebook />, link: 'https://www.facebook.com/mahafujurrahman480', label: 'Facebook', color: 'hover:text-[#ec4899]' },
                            { icon: <GrInstagram />, link: 'https://www.instagram.com/mahafujur80?igsh=dHhhZDduazJ2ODBh', label: 'Twitter', color: 'hover:text-[#a855f7]' },
                        ].map((s, i) => (
                            <motion.a
                                key={i}
                                href={s.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
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
                    className="flex justify-center lg:justify-end">
                    <div className="hero-image relative">

                        {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট - থিম কালার */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] blur-2xl animate-pulse opacity-50"></div>

                        {/* মেইন ইমেজ কন্টেইনার */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">

                            {/* অ্যানিমেটেড বর্ডার গ্রেডিয়েন্ট - থিম কালার */}
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] opacity-75 blur-sm animate-pulse"></div>

                            {/* ইনার বর্ডার */}
                            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#a855f7]/20 to-transparent p-[2px]">

                                {/* ইমেজ কন্টেইনার */}
                                <div className="relative w-full h-full rounded-full overflow-hidden bg-black/50">

                                    {/* ইমেজ */}
                                    <Image
                                        src={myPhoto}
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover object-top transition-transform duration-500 hover:scale-105"
                                        alt="Mahafujur Rahman Munna"
                                    />

                                    {/* ওভারলে গ্রেডিয়েন্ট */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#a855f7]/30 to-transparent"></div>

                                </div>
                            </div>

                            {/* ডেকোরেটিভ রিংস - থিম কালার */}
                            <div className="absolute inset-0 rounded-full border border-[#a855f7]/30 pointer-events-none"></div>
                            <div className="absolute -inset-3 rounded-full border border-[#d946ef]/20 border-dashed pointer-events-none"></div>
                            <div className="absolute -inset-6 rounded-full border border-[#ec4899]/10 pointer-events-none"></div>

                            {/* ছোট ডট ডেকোরেশন */}
                            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r from-[#a855f7] to-[#d946ef] shadow-lg shadow-[#a855f7]/50"></div>
                            <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-gradient-to-r from-[#d946ef] to-[#ec4899] shadow-lg shadow-[#ec4899]/50"></div>
                            <div className="absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-[#a855f7]"></div>
                            <div className="absolute bottom-1/3 -left-4 w-2 h-2 rounded-full bg-[#d946ef]"></div>

                        </div>

                        {/* অনলাইন স্ট্যাটাস ইন্ডিকেটর */}
                        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 rounded-full p-1.5 shadow-lg shadow-green-500/30">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>

                        {/* এক্সপেরিয়েন্স ব্যাজ - থিম কালার */}
                        <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 bg-gradient-to-r from-[#a855f7] to-[#d946ef] rounded-full px-3 py-1.5 shadow-lg shadow-[#a855f7]/30">
                            <p className="text-[10px] md:text-xs font-bold text-white">MERN</p>
                            <p className="text-[8px] md:text-[10px] text-purple-200">Expert</p>
                        </div>

                    </div>
                </motion.div>

            </div>

            {/* 🔽 Floating Arrow */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#d946ef] text-2xl z-10 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <FiArrowDown className="hover:scale-125 transition-transform" />
            </motion.div>

        </section>
    )
}

export default Hero;