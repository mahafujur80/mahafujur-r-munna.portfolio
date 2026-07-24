import logo from "@/assets/logo-port.png";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaFacebook, FaHeart } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FadeIn } from "../UI-kid/AnimatedSection";

const quickLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/mahafujur80",
    icon: <FaGithub />,
    color: "hover:text-[#a855f7]",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mahafujur-rahman-munna/",
    icon: <FaLinkedinIn />,
    color: "hover:text-[#d946ef]",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/mahafujurrahman480",
    icon: <FaFacebook />,
    color: "hover:text-[#ec4899]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mahafujur80?igsh=dHhhZDduazJ2ODBh",
    icon: <GrInstagram />,
    color: "hover:text-[#a855f7]",
  },
];

const contactInfo = [
  {
    icon: <HiOutlineMail />,
    value: "mahafujurrahman4480@gmail.com",
    href: "mailto:mahafujurrahman4480@gmail.com",
  },
  {
    icon: <HiOutlinePhone />,
    value: "+880 1709-534480",
    href: "tel:+8801709534480",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="text-white pt-16 pb-6 mt-12 relative overflow-hidden"
      role="contentinfo"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Professional Closing Message */}
        <FadeIn direction="up" delay={0.05}>
          <div className="text-center mb-12">
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Thank you for visiting my portfolio. I&apos;m always open to new
              opportunities, collaborations, and interesting conversations about
              web development.
            </p>
          </div>
        </FadeIn>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          {/* LEFT SECTION - Logo + About Text */}
          <div className="text-center col-span-1 md:col-span-4 md:text-left">
            <FadeIn direction="up" delay={0.1}>
              {/* Logo */}
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <Image
                  src={logo}
                  alt="MRM Logo"
                  width={100}
                  height={40}
                  className="w-auto h-10"
                />
              </div>

              {/* About Text */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs mx-auto md:mx-0">
                Turning ideas into modern digital experiences through creative
                design and clean code.
              </p>

              {/* Contact Info */}
              <div className="space-y-2">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-[#d946ef] transition-colors text-sm"
                  >
                    <span className="text-[#a855f7]">{item.icon}</span>
                    {item.value}
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* CENTER SECTION - Quick Links */}
          <div className="text-left col-span-1 md:col-span-4">
            <FadeIn direction="up" delay={0.2}>
              <h4 className="text-lg font-semibold mb-4 inline-block relative">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] rounded-full"></span>
              </h4>
              <nav aria-label="Footer navigation">
                <ul className="flex flex-col gap-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-[#d946ef] transition-all duration-300 inline-block hover:translate-x-1 text-sm"
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
          <div className="text-left col-span-1 md:col-span-4">
            <FadeIn direction="up" delay={0.3}>
              <h4 className="text-lg font-semibold mb-4 inline-block relative">
                Connect With Me
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#a855f7] via-[#d946ef] to-[#ec4899] rounded-full"></span>
              </h4>

              {/* Social Icons Row */}
              {/* <div className="flex gap-3 mb-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} hover:bg-white/10 hover:border-transparent hover:scale-110 transition-all duration-300`}
                    aria-label={`Visit ${social.name} profile`}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div> */}

              {/* Social Names List */}
              <ul className="flex flex-col gap-2">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <Link
                      href={social.href}
                      target="_blank"
                      className={`text-gray-400 ${social.color} transition-all duration-300 inline-flex items-center gap-2 hover:-translate-x-1 text-sm`}
                      aria-label={`Visit ${social.name}`}
                    >
                      {social.icon}
                      {social.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-6 space-y-4">
          <FadeIn direction="none" delay={0.4}>
            {/* Built With Badge */}
            <div className="flex items-center justify-center gap-2 text-gray-500 text-xs mb-3">
              <span>Built with</span>
              <span className="flex items-center gap-1 text-white/70">
                <SiNextdotjs className="text-white" /> Next.js
              </span>
              <span>+</span>
              <span className="flex items-center gap-1 text-white/70">
                <SiTailwindcss className="text-sky-400" /> Tailwind CSS
              </span>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center flex flex-wrap items-center justify-center gap-1">
              <span>© {year} Mahafujur Rahman Munna</span>
              <span className="flex items-center gap-1">
                {/* Made with <FaHeart className="text-[#ec4899] text-xs" /> */}
              </span>
              <span>All Rights Reserved.</span>
            </p>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
