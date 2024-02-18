import About from "@/components/about/page";
import Experience from "@/components/experience/page";
import Navbar from "@/components/header/page";
import Hero from "@/components/hero/page";
import Projects from "@/components/projects/page";
import Skills from "@/components/skills/page";


export default function Home() {

  return (
    <div className="bg-[url('/bg-3.jpg')] bg-cover bg-center text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Navbar />

      <section id="hero" className="snap-start">
        <Hero />
      </section> 
      <section id="about" className="snap-center">
        <About />
      </section>
      <section className="snap-start" id="projects">
        <Projects />
      </section>
      <section className="snap-start" id="skills">
        <Skills />
      </section>
      {/* experience */}
      <section className="" id="experience">
        <Experience />
      </section>
      {/* Contact Me */}
    </div>
  );
}
