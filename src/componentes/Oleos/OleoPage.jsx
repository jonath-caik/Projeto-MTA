import React, { useState } from "react";
import "./OleoPage.css";

const oleosDetalhes = {
  1: {
    nome: "Óleo Essencial Bergamota",
    subtitulo: "Aroma cítrico e refrescante, ideal para equilíbrio emocional e bem-estar.",
    preco: "R$ 89,90",
    parcelas: "3x de R$ 29,96 sem juros",
    img: "/fotos/oleos/aromas_naturais/bergamot.png",
    tags: ["doTERRA", "100% Puro", "Cítrico"],
    beneficios: [
      "Reduz ansiedade e estresse",
      "Promove sensação de calma e alegria",
      "Purifica e limpa a pele",
      "Ideal para aromaterapia e difusores",
    ],
    comoUsar: [
      { icon: "💨", titulo: "Difusor", desc: "3–4 gotas no difusor para ambientar qualquer espaço." },
      { icon: "🖐️", titulo: "Tópico", desc: "Dilua com óleo carreador e aplique na pele." },
      { icon: "🛁", titulo: "Banho", desc: "Adicione gotas no banho para relaxamento profundo." },
      { icon: "🌿", titulo: "Inalação", desc: "Respire diretamente do frasco para alívio imediato." },
    ],
  },
  2: {
    nome: "Óleo Essencial Pimenta Preta",
    subtitulo: "Estimulante e aquecedor, perfeito para circulação e desconforto muscular.",
    preco: "R$ 94,90",
    parcelas: "3x de R$ 31,63 sem juros",
    img: "/fotos/oleos/aromas_naturais/black_pepper.png",
    tags: ["doTERRA", "100% Puro", "Estimulante"],
    beneficios: [
      "Estimula a circulação sanguínea",
      "Alivia tensão e desconforto muscular",
      "Apoia a digestão saudável",
      "Aroma quente e levemente picante",
    ],
    comoUsar: [
      { icon: "💨", titulo: "Difusor", desc: "2–3 gotas para um ambiente aquecedor e energizante." },
      { icon: "🖐️", titulo: "Massagem", desc: "Dilua e massageie em áreas de tensão muscular." },
      { icon: "🍽️", titulo: "Culinário", desc: "1 gota em receitas para sabor e digestão." },
      { icon: "🌿", titulo: "Inalação", desc: "Inalação direta para foco e energia." },
    ],
  },
  3: {
    nome: "Óleo Essencial Brasil",
    subtitulo: "Blend exclusivo inspirado na riqueza natural da flora brasileira.",
    preco: "R$ 99,90",
    parcelas: "3x de R$ 33,30 sem juros",
    img: "/fotos/oleos/aromas_naturais/brasil.png",
    tags: ["doTERRA", "Blend Exclusivo", "Flora Brasileira"],
    beneficios: [
      "Aroma único inspirado no Brasil",
      "Promove bem-estar e equilíbrio",
      "Combina óleos nativos brasileiros",
      "Perfeito para meditação e relaxamento",
    ],
    comoUsar: [
      { icon: "💨", titulo: "Difusor", desc: "4 gotas para um ambiente tropical e envolvente." },
      { icon: "🧘", titulo: "Meditação", desc: "Use durante práticas de meditação e yoga." },
      { icon: "🛁", titulo: "Banho", desc: "Adicione ao banho para uma experiência sensorial única." },
      { icon: "🌿", titulo: "Ambiente", desc: "Pulverize diluído como aromatizador natural." },
    ],
  },
  4: {
    nome: "Óleo Essencial Cardamomo",
    subtitulo: "Doce e especiado, excelente para digestão e respiração saudável.",
    preco: "R$ 109,90",
    parcelas: "3x de R$ 36,63 sem juros",
    img: "/fotos/oleos/aromas_naturais/cardamom.png",
    tags: ["doTERRA", "100% Puro", "Digestivo"],
    beneficios: [
      "Apoia a saúde digestiva",
      "Promove respiração limpa e fácil",
      "Aroma doce, quente e especiado",
      "Propriedades anti-inflamatórias naturais",
    ],
    comoUsar: [
      { icon: "💨", titulo: "Difusor", desc: "3 gotas para um aroma quente e acolhedor." },
      { icon: "🍽️", titulo: "Culinário", desc: "1 gota em chás, cafés e sobremesas." },
      { icon: "🖐️", titulo: "Tópico", desc: "Aplique diluído no abdômen para suporte digestivo." },
      { icon: "🌿", titulo: "Inalação", desc: "Inalação direta para clareza respiratória." },
    ],
  },
  5: {
    nome: "Óleo Essencial Cassia",
    subtitulo: "Similar à canela, com propriedades quentes e estimulantes do bem-estar.",
    preco: "R$ 79,90",
    parcelas: "3x de R$ 26,63 sem juros",
    img: "/fotos/oleos/aromas_naturais/cassia.png",
    tags: ["doTERRA", "100% Puro", "Aquecedor"],
    beneficios: [
      "Propriedades quentes e reconfortantes",
      "Apoia a resposta imunológica natural",
      "Aroma doce e picante semelhante à canela",
      "Estimula a circulação",
    ],
    comoUsar: [
      { icon: "💨", titulo: "Difusor", desc: "2 gotas para um ambiente aconchegante no inverno." },
      { icon: "🍽️", titulo: "Culinário", desc: "1 gota em receitas que pedem canela." },
      { icon: "🖐️", titulo: "Tópico", desc: "Dilua bastante antes de aplicar na pele." },
      { icon: "🛁", titulo: "Banho", desc: "2 gotas no banho para aquecimento corporal." },
    ],
  },
};

const oleoDefault = oleosDetalhes[1];

function OleoPage({ setPagina, produtoSelecionado }) {
  const oleo = (produtoSelecionado && oleosDetalhes[produtoSelecionado.id]) || oleoDefault;
  const [quantidade, setQuantidade] = useState(1);
  const [adicionado, setAdicionado] = useState(false);
  const [comprando, setComprando] = useState(false);

  const handleAddCarrinho = () => {
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 2500);
  };

  const handleComprar = () => {
    setComprando(true);
    setTimeout(() => setComprando(false), 2500);
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
        {/* CONTAINER FLEX PAI */}
        <div className="oleo-detalhe">
          
          {/* COLUNA ESQUERDA: ENCAPSULA A IMAGEM E AS TAGS LOGO ABAIXO (IGUAL À SANDÁLIA) */}
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

          {/* COLUNA DIREITA: CONCENTRA TODAS AS INFORMAÇÕES DE COMPRA LADO A LADO */}
          <div className="oleo-info">
            <h2>{oleo.nome}</h2>
            <p className="oleo-subtitulo">{oleo.subtitulo}</p>
            <div className="oleo-divider" />

            <div className="oleo-preco-bloco">
              <span className="oleo-preco">{oleo.preco}</span>
              <span className="oleo-preco-parcelado">{oleo.parcelas}</span>
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
                {comprando ? "✓ Pedido enviado!" : "Comprar agora"}
              </button>
            </div>
          </div>

        </div>

        {/* SEÇÃO INFERIOR: COMO UTILIZAR EM GRID */}
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