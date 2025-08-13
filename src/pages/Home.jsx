import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import "../styles/Global.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity },
  },
};

export default function Home() {
  return (
    <>
      <main className="home-container">
        <section id="inicio" className="hero-section" aria-labelledby="hero-title">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="hero-image">
              <img
                src="/images/hero-image.png"
                alt="Exemplo de site moderno desenvolvido pela MarsWebsites"
                loading="lazy"
              />
            </div>
            <div className="hero-overlay">
              <h1 id="hero-title" className="hero-title">
                Criação de Sites Profissionais e Responsivos para Seu Negócio
              </h1>
              <p className="hero-text">
                Transforme sua ideia em um site incrível, moderno e otimizado para atrair clientes.
                Design de impacto, performance otimizada e estratégias digitais inteligentes.
              </p>
              <motion.button
                className="btn-primary"
                variants={pulse}
                animate="animate"
                onClick={() => window.open("https://wa.me/351964766822", "_blank")}
                aria-label="Solicitar orçamento pelo WhatsApp"
              >
                Quero meu site!
              </motion.button>
            </div>
          </motion.div>
        </section>

        <section id="sobre" className="section about-section" aria-labelledby="sobre-title">
          <motion.div
            className="container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 id="sobre-title" className="section-title">Sobre a MarsWebsites</h2>
            <p>
              A <strong>MarsWebsites</strong> desenvolve sites modernos, personalizados e estratégicos para empresas e profissionais que buscam destaque online.
            </p>
            <p>
              Criamos experiências digitais únicas que refletem a identidade, os valores e os objetivos de cada marca.
            </p>
            <p>
              Nossos projetos unem <em>design responsivo</em>, tecnologia avançada e SEO para oferecer performance e conversão.
            </p>
          </motion.div>
        </section>

        <section id="servicos" className="section services-section" aria-labelledby="servicos-title">
          <motion.div
            className="container cards-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <h2 id="servicos-title" className="section-title">Serviços</h2>
            {[
              {
                title: "Criação de Sites Personalizados",
                desc: "Sites exclusivos, responsivos, otimizados para SEO e integrados às redes sociais e WhatsApp."
              },
              {
                title: "Otimização de SEO",
                desc: "Melhore o posicionamento do seu site no Google com estratégias de SEO avançadas, aumento de tráfego orgânico e maior visibilidade online."
              },
              {
                title: "Aluguel de Sites Prontos",
                desc: "Sites profissionais prontos para uso, com hospedagem, domínio, personalização e manutenção inclusa."
              },
              {
                title: "Manutenção e Suporte Técnico",
                desc: "Monitoramento, segurança, atualizações e suporte especializado para manter seu site sempre online."
              }
            ].map(({ title, desc }) => (
              <motion.article className="project-card" key={title} variants={fadeUp}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section id="projetos" className="section projects-section" aria-labelledby="projetos-title">
          <motion.div
            className="container cards-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <h2 id="projetos-title" className="section-title">Alguns Projetos</h2>
            {[
              {
                title: "Barber Shop",
                desc: "Site moderno para barbearia, com agendamento online e galeria de cortes.",
                link: "https://barbearia1-lilac.vercel.app/",
                img: "/images/barbearia.png",
              },
              {
                title: "GrowUp Negócios",
                desc: "Blog empresarial com foco em empreendedorismo e marketing.",
                link: "https://grow-up-neg-cios.vercel.app/",
                img: "/images/blog.png",
              },
              {
                title: "Estética",
                desc: "Site elegante para clínica de estética, com serviços e formulário de contato.",
                link: "https://estetica1-bay.vercel.app/",
                img: "/images/estetica.png",
              },
            ].map(({ title, desc, link, img }) => (
              <motion.article className="project-card" key={title} variants={fadeUp}>
                <h3>{title}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer" title={`Visitar o site ${title}`}>
                  <img src={img} alt={`Exemplo de site desenvolvido: ${title}`} style={{ width: "100%", borderRadius: "8px" }} />
                </a>
                <p>{desc}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-link" title={`Abrir site ${title}`}>
                  Visitar site
                </a>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section id="contato" className="section contact-section" aria-labelledby="contato-title">
          <motion.div
            className="container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 id="contato-title" className="section-title">Entre em Contato</h2>
            <address>
              <p><a href="mailto:alexandremoreiradev@outlook.pt">alexandremoreiradev@outlook.pt</a></p>
              <p><a href="tel:+351964766822">+351 964-766-822</a></p>
              <p>LISBOA - PORTUGAL</p>
            </address>
          </motion.div>
        </section>
      </main>

      <a
        href="https://wa.me/351964766822"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Abrir conversa no WhatsApp"
        title="Falar pelo WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#25D366" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.918 11.918 0 0 0 12 0C5.372 0 0 5.372 0 12a11.91 11.91 0 0 0 2.43 7.44L0 24l4.69-2.43A11.91 11.91 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.182-1.243-6.167-3.48-8.52zm-2.092 13.5c-.323.9-1.86 1.74-2.54 1.86-.678.12-1.315.17-3.11-.91-2.47-1.39-4.08-4.62-4.22-4.85-.15-.23-1.2-1.59-1.2-3.04 0-1.45.77-2.16 1.043-2.46.27-.31.6-.38.82-.38.22 0 .45 0 .65.01.21.01.5-.08.77.58.27.67.92 2.31.98 2.49.07.18.11.39.01.61-.1.22-.15.36-.3.57-.15.21-.32.45-.45.6-.15.18-.3.38-.14.62.16.24.7 1.15 1.5 1.86 1.03.95 1.8 1.21 2.11 1.35.3.14.47.12.64-.07.17-.19.67-.79.85-1.07.18-.28.37-.23.64-.14.27.08 1.72.81 2.02.95.3.15.5.23.57.36.07.13.07.77-.24 1.68z"/>
        </svg>
      </a>
    </>
  );
}
