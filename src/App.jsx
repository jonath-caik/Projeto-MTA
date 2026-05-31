import React, { useState, useEffect } from "react";
import Navbar from "./componentes/Navbar/Navbar.jsx";
import Home from "./componentes/Home/Home.jsx";
import SandaliasPage from "./componentes/Sandalias/SandaliasPage.jsx";
import ProductPage from "./componentes/Produto/ProductPage.jsx";
import OleosLista from "./componentes/Oleos/OleosLista.jsx";
import OleoPage from "./componentes/Oleos/OleoPage.jsx";
import PurificadoresLista from "./componentes/Filtros/PurificadoresLista.jsx";
import FiltroPage from "./componentes/Filtros/FiltroPage.jsx";
import Footer from "./componentes/Footer/Footer.jsx";
import WhatsAppButton from "./componentes/WhatsApp/WhatsAppButton.jsx";

import "./App.css";

function App() {
  const [pagina, setPagina] = useState("home");
  const [linkAtivo, setLinkAtivo] = useState("home");
  const [produtoAtual, setProdutoAtual] = useState(null);

  const navegarParaProduto = (produto) => {
    setProdutoAtual(produto);
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
          setPagina={setPagina}
          setLinkAtivo={setLinkAtivo}
          navegarParaProduto={navegarParaProduto}
          navegarParaOleo={navegarParaOleo}
          navegarParaFiltro={navegarParaFiltro}
        />
      );
    }
    if (pagina === "produto") {
      return <ProductPage product={produtoAtual} setPagina={setPagina} />;
    }
    if (pagina === "oleo") {
      return (
        <OleosLista
          navegarParaOleo={navegarParaOleo}
          setPagina={setPagina}
        />
      );
    }
    if (pagina === "oleo-detalhe") {
      return (
        <OleoPage
          produtoSelecionado={produtoAtual}
          setPagina={(p) => {
            if (p === "home") setPagina("oleo");
            else setPagina(p);
          }}
        />
      );
    }
    if (pagina === "filtros") {
      return (
        <PurificadoresLista
          navegarParaFiltro={navegarParaFiltro}
          setPagina={setPagina}
        />
      );
    }
    if (pagina === "filtro-detalhe") {
      return (
        <FiltroPage
          produtoSelecionado={produtoAtual}
          setPagina={(p) => {
            if (p === "home") setPagina("filtros");
            else setPagina(p);
          }}
        />
      );
    }
    if (pagina === "sandalias") {
      return (
        <SandaliasPage
          setPagina={setPagina}
          setLinkAtivo={setLinkAtivo}
          navegarParaProduto={navegarParaProduto}
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
      />
      <main>{renderPagina()}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;