import logo from '@/assets/logo-port.png'
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '../UI-kid/AnimatedSection';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-white pt-12 pb-6 mt-12 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Main Footer Grid - Left | Center | Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10">

          {/* LEFT SECTION - Logo + About Text */}
          <div className="text-center col-span-1 md:col-span-5 md:text-left">
            <FadeIn direction="up" delay={0.1}>
              {/* Logo */}
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <Image 
                  src={logo} 
                  alt="logo" 
                  width={100} 
                  height={40}
                  className="w-auto h-10"
                />
              </div>

              {/* About Text */}
              <p className="text-gray-400 text-sm leading-relaxed mb-2 max-w-xs mx-auto md:mx-0">
                Turning ideas into modern digital experiences through creative design and clean code.
              </p>
              <p className="text-gray-500 text-xs">
                ✨ Quality meets creativity
              </p>
            </FadeIn>
          </div>

          {/* CENTER SECTION - Quick Links */}
          <div className="text-left col-span-1 md:col-span-4">
            <FadeIn direction="up" delay={0.2}>
              <h4 className="text-lg font-semibold mb-4 inline-block relative">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] rounded-full"></span>
              </h4>
              <nav>
                <ul className="flex flex-col gap-2">
                  {[
                    { name: 'Home', href: '/' },
                    { name: 'Projects', href: '#projects' },
                    { name: 'About', href: '#about' },
                    { name: 'Contact', href: '#contact' },
                  ].map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-[#d946ef] transition-all duration-300 inline-block hover:translate-x-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </FadeIn>
          </div>

          {/* RIGHT SECTION - Social Links */}
          <div className="text-left col-span-1 md:col-span-3">
            <FadeIn direction="up" delay={0.3}>
              <h4 className="text-lg font-semibold mb-4 inline-block relative">
                Connect With Me
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] rounded-full"></span>
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  { name: 'Facebook', href: 'https://www.facebook.com/mahafujurrahman480', color: 'hover:text-[#a855f7]' },
                  { name: 'Instagram', href: 'https://www.instagram.com/mahafujur80?igsh=dHhhZDduazJ2ODBh', color: 'hover:text-[#d946ef]' },
                  { name: 'GitHub', href: 'https://github.com/mahafujur80', color: 'hover:text-[#ec4899]' },
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mahafujur-rahman-munna/', color: 'hover:text-[#a855f7]' },
                ].map((social) => (
                  <li key={social.name}>
                    <Link
                      href={social.href}
                      target="_blank"
                      className={`text-gray-400 ${social.color} transition-all duration-300 inline-flex items-center gap-2 hover:-translate-x-1`}
                    >
                      {social.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>

        {/* BOTTOM SECTION - Copyright */}
        <div className="text-center pt-6">
          <FadeIn direction="none" delay={0.4}>
            <p className="text-gray-500 text-sm">
              © {year} MRM All Rights Reserved
            </p>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
};

export default Footer;