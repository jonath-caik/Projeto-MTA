import React from "react";
import "./CarrinhoPage.css";

const WHATSAPP_NUM = "5571981238344";

const parsePreco = (str) =>
  parseFloat(str.replace("R$", "").trim().replace(/\./g, "").replace(",", ".")) || 0;

const formatPreco = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const buildWhatsAppMessage = (carrinho) => {
  let msg = "🛒 *Pedido NeaBemEstar*\n\n";
  carrinho.forEach((item, i) => {
    msg += `${i + 1}. *${item.nome}*\n`;
    if (item.tamanho) msg += `   Tamanho: ${item.tamanho}\n`;
    msg += `   Qtd: ${item.quantidade}x — ${item.preco} cada\n\n`;
  });
  const total = carrinho.reduce(
    (sum, item) => sum + parsePreco(item.preco) * item.quantidade,
    0
  );
  msg += `*Total estimado: ${formatPreco(total)}*\n\n`;
  msg += "Olá! Gostaria de finalizar este pedido. Por favor, me informe sobre disponibilidade e formas de pagamento!";
  return encodeURIComponent(msg);
};

function CarrinhoPage({
  carrinho,
  removerDoCarrinho,
  atualizarQuantidade,
  limparCarrinho,
  setPagina,
  setLinkAtivo,
}) {
  const total = carrinho.reduce(
    (sum, item) => sum + parsePreco(item.preco) * item.quantidade,
    0
  );

  const finalizarPedido = () => {
    const msg = buildWhatsAppMessage(carrinho);
    window.open(`https://wa.me/${WHATSAPP_NUM}?text=${msg}`, "_blank");
  };

  const voltar = () => {
    setPagina("home");
    setLinkAtivo("home");
  };

  return (
    <div className="carrinho-page">
      <section className="carrinho-hero">
        <div className="carrinho-hero-content">
          <p className="carrinho-subtag">NeaBemEstar</p>
          <h1>Meu Carrinho</h1>
          <button className="btn-voltar" onClick={voltar}>
            ← Continuar comprando
          </button>
        </div>
      </section>

      <section className="carrinho-main">
        {carrinho.length === 0 ? (
          <div className="carrinho-vazio">
            <span className="carrinho-vazio-icon">🛒</span>
            <h2>Seu carrinho está vazio</h2>
            <p>Explore nossos produtos e adicione ao carrinho para finalizar seu pedido.</p>
            <button className="btn-explorar" onClick={voltar}>
              Explorar produtos
            </button>
          </div>
        ) : (
          <div className="carrinho-layout">
            <div className="carrinho-itens">
              <div className="carrinho-itens-header">
                <h2>Itens do pedido ({carrinho.length})</h2>
                <button className="btn-limpar" onClick={limparCarrinho}>
                  Limpar carrinho
                </button>
              </div>

              {carrinho.map((item) => (
                <div className="carrinho-item" key={item.id}>
                  <div className="carrinho-item-img">
                    <img src={item.img} alt={item.nome} />
                  </div>
                  <div className="carrinho-item-info">
                    <p className="item-categoria">{item.categoria}</p>
                    <h3 className="item-nome">{item.nome}</h3>
                    {item.tamanho && (
                      <p className="item-tamanho">Tamanho: {item.tamanho}</p>
                    )}
                    <p className="item-preco-unit">{item.preco} cada</p>
                  </div>
                  <div className="carrinho-item-controles">
                    <div className="qty-controle">
                      <button
                        className="qty-btn"
                        onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)}
                      >
                        −
                      </button>
                      <span className="qty-num">{item.quantidade}</span>
                      <button
                        className="qty-btn"
                        onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}
                      >
                        +
                      </button>
                    </div>
                    <p className="item-preco-total">
                      {formatPreco(parsePreco(item.preco) * item.quantidade)}
                    </p>
                    <button
                      className="btn-remover"
                      onClick={() => removerDoCarrinho(item.id)}
                      title="Remover item"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="carrinho-resumo">
              <h2>Resumo do pedido</h2>
              <div className="resumo-linha">
                <span>Subtotal</span>
                <span>{formatPreco(total)}</span>
              </div>
              <div className="resumo-linha resumo-frete">
                <span>Frete</span>
                <span>A combinar</span>
              </div>
              <div className="resumo-divider" />
              <div className="resumo-linha resumo-total">
                <span>Total estimado</span>
                <span>{formatPreco(total)}</span>
              </div>

              <button className="btn-finalizar" onClick={finalizarPedido}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Finalizar pedido via WhatsApp
              </button>

              <button className="btn-continuar" onClick={voltar}>
                ← Continuar comprando
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default CarrinhoPage;
