import React from "react";
import "./OleoPage.css";

const oleos = [
  {
    id: 1,
    nome: "Óleo Essencial Bergamota",
    subtitulo: "Aroma cítrico e refrescante, ideal para equilíbrio emocional e bem-estar.",
    preco: "R$ 89,90",
    img: "/fotos/oleos/aromas_naturais/bergamot.png",
    tags: ["doTERRA", "100% Puro", "Cítrico"],
  },
  {
    id: 2,
    nome: "Óleo Essencial Pimenta Preta",
    subtitulo: "Estimulante e aquecedor, perfeito para circulação e desconforto muscular.",
    preco: "R$ 94,90",
    img: "/fotos/oleos/aromas_naturais/black_pepper.png",
    tags: ["doTERRA", "100% Puro", "Estimulante"],
  },
  {
    id: 3,
    nome: "Óleo Essencial Brasil",
    subtitulo: "Blend exclusivo inspirado na riqueza natural da flora brasileira.",
    preco: "R$ 99,90",
    img: "/fotos/oleos/aromas_naturais/brasil.png",
    tags: ["doTERRA", "Blend Exclusivo", "Flora Brasileira"],
  },
  {
    id: 4,
    nome: "Óleo Essencial Cardamomo",
    subtitulo: "Doce e especiado, excelente para digestão e respiração saudável.",
    preco: "R$ 109,90",
    img: "/fotos/oleos/aromas_naturais/cardamom.png",
    tags: ["doTERRA", "100% Puro", "Digestivo"],
  },
  {
    id: 5,
    nome: "Óleo Essencial Cassia",
    subtitulo: "Similar à canela, com propriedades quentes e estimulantes do bem-estar.",
    preco: "R$ 79,90",
    img: "/fotos/oleos/aromas_naturais/cassia.png",
    tags: ["doTERRA", "100% Puro", "Aquecedor"],
  },
];

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