import React, { useState, useEffect } from "react";
import Navbar from "./componentes/Navbar/Navbar.jsx";
import Home from "./componentes/Home/Home.jsx";
import SandaliasPage from "./componentes/Sandalias/SandaliasPage.jsx";
import ProductPage from "./componentes/Produto/ProductPage.jsx";
import OleosLista from "./componentes/Oleos/OleosLista.jsx";
import OleoPage from "./componentes/Oleos/OleoPage.jsx";
import PurificadoresLista from "./componentes/Filtros/PurificadoresLista.jsx";
import FiltroPage from "./componentes/Filtros/FiltroPage.jsx";
import CarrinhoPage from "./componentes/Carrinho/CarrinhoPage.jsx";
import Footer from "./componentes/Footer/Footer.jsx";
import WhatsAppButton from "./componentes/WhatsApp/WhatsAppButton.jsx";

import "./App.css";

function App() {
  const [pagina, setPagina] = useState("home");
  const [linkAtivo, setLinkAtivo] = useState("home");
  const [produtoAtual, setProdutoAtual] = useState(null);
  const [origemProduto, setOrigemProduto] = useState("home");
  const [carrinho, setCarrinho] = useState([]);

  const navegar = (destino) => {
    const linkMap = { home: "home", oleo: "oleo", filtros: "filtros", sandalias: "sandalias" };
    if (linkMap[destino] !== undefined) setLinkAtivo(linkMap[destino]);
    setPagina(destino);
  };

  const adicionarAoCarrinho = (produto, quantidade = 1, tamanho = null) => {
    setCarrinho(prev => {
      const existente = prev.find(
        item => item.produtoId === produto.id && item.tamanho === tamanho
      );
      if (existente) {
        return prev.map(item =>
          item.produtoId === produto.id && item.tamanho === tamanho
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        );
      }
      return [...prev, {
        id: Date.now() + Math.random(),
        produtoId: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        img: produto.img,
        categoria: produto.categoria || '',
        quantidade,
        tamanho,
      }];
    });
  };

  const removerDoCarrinho = (itemId) => {
    setCarrinho(prev => prev.filter(item => item.id !== itemId));
  };

  const atualizarQuantidade = (itemId, novaQtd) => {
    if (novaQtd < 1) return;
    setCarrinho(prev =>
      prev.map(item => item.id === itemId ? { ...item, quantidade: novaQtd } : item)
    );
  };

  const limparCarrinho = () => setCarrinho([]);

  const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0);

  const navegarParaProduto = (produto, origem = "home") => {
    setProdutoAtual(produto);
    setOrigemProduto(origem);
    setPagina("produto");
  };

  const navegarParaOleo = (produto) => {
    setProdutoAtual(produto);
    setPagina("oleo-detalhe");
  };

  const navegarParaFiltro = (produto) => {
    setProdutoAtual(produto);
    setPagina("filtro-detalhe");
  };

  const irParaCarrinho = () => {
    setPagina("carrinho");
    setLinkAtivo("");
  };

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pagina]);

  const renderPagina = () => {
    if (pagina === "home") {
      return (
        <Home
          setPagina={navegar}
          setLinkAtivo={setLinkAtivo}
          navegarParaProduto={navegarParaProduto}
          navegarParaOleo={navegarParaOleo}
          navegarParaFiltro={navegarParaFiltro}
        />
      );
    }
    if (pagina === "produto") {
      const voltarTexto =
        origemProduto === "sandalias" ? "← Voltar às sandálias" : "← Voltar ao início";
      return (
        <ProductPage
          product={produtoAtual}
          voltarFn={() => navegar(origemProduto)}
          voltarTexto={voltarTexto}
          adicionarAoCarrinho={adicionarAoCarrinho}
          irParaCarrinho={irParaCarrinho}
        />
      );
    }
    if (pagina === "oleo") {
      return (
        <OleosLista
          navegarParaOleo={navegarParaOleo}
          setPagina={navegar}
        />
      );
    }
    if (pagina === "oleo-detalhe") {
      return (
        <OleoPage
          produtoSelecionado={produtoAtual}
          adicionarAoCarrinho={adicionarAoCarrinho}
          irParaCarrinho={irParaCarrinho}
          setPagina={(p) => navegar(p === "home" ? "oleo" : p)}
        />
      );
    }
    if (pagina === "filtros") {
      return (
        <PurificadoresLista
          navegarParaFiltro={navegarParaFiltro}
          setPagina={navegar}
        />
      );
    }
    if (pagina === "filtro-detalhe") {
      return (
        <FiltroPage
          produtoSelecionado={produtoAtual}
          adicionarAoCarrinho={adicionarAoCarrinho}
          irParaCarrinho={irParaCarrinho}
          setPagina={(p) => navegar(p === "home" ? "filtros" : p)}
        />
      );
    }
    if (pagina === "sandalias") {
      return (
        <SandaliasPage
          setPagina={navegar}
          setLinkAtivo={setLinkAtivo}
          navegarParaProduto={(produto) => navegarParaProduto(produto, "sandalias")}
          adicionarAoCarrinho={adicionarAoCarrinho}
          irParaCarrinho={irParaCarrinho}
        />
      );
    }
    if (pagina === "carrinho") {
      return (
        <CarrinhoPage
          carrinho={carrinho}
          removerDoCarrinho={removerDoCarrinho}
          atualizarQuantidade={atualizarQuantidade}
          limparCarrinho={limparCarrinho}
          setPagina={setPagina}
          setLinkAtivo={setLinkAtivo}
        />
      );
    }
    return null;
  };

  return (
    <div className="App">
      <Navbar
        paginaAtual={pagina}
        setPagina={setPagina}
        linkAtivo={linkAtivo}
        setLinkAtivo={setLinkAtivo}
        totalItens={totalItens}
        irParaCarrinho={irParaCarrinho}
      />
      <main>{renderPagina()}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;