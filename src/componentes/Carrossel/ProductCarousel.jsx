import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProductCarousel.css';
import { outrosProdutos } from '../../dados/produtos';

const filtroPurific = outrosProdutos.find((p) => p.slug === 'filtro-purific');
const kitDoTERRA = outrosProdutos.find((p) => p.slug === 'kit-bem-estar-doterra');

const ProductCarousel = ({ setPagina, navegarParaProduto }) => {
  const products = [
    { id: 1, title: filtroPurific.nome, img: filtroPurific.img, acao: () => navegarParaProduto(filtroPurific) },
    { id: 2, title: 'Sandália Ortopédica "couro"',  img: '/sandalia ce couro.jpg',           acao: () => setPagina('sandalias') },
    { id: 3, title: 'Sandália Ortopédica "vazada"', img: '/sandaliavazada.jpeg',              acao: () => setPagina('sandalias') },
    { id: 4, title: 'Filtro Purific - Preto',        img: '/purificador3.png',                acao: () => navegarParaProduto(filtroPurific) },
    { id: 5, title: kitDoTERRA.nome,                 img: kitDoTERRA.img,                     acao: () => navegarParaProduto(kitDoTERRA) },
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