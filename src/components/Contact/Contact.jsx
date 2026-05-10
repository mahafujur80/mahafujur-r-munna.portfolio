import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
} from 'react-icons/fa'
import {
  RiTwitterXLine,
} from 'react-icons/ri'
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from 'react-icons/hi'

const Contact=()=> {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header section*/}
        <div className="text-center mb-12">
          <div className="inline-flex px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs tracking-[3px] uppercase mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-md mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        {/*content grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* left side info */}
          <div className="space-y-5">
            
            {/* contact card*/}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>
              
              <div className="space-y-3">
                {/* email */}
                <div className="flex items-center gap-4 p-3 rounded-xl bg-black/30 border border-white/5 hover:border-blue-500/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    <HiOutlineMail />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                    <a href="mailto:hello@example.com" className="text-white/80 hover:text-blue-400 text-sm transition">
                      hello@example.com
                    </a>
                  </div>
                </div>

                {/* phone */}
                <div className="flex items-center gap-4 p-3 rounded-xl bg-black/30 border border-white/5 hover:border-blue-500/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    <HiOutlinePhone />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Phone</p>
                    <a href="tel:+880123456789" className="text-white/80 hover:text-blue-400 text-sm transition">
                      +880 1234-567890
                    </a>
                  </div>
                </div>

                {/* locations */}
                <div className="flex items-center gap-4 p-3 rounded-xl bg-black/30 border border-white/5 hover:border-blue-500/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    <HiOutlineLocationMarker />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
                    <p className="text-white/80 text-sm">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* social card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5">
              <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-white/80 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all hover:-translate-y-1">
                  <FaGithub size={18} />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-white/80 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all hover:-translate-y-1">
                  <FaLinkedinIn size={18} />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-white/80 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all hover:-translate-y-1">
                  <RiTwitterXLine size={18} />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-white/80 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all hover:-translate-y-1">
                  <FaFacebook size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* right side form*/}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5">
            <h3 className="text-xl font-semibold text-white mb-2">Send a Message</h3>
            <p className="text-gray-400 text-sm mb-6">I'll get back to you within 24 hours</p>
            
            <form className="space-y-3">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-blue-500/50 transition-all"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-blue-500/50 transition-all"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-blue-500/50 transition-all"
                />
              </div>
              <div>
                <textarea 
                  rows={4} 
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-blue-500/50 transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all hover:-translate-y-0.5 shadow-lg">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact;