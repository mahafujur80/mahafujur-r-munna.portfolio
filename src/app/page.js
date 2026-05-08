import AboutMe from "@/components/AboutMe/AboutMe";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import Skills2 from "@/components/Skills/Skils2";
import TechStack from "@/components/Tech-Stack/TechStack";

export default function Home() {
  return (
    <div>
      <Hero/>
      <AboutMe/>
      <TechStack/>
      {/* <Skills/> */}
      <Skills2/>
    </div>
  );
}
