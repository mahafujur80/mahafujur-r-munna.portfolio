import { FadeIn } from '../UI-kid/AnimatedSection';
import { FaCode, FaRocket, FaGamepad, FaBullseye } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaCode className="text-[#a855f7]" />,
    title: 'Journey',
    description: 'Self-taught Developer',
    gradient: 'from-[#a855f7] to-[#d946ef]',
    hoverBorder: 'hover:border-[#ec4899]/50',
    hoverShadow: 'hover:shadow-[#ec4899]/20',
    hoverTranslate: 'hover:-translate-x-2',
  },
  {
    icon: <FaRocket className="text-[#d946ef]" />,
    title: 'Focus',
    description: 'Frontend + UI Design',
    gradient: 'from-[#d946ef] to-[#ec4899]',
    hoverBorder: 'hover:border-[#a855f7]/50',
    hoverShadow: 'hover:shadow-[#a855f7]/20',
    hoverTranslate: 'hover:translate-x-2',
  },
  {
    icon: <FaGamepad className="text-[#ec4899]" />,
    title: 'Hobbies',
    description: 'Football & Music',
    gradient: 'from-[#ec4899] to-[#a855f7]',
    hoverBorder: 'hover:border-[#d946ef]/50',
    hoverShadow: 'hover:shadow-[#d946ef]/20',
    hoverTranslate: 'hover:-translate-x-2',
  },
  {
    icon: <FaBullseye className="text-[#a855f7]" />,
    title: 'Goal',
    description: 'Full Stack Mastery',
    gradient: 'from-[#a855f7] to-[#ec4899]',
    hoverBorder: 'hover:border-[#ec4899]/50',
    hoverShadow: 'hover:shadow-[#ec4899]/20',
    hoverTranslate: 'hover:translate-x-2',
  },
];

const mindsetItems = [
  'Clean & reusable code',
  'Focus on UI/UX design',
  'Always learning new tech',
  'Problem solving mindset',
  'Performance optimization',
  'Accessible & semantic HTML',
];

const AboutMe = () => {
  return (
    <section id="about" className="px-4 md:px-8 py-10 md:py-14 text-white overflow-hidden relative">
      
      {/* Simple Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-[#a855f7] rounded-full blur-[150px] opacity-20 -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Centered Section Header */}
        <FadeIn direction="up" delay={0.1} className="text-center mb-10">
          <div className="inline-flex px-3 py-1 rounded-full border border-[#d946ef]/20 bg-[#d946ef]/10 text-[#d946ef] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
            About Me
          </div>
          <h2 className="text-xl md:text-3xl font-bold text-white mb-3">
            Who <span className="bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent">I Am</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-transparent rounded-full mx-auto"></div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
          
          {/* LEFT TEXT */}
          <div className="space-y-3 md:space-y-4">
            
            {/* Text Paragraphs */}
            <div className="space-y-3 md:space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
              <FadeIn direction="up" delay={0.2}>
                <p>
                  My programming journey started with pure curiosity — wondering how websites actually work behind the scenes.
                  I began with the basics: HTML, CSS, and JavaScript. As I kept exploring, I fell in love with building things
                  for the web. Today, I create modern, responsive web applications using React, Next.js, Node.js, and MongoDB.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <p>
                  I&apos;m passionate about Frontend Development and UI Engineering. I enjoy working with React and Next.js to
                  build fast, accessible, and visually polished interfaces. Clean architecture, performance optimization, and
                  solving real-world problems through code are what drive me every day. I believe great software is built at the
                  intersection of design thinking and engineering discipline.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <p>
                  Outside of programming, I spend my time learning new technologies, reading tech blogs, watching programming
                  tutorials, and exploring AI tools. When I need a break, I enjoy watching football and cricket, or just coding
                  away while listening to music. I believe creativity and consistency are the keys to becoming a better developer.
                </p>
              </FadeIn>
            </div>

            {/* HIGHLIGHTS - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-4">
              {highlights.map((item, i) => (
                <FadeIn
                  key={item.title}
                  direction={i % 2 === 0 ? 'left' : 'right'}
                  delay={0.5 + i * 0.1}
                  className={`${item.hoverTranslate} hover:scale-105 transition-all duration-300 ease-out p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm ${item.hoverBorder} hover:shadow-lg ${item.hoverShadow} cursor-pointer`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {item.icon}
                    <h4 className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent font-semibold text-sm md:text-base`}>
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm text-gray-400">{item.description}</p>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="flex justify-center mt-6 md:mt-0">
            <FadeIn direction="right" delay={0.7} className="w-full max-w-sm">
              <div className="hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl hover:border-[#d946ef]/50 hover:shadow-xl hover:shadow-[#d946ef]/20 cursor-pointer">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent text-center md:text-left">
                  Developer Mindset
                </h3>

                <ul className="space-y-2 md:space-y-3 text-gray-300 text-xs md:text-sm">
                  {mindsetItems.map((item) => (
                    <li key={item} className="flex items-center gap-2 group">
                      <span className="text-[#d946ef] inline-block text-sm group-hover:scale-125 transition-transform">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;