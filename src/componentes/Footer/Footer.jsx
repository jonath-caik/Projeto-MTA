import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* COLUNA 1 (ESQUERDA): Links Rápidos */}
        <div className="footer-section links">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="#produtos">Sandálias Ortopédicas</a></li>
            <li><a href="#oleo">Óleos Essenciais</a></li>
            <li><a href="#filtros">Purificadores de Água</a></li>
          </ul>
        </div>

        {/* COLUNA 2 (CENTRO): Logo e Frase */}
        <div className="footer-section brand">
          <img 
            src="/logo interna do portifólio.svg" 
            alt="NoaBemEstar Logo" 
            className="footer-logo" 
          />
          <p className="footer-description">
            Sua plataforma de saúde e bem-estar. Oferecemos os melhores produtos para cuidar de você e da sua família com qualidade e confiança. Venha Ter Qualidade De Vida Com NeabemEstar!
          </p>
        </div>

        {/* COLUNA 3 (DIREITA): Contato */}
        <div className="footer-section contact">
          <h3>Fale Conosco</h3>
          <p><span>📍</span> Salvador, Bahia - Brasil</p>
          <p><span>📞</span> (71) 99999-9999</p>
          <p><span>✉️</span> @NeaBemestar.com.br</p>
        </div>
        
      </div>

      {/* Faixa inferior de Direitos Autorais */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NeaBemEstar. Todos os direitos reservados.</p>
                   <p>Desenvolvido Com ☕ e Com Muito ❤️</p> Equipe De Desenvolvimento: @alexandre_lima660 | @cordeiro_.mariana | @hpzin.xp | @jonath.caik  .
      </div>
    </footer>
  );
};

export default Footer;