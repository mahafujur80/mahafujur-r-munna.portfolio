'use client'
import { motion } from 'framer-motion';

const TechCard = ({ tech, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileTap={{ scale: 0.95 }}
            transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut"
            }}
            className="group relative cursor-pointer"
        >
            {/* Hover Glow Behind Card */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-[#ec4899] rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

            {/* Main Card */}
            <div className="relative flex flex-col items-center justify-center gap-2 p-3 md:p-4 w-[78px] md:w-[95px] h-[85px] md:h-[100px] rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-[#d946ef]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-lg shadow-black/20 group-hover:shadow-[0_10px_30px_-10px_rgba(217,70,239,0.3)]">
                
                {/* Icon Container */}
                <div className="text-2xl md:text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]">
                    {tech.icon}
                </div>

                {/* Tech Name */}
                <span className="text-[11px] md:text-xs font-semibold text-gray-400 group-hover:text-white transition-colors duration-300 tracking-wide">
                    {tech.name}
                </span>

            </div>
        </motion.div>
    );
};

export default TechCard;