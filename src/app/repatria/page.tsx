import SeoMeta from "@/partials/SeoMeta";
import { getListPage } from "@/lib/contentParser";
import Testimonials from "@/partials/Testimonials";
import ImageFallback from "@/helpers/ImageFallback";


import WhatsApp from "@/partials/Whatsapp";

const repatria = () => {
  const testimonial = getListPage("sections/testimonial.md");
  const repatria = getListPage("repatria/_index.md");
  const {frontmatter} = repatria;
  const {img
  }: {
    img: {image: string;}
  } = frontmatter;
  return (
    <>
    <section className="section-lm pt-14">
    <div className="container">
    <div className="row justify-center">
    <div className="gallery-container text-center lg:col-9 ">
      <SeoMeta title={"Repatria"} />
      <h3 className="mb-10">Trasalados Internacionales a Cualquier Parte del Mundo</h3>
      <p className="mb-8 text-center">
      Es cada vez más común que muchos extranjeros vengan a residir a costa rica. En Memorial Park asistimos a las familias de manera personal cuando un miembro de la familia residente muere en nuestro país. Asistimos a la repatriación a su país natal en cuerpo o ceniza.
      El personal de Memorial Park asistirá de manera personalizada a los familiares en todos los pasos que este proceso conlleva.
     </p>
     <ul className="text-center mb-8">
    <li>1. Traslados dentro del país</li>
    <li>2. Embalsamo/Cremación</li>
    <li>3. Trámites ante el Ministerio de Salud de Costa Rica</li>
    <li>4. Trámites ante el consulado respectivo</li>
    <li>5. Trámites aduanales</li>
    <li>6. Traslado aéreo</li>
  </ul>

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
    </section>
    <Testimonials data={testimonial} />

    <WhatsApp />
    </>
  );
};

export default repatria;
