'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '@/assets/logo-port.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

const NavBar = () => {
  const pathName = usePathname()

  const [open, setOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showNav, setShowNav] = useState(true)

  // 🔥 Scroll Hide/Show Effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll down - hide navbar
        setShowNav(false)
      } else {
        // Scroll up - show navbar
        setShowNav(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`
      fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 
      transition-all duration-300 ease-in-out
      ${showNav ? 'translate-y-0' : '-translate-y-full'}
    `}>

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="logo"
            width={200}
            height={200}
            className='w-20 transition-all duration-300 hover:scale-105'
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-white">
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={link.path}
                className={`
                    block py-2 transition-all duration-300
                       ${pathName === link.path
                    ? 'border-b-2  border-[#d946ef] font-semibold'
                    : 'text-gray-100 hover:text-[#d946ef]'
                  }`}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* RESUME BUTTON */}
        <div className='hidden md:block'>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#a855f7]/50"
          >
            Resume
          </motion.a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl z-50 relative"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute left-4 right-4 mt-3 rounded-2xl border border-white/10 bg-gray-900/95 backdrop-blur-xl z-40"
          >
            <ul className="flex flex-col p-6 gap-5 text-white">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOpen(false)}
                >
                  <Link
                    href={link.path}
                    className={`
                    block py-2 transition-all duration-300
                       ${pathName === link.path
                        ? 'border-l-4 rounded-xl border-[#d946ef] bg-gradient-to-r from-[#a855f7]/10 to-transparent text-[#d946ef] font-semibold pl-4'
                        : 'text-gray-100 hover:text-[#d946ef]'
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.02 }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#a855f7]/50 text-center"
                onClick={() => setOpen(false)}
              >
                Resume
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  )
}

export default NavBar