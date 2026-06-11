import React, { useState } from "react";
import "./SandaliasPage.css";
import { sandalias } from "../../dados/produtos";

function ProdutoCard({ produto, navegarParaProduto, adicionarAoCarrinho }) {
  const [adicionado, setAdicionado] = useState(false);
  const [corSelecionada, setCorSelecionada] = useState(
    produto.cores ? produto.cores[0] : null
  );

  const imgAtual = corSelecionada ? corSelecionada.img : produto.img;

  const handleAddCarrinho = () => {
    if (produto.tamanhos || produto.cores) {
      navegarParaProduto({ ...produto, ...(corSelecionada || {}) });
      return;
    }
    adicionarAoCarrinho(produto, 1);
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 2000);
  };

  return (
    <div className="sandalia-card">
      <div className="sandalia-card-img">
        <img src={imgAtual} alt={produto.nome} />
      </div>
      <div className="sandalia-card-info">
        <div className="sandalia-tags">
          {produto.tags.map((tag) => (
            <span key={tag} className="sandalia-tag">{tag}</span>
          ))}
        </div>
        <h3>{produto.nome}</h3>
        <p>{produto.descricao}</p>

        {produto.cores && (
          <div className="sandalia-cores">
            <span className="sandalia-cores-label">Cor:</span>
            <div className="sandalia-cores-opcoes">
              {produto.cores.map((cor) => (
                <button
                  key={cor.nome}
                  className={`sandalia-cor-btn ${corSelecionada?.nome === cor.nome ? "ativa" : ""}`}
                  onClick={() => setCorSelecionada(cor)}
                >
                  {cor.nome}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="sandalia-card-footer">
          <span className="sandalia-preco">{produto.preco}</span>
          <div className="sandalia-card-btns">
            <button
              className="btn-sandalia btn-detalhes"
              onClick={() => navegarParaProduto({ ...produto, ...(corSelecionada || {}) })}
            >
              Ver Detalhes
            </button>
            <button
              className={`btn-sandalia ${adicionado ? "adicionado" : ""}`}
              onClick={handleAddCarrinho}
            >
              {adicionado ? "✓ Adicionado!" : "Adicionar ao carrinho"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SandaliasPage({ setPagina, navegarParaProduto, adicionarAoCarrinho, irParaCarrinho }) {
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
          <button className="btn-voltar" onClick={() => setPagina("home")}>
            ← Voltar ao início
          </button>
        </div>
      </section>

      <section className="sandalias-main">
        <div className="aba-descricao">
          <h2>Sandálias Ortopédicas e Magnéticas</h2>
          <p>
            Todas as nossas sandálias combinam tecnologia ortopédica e imãs terapêuticos
            em um único produto. Correção postural, alívio de dores e estimulação da
            circulação sanguínea a cada passo.
          </p>
        </div>

        <div className="sandalias-grid">
          {sandalias.map((produto) => (
            <ProdutoCard
              key={produto.id}
              produto={produto}
              navegarParaProduto={navegarParaProduto}
              adicionarAoCarrinho={adicionarAoCarrinho}
              irParaCarrinho={irParaCarrinho}
            />
          ))}
        </div>
      </section>

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

      <div className="sandalias-espacador-footer" />

    </div>
  );
}

export default SandaliasPage;
