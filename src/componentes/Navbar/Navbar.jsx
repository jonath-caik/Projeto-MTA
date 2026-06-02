import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar({ paginaAtual, setPagina, linkAtivo, setLinkAtivo, totalItens = 0, irParaCarrinho }) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const temaSalvo = localStorage.getItem("theme");
    return temaSalvo === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuAberto(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fecharMenu = () => setMenuAberto(false);

  const irParaInicio = () => {
    setPagina("home");
    setLinkAtivo("home");
    fecharMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const irParaOleo = (e) => {
    e.preventDefault();
    setPagina("oleo");
    setLinkAtivo("oleo");
    fecharMenu();
  };

  const irParaFiltros = (e) => {
    e.preventDefault();
    setPagina("filtros");
    setLinkAtivo("filtros");
    fecharMenu();
  };

  const irParaSandalias = (e) => {
    e.preventDefault();
    setPagina("sandalias");
    setLinkAtivo("sandalias");
    fecharMenu();
  };

  return (
    <>
      <div
        className={`nav-overlay ${menuAberto ? "ativo" : ""}`}
        onClick={fecharMenu}
      />

      <nav className={`Navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="Navbar-container">

          <img
            src="/fotos/logos/logo.svg"
            alt="Logo NeaBemEstar"
            className="Logo-img"
            onClick={irParaInicio}
          />

          <div
            className={`menu-hamburger ${menuAberto ? "aberto" : ""}`}
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Abrir menu"
          >
            <span />
            <span />
            <span />
          </div>

         <ul className={`Nav-links ${menuAberto ? "ativo" : ""}`}>
  <li>
    <a href="#" className={linkAtivo === "home" ? "ativo" : ""} onClick={irParaInicio}>
      Início
    </a>
  </li>

  <li>
    <a href="#" className={linkAtivo === "oleo" ? "ativo" : ""} onClick={irParaOleo}>
      Óleos
    </a>
  </li>

  <li>
    <a href="#" className={linkAtivo === "filtros" ? "ativo" : ""} onClick={irParaFiltros}>
      Purificadores 
    </a>
  </li>

  <li>
    <a href="#" className={linkAtivo === "sandalias" ? "ativo" : ""} onClick={irParaSandalias}>
      Sandálias
    </a>
  </li>

  <li>
    <button className="carrinho-btn" onClick={irParaCarrinho} title="Meu Carrinho">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
      {totalItens > 0 && <span className="carrinho-badge">{totalItens}</span>}
    </button>
  </li>

  <li>
    <label className="dark-toggle" title={isDarkMode ? "Modo Claro" : "Modo Escuro"}>
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
      />
      <span className="dark-toggle__track">
        <span className="dark-toggle__thumb">
          {isDarkMode ? "🔆" : "🌙"}
        </span>
      </span>
    </label>
  </li>
</ul>
        </div>
      </nav>

    </>
  );
}

export default Navbar;