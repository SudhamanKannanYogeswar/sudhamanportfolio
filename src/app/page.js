import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import CaseStudies from "../components/CaseStudies";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Writing from "../components/Writing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <CaseStudies />
        <Skills />
        <Experience />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
