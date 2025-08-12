import React from "react";
import { motion } from "framer-motion";
import "../styles/Footer.css";
import '../styles/Global.css';


export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <p>MarsWebsites © 2025 - Todos os direitos reservados</p>
    </motion.footer>
  );
}
