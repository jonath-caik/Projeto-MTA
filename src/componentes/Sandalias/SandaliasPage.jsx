import React, { useState } from "react";
import "./SandaliasPage.css";
import { sandalias } from "../../dados/produtos";

const produtosOrtopedicos = sandalias.filter((s) => s.categoria === "Sandalia Ortopedica");
const produtosMagneticos  = sandalias.filter((s) => s.categoria === "Sandalia Magnetica");

function ProdutoCard({ produto, navegarParaProduto }) {
  const [adicionado, setAdicionado] = useState(false);

  const handleClick = () => {
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 2000);
  };

  return (
    <div className="sandalia-card">
      <div className="sandalia-card-img">
        <img src={produto.img} alt={produto.nome} />
      </div>
      <div className="sandalia-card-info">
        <div className="sandalia-tags">
          {produto.tags.map((tag) => (
            <span key={tag} className="sandalia-tag">{tag}</span>
          ))}
        </div>
        <h3>{produto.nome}</h3>
        <p>{produto.descricao}</p>
        <div className="sandalia-card-footer">
          <span className="sandalia-preco">{produto.preco}</span>
          <div className="sandalia-card-btns">
            <button
              className="btn-sandalia btn-detalhes"
              onClick={() => navegarParaProduto(produto)}
            >
              Ver Detalhes
            </button>
            <button
              className={`btn-sandalia ${adicionado ? "adicionado" : ""}`}
              onClick={handleClick}
            >
              {adicionado ? "✓ Adicionado!" : "Adicionar ao carrinho"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SandaliasPage({ setPagina, navegarParaProduto }) {
  const [abaAtiva, setAbaAtiva] = useState("ortopedica");

  return (
    <div className="sandalias-page">

    
      <section
  className="sandalias-hero"
  style={{ backgroundImage: `url('/public/sandalia2.jpg')` }}
>
        <div className="sandalias-hero-content">
          <p className="subtitle-tag">NeaBemEstar</p>
          <h1>Nossas Sandálias</h1>
          <p className="sandalias-hero-desc">
            Conforto e bem-estar para cada passo do seu dia.
          </p>
          {/* Botão para voltar à Home */}
          <button className="btn-voltar" onClick={() => setPagina("home")}>
            ← Voltar ao início
          </button>
        </div>
      </section>

      {/* ABAS */}
      <section className="sandalias-main">
        <div className="sandalias-abas">
          <button
            className={`aba-btn ${abaAtiva === "ortopedica" ? "ativa" : ""}`}
            onClick={() => setAbaAtiva("ortopedica")}
          >
            Ortopédica
          </button>
          <button
            className={`aba-btn ${abaAtiva === "magnetica" ? "ativa" : ""}`}
            onClick={() => setAbaAtiva("magnetica")}
          >
            Magnética
          </button>
        </div>

        {/* DESCRIÇÃO DA ABA */}
        <div className="aba-descricao">
          {abaAtiva === "ortopedica" ? (
            <>
              <h2>Sandálias Ortopédicas</h2>
              <p>
                Desenvolvidas para corrigir a postura, aliviar dores nos pés,
                joelhos e coluna. Combinam saúde com estilo para o seu cotidiano.
              </p>
            </>
          ) : (
            <>
              <h2>Sandálias Magnéticas</h2>
              <p>
                Tecnologia de imãs terapêuticos que estimulam a circulação
                sanguínea, reduzem inflamações e promovem equilíbrio energético.
              </p>
            </>
          )}
        </div>

        {/* GRID */}
        <div className="sandalias-grid">
          {(abaAtiva === "ortopedica" ? produtosOrtopedicos : produtosMagneticos).map(
            (produto) => <ProdutoCard key={produto.id} produto={produto} navegarParaProduto={navegarParaProduto} />
          )}
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="sandalias-beneficios">
        <h2>Por que escolher a NeaBemEstar?</h2>
        <div className="beneficios-grid">
          <div className="beneficio-item">
            <span className="beneficio-icone">✦</span>
            <h4>Qualidade garantida</h4>
            <p>Todos os produtos passam por rigoroso controle de qualidade.</p>
          </div>
          <div className="beneficio-item">
            <span className="beneficio-icone">✦</span>
            <h4>Entrega rápida</h4>
            <p>Enviamos para todo o Brasil com rastreamento em tempo real.</p>
          </div>
          <div className="beneficio-item">
            <span className="beneficio-icone">✦</span>
            <h4>Troca fácil</h4>
            <p>30 dias para troca ou devolução sem burocracia.</p>
          </div>
          <div className="beneficio-item">
            <span className="beneficio-icone">✦</span>
            <h4>Feito para você</h4>
            <p>Pensados para o bem-estar real de quem usa todo dia.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default SandaliasPage;