import About from "@/components/about/page";
import ContactMe from "@/components/contact/page";
import WorkExperience from "@/components/experience/page";
import Footer from "@/components/footer/page";
import Navbar from "@/components/header/page";
import Hero from "@/components/hero/page";
import Projects from "@/components/projects/page";
import Skills from "@/components/skills/page";
import { fetchSocials } from "../../utils/fetchSocials";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchSkills } from "../../utils/fetchSkill";
import { fetchExperiences } from "../../utils/fetchExperiences";
import { fetchProjects } from "../../utils/fetchProjects";


export default async function Home() {
  const socials = await fetchSocials();
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences();
  const skills = await fetchSkills()
  const projects = await fetchProjects();

  return (
    <div className="bg-[url('/bg-3.jpg')] bg-cover bg-center text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Navbar socials ={socials}  />

      <section id="hero" className="snap-start">
        <Hero pageInfo = {pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section className="snap-start" id="projects">
        <Projects projects = {projects} />
      </section>
      <section className="snap-start" id="skills">
        <Skills skills = {skills}/>
      </section>
      <section className="snap-start" id="experience">
        <WorkExperience experiences = {experiences} />
      </section>
      <section className="snap-start" id="contact">
        <ContactMe />
      </section>
      
    </div>
  );
}
