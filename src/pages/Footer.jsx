import React from "react";
import { motion } from "framer-motion";
import "../styles/Footer.css";
import "../styles/Global.css";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      role="contentinfo"
      aria-label="Rodapé do site"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <p>
        <strong>MarsWebsites</strong> © {new Date().getFullYear()} — Todos os direitos reservados.
      </p>
      {/*
      <nav aria-label="Links institucionais">
        <ul className="footer-links">
          <li>
            <a href="/politica-de-privacidade" title="Leia nossa política de privacidade">
              Política de Privacidade
            </a>
          </li>
          <li>
            <a href="/termos-de-uso" title="Leia nossos termos de uso">
              Termos de Uso
            </a>
          </li>
          <li>
            <a href="/contato" title="Entre em contato conosco">
              Contato
            </a>
          </li>
        </ul>
      </nav> */}
      <meta name="description" content="MarsWebsites cria sites modernos, rápidos e responsivos para empresas e empreendedores." />
    </motion.footer>
  );
}
