'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '@/assets/logo-port.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Dev Stack', path: '#tech' },
  { name: 'Skills', path: '#skills' },
  { name: 'Education', path: '#education' },
  { name: 'Projects', path: '#projects' },
  { name: 'Contact', path: '#contact' },
]

const sectionIds = navLinks.map(l => l.path.replace('#', ''))

const NavBar = () => {
  const pathName = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Scroll detection for navbar blur and shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section detection via IntersectionObserver
  useEffect(() => {
    if (pathName !== '/') return

    const observers = []
    const handleIntersect = (id) => (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(id)
        }
      })
    }

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        const observer = new IntersectionObserver(handleIntersect(id), {
          rootMargin: '-100px 0px -50% 0px',
          threshold: 0.1,
        })
        observer.observe(el)
        observers.push(observer)
      }
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [pathName])

  const resolveHref = useCallback(
    (path) => (path.startsWith('#') ? `/${path}` : path),
    []
  )

  const handleNavLinkClick = useCallback(
    (e, path) => {
      if (pathName === '/' && path.startsWith('#')) {
        e.preventDefault()
        const targetId = path.replace('#', '')
        const el = document.getElementById(targetId)
        if (el) {
          const offset = 80
          const bodyRect = document.body.getBoundingClientRect().top
          const elementRect = el.getBoundingClientRect().top
          const elementPosition = elementRect - bodyRect
          const offsetPosition = elementPosition - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }
    },
    [pathName]
  )

  const isActive = (path) => {
    const id = path.replace('#', '')
    return pathName === '/' && activeSection === id
  }

  return (
    <header
      className="fixed top-3 left-0 w-full z-50 px-4 md:px-10 transition-all duration-300 ease-in-out"
      role="banner"
    >
      <div
        className={`
          relative z-50 max-w-7xl mx-auto flex items-center justify-between
          md:grid md:grid-cols-[1fr_auto_1fr] md:items-center
          px-4 py-1.5 md:p-0 rounded-full md:rounded-none transition-all duration-500
          ${scrolled
            ? 'bg-gray-950/85 backdrop-blur-2xl border border-white/15 shadow-xl shadow-black/50 md:bg-transparent md:backdrop-blur-none md:border-none md:shadow-none'
            : 'bg-white/5 backdrop-blur-2xl border border-white/10 shadow-lg shadow-black/20 md:bg-transparent md:backdrop-blur-none md:border-none md:shadow-none'
          }
        `}
      >

        {/* LEFT: LOGO ONLY */}
        <div className="flex items-center justify-start">
          <Link href="/" className="flex items-center" aria-label="Go to homepage">
            <Image
              src={logo}
              alt="MRM Logo"
              width={200}
              height={200}
              className="w-14 md:w-20 transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* CENTER: FLOATING GLASS NAVIGATION CONTAINER */}
        <nav
          className="hidden md:flex items-center justify-center w-fit mx-auto"
          role="navigation"
          aria-label="Main navigation"
        >
          <div
            className={`
              flex items-center p-1.5 rounded-full border transition-all duration-500
              ${scrolled
                ? 'bg-gray-950/80 backdrop-blur-2xl border-white/15 shadow-xl shadow-black/40'
                : 'bg-white/5 backdrop-blur-2xl border-white/10 shadow-lg shadow-black/20'
              }
            `}
          >
            <ul className="flex items-center gap-1 text-white">
              {navLinks.map((link) => {
                const active = isActive(link.path)
                return (
                  <li key={link.name} className="relative">
                    <Link
                      href={resolveHref(link.path)}
                      onClick={(e) => handleNavLinkClick(e, link.path)}
                      className={`
                        relative z-10 block px-4 py-2 text-[15px] font-medium transition-colors duration-300 rounded-full whitespace-nowrap
                        ${active ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'}
                      `}
                    >
                      {active && (
                        <motion.span
                          layoutId="activeNavPill"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#a855f7]/30 via-[#d946ef]/30 to-[#ec4899]/30 border border-[#d946ef]/40 shadow-sm shadow-[#d946ef]/20 -z-10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>

        {/* RIGHT: RESUME BUTTON ONLY (DESKTOP) */}
        <div className="hidden md:flex items-center justify-end">
          <motion.a
            href="/Mahafujur-Rahman_Resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center px-7 py-2.5 h-[48px] rounded-full bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] text-white text-[15px] font-semibold transition-all duration-300 shadow-md shadow-[#a855f7]/30 hover:shadow-lg hover:shadow-[#a855f7]/50"
            aria-label="Download Resume"
          >
            Resume
          </motion.a>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl p-1.5 rounded-full hover:bg-white/10 transition-colors z-50 relative focus:outline-none"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY & DROPDOWN */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop overlay to dim page content on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
              aria-hidden="true"
            />

            {/* Mobile Dropdown Card */}
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.96 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="md:hidden absolute left-4 right-4 top-full mt-2 rounded-2xl border border-white/15 bg-[#0b0d19]/95 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-40 overflow-hidden"
              role="menu"
            >
              <ul className="flex flex-col p-5 gap-3 text-white">
                {navLinks.map((link) => {
                  const active = isActive(link.path)
                  return (
                    <motion.li
                      key={link.name}
                      whileTap={{ scale: 0.98 }}
                      role="menuitem"
                    >
                      <Link
                        href={resolveHref(link.path)}
                        onClick={(e) => {
                          handleNavLinkClick(e, link.path)
                          setOpen(false)
                        }}
                        className={`
                          block py-3 px-4 rounded-xl transition-all duration-300 text-sm font-medium
                          ${active
                            ? 'bg-gradient-to-r from-[#a855f7]/30 via-[#d946ef]/20 to-transparent border-l-4 border-[#d946ef] text-white font-semibold shadow-inner'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }
                        `}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  )
                })}

                <div className="pt-2 border-t border-white/10">
                  <motion.a
                    href="/Mahafujur-Rahman_Resume.pdf"
                    download
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full py-3 rounded-xl bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] text-white font-semibold text-center text-sm transition-all duration-300 shadow-lg shadow-[#a855f7]/30 hover:shadow-[#a855f7]/50"
                    onClick={() => setOpen(false)}
                    aria-label="Download Resume"
                  >
                    Resume
                  </motion.a>
                </div>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default NavBar