import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProductCarousel.css';

const oleos = [
  { id: 1, title: 'Óleo Essencial Bergamota',     img: '/fotos/oleos/aromas_naturais/bergamot.png' },
  { id: 2, title: 'Óleo Essencial Pimenta Preta', img: '/fotos/oleos/aromas_naturais/black_pepper.png' },
  { id: 3, title: 'Óleo Essencial Brasil',          img: '/fotos/oleos/aromas_naturais/brasil.png' },
  { id: 4, title: 'Óleo Essencial Cardamomo',       img: '/fotos/oleos/aromas_naturais/cardamom.png' },
  { id: 5, title: 'Óleo Essencial Cassia',          img: '/fotos/oleos/aromas_naturais/cassia.png' },
];

const OleoCarousel = ({ setPagina, setProdutoOleo }) => {
  const handleVerDetalhes = (oleo) => {
    if (setProdutoOleo) setProdutoOleo(oleo);
    setPagina('pagina-do-oleo');
  };

  return (
    <section className="carousel-section" id="oleo">
      <h2 className="carousel-title">Nossos Óleos Essenciais</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        className="mySwiper"
      >
        {oleos.map((oleo) => (
          <SwiperSlide key={oleo.id}>
            <div className="product-card-carousel">
              <div className="product-img-container">
                <img src={oleo.img} alt={oleo.title} />
              </div>
              <div className="product-info-carousel">
                <h3>{oleo.title}</h3>
                <button className="btn-buy" onClick={() => handleVerDetalhes(oleo)}>
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