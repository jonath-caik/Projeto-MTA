import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      
      {/* Logo e Frase Centralizados no Topo */}
      <div className="footer-logo-container">
        <img 
          src="/logo interna do portifólio.svg" 
          alt="NoaBemEstar Logo" 
          className="footer-logo" 
        />
        <p className="footer-description">
          Sua plataforma de saúde e bem-estar. Oferecemos os melhores produtos para cuidar de você e da sua família com qualidade e confiança. Venha Ter Qualidade De Vida Com Neabemstar!
        </p>
      </div>

      <div className="footer-content">
        {/* Coluna 1: Links Rápidos */}
        <div className="footer-section links">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="#produtos">Sandálias Ortopédicas</a></li>
            <li><a href="#oleo">Óleos Essenciais</a></li>
            <li><a href="#filtros">Purificadores de Água</a></li>
          </ul>
        </div>

        {/* Coluna 2: Contato */}
        <div className="footer-section contact">
          <h3>Fale Conosco</h3>
          <p><span>📍</span> Salvador, Bahia - Brasil</p>
          <p><span>📞</span> (71) 99999-9999</p>
          <p><span>✉️</span> contato@noabemestar.com.br</p>
        </div>
      </div>

      {/* Faixa inferior de Direitos Autorais */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NoaBemEstar. Todos os direitos reservados.</p>
        <p>Desenvolvido com 💙 por Jonath Caik</p>
      </div>
    </footer>
  );
};

export default Footer;