import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ paginaAtual, setPagina, linkAtivo, setLinkAtivo }) {
  const [menuAberto, setMenuAberto] = useState(false);

  const irParaInicio = () => {
    setPagina("home");
    setLinkAtivo("home");
    setMenuAberto(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // NOVA FUNÇÃO DA SANDÁLIA: Rolando a tela até o novo carrossel
  const irParaSandalias = () => {
    setPagina("home");
    setLinkAtivo("sandalias"); // Deixa a cor do link ativa
    setMenuAberto(false);
    setTimeout(() => {
      document
        .getElementById("sandalias") // ID da nova seção de sandálias
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
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

  // FUNÇÃO DO FILTRO
  const irParaFiltros = () => {
    setPagina("home");
    setLinkAtivo("filtros");
    setMenuAberto(false);
    setTimeout(() => {
      document
        .getElementById("filtros") 
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



           <li>
            <a
              href="#sandalias"
              className={linkAtivo === "sandalias" ? "ativo" : ""}
              onClick={(e) => {
                e.preventDefault();
                irParaSandalias();
              }}
            >
              Sandália
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;