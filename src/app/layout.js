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

const siteUrl = "https://mahafujur-dev.vercel.app";

export const metadata = {
  title: "Mahafujur Rahman Munna | Web Developer Portfolio",
  description:
    "A modern portfolio of Mahafujur Rahman Munna — Web Developer specializing in building fast, responsive, and user-friendly web applications using Next.js, React, and Tailwind CSS.",
  keywords: [
    "Mahafujur Rahman Munna",
    "Web Developer",
    "Frontend Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "React Developer",
    "Portfolio",
    "Chirirbander",
    "Dinajpur",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: "Mahafujur Rahman Munna" }],
  creator: "Mahafujur Rahman Munna",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mahafujur Rahman Munna | Web Developer Portfolio",
    description:
      "A modern portfolio showcasing fast, responsive, and user-friendly web applications built with Next.js, React, and Tailwind CSS.",
    url: siteUrl,
    siteName: "MRM Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahafujur Rahman Munna | Web Developer Portfolio",
    description:
      "A modern portfolio showcasing fast, responsive, and user-friendly web applications built with Next.js, React, and Tailwind CSS.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// JSON-LD structured data for Person schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mahafujur Rahman Munna",
  url: siteUrl,
  jobTitle: "Web Developer",
  sameAs: [
    "https://github.com/mahafujur80",
    "https://www.linkedin.com/in/mahafujur-rahman-munna/",
    "https://www.facebook.com/mahafujurrahman480",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
