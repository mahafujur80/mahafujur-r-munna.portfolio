'use client'
import { motion } from 'framer-motion';

const TechCard = ({tech, index}) => {
    return (
        <motion.div
            initial={{ 
                opacity: 0, 
                y: 50,
                scale: 0.5        // শুরুতে ছোট (50% সাইজ)
            }}
            whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: 1          // ভিউতে এলে নরমাল সাইজ (100%)
            }}
            viewport={{ 
                once: true, 
                amount: 0.3,      // 30% ভিউতে এলে ট্রিগার হবে
                margin: "-50px"
            }}
            transition={{ 
                duration: 0.6,    // জুম ইন হতে সময়
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 12
            }}
            whileHover={{ 
                y: -8,            // হভার করলে শুধু উপরে উঠবে
                transition: { duration: 0.2 }
            }}
            className="group cursor-pointer"
        >
            <div className="flex flex-col items-center justify-center gap-2">
                <div>
                    <motion.div 
                        whileHover={{ 
                            scale: 1.1,
                            rotate: [0, -10, 10, -5, 5, 0],
                            transition: { duration: 0.5 }
                        }}
                        className="text-3xl flex items-center justify-center h-15 w-15 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:border-purple-400/40 transition-all duration-500"
                    >
                        {tech.icon}
                    </motion.div>
                </div>
                <motion.p 
                    whileHover={{ 
                        color: "#d8b4fe",
                        scale: 1.05,
                        transition: { duration: 0.2 }
                    }}
                    className="text-sm text-gray-300"
                >
                    {tech.name}
                </motion.p>
            </div>
        </motion.div>
    );
};

export default TechCard;