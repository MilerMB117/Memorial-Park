import SeoMeta from "@/partials/SeoMeta";
import { getListPage } from "@/lib/contentParser";
import ImageFallback from "@/helpers/ImageFallback";;
import WhatsApp from "@/partials/Whatsapp";
import Card from "@/shortcodes/Card";
import Testimonials from "@/partials/Testimonials1";

const servicios = () => {
  const services = getListPage("servicios/_index.md")
  const servicios = getListPage("sections/servicios.md");
  const {frontmatter} = services;
  const {img
  }: {
    img: {image: string;}
  } = frontmatter;



  return (
    <>
    <section className="section pt-14 ">
    <div className="container">
    <div className="row justify-center">
    <div className="lg:col-9 gallery-container text-center ">
      <SeoMeta title={"Servicios"} />
      <h3 className="mb-2">Nuestros Servicios</h3>
      <p className="mb-8 text-center">
      En Memorial Park incorporamos los conceptos más modernos en materia de servicios exequiales, así como también contará con título de propiedad sobre su terreno. Para su mayor tranquilidad y seguridad.
     </p>
     {img.image && (
              <div className="col-12 text-center">
                <ImageFallback
                  src={img.image}
                  className="mx-auto rounded-lg"
                  width="750"
                  height="420"
                  alt="banner image"
                  priority
                />
              </div>
            )}
     </div>
     </div>
     </div>
     <Testimonials data={servicios} />
      </section>


    <WhatsApp />
    </>
  );
};

export default servicios;
