import SeoMeta from "@/partials/SeoMeta";
import { getListPage } from "@/lib/contentParser";
import Testimonials from "@/partials/Testimonials";
import WhatsApp from "@/partials/Whatsapp";

const repatria = () => {
  const testimonial = getListPage("sections/testimonial.md");
  return (
    <>
    <section className="section pt-14">
    <div className="container">
    <div className="row justify-center"></div>
    <div className="gallery-container text-center">
      <SeoMeta title={"Repatria"} />
      <h3 className="mb-10">Repatria desde EEUU/CANADA</h3>
      <p className="mb-8">
      Es cada vez más común que muchos estadounidenses vengan a residir en Costa Rica.  Cuando se presente una muerte de un ser querido, es normal que su familia solicite la repatriación de sus restos a su pueblo natal, ya sea de cuerpo entero o en cenizas.
     </p>
      <p className="mb-8">
      Este proceso conlleva varios pasos, en los cuales están incluidos el Consulado de los Estados Unidos y/o Canadá y el Ministerio de Salud de Costa Rica.
     </p>

     </div>
     </div>
     <Testimonials data={testimonial} />
    </section>

    <WhatsApp />
    </>
  );
};

export default repatria;
