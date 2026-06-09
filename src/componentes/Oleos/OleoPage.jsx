import React, { useState } from "react";
import "./OleoPage.css";
import { oleos } from "../../dados/produtos";

function OleoPage({ setPagina, produtoSelecionado, adicionarAoCarrinho, irParaCarrinho }) {
  const oleo = oleos.find((o) => o.id === produtoSelecionado?.id) || oleos[0];
  const [quantidade, setQuantidade] = useState(1);
  const [adicionado, setAdicionado] = useState(false);

  const handleAddCarrinho = () => {
    adicionarAoCarrinho(
      { id: oleo.id, nome: oleo.nome, preco: oleo.preco, img: oleo.img, categoria: oleo.categoria },
      quantidade
    );
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 2500);
  };

  const handleComprar = () => {
    adicionarAoCarrinho(
      { id: oleo.id, nome: oleo.nome, preco: oleo.preco, img: oleo.img, categoria: oleo.categoria },
      quantidade
    );
    irParaCarrinho();
  };

  return (
    <div className="oleo-page">
      <section className="oleo-hero">
        <div className="oleo-hero-content">
          <span className="subtitle-tag">NeaBemEstar · doTERRA</span>
          <h1>{oleo.nome}</h1>
          <p className="oleo-hero-desc">{oleo.subtitulo}</p>
          <button className="btn-voltar" onClick={() => setPagina("oleo")} aria-label="Voltar">
            ← Voltar aos óleos
          </button>
        </div>
      </section>

      <section className="oleo-main">
        <div className="oleo-detalhe">

          <div className="oleo-coluna-esquerda">
            <div className="oleo-imagem-wrapper">
              <img src={oleo.img} alt={oleo.nome} />
            </div>
            <div className="oleo-tags">
              {oleo.tags.map((tag) => (
                <span key={tag} className="oleo-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="oleo-info">
            <h2>{oleo.nome}</h2>
            <p className="oleo-subtitulo">{oleo.subtitulo}</p>
            <div className="oleo-divider" />

            <div className="oleo-preco-bloco">
              {oleo.tamanho && <span className="oleo-tamanho">{oleo.tamanho}</span>}
              <span className="oleo-preco">{oleo.preco}</span>
              <span className="oleo-preco-parcelado">{oleo.parcelamento}</span>
            </div>
            <div className="oleo-divider" />

            <div className="oleo-beneficios">
              <h4>Benefícios</h4>
              {oleo.beneficios.map((b, i) => (
                <div key={i} className="oleo-beneficio-item">{b}</div>
              ))}
            </div>
            <div className="oleo-divider" />

            <div className="oleo-quantidade">
              <label>Quantidade</label>
              <div className="qty-controle">
                <button className="qty-btn" onClick={() => setQuantidade((q) => Math.max(1, q - 1))}>−</button>
                <span className="qty-num">{quantidade}</span>
                <button className="qty-btn" onClick={() => setQuantidade((q) => q + 1)}>+</button>
              </div>
            </div>

            <div className="oleo-acoes">
              <button className={`btn-carrinho ${adicionado ? "adicionado" : ""}`} onClick={handleAddCarrinho}>
                {adicionado ? `✓ ${quantidade}x adicionado!` : "Adicionar ao carrinho"}
              </button>
              <button className="btn-comprar" onClick={handleComprar}>
                Comprar agora
              </button>
            </div>
          </div>

        </div>

        <div className="oleo-como-usar">
          <h3>Como Utilizar</h3>
          <div className="oleo-uso-grid">
            {oleo.comoUsar.map((uso, i) => (
              <div key={i} className="oleo-uso-card">
                <span className="oleo-uso-icon">{uso.icon}</span>
                <h4>{uso.titulo}</h4>
                <p>{uso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OleoPage;
