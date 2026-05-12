'use client'
import { motion } from 'framer-motion';
import 'animate.css';
import logo from '@/assets/logo-port.png'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className=" text-white pt-12 pb-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Main Footer Grid - Left | Center | Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10">

          {/* LEFT SECTION - Logo + About Text */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center col-span-5   md:text-left"
          >
            {/* Logo */}
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <Image src={logo} alt="logo" width={100} height={100}
              />
            </div>

            {/* About Text */}
            <p className="text-gray-400 text-sm leading-relaxed mb-2 max-w-xs mx-auto md:mx-0">
              Turning ideas into modern digital experiences through creative design and clean code.
            </p>
            <p className="text-gray-500 text-xs">
              ✨ Quality meets creativity
            </p>
          </motion.div>

          {/* CENTER SECTION - Quick Links */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-left col-span-4 "
          >
            <h4 className="text-lg font-semibold mb-4 inline-block relative">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] rounded-full"></span>
            </h4>
            <nav>
              <ul className="flex flex-col gap-2">
                <li>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-[#d946ef] transition-all duration-300 inline-block"
                    >
                      Home
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href="/projects"
                      className="text-gray-400 hover:text-[#d946ef] transition-all duration-300 inline-block"
                    >
                      Projects
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href="/blog"
                      className="text-gray-400 hover:text-[#d946ef] transition-all duration-300 inline-block"
                    >
                      Blog
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href="/contact"
                      className="text-gray-400 hover:text-[#d946ef] transition-all duration-300 inline-block"
                    >
                      Contact
                    </Link>
                  </motion.div>
                </li>
              </ul>
            </nav>
          </motion.div>

          {/* RIGHT SECTION - Social Links */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-left  col-span-3"
          >
            <h4 className="text-lg font-semibold mb-4 inline-block relative">
              Connect With Me
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-2 items-center items-start">
              <li>
                <motion.div whileHover={{ x: -5 }}>
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    className="text-gray-400 hover:text-[#a855f7] transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Facebook
                  </Link>
                </motion.div>
              </li>

              <li>
                <motion.div whileHover={{ x: -5 }}>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    className="text-gray-400 hover:text-[#d946ef] transition-all duration-300 inline-flex items-center gap-2"
                  >
                    Instagram
                  </Link>
                </motion.div>
              </li>

              <li>
                <motion.div whileHover={{ x: -5 }}>
                  <Link
                    href="https://github.com"
                    target="_blank"
                    className="text-gray-400 hover:text-[#ec4899] transition-all duration-300 inline-flex items-center gap-2"
                  >
                    GitHub
                  </Link>
                </motion.div>
              </li>

              <li>
                <motion.div whileHover={{ x: -5 }}>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    className="text-gray-400 hover:text-[#a855f7] transition-all duration-300 inline-flex items-center gap-2"
                  >
                    LinkedIn
                  </Link>
                </motion.div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* BOTTOM SECTION - Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center pt-6"
        >
          <p className="text-gray-500 text-sm">
            © {year} MRM All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;