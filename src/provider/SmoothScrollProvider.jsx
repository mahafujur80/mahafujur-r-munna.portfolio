'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      smoothWheel: true,     // যোগ করুন
      smoothTouch: false,    // মোবাইলের জন্য (optional)
      touchMultiplier: 1.5,  // টাচ স্ক্রলের জন্য
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)  // ক্লিনআপ ভালোভাবে করুন
      lenis.destroy()
    }
  }, [])

  return <>{children}</>  // Fragment-এ র‍্যাপ করুন
}