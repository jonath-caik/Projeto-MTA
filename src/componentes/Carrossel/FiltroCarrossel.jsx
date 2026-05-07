import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProductCarousel.css'; 

const filtros = [
  {
    id: 1,
    title: 'Purificador de Água Natural',
    img: '/fotos/purificador/purificador_agua_natural/purificador1.png'
  },
  {
    id: 2,
    title: 'Purificador de Água Natural 2',
    img: '/fotos/purificador/purificador_agua_natural/purificador2.png'
  },
  {
    id: 3,
    title: 'Purificador de Água Natural 3',
    img: '/fotos/purificador/purificador_agua_natural/purificador5.png'
  },
  {
    id: 4,
    title: 'Purificador de Água Natural 4',
    img: '/fotos/purificador/purificador_bebedouro/purificador4.png'
  },
  {
    id: 5,
    title: 'Purificador de Água Natural 5',
    img: '/fotos/purificador/purificador_bebedouro/purificador3.png'
  }

];
const FiltroCarousel = () => {
  return (
    <section className="carousel-section" id="filtro" style={{ backgroundColor: '#f4f7f6' }}>
      <h2 className="carousel-title">Nossos Filtros Purificadores de água</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          768:  { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {filtros.map((filtro) => (
          <SwiperSlide key={filtro.id}>
            <div className="product-card-carousel">
              <div className="product-img-container">
                <img src={filtro.img} alt={filtro.title} />
              </div>
              <div className="product-info-carousel">
                <h3>{filtro.title}</h3>
                
                {/* Botão adicionado para manter o padrão do seu CSS */}
                <button className="btn-buy">
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

export default FiltroCarrossel;