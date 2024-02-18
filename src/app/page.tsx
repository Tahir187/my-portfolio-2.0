import About from "@/components/about/page";
import ContactMe from "@/components/contact/page";
import Experience from "@/components/experience/page";
import Footer from "@/components/footer/page";
import Navbar from "@/components/header/page";
import Hero from "@/components/hero/page";
import Projects from "@/components/projects/page";
import Skills from "@/components/skills/page";

export default function Home() {
  return (
    <div className="bg-[url('/bg-3.jpg')] bg-cover bg-center text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
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
      <section className="snap-start" id="experience">
        <Experience />
      </section>
      <section className="snap-start" id="contact">
        <ContactMe />
      </section>
      <section className="mb-20">
        <Footer />
      </section>
      
    </div>
  );
}
