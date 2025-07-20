import React from "react";
import { Link } from "react-scroll";
import "./styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Alexandre</div>
      <nav className="nav">
        <Link to="inicio" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">Início</Link>
        <Link to="sobre" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">Sobre</Link>
        <Link to="servicos" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">Serviços</Link>
        <Link to="projetos" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">Projetos</Link>
        <Link to="contato" smooth={true} duration={500} offset={-70} spy={true} activeClass="active">Contato</Link>
      </nav>
    </header>
  );
}
