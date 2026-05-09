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

export default function Contact() {
  return (
    <section className="px-4 md:px-8 py-16 text-white relative">
      
      {/* ব্যাকগ্রাউন্ড */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-black"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">

        {/* টাইটেল - ছোট */}
        <div className="text-center mb-12">
          <div className="inline-flex px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs tracking-[3px] uppercase mb-4">
            Contact
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Let's <span className="text-blue-400">Connect</span>
          </h2>

          <p className="text-gray-400 mt-3 text-sm max-w-md mx-auto">
            Have a project? Let's talk.
          </p>
        </div>

        {/* গ্রিড */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* বাম সাইড - কন্ট্যাক্ট */}
          <div className="space-y-6">

            {/* ডাইরেক্ট কন্ট্যাক্ট */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-300">Contact Info</h3>

              <div className="space-y-3">
                <div className="flex items-center gap-4 p-3 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-lg">
                    <HiOutlineMail />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase">Email</p>
                    <a href="mailto:yourmail@gmail.com" className="text-sm hover:text-blue-400 transition">
                      mahafujur@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-lg">
                    <HiOutlinePhone />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase">Phone</p>
                    <a href="tel:+880123456789" className="text-sm hover:text-blue-400 transition">
                      +880 1234-567890
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-lg">
                    <HiOutlineLocationMarker />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase">Location</p>
                    <p className="text-sm">Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* সোশ্যাল */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-300">Follow Me</h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all hover:-translate-y-1">
                  <FaGithub size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all hover:-translate-y-1">
                  <FaLinkedinIn size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all hover:-translate-y-1">
                  <RiTwitterXLine size={16} />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all hover:-translate-y-1">
                  <FaFacebook size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* ডান সাইড - ফর্ম (ছোট) */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            
            <div className="absolute top-0 left-0 w-[2px] h-12 bg-blue-500 rounded-full"></div>

            <h3 className="text-xl font-bold mb-1">Send Message</h3>
            <p className="text-gray-400 text-sm mb-6">I'll reply within 24h.</p>

            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full h-11 px-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-blue-500/50 text-sm"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full h-11 px-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-blue-500/50 text-sm"
              />
              <textarea 
                rows={3} 
                placeholder="Your Message" 
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 outline-none resize-none focus:border-blue-500/50 text-sm"
              ></textarea>
              <button className="w-full h-11 rounded-xl bg-blue-500 hover:bg-blue-600 font-medium text-sm transition-all hover:-translate-y-0.5">
                Send →
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}