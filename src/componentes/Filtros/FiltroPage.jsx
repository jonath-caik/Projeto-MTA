import React, { useState } from "react";
import "./FiltroPage.css";
import { purificadores } from "../../dados/produtos";

function FiltroPage({ setPagina, produtoSelecionado, adicionarAoCarrinho, irParaCarrinho }) {
  const filtro = purificadores.find((p) => p.id === produtoSelecionado?.id) || purificadores[0];
  const [quantidade, setQuantidade] = useState(1);
  const [adicionado, setAdicionado] = useState(false);

  const handleAddCarrinho = () => {
    adicionarAoCarrinho(
      { id: filtro.id, nome: filtro.nome, preco: filtro.preco, img: filtro.img, categoria: filtro.categoria },
      quantidade
    );
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 2500);
  };

  const handleComprar = () => {
    adicionarAoCarrinho(
      { id: filtro.id, nome: filtro.nome, preco: filtro.preco, img: filtro.img, categoria: filtro.categoria },
      quantidade
    );
    irParaCarrinho();
  };

  return (
    <div className="filtro-page">
      <section className="filtro-hero">
        <div className="filtro-hero-content">
          <span className="subtitle-tag">NeaBemEstar · Purificadores</span>
          <h1>{filtro.nome}</h1>
          <p className="filtro-hero-desc">{filtro.subtitulo}</p>
          <button className="btn-voltar" onClick={() => setPagina("filtros")}>
            ← Voltar aos purificadores
          </button>
        </div>
      </section>

      <section className="filtro-main">
        <div className="filtro-detalhe">

          <div className="filtro-coluna-esquerda">
            <div className="filtro-imagem-wrapper">
              <img src={filtro.img} alt={filtro.nome} />
            </div>
            <div className="filtro-tags">
              {filtro.tags.map((tag) => (
                <span key={tag} className="filtro-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="filtro-info">
            <h2>{filtro.nome}</h2>
            <p className="filtro-subtitulo">{filtro.subtitulo}</p>
            <div className="filtro-divider" />

            <div className="filtro-preco-bloco">
              <span className="filtro-preco">{filtro.preco}</span>
              <span className="filtro-preco-parcelado">{filtro.parcelamento}</span>
            </div>
            <div className="filtro-divider" />

            <div className="filtro-specs">
              <h4>Especificações</h4>
              {filtro.specs.map((s, i) => (
                <div key={i} className="filtro-spec-item">
                  <span>{s.label}</span>
                  <span>{s.valor}</span>
                </div>
              ))}
            </div>
            <div className="filtro-divider" />

            <div className="filtro-quantidade">
              <label>Quantidade</label>
              <div className="qty-controle">
                <button className="qty-btn" onClick={() => setQuantidade((q) => Math.max(1, q - 1))}>−</button>
                <span className="qty-num">{quantidade}</span>
                <button className="qty-btn" onClick={() => setQuantidade((q) => q + 1)}>+</button>
              </div>
            </div>

            <div className="filtro-acoes">
              <button className={`btn-carrinho ${adicionado ? "adicionado" : ""}`} onClick={handleAddCarrinho}>
                {adicionado ? `✓ ${quantidade}x adicionado!` : "Adicionar ao carrinho"}
              </button>
              <button className="btn-comprar" onClick={handleComprar}>
                Comprar agora
              </button>
            </div>
          </div>

        </div>

        <div className="filtro-diferenciais">
          <h3>Por que escolher este purificador?</h3>
          <div className="diferenciais-grid">
            {filtro.diferenciais.map((d, i) => (
              <div key={i} className="diferencial-card">
                <span className="diferencial-icon">{d.icon}</span>
                <h4>{d.titulo}</h4>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FiltroPage;
