import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './ProductCarousel.css';
import { sandaliasCarrossel } from '../../dados/produtos';

const SandaliasCarrossel = ({ navegarParaProduto }) => {
  return (
    <section className="carousel-section" id="sandalias">
      <h2 className="carousel-title">Nossas Sandálias Ortopédicas</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        speed={800}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          768:  { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {sandaliasCarrossel.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="product-card-carousel">
              <div className="product-img-container">
                <img src={item.img} alt={item.nome} />
              </div>
              <div className="product-info-carousel">
                <h3>{item.nome}</h3>
                <button
                  className="btn-buy"
                  onClick={() => navegarParaProduto(item)}
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

export default SandaliasCarrossel;
