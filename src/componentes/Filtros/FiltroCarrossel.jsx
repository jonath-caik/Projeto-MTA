import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProductCarousel.css';

const purificadores = [
  { id: 1, title: 'Purificador Azul — 1 Filtro',   img: '/fotos/purificador/purificador_agua_natural/purificador3.png' },
  { id: 2, title: 'Purificador Preto — 2 Filtros',  img: '/fotos/purificador/purificador_bebedouro/purificador4.png' },
  { id: 3, title: 'Purificador Branco — 2 Filtros', img: '/fotos/purificador/purificador_agua_natural/purificador5.png' },
  { id: 4, title: 'Purificador Preto — 1 Filtro',   img: '/fotos/purificador/purificador_agua_natural/purificador4.png' },
  { id: 5, title: 'Purificador Branco — 1 Filtro',  img: '/fotos/purificador/purificador_agua_natural/purificador2.png' },
];

const FiltroCarousel = ({ setPagina, setProdutoFiltro }) => {
  const handleVerDetalhes = (filtro) => {
    if (setProdutoFiltro) setProdutoFiltro(filtro);
    setPagina('pagina-do-filtro');
  };

  return (
    <section className="carousel-section" id="filtros">
      <h2 className="carousel-title">Nossos Purificadores</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        className="mySwiper"
      >
        {purificadores.map((filtro) => (
          <SwiperSlide key={filtro.id}>
            <div className="product-card-carousel">
              <div className="product-img-container">
                <img src={filtro.img} alt={filtro.title} />
              </div>
              <div className="product-info-carousel">
                <h3>{filtro.title}</h3>
                <button className="btn-buy" onClick={() => handleVerDetalhes(filtro)}>
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

export default FiltroCarousel;