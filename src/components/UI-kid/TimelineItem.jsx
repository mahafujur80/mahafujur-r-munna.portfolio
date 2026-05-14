'use client'
import { motion } from 'framer-motion';

const TimelineItem = ({ item, idx}) => {
    return (
        <motion.li
            initial={{ 
                opacity: 0, 
                y: 50,
                scale: 0.8
            }}
            whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: 1
            }}
            viewport={{ 
                once: true, 
                amount: 0.3,
                margin: "-50px"
            }}
            transition={{ 
                duration: 0.6, 
                delay: idx * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
            }}
        >
            {idx !== 0 && <hr className="border-purple-500/20" />}

            <div className="timeline-middle">
                <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.15 + 0.2 }}
                    className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 shadow-lg shadow-purple-500/50"
                />
            </div>

            <div className={`${item.side === 'left' ? 'timeline-start' : 'timeline-end'} md:mb-10 ${item.side === 'left' ? 'md:text-end' : 'md:text-start'}`}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.15 + 0.1 }}
                >
                    <time className="font-mono text-sm text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full inline-block mb-2">
                        {item.year}
                    </time>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: item.side === 'left' ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 + 0.2 }}
                >
                    <div className="text-xl font-bold text-white mt-2">
                        {item.title}
                    </div>

                    <div className="text-purple-400 text-sm font-medium mt-1">
                        {item.institution}
                    </div>

                    <p className="text-gray-400 mt-2 text-sm leading-relaxed max-w-md">
                        {item.description}
                    </p>
                </motion.div>

                {/* Optional: Decorative line */}
                {item.side === 'left' && (
                    <div className="hidden md:block absolute right-0 top-1/2 w-4 h-px bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                )}
            </div>

            <hr className="border-purple-500/20" />
        </motion.li>
    );
};

export default TimelineItem;