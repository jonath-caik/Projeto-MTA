import React from "react";
import "./OleoPage.css";
import { oleos } from "../../dados/produtos";

function OleosLista({ navegarParaOleo, setPagina }) {
  return (
    <div className="oleo-page">
      <section className="oleo-hero">
        <div className="oleo-hero-content">
          <span className="subtitle-tag">NeaBemEstar · doTERRA</span>
          <h1>Óleos Essenciais</h1>
          <p className="oleo-hero-desc">
            Descubra nossa linha completa de óleos essenciais 100% puros.
          </p>
          <button className="btn-voltar" onClick={() => setPagina("home")}>
            ← Voltar ao início
          </button>
        </div>
      </section>

      <section className="oleo-main">
        <div className="lista-grid">
          {oleos.map((oleo) => (
            <div key={oleo.id} className="lista-card">
              <div className="lista-card-img">
                <img src={oleo.img} alt={oleo.nome} />
              </div>
              <div className="lista-card-info">
                <div className="oleo-tags">
                  {oleo.tags.map((tag) => (
                    <span key={tag} className="oleo-tag">{tag}</span>
                  ))}
                </div>
                <h3>{oleo.nome}</h3>
                <p>{oleo.subtitulo}</p>
                <div className="lista-card-footer">
                  <span className="lista-preco">{oleo.preco}</span>
                  <button
                    className="btn-carrinho"
                    onClick={() => navegarParaOleo(oleo)}
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

export default OleosLista;
