import AboutMe from "@/components/AboutMe/AboutMe";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Qualifications from "@/components/Qualification/Qualifications";
import Skills from "@/components/Skills/Skills";
import TechStack from "@/components/TechStack/TechStack";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <div className="container mx-auto md:px-10">
      <Hero/>
      <AboutMe/>
      <TechStack/>
      <Skills/>
      <Qualifications/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
