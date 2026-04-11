import React, { useState } from "react";
import Navbar from "./componentes/Navbar/Navbar.jsx";
import Home from "./componentes/Home/Home.jsx";
import SandaliasPage from "./componentes/Sandalias/SandaliasPage.jsx";
import "./App.css";

function App() {
  const [pagina, setPagina] = useState("home");
  const [linkAtivo, setLinkAtivo] = useState("home");

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
    </div>
  );
}

export default App;