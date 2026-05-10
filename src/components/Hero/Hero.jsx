'use client'

import myPhoto from '@/assets/my-photo.png'
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
        <section className="relative px-4 min-h-screen flex items-center  pt-28">

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
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="animate__animated animate__rubberBand animate__delay-1s text-3xl md:text-5xl font-bold text-white leading-tight"
                    >
                        Hi, I'm
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">Mahafujur R Munna</span>
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
                <div

                    className="flex  justify-center lg:justify-end"
                >
                    <div className="hero-image relative">

                        {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
                        <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-2xl animate-pulse"></div>

                        {/* মেইন ইমেজ কন্টেইনার */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">

                            {/* অ্যানিমেটেড বর্ডার গ্রেডিয়েন্ট */}
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-75 blur-sm animate__animated animate__pulse animate__slower animate__infinite"></div>

                            {/* ইনার বর্ডার */}
                            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-500/20 to-transparent p-[2px]">

                                {/* ইমেজ কন্টেইনার */}
                                <div className="relative w-full h-full rounded-full overflow-hidden bg-black/50">

                                    {/* ইমেজ */}
                                    <Image
                                        src={myPhoto}
                                        fill
                                        className="object-cover object-top"
                                        alt="Mahafujur Rahman Munn"
                                        priority
                                    />

                                    {/* ওভারলে গ্রেডিয়েন্ট */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>

                                </div>
                            </div>

                            {/* ডেকোরেটিভ রিংস */}
                            <div className="absolute inset-0 rounded-full border border-purple-500/30 pointer-events-none"></div>
                            <div className="absolute -inset-3 rounded-full border border-purple-500/20 border-dashed pointer-events-none animate-spin-slow-reverse"></div>
                            <div className="absolute -inset-6 rounded-full border border-purple-500/10 pointer-events-none"></div>

                            {/* ছোট ডট ডেকোরেশন */}
                            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50"></div>
                            <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-pink-500 shadow-lg shadow-pink-500/50"></div>
                            <div className="absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-cyan-400"></div>
                            <div className="absolute bottom-1/3 -left-4 w-2 h-2 rounded-full bg-purple-400"></div>

                        </div>

                        {/* অনলাইন স্ট্যাটাস ইন্ডিকেটর */}
                        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 rounded-full p-1.5 shadow-lg shadow-green-500/30">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>

                        {/* এক্সপেরিয়েন্স ব্যাজ */}
                        <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full px-3 py-1.5 shadow-lg shadow-purple-500/30">
                            <p className="text-[10px] md:text-xs font-bold text-white">MERN</p>
                            <p className="text-[8px] md:text-[10px] text-purple-200"></p>
                        </div>

                    </div>
                </div>

            </div>

            {/* 🔽 Floating Arrow */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                // এখানে absolute এবং z-10 যোগ করা হয়েছে
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-purple-400 text-2xl z-10"
            >
                <FiArrowDown />
            </motion.div>

        </section>
    )
}
export default Hero;