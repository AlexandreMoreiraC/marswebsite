import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../styles/Footer.css";
import "../styles/Global.css";

export default function Footer() {
  return (
    <>
      <Helmet>
        <meta name="description" content="MarsWebsites cria sites modernos, rápidos e responsivos para empresas e empreendedores. Serviços de criação e aluguel de sites em Lisboa e Brasil." />
        <meta name="keywords" content="criação de sites, aluguel de sites, desenvolvimento web, site profissional, site moderno, sites para empresas" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="PT-LIS" />
        <meta name="geo.placename" content="Lisboa" />
        <meta name="geo.position" content="38.7169;-9.1392" />
        <meta name="ICBM" content="38.7169, -9.1392" />
      </Helmet>

      <motion.footer
        className="footer"
        role="contentinfo"
        aria-label="Rodapé do site"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        itemScope
        itemType="http://schema.org/Organization"
      >
        <p>
          <strong itemProp="name">MarsWebsites</strong> © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>

     {/*   <nav aria-label="Links institucionais">
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
      </motion.footer>
    </>
  );
}