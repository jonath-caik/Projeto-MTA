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

  // FUNÇÃO DO ÓLEO
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

  // NOVA FUNÇÃO DO FILTRO (Agora com o "s" no final para bater com a Home)
  const irParaFiltros = () => {
    setPagina("home");
    setLinkAtivo("filtros");
    setMenuAberto(false);
    setTimeout(() => {
      document
        .getElementById("filtros") // <-- Aqui estava o bug! Agora está plural.
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

          <li>
            <a
              href="#produtos"
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
          </li>

          <li>
            <a
              href="#filtros"
              className={linkAtivo === "filtros" ? "ativo" : ""}
              onClick={(e) => {
                e.preventDefault();
                irParaFiltros();
              }}
            >
              Purificadores
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;