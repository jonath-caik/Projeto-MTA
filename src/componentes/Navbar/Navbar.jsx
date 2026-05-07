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

  // NOVA FUNÇÃO: Garante que vai pra Home e desliza até o Óleo
  const irParaOleo = () => {
    setPagina("home");
    setLinkAtivo("oleo");
    setMenuAberto(false);
    setTimeout(() => {
      document
        .getElementById("oleo")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
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
          
          {/* BOTÃO DO ÓLEO ATUALIZADO */}


           <li>
            <a
              href="#"
              className={linkAtivo === "produtos" ? "ativo" : ""}
              onClick={(e) => {
                e.preventDefault();
                irParaProdutos();
              }}
            >
              Sandália
            </a>
          </li>
          
          <li>
            <a 
              href="#oleo" 
              className={linkAtivo === "oleo" ? "ativo" : ""}
              onClick={(e) => {
                e.preventDefault();
                irParaOleo();
              }}
            >
              Óleo
            </a>
        
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