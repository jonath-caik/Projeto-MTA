import React, { useState } from 'react';
import './ProductPage.css';

function ProductPage({ product, setPagina }) {
  const [quantidade, setQuantidade] = useState(1);
  const [adicionado, setAdicionado] = useState(false);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);

  const handleAdicionar = () => {
    if (product.tamanhos && !tamanhoSelecionado) return;
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 2000);
  };

  const diminuir = () => setQuantidade((q) => Math.max(1, q - 1));
  const aumentar = () => setQuantidade((q) => q + 1);

  if (!product) return null;

  return (
    <div className="product-page">

      <section className="pp-hero">
        <div className="pp-hero-content">
          <p className="pp-subtitle-tag">NeaBemEstar</p>
          <h1>{product.nome}</h1>
          <button className="btn-voltar" onClick={() => setPagina('sandalias')}>
            ← Voltar às sandálias
          </button>
        </div>
      </section>

      <section className="pp-main">
        <div className="pp-container">

          <div className="pp-image-wrapper">
            <img src={product.img} alt={product.nome} className="pp-image" />
          </div>

          <div className="pp-info">

            <div className="pp-tags">
              {product.tags.map((tag) => (
                <span key={tag} className="pp-tag">{tag}</span>
              ))}
            </div>

            <p className="pp-categoria">{product.categoria}</p>
            <h2 className="pp-nome">{product.nome}</h2>
            <p className="pp-descricao">{product.descricao}</p>

            <div className="pp-preco-bloco">
              <span className="pp-preco">{product.preco}</span>
              <span className="pp-parcelamento">{product.parcelamento}</span>
            </div>

            <div className="pp-beneficios">
              <h4>Benefícios</h4>
              <ul>
                {product.beneficios.map((beneficio, index) => (
                  <li key={index}>
                    <span className="pp-check">✓</span>
                    {beneficio}
                  </li>
                ))}
              </ul>
            </div>

            {product.tamanhos && (
              <div className="pp-tamanhos">
                <h4>Tamanho:</h4>
                <div className="pp-tamanhos-grid">
                  {product.tamanhos.map((tam) => (
                    <button
                      key={tam}
                      className={`pp-tam-btn ${tamanhoSelecionado === tam ? 'selecionado' : ''}`}
                      onClick={() => setTamanhoSelecionado(tam)}
                    >
                      {tam}
                    </button>
                  ))}
                </div>
                {!tamanhoSelecionado && (
                  <p className="pp-tam-aviso">Selecione um tamanho para continuar</p>
                )}
              </div>
            )}

            <div className="pp-quantidade">
              <span>Quantidade:</span>
              <div className="pp-qty-controls">
                <button className="pp-qty-btn" onClick={diminuir}>−</button>
                <span className="pp-qty-num">{quantidade}</span>
                <button className="pp-qty-btn" onClick={aumentar}>+</button>
              </div>
            </div>

            <div className="pp-acoes">
              <button
                className={`pp-btn-carrinho ${adicionado ? 'adicionado' : ''}`}
                onClick={handleAdicionar}
                disabled={product.tamanhos && !tamanhoSelecionado}
                style={{ opacity: product.tamanhos && !tamanhoSelecionado ? 0.5 : 1 }}
              >
                {adicionado ? '✓ Adicionado!' : 'Adicionar ao Carrinho'}
              </button>
              <button className="pp-btn-comprar">
                Comprar Agora
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default ProductPage;