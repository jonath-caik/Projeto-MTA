import React from "react";
// Importa o React para poder usar JSX e criar componentes

import Navbar from "./Navbar/Navbar";
// Importa o componente de navegação (Navbar)

import "./App.css";
// Importa os estilos do App

function App() {
  // Declaração do componente principal

  return (
    <div className="App">
      {/* Container principal da aplicação */}

      <Navbar />
      {/* Renderiza a barra de navegação */}

      <section id="inicio" className="hero-section">
        {/* Seção principal (Hero) da página */}

        <div className="hero-content">
          {/* Container interno para organizar conteúdo */}

          <h1>
            Olá, eu sou Valdinea👋
          </h1>
          {/* Título principal da página */}

          {/* Esse {" "} é só um espaço em JSX, não é necessário aqui */}

          <p>
            “Cuidar de si é o primeiro passo para viver melhor.” NeaBemEstar
          </p>
          {/* Frase de impacto / slogan */}

          <div className="hero-buttons">
            {/* Container do botão + redes sociais */}

            <a href="#produtos" className="btn-primary">
              Ver Produtos
            </a>
            {/* Botão que leva até a seção de produtos */}

            <div className="social-links">
              {/* Container dos ícones sociais */}

              <a href="" target="_blank" rel="noreferrer">
                {/* Link do WhatsApp (vazio ainda) */}
                <i className="fab fa-whatsapp"></i>
                {/* Ícone do WhatsApp (Font Awesome) */}
              </a>

              <a href="" target="_blank" rel="noreferrer">
                {/* Link do Instagram (vazio ainda) */}
                <i className="fab fa-instagram"></i>
                {/* Ícone do Instagram (Font Awesome) */}
              </a>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
// Exporta o componente para ser usado no index.jsx