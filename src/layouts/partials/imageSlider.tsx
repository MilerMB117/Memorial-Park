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
    "/images/campo/4.png",
    "/images/campo/5.png",
    "/images/campo/6.png",
    "/images/campo/7.png",
    "/images/campo/8.png",
    "/images/campo/9.png",
    "/images/campo/10.png",
    "/images/campo/11.png",
    "/images/campo/12.png",
    "/images/campo/13.png",
    "/images/campo/14.png",
    "/images/campo/15.png",
    "/images/campo/16.png",
    "/images/campo/17.png",
    "/images/campo/18.png",
    "/images/campo/19.png",
    "/images/campo/20.png",
    "/images/campo/21.png",
    "/images/campo/22.png",
    "/images/campo/23.png",
    "/images/campo/24.png",
    "/images/campo/25.png",
    "/images/campo/26.png",
    "/images/campo/27.png",
    "/images/campo/28.png",
    "/images/campo/29.png",
    "/images/campo/30.png",
    "/images/campo/31.png",
    "/images/campo/32.png",
    "/images/campo/33.png",
    "/images/campo/34.png",
    "/images/campo/35.png",
    "/images/campo/36.png",
    "/images/campo/37.png",
    "/images/campo/38.png",
    "/images/campo/39.png",
    "/images/campo/40.png",
    "/images/campo/41.png",
    "/images/campo/42.png",
    "/images/campo/43.png",
    "/images/campo/44.png",
    "/images/campo/45.png",
    "/images/campo/46.png",
    // Agrega más imágenes según sea necesario
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
