import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
} from 'react-icons/fa'
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from 'react-icons/hi'
import Link from 'next/link'
import { GrInstagram } from 'react-icons/gr'
import { FadeIn } from '../UI-kid/AnimatedSection'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen pt-24 pb-16 px-4 md:px-8 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Header section*/}
        <FadeIn direction="up" delay={0.1} className="text-center mb-12">
          <div className="inline-flex px-3 py-1 rounded-full border border-[#d946ef]/20 bg-[#d946ef]/10 text-[#d946ef] text-xs tracking-[3px] uppercase mb-4">
            Get In Touch
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Let's <span className="bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </FadeIn>

        {/* content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* left side info */}
          <div className="space-y-5 w-full">
            
            {/* contact card*/}
            <FadeIn direction="left" delay={0.2} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5 w-full overflow-hidden">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>
              
              <div className="space-y-3">
                {[
                  { icon: <HiOutlineMail />, label: 'Email', value: 'mahafujurrahman4480@gmail.com', href: 'mailto:mahafujurrahman4480@gmail.com' },
                  { icon: <HiOutlinePhone />, label: 'Phone', value: '+880 1709-534480', href: 'tel:+8801709534480' },
                  { icon: <HiOutlineLocationMarker />, label: 'Location', value: 'Chirirbandar, Dinajpur, Bangladesh', href: null },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 md:gap-4 p-3 rounded-xl bg-black/30 border border-white/5 hover:border-[#a855f7]/30 transition-all group flex-wrap md:flex-nowrap">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#a855f7]/10 text-[#a855f7] flex items-center justify-center text-xl group-hover:scale-110 transition-transform shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white/80 hover:text-[#d946ef] text-sm transition break-words">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white/80 text-sm break-words">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* social card */}
            <FadeIn direction="left" delay={0.3} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5 w-full overflow-hidden">
              <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
              <div className="flex gap-3 md:gap-4 flex-wrap justify-center md:justify-start">
                {[
                  { icon: <FaGithub />, link: 'https://github.com/mahafujur80' },
                  { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/mahafujur-rahman-munna/' },
                  { icon: <GrInstagram />, link: 'https://www.instagram.com/mahafujur80?igsh=dHhhZDduazJ2ODBh' },
                  { icon: <FaFacebook />, link: 'https://www.facebook.com/mahafujurrahman480' },
                ].map((social, i) => (
                  <Link key={i} href={social.link} target='_blank' className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-white/80 hover:bg-gradient-to-r hover:from-[#a855f7] hover:to-[#ec4899] hover:text-white transition-all shrink-0 hover:scale-110">
                    {social.icon}
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* right side form */}
          {/* <FadeIn direction="right" delay={0.4} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-5 w-full overflow-hidden">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Send a Message</h3>
            <p className="text-gray-400 text-sm mb-4 md:mb-6">I'll get back to you within 24 hours</p>
            
            <form className="space-y-3">
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-black/30 border border-white/10 text-white text-sm md:text-base placeholder:text-gray-500 outline-none focus:border-[#a855f7]/50 transition-all"
              />
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-black/30 border border-white/10 text-white text-sm md:text-base placeholder:text-gray-500 outline-none focus:border-[#a855f7]/50 transition-all"
              />
              <input 
                type="text" 
                placeholder="Subject"
                className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-black/30 border border-white/10 text-white text-sm md:text-base placeholder:text-gray-500 outline-none focus:border-[#a855f7]/50 transition-all"
              />
              <textarea 
                rows={4} 
                placeholder="Your Message"
                className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-black/30 border border-white/10 text-white text-sm md:text-base placeholder:text-gray-500 outline-none focus:border-[#a855f7]/50 transition-all resize-none"
              ></textarea>
              <button className="w-full py-2.5 md:py-3 rounded-xl bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] hover:from-[#ec4899] hover:via-[#d946ef] hover:to-[#a855f7] text-white font-medium transition-all shadow-lg shadow-[#a855f7]/20 text-sm md:text-base active:scale-95">
                Send Message →
              </button>
            </form>
          </FadeIn> */}
          <ContactForm/>
        </div>
      </div>
    </section>
  )
}

export default Contact;