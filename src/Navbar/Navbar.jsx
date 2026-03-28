import React, { useState } from "react";
// Importa o React e o hook useState (para controlar o estado do menu)

import "./Navbar.css";
// Importa os estilos da Navbar

function Navbar() {
  // Declara o componente Navbar

  const [menuAberto, setMenuAberto] = useState(false);
  // Cria um estado:
  // menuAberto = controla se o menu está aberto (true) ou fechado (false)

  return (
    <nav className="Navbar-container">
      {/* Container principal da navbar */}

      <img
        src="/logo interna do portifólio.svg"
        alt="Logo"
        className="Logo-img"
      />
      {/* Exibe a logo
          O "/" significa que a imagem deve estar dentro da pasta "public"
      */}

      {/* Ícone do Hambúrguer */}
      <div
        className="menu-hamburger"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        {/* Ao clicar, alterna entre abrir e fechar o menu */}

        <i className={menuAberto ? "fas fa-times" : "fas fa-bars"}></i>
        {/* Se menuAberto = true → mostra "X" (fechar)
            Se false → mostra "☰" (abrir menu)
        */}
      </div>

      {/* Lista de navegação */}
      <ul className={`Nav-links ${menuAberto ? "ativo" : ""}`}>
        {/* Adiciona a classe "ativo" quando o menu está aberto (mobile) */}

        <li>
          <a href="#inicio" onClick={() => setMenuAberto(false)}>
            Início
          </a>
        </li>
        {/* Link para seção "início"
            Fecha o menu ao clicar (melhor UX no mobile)
        */}

        <li>
          <a href="#sobre" onClick={() => setMenuAberto(false)}>
            Sobre
          </a>
        </li>
        {/* Link para seção "sobre" */}

        <li>
          <a href="#produtos" onClick={() => setMenuAberto(false)}>
            Produtos
          </a>
        </li>
        {/* Link para seção "produtos" */}

        <li>
          <a href="#contato" onClick={() => setMenuAberto(false)}>
            Contato
          </a>
        </li>
        {/* Link para seção "contato" */}
      </ul>
    </nav>
  );
}

export default Navbar;
// Exporta o componente Navbar para uso no App
