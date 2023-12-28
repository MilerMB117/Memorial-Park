import SeoMeta from "@/partials/SeoMeta";
import ImageSlider from "@/partials/imageSlider";
import WhatsApp from "@/partials/Whatsapp";




const Gallery = () => {
  return (
    <>
    <section className="section-lm mb-10">
    <div className="container">
    <div className="row justify-center"></div>
    <div className="gallery-container text-center">
      <SeoMeta title={"Galeria"} />
      <h3 className="mb-2">Conoce el Campo Santo</h3>
      <p className="mb-8">Muchas gracias por todas las actividades que organizan, se nota el cariño con que las hacen, es motivo de alegría saber que escogimos el mejor lugar para que descanse nuestro amado padre.  Dios los bendiga a todos y nuevamente muchas gracias
        Irma Velásquez. Año tras año ha sido destacado por su preocupación hacia el cliente, familiares y amigos de nuestros seres queridos que parten hacia la Eternidad.  Con seriedad y prontitud y efectivo respaldo en los momentos más difíciles de nuestra vida. Mabach Costa Rica
     </p>

     <ImageSlider  />
     </div>
     </div>
    </section>
    <WhatsApp />
    </>
  );
};

export default Gallery;
