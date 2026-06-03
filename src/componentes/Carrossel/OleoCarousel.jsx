import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProductCarousel.css';
import { oleos } from '../../dados/produtos';

const OleoCarousel = ({ navegarParaOleo }) => {
  return (
    <section className="carousel-section" id="oleo">
      <h2 className="carousel-title">Nossos Óleos Essenciais</h2>

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
        {oleos.map((oleo) => (
          <SwiperSlide key={oleo.id}>
            <div className="product-card-carousel">
              <div className="product-img-container">
                <img src={oleo.img} alt={oleo.nome} />
              </div>
              <div className="product-info-carousel">
                <h3>{oleo.nome}</h3>
                <button
                  className="btn-buy"
                  onClick={() => navegarParaOleo(oleo)}
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

export default OleoCarousel;