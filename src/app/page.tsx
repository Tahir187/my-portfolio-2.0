import About from "@/components/about/page";
import Navbar from "@/components/header/page";
import Hero from "@/components/hero/page";
import Projects from "@/components/projects/page";


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
      <section className="snap-center" id="projects">
        <Projects />
      </section>
      {/* skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
