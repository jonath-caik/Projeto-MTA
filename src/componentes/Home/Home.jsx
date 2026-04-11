import React from "react";
import "./Home.css";
import ProductCarousel from "../Carrossel/ProductCarousel";

function Home() {
  return (
    <div className="home-container">
      {/* SEÇÃO PRINCIPAL (BANNER PREMIUM COM LAYOUT DE DUAS COLUNAS) */}
      <section className="hero-section">
        <div className="hero-container-flex">
          {/* LADO 1: IMAGEM PRINCIPAL */}
          <div className="hero-image-container">
            <img
              src="/foto homejpeg.jpeg"
              alt="Destaque NeaBemEstar"
              className="hero-person-img"
            />
          </div>

          {/* LADO 2: CONTEÚDO DE TEXTO */}
          <div className="hero-content">
            {/* NOVO: Container para alinhar imagem e texto na mesma linha */}
            <div className="subtitle-wrapper">
              <p className="subtitle-tag">NeaBemEstar</p>
            </div>

            <h1>Cuidar de si é o primeiro passo para viver melhor.</h1>
            <p className="description">
              Descubra a essência do bem-estar com nossos produtos naturais e
              exclusivos.
            </p>
            <div className="hero-buttons">
              <a href="#produtos" className="btn-primary">
                Ver Produtos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DO CARROSSEL */}
      <ProductCarousel />
    </div>
  );
}

export default Home;
