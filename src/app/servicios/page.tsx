import SeoMeta from "@/partials/SeoMeta";
import { getListPage } from "@/lib/contentParser";
import Testimonials from "@/partials/Testimonials";
import WhatsApp from "@/partials/Whatsapp";
import Tabs from "@/shortcodes/Tabs";
import Tab from "@/shortcodes/Tab";

const servicios = () => {


  return (
    <>
    <section className="section pt-14">
    <div className="container">
    <div className="row justify-center"></div>
    <div className="gallery-container text-center">
      <SeoMeta title={"Servicios"} />
      <h3 className="mb-2">Nuestros Servicios</h3>
      <p className="mb-8">
      En Memorial Park incorporamos los conceptos más modernos en materia de servicios exequiales, así como también contará con título de propiedad sobre su terreno. Para su mayor tranquilidad y seguridad, Memorial Park suscribió un Fideicomiso con el que se garantizará el mantenimiento a perpetuidad del Camposanto.
     </p>
     </div>
     </div>
     <div   className="container mx-auto my-10 tab">
     <Tabs>
  <Tab label="Camposanto" title="Title 1">
    Contenido del Tab 1
  </Tab>
  <Tab label="Tab 2" title="Title 2">
    Contenido del Tab 2
  </Tab>

</Tabs>

     </div>
    </section>

    <WhatsApp />
    </>
  );
};

export default servicios;
