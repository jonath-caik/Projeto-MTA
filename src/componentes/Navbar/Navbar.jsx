import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar({ paginaAtual, setPagina, linkAtivo, setLinkAtivo }) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const temaSalvo = localStorage.getItem("theme");
    return temaSalvo === "dark";
  });

  // Aplica classe dark e salva preferência
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Detecta scroll para aplicar classe .scrolled
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha menu ao redimensionar para desktop
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

  const irParaOleo = () => {
    setPagina("home");
    setLinkAtivo("oleo");
    fecharMenu();
    setTimeout(() => {
      document.getElementById("oleo")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const irParaFiltros = () => {
    setPagina("home");
    setLinkAtivo("filtros");
    fecharMenu();
    setTimeout(() => {
      document.getElementById("filtros")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const irParaSandalias = () => {
    setPagina("home");
    setLinkAtivo("sandalias");
    fecharMenu();
    setTimeout(() => {
      document.getElementById("sandalias")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* Overlay para fechar o menu mobile */}
      <div
        className={`nav-overlay ${menuAberto ? "ativo" : ""}`}
        onClick={fecharMenu}
      />

      <nav className={`Navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="Navbar-container">

          {/* Logo */}
          <img
            src="/fotos/logos/logo.svg"
            alt="Logo NeaBemEstar"
            className="Logo-img"
            onClick={irParaInicio}
          />

          {/* Hamburger — 3 spans para animar em X */}
          <div
            className={`menu-hamburger ${menuAberto ? "aberto" : ""}`}
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Abrir menu"
          >
            <span />
            <span />
            <span />
          </div>

          {/* Links de navegação */}
          <ul className={`Nav-links ${menuAberto ? "ativo" : ""}`}>
            <li>
              <a
                href="#"
                className={linkAtivo === "home" ? "ativo" : ""}
                onClick={(e) => { e.preventDefault(); irParaInicio(); }}
              >
                Início
              </a>
            </li>

            <li>
              <a
                href="#oleo"
                className={linkAtivo === "oleo" ? "ativo" : ""}
                onClick={(e) => { e.preventDefault(); irParaOleo(); }}
              >
                Óleo
              </a>
            </li>

            <li>
              <a
                href="#filtros"
                className={linkAtivo === "filtros" ? "ativo" : ""}
                onClick={(e) => { e.preventDefault(); irParaFiltros(); }}
              >
                Purificadores
              </a>
            </li>

            <li>
              <a
                href="#sandalias"
                className={linkAtivo === "sandalias" ? "ativo" : ""}
                onClick={(e) => { e.preventDefault(); irParaSandalias(); }}
              >
                Sandália
              </a>
            </li>

            <li>
              <label
                className="dark-toggle"
                title={isDarkMode ? "Modo Claro" : "Modo Escuro"}
              >
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
