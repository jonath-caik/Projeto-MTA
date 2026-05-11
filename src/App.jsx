import React, { useState, useEffect } from "react";
import Navbar from "./componentes/Navbar/Navbar.jsx";
import Home from "./componentes/Home/Home.jsx";
import SandaliasPage from "./componentes/Sandalias/SandaliasPage.jsx";
import Footer from "./componentes/Footer/Footer.jsx";
import "./App.css";

function App() {
  const [pagina, setPagina] = useState("home");
  const [linkAtivo, setLinkAtivo] = useState("home");

  // Ajuste: O scroll agora acontece sempre que você trocar de página
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pagina]); // <-- Adicionamos [pagina] aqui como dependência

  return (
    <div className="App">
      <Navbar
        paginaAtual={pagina}
        setPagina={setPagina}
        linkAtivo={linkAtivo}
        setLinkAtivo={setLinkAtivo}
      />

      <main>
        {pagina === "home" ? (
          <Home setPagina={setPagina} setLinkAtivo={setLinkAtivo} />
        ) : (
          <SandaliasPage setPagina={setPagina} setLinkAtivo={setLinkAtivo} />
        )}
      </main>
      
      <Footer /> 
    </div>
  );
}

export default App;