import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
  FaWhatsapp,
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
    <section id="contact" className="py-10 md:py-14 px-4 md:px-8 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Header section */}
        <FadeIn direction="up" delay={0.1} className="text-center mb-10">
          <div className="inline-flex px-3 py-1 rounded-full border border-[#d946ef]/20 bg-[#d946ef]/10 text-[#d946ef] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
            Get In Touch
          </div>
          <h2 className="text-xl md:text-3xl font-bold text-white mb-3">
            Let's <span className="bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-transparent rounded-full mx-auto mb-3"></div>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            I'm currently available for freelance work or full-time opportunities. Reach out if you want to build something great together.
          </p>
        </FadeIn>

        {/* 40/60 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDE: Contact Info (40%) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Contact Information */}
            <FadeIn direction="up" delay={0.2} className="w-full">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Contact Details</h3>
              
              <div className="flex flex-col">
                {[
                  { icon: <HiOutlineMail />, label: 'Email', value: 'mahafujurrahman4480@gmail.com', href: 'mailto:mahafujurrahman4480@gmail.com' },
                  { icon: <HiOutlinePhone />, label: 'Phone', value: '+880 1709-534480', href: 'tel:+8801709534480' },
                  { icon: <HiOutlineLocationMarker />, label: 'Location', value: 'Dinajpur, Bangladesh', href: null },
                  { icon: <FaWhatsapp />, label: 'WhatsApp', value: '+880 1709-534480', href: 'https://wa.me/8801709534480' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-3.5 border-b border-white/10 last:border-0 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gray-300 flex items-center justify-center text-lg group-hover:bg-[#a855f7]/10 group-hover:text-[#d946ef] group-hover:border-[#d946ef]/30 transition-all duration-300 shrink-0">
                      {item.icon}
                    </div>
                    <div className="pt-0.5">
                      <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-gray-200 hover:text-[#d946ef] text-[14px] font-medium transition-colors break-all md:break-normal outline-none focus-visible:ring-2 focus-visible:ring-[#d946ef] rounded-sm">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-200 text-[14px] font-medium break-words">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Social Links */}
            <FadeIn direction="up" delay={0.3} className="w-full">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">Follow Me</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed max-w-sm">
                Let's connect and build something amazing together. Follow my work and updates on social media.
              </p>
              
              <div className="flex gap-3 flex-wrap">
                {[
                  { icon: <FaGithub />, link: 'https://github.com/mahafujur80', label: 'GitHub', hoverColor: 'hover:text-white hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]' },
                  { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/mahafujur-rahman-munna/', label: 'LinkedIn', hoverColor: 'hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:shadow-[0_0_15px_rgba(0,119,181,0.3)]' },
                  { icon: <GrInstagram />, link: 'https://www.instagram.com/mahafujur80?igsh=dHhhZDduazJ2ODBh', label: 'Instagram', hoverColor: 'hover:text-[#e1306c] hover:border-[#e1306c]/50 hover:shadow-[0_0_15px_rgba(225,48,108,0.3)]' },
                  { icon: <FaFacebook />, link: 'https://www.facebook.com/mahafujurrahman480', label: 'Facebook', hoverColor: 'hover:text-[#1877f2] hover:border-[#1877f2]/50 hover:shadow-[0_0_15px_rgba(24,119,242,0.3)]' },
                ].map((social, i) => (
                  <Link 
                    key={i} 
                    href={social.link} 
                    target='_blank' 
                    aria-label={`Visit my ${social.label}`}
                    className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 text-lg transition-all duration-300 hover:-translate-y-1 ${social.hoverColor} outline-none focus-visible:ring-2 focus-visible:ring-[#d946ef]`}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDE: Contact Form (60%) */}
          <div className="lg:col-span-3 w-full">
            <ContactForm />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact;