import Navbar from "@/components/header/page";
import Hero from "@/components/hero/page";

export default function Home() {
  return (
    <div className="bg-[#035352] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Navbar />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About */}

      {/* Exprience */}

      {/* skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
}
