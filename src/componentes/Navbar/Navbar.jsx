import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ paginaAtual, setPagina, linkAtivo, setLinkAtivo }) {
  const [menuAberto, setMenuAberto] = useState(false);

  const irParaProdutos = () => {
    setPagina("home");
    setLinkAtivo("produtos");
    setMenuAberto(false);
    setTimeout(() => {
      document
        .getElementById("produtos")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const irParaInicio = () => {
    setPagina("home");
    setLinkAtivo("home");
    setMenuAberto(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="Navbar">
      <div className="Navbar-container">
        <img
          src="/logo interna do portifólio.svg"
          alt="Logo"
          className="Logo-img"
        />

        <div
          className="menu-hamburger"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? "✕" : "☰"}
        </div>

        <ul className={`Nav-links ${menuAberto ? "ativo" : ""}`}>
          <li>
            <a
              href="#"
              className={linkAtivo === "home" ? "ativo" : ""}
              onClick={(e) => {
                e.preventDefault();
                irParaInicio();
              }}
            >
              Início
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={() => setMenuAberto(false)}>
                   óleo
            </a>
          </li>
          <li>
            <a
              href="#"
              className={linkAtivo === "produtos" ? "ativo" : ""}
              onClick={(e) => {
                e.preventDefault();
                irParaProdutos();
              }}
            >Sandalia
        
            </a>
          </li>
          <li>
            <a href="#contato" onClick={() => setMenuAberto(false)}>
              Purificadores
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
