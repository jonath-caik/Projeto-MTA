import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProductCarousel.css';

const products = [
  { id: 1, title: 'Filtro de água "Purific"',       img: '/filtro de agua.jpg',          pagina: null },
  { id: 2, title: 'Sandália Ortopédica "couro"',    img: '/sandalia ce couro.jpg',        pagina: 'sandalias' },
  { id: 3, title: 'Sandália Ortopédica "vazada"',   img: '/sandalia2.jpg',               pagina: 'sandalias' },
  { id: 4, title: 'Água mais saudável',              img: '/filtro sendo ultilizado.jpg', pagina: null },
  { id: 5, title: 'Kit Bem-Estar',                   img: '/oleo2.jpg',                   pagina: null },
];

const ProductCarousel = ({ setPagina }) => {
  return (
    <section className="carousel-section" id="produtos">
      <h2 className="carousel-title">Nossos Destaques</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
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
                  onClick={() => product.pagina && setPagina(product.pagina)}
                  style={{ opacity: product.pagina ? 1 : 0.4, cursor: product.pagina ? 'pointer' : 'default' }}
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