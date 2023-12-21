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
    <div className="gallery-container text-center">
      <SeoMeta title={"Repatria"} />
      <h3 className="mb-10">Repatria desde EEUU/CANADA</h3>
      <p className="mb-8 text-center">
      Es cada vez más común que muchos estadounidenses vengan a residir en Costa Rica.  Cuando se presente una muerte de un ser querido, es normal que su familia solicite la repatriación de sus restos a su pueblo natal, ya sea de cuerpo entero o en cenizas.
     </p>
      <p className="mb-8 ">
      Este proceso conlleva varios pasos, en los cuales están incluidos el Consulado de los Estados Unidos y/o Canadá y el Ministerio de Salud de Costa Rica.
     </p>

     {img.image && (
              <div className="col-12 text-center">
                <ImageFallback
                  src={img.image}
                  className="mx-auto rounded-lg"
                  width="900"
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
