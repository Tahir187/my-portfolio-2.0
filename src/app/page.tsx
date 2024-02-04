import About from "@/components/about/page";
import Navbar from "@/components/header/page";
import Hero from "@/components/hero/page";
import Projects from "@/components/projects/page";
import SectionDivider from "@/components/sectionDivider/page";
import WorkExperience from "@/components/workExperience/page";

export default function Home() {
  return (
    <div className="bg-[#035352] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Navbar />

      <section id="hero" className="snap-start">
        <Hero />
      </section> 
      <section>
        <SectionDivider />
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
