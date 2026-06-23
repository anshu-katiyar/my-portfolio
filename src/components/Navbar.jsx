import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="text-2xl font-bold text-green-400">
          Anshu Katiyar
        </h1>

        <div className="space-x-6 hidden md:block">
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>

  <Link
    to="/contact"
    className="text-green-400 font-semibold"
  >
    Contact
  </Link>
</div>
      </div>
    </nav>
  );
}

export default Navbar;