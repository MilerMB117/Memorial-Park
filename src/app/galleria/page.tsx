import SeoMeta from "@/partials/SeoMeta";
import ImageSlider from "@/partials/imageSlider";
import WhatsApp from "@/partials/Whatsapp";




const Gallery = () => {
  return (
    <>
    <section className="section pt-14">
    <div className="container">
    <div className="row justify-center">
    <div className="lg:col-9 gallery-container text-center">
      <SeoMeta title={"Galeria"} />
      <h3 className="mb-2">Conoce el Campo Santo</h3>
      <p className="mb-8">Memorial Park ofrecerá los servicios de camposanto, funeraria, morgue, crematorio, cenizarios y templo religioso. Es decir, todo lo necesario para que en caso de la pérdida de un ser querido, usted no tenga que estar trasladándose a diferentes lugares para darle santa sepultura. Tiene espacio para más de 150 vehículos, con más de 10,000 propiedades en áreas verdes.
     </p>

     <ImageSlider  />
     </div>
     </div>
     </div>
    </section>
    <WhatsApp />
    </>
  );
};

export default Gallery;
