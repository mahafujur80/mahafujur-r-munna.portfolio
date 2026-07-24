'use client'
import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ category, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileTap={{ scale: 0.98 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
            }}
            className="group relative"
        >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#a855f7]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="relative p-4 md:p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-[#d946ef]/30 hover:bg-white/10 transition-all duration-500 shadow-xl shadow-black/50 group-hover:-translate-y-1 overflow-hidden">
                
                {/* Decorative Top Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-[#d946ef]/50 transition-colors duration-500"></div>

                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#d946ef] group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(217,70,239,0.3)]">
                        {category.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#a855f7] group-hover:to-[#ec4899] transition-all duration-300">
                        {category.category}
                    </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3.5">
                    {category.skills.map((skill, skillIdx) => (
                        <div key={skillIdx} className="group/skill">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="text-base opacity-70 group-hover/skill:opacity-100 group-hover/skill:scale-110 transition-all duration-300">
                                    {skill.icon}
                                </div>
                                <span className="text-[13px] md:text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors duration-300">
                                    {skill.name}
                                </span>
                                <span className="text-[11px] font-bold text-[#d946ef] opacity-0 group-hover/skill:opacity-100 ml-auto transition-opacity duration-300 tracking-wider">
                                    {skill.level}%
                                </span>
                            </div>
                            
                            {/* Premium Thin Neon Progress Bar */}
                            <div className="h-[2px] md:h-[3px] bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.1 + skillIdx * 0.1, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] rounded-full relative shadow-[0_0_10px_rgba(217,70,239,0.5)]"
                                >
                                    {/* Glowing tip */}
                                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full blur-[1px]"></div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default SkillCard;