import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importa os estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importa o SEU CSS para reaproveitar o visual dos cards!
import './ProductCarousel.css'; 

const sandalias = [
  { id: 1, nome: 'Sandália Ortopédica "Couro Aurora /Plataforma"', img: '/fotos/sandalias/sandalia1.jpeg' },
  { id: 2, nome: 'Sandália Ortopédica "Marron/Salto Curto"', img: '/fotos/sandalias/sandalia3.jpeg' },
  { id: 3, nome: 'Sandália Confort Couro Legitimo',       img: '/fotos/sandalias/sandalia7.jpeg' },
{ id: 4, nome: 'Sandália Confort Plus',       img: '/fotos/sandalias/sandalia2.jpg' },
{ id: 5, nome: 'Sandália Confort Com Estilo',       img: '/fotos/sandalias/sandalia10.jpeg' },

];

const SandaliasCarrossel = () => {
  return (
    // Adicionamos o id="sandalias" aqui para a Navbar rolar a tela até ele
    <section className="carousel-section" id="sandalias">
      <h2 className="carousel-title">Nossas Sandálias Ortopédicas</h2>

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
        {sandalias.map((item) => (
          <SwiperSlide key={item.id}>
            {/* Usando as MESMAS classes do ProductCarousel */}
            <div className="product-card-carousel">
              <div className="product-img-container">
                <img src={item.img} alt={item.nome} />
              </div>
              <div className="product-info-carousel">
                <h3>{item.nome}</h3>
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

export default SandaliasCarrossel;