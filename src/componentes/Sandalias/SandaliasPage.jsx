import React, { useState } from "react";
import "./SandaliasPage.css";

const produtosOrtopedicos = [
  {
    id: 1,
    nome: "Sandália Ortopédica Couro",
    preco: "R$ 189,90",
    descricao: "Couro legítimo com palmilha anatômica para suporte total do arco plantar.",
    img: "/sandalia ce couro.jpg",
    tags: ["Couro legítimo", "Arco plantar", "Unissex"],
  },
  {
    id: 2,
    nome: "Sandália Ortopédica Vazada",
    preco: "R$ 159,90",
    descricao: "Design vazado com solado ortopédico para máxima ventilação e conforto.",
    img: "/sandalia2.jpg",
    tags: ["Ventilada", "Leve", "Feminino"],
  },
  {
    id: 3,
    nome: "Sandália Ortopédica Premium",
    preco: "R$ 219,90",
    descricao: "Linha premium com amortecimento extra e correção postural avançada.",
    img: "/sandalia ce couro.jpg",
    tags: ["Premium", "Amortecimento", "Postura"],
  },
];

const produtosMagneticos = [
  {
    id: 4,
    nome: "Sandália Magnética Classic",
    preco: "R$ 229,90",
    descricao: "Imãs estrategicamente posicionados para estimular a circulação e aliviar dores.",
    img: "/sandalia2.jpg",
    tags: ["Circulação", "Terapêutica", "Unissex"],
  },
  {
    id: 5,
    nome: "Sandália Magnética Bio",
    preco: "R$ 249,90",
    descricao: "Combina tecnologia magnética com materiais bioativos para bem-estar total.",
    img: "/sandalia ce couro.jpg",
    tags: ["Bioativo", "Alta tecnologia", "Feminino"],
  },
  {
    id: 6,
    nome: "Sandália Magnética Sport",
    preco: "R$ 269,90",
    descricao: "Para quem tem rotina ativa. Magnetos de alta intensidade com solado antiderrapante.",
    img: "/sandalia2.jpg",
    tags: ["Esportivo", "Antiderrapante", "Unissex"],
  },
];

function ProdutoCard({ produto }) {
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
          <button
            className={`btn-sandalia ${adicionado ? "adicionado" : ""}`}
            onClick={handleClick}
          >
            {adicionado ? "✓ Adicionado!" : "Adicionar ao carrinho"}
          </button>
        </div>
      </div>
    </div>
  );
}

function SandaliasPage({ setPagina }) {
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
            (produto) => <ProdutoCard key={produto.id} produto={produto} />
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