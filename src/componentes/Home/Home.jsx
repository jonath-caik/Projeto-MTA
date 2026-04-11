import React from 'react';
import './Home.css';
import ProductCarousel from '../Carrossel/ProductCarousel';

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

      
      <ProductCarousel setPagina={setPagina} />

    </div>
  );
}

export default Home;