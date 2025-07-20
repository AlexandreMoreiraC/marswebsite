  import React from "react";
import "./styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contato</h2>
      <form className="contact-form">
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu email" required />
        <textarea placeholder="Sua mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}