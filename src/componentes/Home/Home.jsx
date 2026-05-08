import React from 'react';
import './Home.css';
import ProductCarousel from '../Carrossel/ProductCarousel';
import OleoCarousel from '../Carrossel/OleoCarousel'; // <-- Importação do novo carrossel
import FiltroCarousel from '../Carrossel/FiltroCarrossel'; // <-- Importação do novo carrossel

function Home({ setPagina }) {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-container-flex">

          <div className="hero-image-container">
            <img
              src="NEABEMESTAR.png"
              alt="Destaque NeaBemEstar"
              className="hero-person-img"
            />
          </div>

          <div className="hero-content">
            <p className="subtitle-tag">NeaBemEstar</p>
            <h1>Cuidar de si é o primeiro passo para viver melhor.</h1>
            <p className="description">
              Descubra a essência do bem-estar com nossos produtos naturais e exclusivos.
            </p>
            <div className="hero-buttons">
              <a href="#produtos" className="btn-primary">Ver Produtos</a>
            </div>
          </div>

        </div>
      </section>

   {/* O Carrossel de produtos variados */}
      <ProductCarousel setPagina={setPagina} />
      
      {/* O novo Carrossel de Óleos Essenciais */}
      <OleoCarousel setPagina={setPagina} />
      
      {/* O novo Carrossel de Filtros Purificadores de Água */}
      <FiltroCarousel setPagina={setPagina} />
    </div>
  );
}

export default Home;