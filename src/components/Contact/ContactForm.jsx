'use client'
import { useState } from 'react';
import { FadeIn } from '../UI-kid/AnimatedSection';
import toast from 'react-hot-toast';
import { FiSend } from 'react-icons/fi';

const ContactForm = () => {
  const [disable, setDisable] = useState(false)

  const handleContact = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const contactData = Object.fromEntries(formData.entries())

    setDisable(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(contactData)
      })
      const data = await res.json()
      if (data.success) {
        toast.success("Message Sent Successfully!");
        e.target.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again later.");
    } finally {
      setDisable(false)
    }
  }
  
  return (
    <FadeIn direction="right" delay={0.4} className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-5 md:p-6 w-full shadow-2xl shadow-black/40">
      <h3 className="text-xl font-bold text-white mb-1.5">Send a Message</h3>
      <p className="text-gray-400 text-[13px] mb-6 leading-relaxed">
        Have a specific inquiry or project in mind? Fill out the form below and I'll get back to you within 24 hours.
      </p>

      <form onSubmit={handleContact} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="name" className="text-[11px] font-medium text-gray-400 uppercase tracking-wider ml-1">Name</label>
            <input
              required
              id="name"
              type="text"
              placeholder="John Doe"
              name='name'
              aria-label="Your Name"
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-gray-200 text-[14px] placeholder-gray-600 outline-none focus:bg-black/60 focus:border-[#d946ef]/50 focus:ring-1 focus:ring-[#d946ef]/50 transition-all duration-300"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-[11px] font-medium text-gray-400 uppercase tracking-wider ml-1">Email</label>
            <input
              required
              id="email"
              type="email"
              name='email'
              placeholder="john@example.com"
              aria-label="Your Email"
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-gray-200 text-[14px] placeholder-gray-600 outline-none focus:bg-black/60 focus:border-[#d946ef]/50 focus:ring-1 focus:ring-[#d946ef]/50 transition-all duration-300"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="subject" className="text-[11px] font-medium text-gray-400 uppercase tracking-wider ml-1">Subject</label>
          <input
            required
            id="subject"
            type="text"
            name='subject'
            placeholder="Project Discussion"
            aria-label="Subject"
            className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-gray-200 text-[14px] placeholder-gray-600 outline-none focus:bg-black/60 focus:border-[#d946ef]/50 focus:ring-1 focus:ring-[#d946ef]/50 transition-all duration-300"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="message" className="text-[11px] font-medium text-gray-400 uppercase tracking-wider ml-1">Message</label>
          <textarea
            required
            id="message"
            minLength={10}
            rows={4}
            name='message'
            placeholder="Tell me about your project or inquiry..."
            aria-label="Your Message"
            className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-gray-200 text-[14px] placeholder-gray-600 outline-none focus:bg-black/60 focus:border-[#d946ef]/50 focus:ring-1 focus:ring-[#d946ef]/50 transition-all duration-300 resize-none"
          ></textarea>
        </div>

        <button
          disabled={disable}
          type='submit'
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] text-white font-semibold text-[14px] transition-all duration-300 shadow-lg shadow-[#d946ef]/20 hover:shadow-[#d946ef]/40 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          {disable ? 'Sending...' : (
            <>
              Send Message <FiSend className="text-base" />
            </>
          )}
        </button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;