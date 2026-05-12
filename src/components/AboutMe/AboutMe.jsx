"use client";

import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section className="px-4 md:px-8 py-20 text-white overflow-hidden">
      
      {/* Simple Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#a855f7] rounded-full blur-[150px] opacity-20 -z-0" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT TEXT - Fade Up + Zoom on Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold"
          >
            About{' '}
            <span className="bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
<div className="w-30 h-1 bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-transparent mt-4 rounded-full"></div>
          {/* Text Paragraphs - Staggered Fade Up */}
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I started my programming journey with curiosity about how websites work.
              Slowly I learned HTML, CSS, JavaScript, and now I build modern web apps using
              React and Next.js.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I enjoy building clean, responsive and interactive UI. I love solving problems,
              learning new technologies and improving my development skills every day.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Outside of programming, I enjoy exploring new tech ideas, watching football,
              and sometimes designing UI concepts just for fun. I believe creativity and
              consistency are the key to becoming a better developer.
            </motion.p>
          </div>

          {/* HIGHLIGHTS - Scroll Zoom + Hover Zoom */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="hover:-translate-x-2 hover:scale-105 transition-all duration-200 ease-out p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-[#a855f7]/50 hover:shadow-lg hover:shadow-[#a855f7]/20 cursor-pointer"
            >
              <h4 className="bg-gradient-to-r from-[#a855f7] to-[#d946ef] bg-clip-text text-transparent font-semibold">
                Journey
              </h4>
              <p className="text-sm text-gray-400">Self-taught Developer</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="hover:translate-x-2 hover:scale-105 transition-all duration-200 ease-out p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-[#ec4899]/50 hover:shadow-lg hover:shadow-[#ec4899]/20 cursor-pointer"
            >
              <h4 className="bg-gradient-to-r from-[#d946ef] to-[#ec4899] bg-clip-text text-transparent font-semibold">
                Focus
              </h4>
              <p className="text-sm text-gray-400">Frontend + UI Design</p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT CARD - Scroll Zoom + Hover Zoom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center"
        >
          <motion.div
            
            className="hover:-translate-y-2 hover:scale-105 transition-all duration-200 ease-out w-full max-w-sm p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-[#d946ef]/50 hover:shadow-xl hover:shadow-[#d946ef]/20 cursor-pointer"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl font-semibold mb-4 bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent"
            >
              Developer Mindset
            </motion.h3>

            <ul className="space-y-3 text-gray-300 text-sm">
              {['Clean & reusable code', 'Focus on UI/UX design', 'Always learning new tech', 'Problem solving mindset'].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 group"
                >
                  <motion.span 
                    className="text-[#d946ef] inline-block"
                    whileHover={{ scale: 1.3, rotate: 12 }}
                  >
                    ✦
                  </motion.span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;