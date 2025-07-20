import React from "react";
import { Link } from "react-scroll";
import "./styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">Ale</h1>
      <nav className="nav">
        <Link to="inicio" smooth={true} duration={500} offset={-70}>Início</Link>
        <Link to="sobre" smooth={true} duration={500} offset={-70}>Sobre</Link>
        <Link to="servicos" smooth={true} duration={500} offset={-70}>Serviços</Link>
        <Link to="projetos" smooth={true} duration={500} offset={-70}>Projetos</Link>
        <Link to="contato" smooth={true} duration={500} offset={-70}>Contato</Link>
      </nav>
    </header>
  );
}
