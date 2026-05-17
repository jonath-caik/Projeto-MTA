import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar({ paginaAtual, setPagina, linkAtivo, setLinkAtivo }) {
  const [menuAberto, setMenuAberto] = useState(false);
  
  // 1. NOVO: Estado para controlar o Modo Escuro
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 2. NOVO: Efeito que adiciona ou tira a classe 'dark-theme' do site todo
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

  const irParaInicio = () => {
    setPagina("home");
    setLinkAtivo("home");
    setMenuAberto(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // FUNÇÃO DA SANDÁLIA
  const irParaSandalias = () => {
    setPagina("home");
    setLinkAtivo("sandalias"); 
    setMenuAberto(false);
    setTimeout(() => {
      document
        .getElementById("sandalias") 
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

          {/* 3. NOVO: Botão de Modo Escuro adicionado na Navbar */}
          <li>
            <button
              className="btn-modo-escuro"
              onClick={() => setIsDarkMode(!isDarkMode)}
              title="Alternar Modo Escuro"
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;