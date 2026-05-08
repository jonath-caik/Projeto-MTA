import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProductCarousel.css'; 

const purificadores = [
  { id: 1, title: 'Purificador de Água Natural 3', img: '/fotos/purificador/purificador_agua_natural/purificador3.png', pagina: null },
  { id: 2, title: 'Purificador de Água Natural 4', img: '/fotos/purificador/purificador_bebedouro/purificador4.png', pagina: null },
  { id: 3, title: 'Purificador de Água Natural 5', img: '/fotos/purificador/purificador_agua_natural/purificador5.png', pagina: null },
  { id: 4, title: 'Purificador de Água Natural 4', img: '/fotos/purificador/purificador_agua_natural/purificador4.png', pagina: null },
  { id: 5, title: 'Purificador de Água Natural 5', img: '/fotos/purificador/purificador_agua_natural/purificador5.png', pagina: null },

];

const FiltroCarousel = ({ setPagina }) => {
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
                <img src={filtro.img} alt={filtro.title} />
              </div>
              <div className="product-info-carousel">
                <h3>{filtro.title}</h3>
                
                <button 
                  className="btn-buy" 
                  onClick={() => filtro.pagina && setPagina(filtro.pagina)}
                  style={{ opacity: filtro.pagina ? 1 : 0.4, cursor: filtro.pagina ? 'pointer' : 'default' }}
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