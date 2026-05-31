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
              src="/fotos/logos/NEABEMESTAR.png"
              alt="Destaque NeaBemEstar"
              className="hero-person-img"
            />
          </div>

          <div className="hero-content">
            <p className="subtitle-tag">NeaBemEstar</p>
            <h1>Cuidar de si é o primeiro passo para viver melhor.</h1>
            <p className="description">
              Descubra a essence do bem-estar com nossos produtos naturais e exclusivos.
            </p>
            <div className="hero-buttons">
              <a href="#produtos" className="btn-primary">Ver Produtos</a>
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO SOBRE O VENDEDOR & CONSULTOR (Versão Compactada e Direta) */}
      <section className="vendedor-section">
        <div className="vendedor-container-clean">
          <span className="vendedor-tag-sub">SOBRE MIM</span>
          <h2>A Trajetória de Quem Escolhe o Melhor para Você</h2>
          
          <div className="vendedor-texto-trajetoria">
            <p className="p-destaque-vendedor">
              Olá,sou a <strong>VALDINEA</strong>! Fundadora da <strong>NeaBemEstar</strong> , criei este espaço para simplificar o seu autocuidado. Faço uma curadoria rigorosa de cada solução de saúde para entregar apenas o que realmente funciona e traz bem-estar para a sua vida.
            </p>
            
            <p>
              Minha missão é garantir uma transformação real na sua rotina através de escolhas conscientes. Por isso, faço uma curadoria rigorosa de tudo o que oferecemos: desde a pureza extrema dos óleos dōTERRA e a ciência postural das nossas sandálias, até a máxima eficiência dos purificadores de água. Estou aqui para entregar a segurança e o suporte de quem entende de verdade o que vende.
            </p>
          </div>

          <div className="vendedor-badges">
            <span className="badge-vendedor-item">✦ Curadoria Especializada</span>
            <span className="badge-vendedor-item">✦ Consultoria de Bem-Estar</span>
            <span className="badge-vendedor-item">✦ Atendimento Direto</span>
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
      <SandaliasCarrossel navegarParaProduto={navegarParaProduto} />

    </div>
  );
}

export default Home;