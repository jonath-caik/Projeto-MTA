import React from 'react';
import './Footer.css';

const Footer = ({ setPagina, setLinkAtivo }) => {

  // Funções que imitam perfeitamente o comportamento do Navbar (Abrem a página cheia)
  const irParaSandalias = (e) => {
    e.preventDefault();
    setPagina("sandalias");
    setLinkAtivo("sandalias");
    window.scrollTo({ top: 0, behavior: "smooth" }); // Rola pro topo para o usuário ver o início da página nova
  };

  const irParaOleo = (e) => {
    e.preventDefault();
    setPagina("oleo");
    setLinkAtivo("oleo");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const irParaFiltros = (e) => {
    e.preventDefault();
    setPagina("filtros");
    setLinkAtivo("filtros");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const irParaInicio = (e) => {
    e.preventDefault();
    setPagina("home");
    setLinkAtivo("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* COLUNA 1 (ESQUERDA): Links Rápidos abrindo as páginas completas de cada categoria */}
        <div className="footer-section links">
          <h3>Links Rápidos</h3>
          <ul>
            <li>
              <a href="#" onClick={irParaSandalias}>Sandálias Ortopédicas</a>
            </li>
            <li>
              <a href="#" onClick={irParaOleo}>Óleos Essenciais</a>
            </li>
            <li>
              <a href="#" onClick={irParaFiltros}>Purificadores de Água</a>
            </li>
          </ul>
        </div>

        {/* COLUNA 2 (CENTRO): Logo e Frase */}
        <div className="footer-section brand">
          <img 
            src="/fotos/logos/logo.svg"
            alt="NoaBemEstar Logo" 
            className="footer-logo" 
            onClick={irParaInicio}
            style={{ cursor: 'pointer' }}
          />
          <p className="footer-description">
            Sua plataforma de saúde e bem-estar. Oferecemos os melhores produtos para cuidar de você e da sua família com qualidade e confiança. Venha Ter Qualidade De Vida Com NeabemEstar!
          </p>
        </div>

        {/* COLUNA 3 (DIREITA): Contato */}
        <div className="footer-section contact">
          <h3>Fale Conosco</h3>
          <p><span>📍</span> Salvador | Dias D'ávila, Bahia - Brasil</p>
          <p><span>📞</span> <a href="https://wa.me/5571981238344" target="_blank" rel="noopener noreferrer"> Click Aqui Contato NeaBemEstar</a></p>
          <p><span>✉️</span> @NeaBemestar.com.br</p>
        </div>
        
      </div>

      {/* Faixa inferior de Direitos Autorais e Créditos */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NeaBemEstar. Todos os direitos reservados.</p>
        <br />
        <p>Desenvolvido Com ☕ e Com Muito ❤️</p>
        <p>
          Equipe De Desenvolvimento: @alexandre_lima660 | @cordeiro_.mariana | @hpzin.xp | @jonath.caik |
        </p>
      </div>
    </footer>
  );
};

export default Footer;