import React from "react";
import "./FiltroPage.css";

const purificadores = [
  {
    id: 1,
    nome: "Purificador Água Natural Azul",
    subtitulo: "Purificador compacto com 1 filtro, ideal para uso doméstico diário.",
    preco: "R$ 349,90",
    img: "/fotos/purificador/purificador_agua_natural/purificador3.png",
    tags: ["1 Filtro", "Azul", "Compacto"],
  },
  {
    id: 2,
    nome: "Purificador Água Preto 2 Filtros",
    subtitulo: "Máxima purificação com duplo filtro para famílias que exigem mais qualidade.",
    preco: "R$ 499,90",
    img: "/fotos/purificador/purificador_bebedouro/purificador4.png",
    tags: ["2 Filtros", "Preto", "Premium"],
  },
  {
    id: 3,
    nome: "Purificador Água Branco 2 Filtros",
    subtitulo: "Elegância em branco com duplo filtro para uma purificação superior.",
    preco: "R$ 479,90",
    img: "/fotos/purificador/purificador_agua_natural/purificador5.png",
    tags: ["2 Filtros", "Branco", "Elegante"],
  },
  {
    id: 4,
    nome: "Purificador Água Preto 1 Filtro",
    subtitulo: "Compacto e eficiente com design preto moderno para sua torneira.",
    preco: "R$ 329,90",
    img: "/fotos/purificador/purificador_agua_natural/purificador4.png",
    tags: ["1 Filtro", "Preto", "Moderno"],
  },
  {
    id: 5,
    nome: "Purificador Água Branco 1 Filtro",
    subtitulo: "Clássico e eficiente, ideal para quem busca praticidade no dia a dia.",
    preco: "R$ 299,90",
    img: "/fotos/purificador/purificador_agua_natural/purificador2.png",
    tags: ["1 Filtro", "Branco", "Clássico"],
  },
];

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
                  <span className="lista-preco">{p.preco}</span>
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