'use client'
import { useState } from 'react';
import { FadeIn } from '../UI-kid/AnimatedSection';
import toast from 'react-hot-toast';

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
        toast.error("Something s wrong Please try again");
      }
    } catch {

    } finally {
      setDisable(false)
    }
  }
  return (
    <FadeIn direction="right" delay={0.4} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-5 w-full overflow-hidden">
      <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Send a Message</h3>
      <p className="text-gray-400 text-sm mb-4 md:mb-6">I'll get back to you within 24 hours</p>

      <form onSubmit={handleContact} className="space-y-3">
        <input
          required
          type="text"
          placeholder="Your Name"
          name='name'
          className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-black/30 border border-white/10 text-white text-sm md:text-base placeholder:text-gray-500 outline-none focus:border-[#a855f7]/50 transition-all"
        />
        <input
          required
          type="email"
          name='email'
          placeholder="Your Email"
          className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-black/30 border border-white/10 text-white text-sm md:text-base placeholder:text-gray-500 outline-none focus:border-[#a855f7]/50 transition-all"
        />
        <input
          required
          type="text"
          name='subject'
          placeholder="Subject"
          className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-black/30 border border-white/10 text-white text-sm md:text-base placeholder:text-gray-500 outline-none focus:border-[#a855f7]/50 transition-all"
        />
        <textarea
          required
          minLength={10}
          rows={4}
          name='message'
          placeholder="Your Message"
          className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-black/30 border border-white/10 text-white text-sm md:text-base placeholder:text-gray-500 outline-none focus:border-[#a855f7]/50 transition-all resize-none"
        ></textarea>
        <button
          disabled={disable}
          type='submit'
          className="w-full py-2.5 md:py-3 rounded-xl bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] hover:from-[#ec4899] hover:via-[#d946ef] hover:to-[#a855f7] text-white font-medium transition-all shadow-lg shadow-[#a855f7]/20 text-sm md:text-base active:scale-95 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed"
        >
          {disable ? 'Sending...' : 'Send Message →'}
        </button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;