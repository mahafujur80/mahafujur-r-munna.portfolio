import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import SmoothScrollProvider from "@/provider/SmoothScrollProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
})

export const metadata = {
  title: "MRM | Web Developer Portfolio",
  description:
    "A modern portfolio of a Web Developer specializing in building fast, responsive, and user-friendly web applications using Next.js, React, and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body
        className={`${inter.className}  min-h-full flex flex-col bg-[radial-gradient(circle_at_center,_#0f172a_0%,_#020617_50%,_#0f172a_100%)]`}
      >
        <NavBar />
        <SmoothScrollProvider>
            <main>
              {children}
            </main>
        </SmoothScrollProvider>
        <Toaster />
      </body>
    </html>
  );
}
