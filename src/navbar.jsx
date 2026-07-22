import { useState } from "react";
import "./App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <header className="navbar">
       <h1 className="logo">My Portfolio</h1>
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;