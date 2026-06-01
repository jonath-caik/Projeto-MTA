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

          {/* BLOCO DO TOPO MOBILE: A tag com 'mobile-only-tag' só vai aparecer no celular */}
          <div className="hero-header-mobile-block">
            <div className="hero-image-container">
              <img
                src="/fotos/logos/NEABEMESTAR.png"
                alt="Destaque NeaBemEstar"
                className="hero-person-img"
              />
            </div>
            <p className="subtitle-tag mobile-only-tag">NeaBemEstar</p>
          </div>

          {/* CONTEÚDO PRINCIPAL (CORRIGIDO PARA SE ENCAIXAR IGUAL À IMAGEM) */}
          <div className="hero-content">
            {/* TAG WEB: Ela volta a aparecer exatamente em cima da frase no desktop */}
            <p className="subtitle-tag web-only-tag">NeaBemEstar</p>
            
            {/* TÍTULO: Com as quebras de linha controladas para o Desktop */}
            <h1>
              Cuidar de si é o <br className="desktop-only-br" />
              primeiro passo <br />
              para viver melhor.
            </h1>
            
            {/* DESCRIÇÃO: Alinhada para quebrar de forma simétrica no computador */}
            <p className="description">
              Descubra a essência do bem-estar com nossos produtos naturais e <br className="desktop-only-br" /> exclusivos.
            </p>
            
            <div className="hero-buttons">
              <a href="#produtos" className="btn-primary">Ver Produtos</a>
            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO SOBRE O VENDEDOR & CONSULTOR (Versão Compactada e Direta) */}
      <div className="vendedor-section">
        <div className="vendedor-container-clean">
          <span className="vendedor-tag-sub">SOBRE MIM</span>
          <h2>A Trajetória de Quem Escolhe o Melhor para Você</h2>
          
          <div className="vendedor-texto-trajetoria">
            <p className="p-destaque-vendedor">
              Olá, eu sou a <strong>VALDINEA</strong>! Fundadora da <strong>NeaBemEstar</strong> , criei este espaço para simplificar o seu autocuidado. Faço uma curadoria rigorosa de cada solução de saúde para entregar apenas o que realmente funciona e traz bem-estar para a sua vida.
            </p>
            
            <p>
              Minha missão é garantir uma transformation real na sua rotina através de escolhas conscientes. Por isso, faço uma curadoria rigorosa de tudo o que oferecemos: desde a pureza extrema dos óleos dōTERRA e a ciência postural das nossas sandálias, até a máxima eficiência dos purificadores de água. Estou aqui para entregar a segurança e o suporte de quem entende de verdade o que vende.
            </p>
          </div>

          <div className="vendedor-badges">
            <span className="badge-vendedor-item">✦ Curadoria Especializada</span>
            <span className="badge-vendedor-item">✦ Consultoria de Bem-Estar</span>
            <span className="badge-vendedor-item">✦ Atendimento Direto</span>
          </div>
        </div>
      </div>

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