import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <div className="bg-slate-950 text-white">

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Footer />

      <a
        href="https://wa.me/918318120145"
        target="_blank"
        rel="noreferrer"
        className="
          fixed
          bottom-5
          right-5
          bg-green-500
          p-4
          rounded-full
          text-3xl
          shadow-lg
          hover:scale-110
          transition
        "
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}

export default Home;
