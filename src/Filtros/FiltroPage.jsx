import React, { useState } from "react";
import "./FiltroPage.css";

const purificadoresDetalhes = {
  1: {
    nome: "Purificador Água Natural Azul",
    subtitulo: "Purificador compacto com 1 filtro, ideal para uso doméstico diário.",
    preco: "R$ 349,90",
    parcelas: "12x de R$ 32,07 sem juros",
    img: "/fotos/purificador/purificador_agua_natural/purificador3.png",
    tags: ["1 Filtro", "Azul", "Compacto"],
    specs: [
      { label: "Número de filtros", valor: "1" },
      { label: "Cor", valor: "Azul" },
      { label: "Capacidade", valor: "Fluxo contínuo" },
      { label: "Instalação", valor: "Sem obra" },
      { label: "Garantia", valor: "12 meses" },
    ],
    diferenciais: [
      { icon: "💧", titulo: "Água Pura", desc: "Remove impurezas, cloro e odores indesejados." },
      { icon: "🔧", titulo: "Fácil Instalação", desc: "Conecta diretamente à torneira, sem obra." },
      { icon: "💰", titulo: "Econômico", desc: "Custo por litro muito menor que água engarrafada." },
      { icon: "🌱", titulo: "Sustentável", desc: "Reduz o uso de plástico descartável." },
    ],
  },
  2: {
    nome: "Purificador Água Preto 2 Filtros",
    subtitulo: "Máxima purificação com duplo filtro para famílias que exigem mais qualidade.",
    preco: "R$ 499,90",
    parcelas: "12x de R$ 45,82 sem juros",
    img: "/fotos/purificador/purificador_bebedouro/purificador4.png",
    tags: ["2 Filtros", "Preto", "Premium"],
    specs: [
      { label: "Número de filtros", valor: "2" },
      { label: "Cor", valor: "Preto" },
      { label: "Capacidade", valor: "Fluxo contínuo" },
      { label: "Instalação", valor: "Sem obra" },
      { label: "Garantia", valor: "12 meses" },
    ],
    diferenciais: [
      { icon: "💧", titulo: "Dupla Filtração", desc: "Dois estágios de filtragem para água ainda mais pura." },
      { icon: "🏆", titulo: "Premium", desc: "Design sofisticado que combina com qualquer cozinha." },
      { icon: "👨‍👩‍👧‍👦", titulo: "Para Famílias", desc: "Maior capacidade para o consumo de toda a família." },
      { icon: "🌱", titulo: "Sustentável", desc: "Elimine as garrafas plásticas da sua rotina." },
    ],
  },
  3: {
    nome: "Purificador Água Branco 2 Filtros",
    subtitulo: "Elegância em branco com duplo filtro para uma purificação superior.",
    preco: "R$ 479,90",
    parcelas: "12x de R$ 43,99 sem juros",
    img: "/fotos/purificador/purificador_agua_natural/purificador5.png",
    tags: ["2 Filtros", "Branco", "Elegante"],
    specs: [
      { label: "Número de filtros", valor: "2" },
      { label: "Cor", valor: "Branco" },
      { label: "Capacidade", valor: "Fluxo contínuo" },
      { label: "Instalação", valor: "Sem obra" },
      { label: "Garantia", valor: "12 meses" },
    ],
    diferenciais: [
      { icon: "💧", titulo: "Dupla Filtração", desc: "Dois estágios para água pura e segura." },
      { icon: "✨", titulo: "Design Clean", desc: "Branco elegante que valoriza sua cozinha." },
      { icon: "👨‍👩‍👧‍👦", titulo: "Para Famílias", desc: "Ideal para famílias de médio e grande porte." },
      { icon: "🌱", titulo: "Eco-friendly", desc: "Contribua com o meio ambiente reduzindo plástico." },
    ],
  },
  4: {
    nome: "Purificador Água Preto 1 Filtro",
    subtitulo: "Compacto e eficiente com design preto moderno para sua torneira.",
    preco: "R$ 329,90",
    parcelas: "12x de R$ 30,24 sem juros",
    img: "/fotos/purificador/purificador_agua_natural/purificador4.png",
    tags: ["1 Filtro", "Preto", "Moderno"],
    specs: [
      { label: "Número de filtros", valor: "1" },
      { label: "Cor", valor: "Preto" },
      { label: "Capacidade", valor: "Fluxo contínuo" },
      { label: "Instalação", valor: "Sem obra" },
      { label: "Garantia", valor: "12 meses" },
    ],
    diferenciais: [
      { icon: "💧", titulo: "Água Pura", desc: "Filtro de alta performance para sua saúde." },
      { icon: "🎨", titulo: "Design Moderno", desc: "Visual preto minimalista e contemporâneo." },
      { icon: "💰", titulo: "Econômico", desc: "Investimento acessível com retorno rápido." },
      { icon: "🌱", titulo: "Sustentável", desc: "Menos plástico, mais consciência ambiental." },
    ],
  },
  5: {
    nome: "Purificador Água Branco 1 Filtro",
    subtitulo: "Clássico e eficiente, ideal para quem busca praticidade no dia a dia.",
    preco: "R$ 299,90",
    parcelas: "12x de R$ 27,49 sem juros",
    img: "/fotos/purificador/purificador_agua_natural/purificador2.png",
    tags: ["1 Filtro", "Branco", "Clássico"],
    specs: [
      { label: "Número de filtros", valor: "1" },
      { label: "Cor", valor: "Branco" },
      { label: "Capacidade", valor: "Fluxo contínuo" },
      { label: "Instalação", valor: "Sem obra" },
      { label: "Garantia", valor: "12 meses" },
    ],
    diferenciais: [
      { icon: "💧", titulo: "Água Limpa", desc: "Remoção eficiente de cloro, metais e odores." },
      { icon: "✨", titulo: "Visual Clean", desc: "Design branco que se adapta a qualquer ambiente." },
      { icon: "⚡", titulo: "Fácil Uso", desc: "Operação simples e manutenção descomplicada." },
      { icon: "🌱", titulo: "Sustentável", desc: "Contribua com o planeta reduzindo resíduos plásticos." },
    ],
  },
};

const filtroDefault = purificadoresDetalhes[1];

function FiltroPage({ setPagina, produtoSelecionado }) {
  const filtro = (produtoSelecionado && purificadoresDetalhes[produtoSelecionado.id]) || filtroDefault;
  const [quantidade, setQuantidade] = useState(1);
  const [adicionado, setAdicionado] = useState(false);
  const [comprando, setComprando] = useState(false);

  const handleAddCarrinho = () => { setAdicionado(true); setTimeout(() => setAdicionado(false), 2500); };
  const handleComprar = () => { setComprando(true); setTimeout(() => setComprando(false), 2500); };

  return (
    <div className="filtro-page">
      <section className="filtro-hero">
        <div className="filtro-hero-content">
          <span className="subtitle-tag">NeaBemEstar · Purificadores</span>
          <h1>{filtro.nome}</h1>
          <p className="filtro-hero-desc">{filtro.subtitulo}</p>
          <button className="btn-voltar" onClick={() => setPagina("home")}>← Voltar ao início</button>
        </div>
      </section>

      <section className="filtro-main">
        <div className="filtro-detalhe">
          <div className="filtro-imagem-wrapper">
            <img src={filtro.img} alt={filtro.nome} />
          </div>

          <div className="filtro-info">
            <div className="filtro-tags">
              {filtro.tags.map((tag) => <span key={tag} className="filtro-tag">{tag}</span>)}
            </div>

            <h2>{filtro.nome}</h2>
            <p className="filtro-subtitulo">{filtro.subtitulo}</p>
            <div className="filtro-divider" />

            <div className="filtro-preco-bloco">
              <span className="filtro-preco">{filtro.preco}</span>
              <span className="filtro-preco-parcelado">{filtro.parcelas}</span>
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
                {comprando ? "✓ Pedido enviado!" : "Comprar agora"}
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