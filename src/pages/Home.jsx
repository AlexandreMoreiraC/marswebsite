import React, { useRef } from "react";
import { Link } from "react-scroll";
import emailjs from "@emailjs/browser";

import "./styles/Home.css";
import "./styles/About.css";
import "./styles/Services.css";
import "./styles/Projects.css";
import "./styles/Contact.css";

export default function Home() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4rkvyvs",        // ID do serviço
        "template_k04ccki",       // ID do template
        form.current,
        "PgxHQsJgnsH0IoVii"       // Chave pública
      )
      .then(
        (result) => {
          console.log("✅ Email enviado:", result.text);
          alert("Mensagem enviada com sucesso!");
          e.target.reset();
        },
        (error) => {
          console.error("❌ Erro ao enviar:", error);
          alert("Erro ao enviar mensagem. Verifique sua conexão e tente novamente.");
        }
      );
  };

  return (
    <>
      <section id="inicio" className="home">
        <video className="bg-video" autoPlay muted loop playsInline>
          <source src="/fundo.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
        <div className="home-content">
          <h1>Olá, eu sou o Alexandre</h1>
          <p>Desenvolvedor Front-End focado em criar experiências digitais únicas.</p>
          <Link to="projetos" smooth={true} duration={500} offset={-70} className="btn">
            Ver Projetos
          </Link>
        </div>
      </section>

      <section id="sobre" className="about">
        <h2>Sobre Mim</h2>
        <p>
          Olá! Meu nome é Ale e sou um desenvolvedor front-end apaixonado por criar experiências digitais envolventes, intuitivas e acessíveis.
          Gosto de transformar ideias em interfaces que realmente funcionam — sempre com foco em design, performance e usabilidade.
        </p>
        <p>
          Tenho conhecimento em React, JavaScript, HTML, CSS e ferramentas modernas do ecossistema web. Busco constantemente aprender novas tecnologias e evoluir como profissional.
          Acredito que cada projeto é uma oportunidade de crescimento e de impactar positivamente a vida das pessoas através da tecnologia.
        </p>
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
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Seu nome" required />
          <input type="email" name="user_email" placeholder="Seu email" required />
          <textarea name="message" placeholder="Sua mensagem" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </>
  );
}
