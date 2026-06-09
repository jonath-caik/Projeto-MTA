import React from "react";
import "./FiltroPage.css";
import { purificadores } from "../../dados/produtos";

function PurificadoresLista({ navegarParaFiltro, setPagina }) {
  return (
    <div className="filtro-page">
      <section className="filtro-hero">
        <div className="filtro-hero-content">
          <span className="subtitle-tag">NeaBemEstar · Purificadores</span>
          <h1>Purificadores de Água</h1>
          <p className="filtro-hero-desc">
            Água pura e saudável para toda a sua família.
          </p>
          <button className="btn-voltar" onClick={() => setPagina("home")}>
            ← Voltar ao início
          </button>
        </div>
      </section>

      <section className="filtro-main">
        <div className="lista-grid">
          {purificadores.map((p) => (
            <div key={p.id} className="lista-card">
              <div className="lista-card-img">
                <img src={p.img} alt={p.nome} />
              </div>
              <div className="lista-card-info">
                <div className="filtro-tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="filtro-tag">{tag}</span>
                  ))}
                </div>
                <h3>{p.nome}</h3>
                <p>{p.subtitulo}</p>
                <div className="lista-card-footer">
                  <div className="lista-preco-bloco">
                    <span className="lista-preco">{p.preco}</span>
                    {p.precoPix && <span className="lista-preco-pix">{p.precoPix}</span>}
                  </div>
                  <button
                    className="btn-carrinho"
                    onClick={() => navegarParaFiltro(p)}
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PurificadoresLista;
