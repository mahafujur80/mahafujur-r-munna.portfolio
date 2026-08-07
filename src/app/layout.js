import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import SmoothScrollProvider from "@/provider/SmoothScrollProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const siteUrl = "https://mahafujur-dev.vercel.app";

export const metadata = {
  title: "Mahafujur Rahman Munna | Web Developer Portfolio",
  description:
    "Explore the web development portfolio of Mahafujur Rahman Munna, a Next.js and Frontend Web Developer based in Bangladesh specializing in building fast, modern, and responsive web applications.",
  keywords: [
    "Mahafujur Rahman Munna",
    "Mahafujur Rahman",
    "Mahafujur Rahman Munna Portfolio",
    "Next.js Developer",
    "React Developer",
    "Frontend Web Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Web Developer Bangladesh",
    "Next.js Developer Bangladesh",
    "Frontend Developer Dinajpur",
    "Web Developer Portfolio",
    "Custom Web Development",
    "Responsive Web Design",
  ],
  authors: [{ name: "Mahafujur Rahman Munna" }],
  creator: "Mahafujur Rahman Munna",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mahafujur Rahman Munna | Next.js & Frontend Web Developer",
    description:
      "Explore the web development portfolio of Mahafujur Rahman Munna, a Next.js and Frontend Web Developer based in Bangladesh.",
    url: siteUrl,
    siteName: "MRM Portfolio",
    images: [
      {
        url: `${siteUrl}/mahafujur-rahman-munna.png`, // public 
        width: 1200,
        height: 630,
        alt: "Mahafujur Rahman Munna Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
  card: "summary_large_image",
  title: "Mahafujur Rahman Munna | Next.js & Frontend Web Developer",
  description:
    "Explore the web development portfolio of Mahafujur Rahman Munna, a Next.js and Frontend Web Developer based in Bangladesh.",
  images: ["https://mahafujur-dev.vercel.app/mahafujur-rahman-munna.png"], // picture
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
    "https://mahafujur-dev.vercel.app",
    "https://github.com/mahafujur80",
    "https://www.linkedin.com/in/mahafujur-rahman-munna/",
    "https://www.facebook.com/mahafujurrahman480",
    "https://www.instagram.com/mahafujur80?igsh=dHhhZDduazJ2ODBh",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
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
          <main>{children}</main>
        </SmoothScrollProvider>
        <Toaster />
      </body>
    </html>
  );
}
