import React from "react";
import Navbar from "./componentes/Navbar/Navbar.jsx"; 
import Home from "./componentes/Home/Home.jsx";
import "./App.css";
import ProductCarousel from './componentes/Carrossel/ProductCarousel';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home /> {/* <--- AQUI: Chamando a Home para aparecer abaixo da Navbar */}
    </div>
  );
}

export default App;