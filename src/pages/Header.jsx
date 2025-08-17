import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
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
    <>
      <Helmet>
        <title>Criação e Aluguel de Sites Profissionais | MarsWebsites</title>
        <meta name="description" content="A MarsWebsites oferece criação e aluguel de sites modernos, rápidos e personalizados para empresas que querem se destacar no digital." />
        <meta name="keywords" content="criação de sites, aluguel de sites, desenvolvimento web, site profissional, site moderno, sites para empresas" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="PT-LIS" />
        <meta name="geo.placename" content="Lisboa" />
        <meta name="geo.position" content="38.7169;-9.1392" />
        <meta name="ICBM" content="38.7169, -9.1392" />

        {/* Open Graph */}
        <meta property="og:title" content="Criação e Aluguel de Sites | MarsWebsites" />
        <meta property="og:description" content="Sites modernos, rápidos e personalizados para empresas." />
        <meta property="og:image" content="https://www.marswebsites.com/images/preview.jpg" />
        <meta property="og:url" content="https://www.marswebsites.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Criação e Aluguel de Sites | MarsWebsites" />
        <meta name="twitter:description" content="Sites modernos, rápidos e personalizados para empresas." />
        <meta name="twitter:image" content="https://www.marswebsites.com/images/preview.jpg" />
      </Helmet>

      <motion.header
        className={`header ${scrolled ? "header-scrolled" : ""}`}
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        role="banner"
        itemScope
        itemType="http://schema.org/Organization"
        data-region="Lisboa, Portugal"
      >
        <a
          href="/"
          className="logo-link"
          aria-label="Página inicial da MarsWebsites"
          title="Ir para a página inicial"
          itemProp="url"
        >
          <picture>
            <source media="(max-width: 768px)" srcSet="/images/logo3.png" />
            <img
              src="/images/logo2.png"
              alt="Logotipo da MarsWebsites - Criação e Aluguel de Sites Profissionais"
              className="logo"
              loading="eager"
              width="280"
              height="auto"
              itemProp="logo"
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
                  itemProp="hasPart"
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
    </>
  );
}
