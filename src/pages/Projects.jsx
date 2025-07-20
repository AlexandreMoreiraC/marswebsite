import React from "react";
import "./styles/Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projetos</h2>
      <div className="project-list">
        <div className="project-card">Projeto 1</div>
        <div className="project-card">Projeto 2</div>
        <div className="project-card">Projeto 3</div>
      </div>
    </section>
  );
}