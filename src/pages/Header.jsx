import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "../styles/Header.css";
import '../styles/Global.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <motion.header
      className={`header ${scrolled ? "header-scrolled" : ""}`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      style={{ width: "100vw" }}
    >
      <a href="/" className="logo-link" aria-label="Página inicial MarsWebsites">
        <img
          src="/images/logo.png" 
          alt="Logo MarsWebsites"
          className="logo"
        />
      </a>

      <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
        <Link to="inicio" smooth duration={500} offset={-70} onClick={handleLinkClick}>Início</Link>
        <Link to="sobre" smooth duration={500} offset={-70} onClick={handleLinkClick}>Sobre</Link>
        <Link to="servicos" smooth duration={500} offset={-70} onClick={handleLinkClick}>Serviços</Link>
        <Link to="projetos" smooth duration={500} offset={-70} onClick={handleLinkClick}>Projetos</Link>
        <Link to="contato" smooth duration={500} offset={-70} onClick={handleLinkClick}>Contato</Link>
      </nav>

      <button
        className={`hamburger ${menuOpen ? "is-active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </motion.header>
  );
}
