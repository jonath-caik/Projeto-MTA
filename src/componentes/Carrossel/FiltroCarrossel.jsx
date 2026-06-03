import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProductCarousel.css';
import { purificadores } from '../../dados/produtos';

const FiltroCarousel = ({ navegarParaFiltro }) => {
  return (
    <section className="carousel-section" id="filtros">
      <h2 className="carousel-title">Nossos Purificadores</h2>

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
        {purificadores.map((filtro) => (
          <SwiperSlide key={filtro.id}>
            <div className="product-card-carousel">
              <div className="product-img-container">
                <img src={filtro.img} alt={filtro.nome} />
              </div>
              <div className="product-info-carousel">
                <h3>{filtro.nome}</h3>
                <button
                  className="btn-buy"
                  onClick={() => navegarParaFiltro(filtro)}
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

export default FiltroCarousel;