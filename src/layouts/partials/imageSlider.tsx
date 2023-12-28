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
    "/images/campo/6.png",
    "/images/campo/7.png",
    "/images/campo/11.png",
    "/images/campo/12.png",
    "/images/campo/13.png",
    "/images/campo/14.png",
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
    "/images/campo/43.png",
    "/images/campo/44.png",
    "/images/campo/45.png",
    "/images/campo/46.png",
    "/images/campo/47.png",
    "/images/campo/48.png",
    "/images/campo/49.png",
    "/images/campo/50.png",
    "/images/campo/51.png",
    // Agrega más imágenes según sea necesario
  ];

  const swiperParams = {
    modules: [Autoplay, Pagination],
    autoplay: {
      delay: 5000,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <div className="image-slider-container">
      <Swiper {...swiperParams}>
        {imagePaths.map((imagePath, index) => (
          <SwiperSlide key={index}>
             <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "520px",
              }}
            >
              <img
                src={imagePath}
                alt={`Imagen ${index + 1}`}
                style={{ width: "750px", height: "520px",  }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default ImageSlider;
