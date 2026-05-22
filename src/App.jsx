import React, { useState, useEffect } from "react";
import Navbar from "./componentes/Navbar/Navbar.jsx";
import Home from "./componentes/Home/Home.jsx";
import SandaliasPage from "./componentes/Sandalias/SandaliasPage.jsx";
import ProductPage from "./componentes/Produto/ProductPage.jsx";
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
        />
      );
    }
    if (pagina === "produto") {
      return <ProductPage product={produtoAtual} setPagina={setPagina} />;
    }
    return <SandaliasPage setPagina={setPagina} setLinkAtivo={setLinkAtivo} navegarParaProduto={navegarParaProduto} />;
  };

  return (
    <div className="App">
      <Navbar
        paginaAtual={pagina}
        setPagina={setPagina}
        linkAtivo={linkAtivo}
        setLinkAtivo={setLinkAtivo}
      />

      <main>
        {renderPagina()}
      </main>

      <Footer />

      
      <WhatsAppButton />
      
    </div>
  );
}

export default App;