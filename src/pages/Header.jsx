import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import "../styles/Header.css";
import "../styles/Global.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  const navItems = [
    { to: "inicio", label: "Início", title: "Voltar para o início da página" },
    { to: "sobre", label: "Sobre", title: "Saiba mais sobre nós" },
    { to: "servicos", label: "Serviços", title: "Conheça nossos serviços" },
    { to: "projetos", label: "Projetos", title: "Veja nossos projetos realizados" },
    { to: "contato", label: "Contato", title: "Fale conosco" }
  ];

  return (
    <motion.header
      className={`header ${scrolled ? "header-scrolled" : ""}`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      role="banner"
    >
      <a
        href="/"
        className="logo-link"
        aria-label="Página inicial da MarsWebsites"
        title="Ir para a página inicial"
      >
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/images/logo3.png"
          />
          <img
            src="/images/logo2.png"
            alt="Logotipo da MarsWebsites"
            className="logo"
            loading="eager"
            width="280"
            height="auto"
          />
        </picture>
      </a>

      <nav
        className={`nav ${menuOpen ? "nav-open" : ""}`}
        aria-label="Menu principal"
        role="navigation"
      >
        <ul>
          {navItems.map(({ to, label, title }) => (
            <li key={to}>
              <ScrollLink
                to={to}
                smooth
                duration={500}
                offset={-70}
                onClick={handleLinkClick}
                title={title}
                aria-label={label}
                tabIndex="0"
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className={`hamburger ${menuOpen ? "is-active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="menu"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </motion.header>
  );
}
