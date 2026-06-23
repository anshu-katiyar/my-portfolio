import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm <span className="text-green-400">Anshu</span>
          </h1>

          <div className="mt-4">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React Developer",
                2000,
                "AI Builder",
                2000,
                "E-Commerce Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl text-green-400 font-semibold"
            />
          </div>

          <p className="mt-6 text-slate-400">
            I build modern websites, ecommerce platforms and AI-powered
            applications.
          </p>
          <div className="flex gap-5 mt-6 text-3xl">

  <a
    href="https://github.com/anshu-katiyar"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/anshu-katiyar"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://instagram.com/anshukatiyar372"
    target="_blank"
    rel="noreferrer"
  >
    <FaInstagram />
  </a>

</div>

          <div className="flex gap-4 mt-8">
            <a href="#projects" className="bg-green-500 px-6 py-3 rounded-lg">
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-white px-6 py-3 rounded-lg"
            >
              Resume
            </a>
            <Link
    to="/contact"
    className="bg-blue-500 px-6 py-3 rounded-lg"
  >
    Contact Me
  </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="w-80 h-80 object-cover rounded-full border-4 border-green-400"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
