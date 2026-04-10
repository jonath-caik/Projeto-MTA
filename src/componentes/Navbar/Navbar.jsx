import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className="Navbar"> 
      <div className="Navbar-container">
        <img
          src="/logo interna do portifólio.svg"
          alt="Logo"
          className="Logo-img"
        />

        {/* Ícone do Hambúrguer (Só aparece no Mobile via CSS) */}
        <div className="menu-hamburger" onClick={() => setMenuAberto(!menuAberto)}>
          {menuAberto ? "✕" : "☰"}
        </div>

        {/* Links de Navegação */}
        <ul className={`Nav-links ${menuAberto ? "ativo" : ""}`}>
          <li><a href="#" onClick={() => setMenuAberto(false)}>Início</a></li>
          <li><a href="#sobre" onClick={() => setMenuAberto(false)}>Sobre</a></li>
          <li><a href="#produtos" onClick={() => setMenuAberto(false)}>Produtos</a></li>
          <li><a href="#contato" onClick={() => setMenuAberto(false)}>Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;