'use client'
import { motion } from 'framer-motion';

const TimelineItem = ({ item, idx }) => {
    const isLeft = item.side === 'left';

    return (
        <div className="relative w-full mb-10 md:mb-0">

            {/* The Node (16-20px Small Glowing Dot with White Center) */}
            <div className="absolute left-[24px] md:left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center z-20">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] rounded-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] p-[3px] shadow-[0_0_15px_rgba(217,70,239,0.6)] relative group"
                >
                    {/* Pulse Ring */}
                    <div className="absolute inset-0 rounded-full border border-[#d946ef] opacity-50 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                    {/* White Center Dot */}
                    <div className="w-full h-full rounded-full bg-white relative z-10"></div>
                </motion.div>
            </div>

            {/* Horizontal Connector Line (Subtle connection) */}
            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-6 lg:w-8 h-[2px] bg-gradient-to-r ${isLeft ? 'right-[calc(50%+10px)] from-transparent to-[#d946ef]/60' : 'left-[calc(50%+10px)] from-[#d946ef]/60 to-transparent'}`}></div>

            {/* Grid Layout for Perfect Alignment */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-full pl-16 md:pl-0">

                {/* Content Container (dynamically placed in col 1 or 2 on desktop) */}
                <div className={`w-full max-w-[460px] ${isLeft ? 'md:col-start-1 md:pr-6 lg:pr-10 md:ml-auto' : 'md:col-start-2 md:pl-6 lg:pl-10 md:mr-auto'}`}>

                    <motion.div
                        initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 10 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.5, delay: idx * 0.15 + 0.1, ease: "easeOut" }}
                        className="w-full h-full flex flex-col justify-center"
                    >
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl shadow-black/40 hover:bg-white/10 hover:border-[#d946ef]/40 hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(217,70,239,0.2)] transition-all duration-300 group">

                            {/* Year Badge */}
                            <div className={`flex ${isLeft ? 'md:justify-end' : 'justify-start'} mb-3`}>
                                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#a855f7]/10 to-[#ec4899]/10 border border-[#d946ef]/20 shadow-sm">
                                    <span className="text-[11px] md:text-xs font-mono font-bold text-white tracking-wide">
                                        {item.year}
                                    </span>
                                </div>
                            </div>

                            {/* Title & Institution */}
                            <div className={`${isLeft ? 'md:text-right' : 'text-left'}`}>
                                <h3 className="text-sm md:text-base font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#a855f7] group-hover:to-[#ec4899] transition-all duration-300">
                                    {item.title}
                                </h3>
                                <h4 className="text-xs md:text-[13px] font-medium text-[#d946ef] mb-2">
                                    {item.institution}
                                </h4>

                                {/* Concise Description Paragraph */}
                                <p className="text-gray-400 text-[12px] md:text-[13px] leading-relaxed mb-3 group-hover:text-gray-300 transition-colors duration-300">
                                    {item.description}
                                </p>

                                {/* Skill Chips */}
                                <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : 'justify-start'}`}>
                                    {item.skills && item.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 text-[10px] md:text-[11px] font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full group-hover:border-[#d946ef]/30 group-hover:text-[#d946ef] transition-colors duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default TimelineItem;