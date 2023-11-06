"use client";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const ImageSlider = () => {
  // Define las rutas de las imágenes aquí
  const imagePaths = [
    "/images/campo/1.png",
    "/images/campo/2.png",
    "/images/campo/3.png",
  ];

  const swiperParams = {
    modules: [Autoplay, Pagination],
    autoplay: {
      delay: 3000,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      // Cuando el ancho de la pantalla sea igual o mayor a 768px
      768: {
        slidesPerView: 2, // Número de diapositivas visibles
      },
      // Cuando el ancho de la pantalla sea igual o mayor a 992px
      992: {
        slidesPerView: 1, // Número de diapositivas visibles
      },
    },
  };


  return (
    <div className="image-slider-container">
    <Swiper {...swiperParams}>
      {imagePaths.map((imagePath, index) => (
        <SwiperSlide key={index}>
          <img src={imagePath} alt={`Imagen ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default ImageSlider;
