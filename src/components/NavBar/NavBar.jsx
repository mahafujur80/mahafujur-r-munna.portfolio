'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../../public/logo-port.png'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4">

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-white">
          MRM<span className="text-purple-400">.dev</span> 
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-white">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={link.path} className="hover:text-purple-400">
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* RESUME */}
        <div className='hidden md:block'>
            <motion.a
          href="#"
          download
          whileHover={{ scale: 1.05 }}
          className="btn-primary"
        >
          Resume
        </motion.a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* MOBILE MENU WITH ANIMATION */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute left-4 right-4 mt-3 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl"
          >
            <ul className="flex flex-col p-6 gap-5 text-white">

              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className="hover:text-purple-400"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                className="btn-primary text-center "
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