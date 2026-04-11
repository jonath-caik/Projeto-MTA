import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Estilos essenciais do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProductCarousel.css";

const ProductCarousel = () => {
  const products = [
    { id: 1, title: 'Filtro de água "Purifc"', img: "/filtro de agua.jpg" },
    {
      id: 2,
      title: 'Sandalia ortopedica "couro"',
      img: "/sandalia ce couro.jpg",
    },
    { id: 3, title: 'Sandalia ortopedica "vazada"', img: "/sandalia2.jpg" },
    { id: 4, title: "Água mais saúdavel", img: "/filtro sendo ultilizado.jpg" },
    {
      id: 5,
      title: "sandalia rasteira ortopedica",
      img: "/sandalia preta.jpg",
    },
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
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
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
                <button className="btn-buy">Ver Detalhes</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductCarousel;
