import React from "react";
import { Link } from "react-scroll";

import "./styles/Home.css";
import "./styles/About.css";
import "./styles/Services.css";
import "./styles/Projects.css";
import "./styles/Contact.css";

export default function Home() {
  return (
    <>
      <section id="inicio" className="home">
        <div className="home-content">
          <h1>Olá, eu sou o Alexandre</h1>
          <p>Desenvolvedor Front-End focado em criar experiências digitais únicas.</p>
          <Link
            to="projetos"
            smooth={true}
            duration={500}
            offset={-70}
            className="btn"
          >
            Ver Projetos
          </Link>
        </div>
      </section>

      <section id="sobre" className="about">
        <h2>Sobre Mim</h2>
        <p>Sou um desenvolvedor apaixonado por transformar ideias em interfaces funcionais e bonitas.</p>
      </section>

      <section id="servicos" className="services">
        <h2>Serviços</h2>
        <ul>
          <li>Criação de sites</li>
          <li>Blogs personalizados</li>
          <li>Lojas virtuais</li>
          <li>Landing pages</li>
        </ul>
      </section>

      <section id="projetos" className="projects">
        <h2>Projetos</h2>
        <div className="project-list">
          <div className="project-card">Projeto 1</div>
          <div className="project-card">Projeto 2</div>
          <div className="project-card">Projeto 3</div>
        </div>
      </section>

      <section id="contato" className="contact">
        <h2>Contato</h2>
        <form className="contact-form">
          <input type="text" placeholder="Seu nome" required />
          <input type="email" placeholder="Seu email" required />
          <textarea placeholder="Sua mensagem" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </>
  );
}
