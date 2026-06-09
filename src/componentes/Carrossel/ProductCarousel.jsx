import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProductCarousel.css';
import { outrosProdutos, purificadores, sandalias } from '../../dados/produtos';

const filtroPurific    = outrosProdutos.find((p) => p.slug === 'filtro-purific');
const kitDoTERRA       = outrosProdutos.find((p) => p.slug === 'kit-bem-estar-doterra');
const purificadorPreto = purificadores.find((p) => p.slug === 'purificador-alcalinum-6l-bancada');
const sandaliasCouro   = sandalias.find((p) => p.slug === 'sandalia-ortopedica-couro');
const sandaliasVazada  = sandalias.find((p) => p.slug === 'sandalia-ortopedica-vazada');

const ProductCarousel = ({ navegarParaProduto }) => {
  const products = [
    { id: 1, title: filtroPurific.nome,    img: filtroPurific.img,    acao: () => navegarParaProduto(filtroPurific) },
    { id: 2, title: sandaliasCouro.nome,   img: sandaliasCouro.img,   acao: () => navegarParaProduto(sandaliasCouro) },
    { id: 3, title: sandaliasVazada.nome,  img: sandaliasVazada.img,  acao: () => navegarParaProduto(sandaliasVazada) },
    { id: 4, title: purificadorPreto.nome, img: purificadorPreto.img, acao: () => navegarParaProduto(purificadorPreto) },
    { id: 5, title: kitDoTERRA.nome,       img: kitDoTERRA.img,       acao: () => navegarParaProduto(kitDoTERRA) },
  ];

  return (
    <section className="carousel-section" id="produtos">
    
      <h2 className="carousel-title">Nossos Destaques</h2>

  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    navigation={true}
    pagination={{ clickable: true }}
    loop={true} 
    speed={800} /* Mudamos de 4000 para 800 (desliza rápido) */
    autoplay={{ 
      delay: 3000, /* Ele fica parado 3 segundos antes de passar o próximo */
      disableOnInteraction: false, 
      pauseOnMouseEnter: true /* Agora ele congela na hora! */
    }} 
    breakpoints={{
      768:  { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
        className="mySwiper"
        >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card-carousel">
              <div className="product-img-container">
                <img src={product.img} alt={product.title} />
              </div>
              <div className="product-info-carousel">
                <h3>{product.title}</h3>
                <button
                  className="btn-buy"
                  onClick={product.acao}
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductCarousel;