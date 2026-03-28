import React from "react";
// Importa o React (necessário para usar JSX)

import ReactDOM from "react-dom/client";
// Importa o ReactDOM moderno (React 18+)

import App from "./App.jsx";
// Importa o componente principal da aplicação

import "./index.css";
// Importa o CSS global (aplicado em todo o projeto)

ReactDOM.createRoot(document.getElementById("root")).render(
  // Cria a raiz da aplicação React dentro da div com id="root" no HTML

  <React.StrictMode>
    {/* Modo estrito:
        - Ajuda a identificar problemas no código
        - Executa verificações extras (só em desenvolvimento)
    */}

    <App />
    {/* Renderiza o componente principal da aplicação */}

  </React.StrictMode>,
  // Fecha o StrictMode
);