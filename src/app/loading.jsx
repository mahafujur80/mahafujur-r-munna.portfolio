'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from '@/assets/logo-port.png'

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950">
      
      <div className="flex flex-col items-center gap-8">
        
        {/* Logo with Pulse Animation */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image 
            src={logo} 
            alt="Logo" 
            width={100} 
            height={100} 
            className="w-28 md:w-36"
            priority
          />
        </motion.div>

        {/* Loading Progress Ring */}
        <div className="relative">
          {/* Background Circle */}
          <div className="w-12 h-12 rounded-full border-4 border-white/10"></div>
          
          {/* Animated Progress Ring */}
          <motion.div
            animate={{ 
              rotate: 360
            }}
            transition={{ 
              duration: 1.2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-transparent border-t-[#d946ef] border-r-[#a855f7]"
          />
        </div>

        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400 text-sm tracking-wider font-medium"
        >
          Loading...
        </motion.p>

      </div>
    </div>
  )
}

export default Loader;