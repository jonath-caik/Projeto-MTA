import React, { useState, useEffect } from "react";
import Navbar from "./componentes/Navbar/Navbar.jsx";
import Home from "./componentes/Home/Home.jsx";
import SandaliasPage from "./componentes/Sandalias/SandaliasPage.jsx";
import Footer from "./componentes/Footer/Footer.jsx"; // <-- 1. Importamos o Footer aqui
import "./App.css";

function App() {
  const [pagina, setPagina] = useState("home");
  const [linkAtivo, setLinkAtivo] = useState("home");

  // CÓDIGO PARA FORÇAR O TOPO SEMPRE QUE ATUALIZAR
  useEffect(() => {
    // 1. Desliga a memória de scroll do navegador
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // 2. Joga a tela pro topo absoluto (eixo X: 0, eixo Y: 0)
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Navbar
        paginaAtual={pagina}
        setPagina={setPagina}
        linkAtivo={linkAtivo}
        setLinkAtivo={setLinkAtivo}
      />
      {pagina === "home" ? (
        <Home setPagina={setPagina} setLinkAtivo={setLinkAtivo} />
      ) : (
        <SandaliasPage setPagina={setPagina} setLinkAtivo={setLinkAtivo} />
      )}
      
      {/* 2. Colocamos o Footer aqui no final! */}
      <Footer /> 
    </div>
  );
}

export default App;