import React from 'react';
import './Home.css';
import ProductCarousel from '../Carrossel/ProductCarousel'; // Ajustado para um 's'
import OleoCarousel from '../Carrossel/OleoCarousel'; 
import FiltroCarousel from '../Carrossel/FiltroCarrossel'; 
import SandaliasCarrossel from '../Carrossel/SandaliasCarrossel'; // Ajustado para dois 's'

function Home({ setPagina, setLinkAtivo, navegarParaProduto }) {
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
      <ProductCarousel setPagina={setPagina} navegarParaProduto={navegarParaProduto} />

      {/* O novo Carrossel de Óleos Essenciais */}
      <OleoCarousel navegarParaProduto={navegarParaProduto} />

      {/* O Carrossel de Filtros Purificadores de Água */}
      <FiltroCarousel navegarParaProduto={navegarParaProduto} />

      {/* O Carrossel de Sandálias */}
      <SandaliasCarrossel />

    </div>
  );
}

export default Home;