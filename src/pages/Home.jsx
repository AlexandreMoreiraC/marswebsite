import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import '../styles/Global.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
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
        <section id="inicio" className="hero-section">
          <motion.div
            className="hero-overlay"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h2 className="hero-title">Transforme sua ideia em um site incrível e irresistível</h2>
            <p className="hero-text">
             Design poderoso, soluções inteligentes e resultados que brilham no mercado.
            </p>
            <motion.button
              className="btn-primary"
              variants={pulse}
              animate="animate"
              onClick={() => window.open("https://wa.me/351964766822", "_blank")}
            >
              Quero meu site!
            </motion.button>
          </motion.div>
        </section>

        <section id="sobre" className="section about-section">
          <motion.div
            className="container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h3 className="section-title">Sobre Nós</h3>
            
<p>Na MarsWebsites, somos apaixonados por criar sites modernos, personalizados e estratégicos.</p> 
<p>Acreditamos que cada marca é única e merece uma presença digital que reflita sua essência, valores e objetivos.</p> 
<p>Por isso, desenvolvemos soluções sob medida, combinando design inovador, tecnologia avançada e usabilidade para oferecer uma experiência online impactante e eficiente.</p> 
<p>Nosso foco é elevar sua marca ao próximo nível, ajudando você a conquistar mais clientes, fortalecer sua identidade e alcançar resultados reais. Com a MarsWebsites, seu site não é apenas uma vitrine, mas uma poderosa ferramenta de crescimento.</p>
            
          </motion.div>
        </section>

        <section id="servicos" className="section services-section">
          <motion.div
            className="container cards-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <h3 className="section-title">Serviços</h3>
            {["Criação de Sites Personalizados", "Aluguel de Sites Prontos", "Manutenção e Suporte Técnico"].map((title) => (
              <motion.div
                className="project-card"
                key={title}
                variants={fadeUp}
                viewport={{ once: true }}
              >
                <h4>{title}</h4>
                <p>
                  {title === "Criação de Sites Personalizados" && "Desenvolvemos sites sob medida, com design exclusivo, responsivos e integrados às suas redes sociais e WhatsApp."}
                  {title === "Aluguel de Sites Prontos" && "Oferecemos sites profissionais prontos para uso, com hospedagem, domínio, personalização rápida e manutenção inclusa."}
                  {title === "Manutenção e Suporte Técnico" && "Garantimos a segurança, atualização e funcionamento contínuo do seu site, com suporte rápido e consultoria especializada."}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="projetos" className="section projects-section">
  <motion.div
    className="container cards-container"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}
  >
    <h3 className="section-title">Projetos Recentes</h3>
    {[
      {
        title: "Barber Shop",
        desc: "Site para Barbearia.",
        link: "https://barbearia1-lilac.vercel.app/",
        img: "/images/barbearia.png",
      },
      {
        title: "GrowUp Negócios",
        desc: "Blog Pessoal / Profissional.",
        link: "https://grow-up-neg-cios.vercel.app/",
        img: "/images/blog.png",
      },
      {
        title: "Estética",
        desc: "Site para Estética.",
        link: "https://estetica1-bay.vercel.app/",
        img: "/images/estetica.png",
      },
    ].map(({ title, desc, link, img }) => (
      <motion.div
        className="project-card"
        key={title}
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <h4>{title}</h4>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={img}
            alt={`Screenshot do ${title}`}
            style={{ width: "100%", cursor: "pointer", borderRadius: "8px" }}
          />
        </a>
        <p>{desc}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          Visitar site
        </a>
      </motion.div>
    ))}
  </motion.div>
</section>

        <section id="contato" className="section contact-section">
          <motion.div
            className="container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h3 className="section-title">Contato</h3>
            <p>alexandremoreiradev@outlook.pt</p>
            <p>+351 964-766-822</p>
            <p>LISBOA - PORTUGAL</p>
          </motion.div>
        </section>
      </main>

      <a
        href="https://wa.me/351964766822"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="#25D366"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.918 11.918 0 0 0 12 0C5.372 0 0 5.372 0 12a11.91 11.91 0 0 0 2.43 7.44L0 24l4.69-2.43A11.91 11.91 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.182-1.243-6.167-3.48-8.52zm-2.092 13.5c-.323.9-1.86 1.74-2.54 1.86-.678.12-1.315.17-3.11-.91-2.47-1.39-4.08-4.62-4.22-4.85-.15-.23-1.2-1.59-1.2-3.04 0-1.45.77-2.16 1.043-2.46.27-.31.6-.38.82-.38.22 0 .45 0 .65.01.21.01.5-.08.77.58.27.67.92 2.31.98 2.49.07.18.11.39.01.61-.1.22-.15.36-.3.57-.15.21-.32.45-.45.6-.15.18-.3.38-.14.62.16.24.7 1.15 1.5 1.86 1.03.95 1.8 1.21 2.11 1.35.3.14.47.12.64-.07.17-.19.67-.79.85-1.07.18-.28.37-.23.64-.14.27.08 1.72.81 2.02.95.3.15.5.23.57.36.07.13.07.77-.24 1.68z"/>
        </svg>
      </a>
    </>
  );
}
