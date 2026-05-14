'use client'
import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({category, index}) => {
    return (
        <motion.div
            initial={{ 
                opacity: 0, 
                y: 50 
            }}
            whileInView={{ 
                opacity: 1, 
                y: 0 
            }}
            viewport={{ 
                once: true, 
                amount: 0.2 
            }}
            transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
            }}
            whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.2 }
            }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/30"
        >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-2xl font-semibold">{category.category}</h3>
            </div>

            {/* Skills List */}
            <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                        <div className="flex items-center gap-2 mb-1">
                            {skill.icon}
                            <span className="text-sm">{skill.name}</span>
                            <span className="text-xs text-purple-400 ml-auto">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 + skillIdx * 0.1 }}
                                className="h-full bg-gradient-to-r from-blue-800 to-purple-400 rounded-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillCard;