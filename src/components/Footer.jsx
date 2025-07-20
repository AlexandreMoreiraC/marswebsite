import React from "react";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} AleDev. Todos os direitos reservados.</p>
    </footer>
  );
}
