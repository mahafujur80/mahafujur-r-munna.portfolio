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

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header section*/}
        <div className="text-center mb-12">
          <div className="inline-flex px-3 py-1 rounded-full border border-[#d946ef]/20 bg-[#d946ef]/10 text-[#d946ef] text-xs tracking-[3px] uppercase mb-4">
            Get In Touch
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Let's <span className="bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        {/* content grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* left side info */}
          <div className="space-y-5">
            
            {/* contact card*/}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>
              
              <div className="space-y-3">
                {/* email */}
                <div className="flex items-center gap-4 p-3 rounded-xl bg-black/30 border border-white/5 hover:border-[#a855f7]/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#a855f7]/10 text-[#a855f7] flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    <HiOutlineMail />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                    <a href="mailto:mahafujurrahman4480@gmail.com" className="text-white/80 hover:text-[#d946ef] text-sm transition">
                      mahafujurrahman4480@gmail.com
                    </a>
                  </div>
                </div>

                {/* phone */}
                <div className="flex items-center gap-4 p-3 rounded-xl bg-black/30 border border-white/5 hover:border-[#a855f7]/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#a855f7]/10 text-[#a855f7] flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    <HiOutlinePhone />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Phone</p>
                    <a href="tel:+8801709534480" className="text-white/80 hover:text-[#d946ef] text-sm transition">
                      +880 1709-534480
                    </a>
                  </div>
                </div>

                {/* locations */}
                <div className="flex items-center gap-4 p-3 rounded-xl bg-black/30 border border-white/5 hover:border-[#a855f7]/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#a855f7]/10 text-[#a855f7] flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    <HiOutlineLocationMarker />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
                    <p className="text-white/80 text-sm">Chirirbandar, Dinajpur, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* social card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5">
              <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <Link href="https://github.com/mahafujur80" target='_blank' className="w-12 h-12 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-white/80 hover:bg-gradient-to-r hover:from-[#a855f7] hover:to-[#ec4899] hover:text-white transition-all">
                  <FaGithub size={18} />
                </Link>
                <Link href="https://www.linkedin.com/in/mahafujur-rahman-munna/" target='_blank' className="w-12 h-12 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-white/80 hover:bg-gradient-to-r hover:from-[#a855f7] hover:to-[#ec4899] hover:text-white transition-all">
                  <FaLinkedinIn size={18} />
                </Link>
                <Link href="https://www.instagram.com/mahafujur80?igsh=dHhhZDduazJ2ODBh" target='_blank' className="w-12 h-12 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-white/80 hover:bg-gradient-to-r hover:from-[#a855f7] hover:to-[#ec4899] hover:text-white transition-all">
                  <GrInstagram size={18} />
                </Link>
                <Link href="https://www.facebook.com/mahafujurrahman480" target='_blank' className="w-12 h-12 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-white/80 hover:bg-gradient-to-r hover:from-[#a855f7] hover:to-[#ec4899] hover:text-white transition-all">
                  <FaFacebook size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* right side form*/}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5">
            <h3 className="text-xl font-semibold text-white mb-2">Send a Message</h3>
            <p className="text-gray-400 text-sm mb-6">I'll get back to you within 24 hours</p>
            
            <form className="space-y-3">
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-[#a855f7]/50 transition-all"
              />
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-[#a855f7]/50 transition-all"
              />
              <input 
                type="text" 
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-[#a855f7]/50 transition-all"
              />
              <textarea 
                rows={4} 
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-[#a855f7]/50 transition-all resize-none"
              ></textarea>
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] hover:from-[#ec4899] hover:via-[#d946ef] hover:to-[#a855f7] text-white font-medium transition-all shadow-lg shadow-[#a855f7]/20">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact