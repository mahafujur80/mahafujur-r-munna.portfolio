import { FadeIn } from '../UI-kid/AnimatedSection';

const AboutMe = () => {
  return (
    <section id="about" className="px-4 md:px-8 py-20 text-white overflow-hidden relative">
      
      {/* Simple Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-[#a855f7] rounded-full blur-[150px] opacity-20 -z-0" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12 items-center relative z-10">
        
        {/* LEFT TEXT */}
        <div className="space-y-4 md:space-y-6">
          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-200 text-center md:text-left">
              About
              <span className="bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent ml-2">
                Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-transparent mt-2 rounded-full mx-auto md:mx-0"></div>
          </FadeIn>
          
          {/* Text Paragraphs */}
          <div className="space-y-3 md:space-y-4 text-gray-400 leading-relaxed text-sm md:text-base">
            <FadeIn direction="up" delay={0.2}>
              <p>
                I started my programming journey with curiosity about how websites work.
                Slowly I learned HTML, CSS, JavaScript, and now I build modern web apps using
                React and Next.js.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <p>
                I enjoy building clean, responsive and interactive UI. I love solving problems,
                learning new technologies and improving my development skills every day.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <p>
                Outside of programming, I enjoy exploring new tech ideas, watching football,
                and sometimes designing UI concepts just for fun. I believe creativity and
                consistency are the key to becoming a better developer.
              </p>
            </FadeIn>
          </div>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-4">
            <FadeIn direction="left" delay={0.5} className="hover:-translate-x-2 hover:scale-105 transition-all duration-300 ease-out p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#ec4899]/50 hover:shadow-lg hover:shadow-[#ec4899]/20 cursor-pointer">
              <h4 className="bg-gradient-to-r from-[#a855f7] to-[#d946ef] bg-clip-text text-transparent font-semibold text-sm md:text-base">
                Journey
              </h4>
              <p className="text-xs md:text-sm text-gray-400">Self-taught Developer</p>
            </FadeIn>

            <FadeIn direction="right" delay={0.6} className="hover:translate-x-2 hover:scale-105 transition-all duration-300 ease-out p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#a855f7]/50 hover:shadow-lg hover:shadow-[#a855f7]/20 cursor-pointer">
              <h4 className="bg-gradient-to-r from-[#d946ef] to-[#ec4899] bg-clip-text text-transparent font-semibold text-sm md:text-base">
                Focus
              </h4>
              <p className="text-xs md:text-sm text-gray-400">Frontend + UI Design</p>
            </FadeIn>
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
                {['Clean & reusable code', 'Focus on UI/UX design', 'Always learning new tech', 'Problem solving mindset'].map((item, i) => (
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
    </section>
  );
};

export default AboutMe;