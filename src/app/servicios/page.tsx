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

<Tab name="Camposanto">
  <h4>Un Lugar memorable para tus seres queridos</h4>

  En Memorial Park estamos comprometidos en ayudarle a sobrellevar este difícil momento de la vida. Deseamos brindarle la tranquilidad que usted necesita para despedir a sus seres queridos mientras nosotros nos encargamos de todo por usted. Sus hermosos y cuidados jardines le darán un entorno único lleno de armonía y paz. Usted podrá recordar con serenidad a sus seres queridos con la confianza de que Memorial Park le va a brindar la más alta calidad en todos sus servicios para que ese momento sea lo más sereno posible para usted y su familia. Memorial Park es un lugar único para conmemorar a quienes tanto amamos.

</Tab>

<Tab name="Funeraria">
  <h4>Servicios Funebres</h4>



</Tab>

<Tab name="Cremacion">
  <h4>Servicios Funebres</h4>



</Tab>

<Tab name="Cenizario">
  <h4>Servicios Funebres</h4>



</Tab>

<Tab name="Templo Religioso">
  <h4>Servicios Funebres</h4>



</Tab>









</Tabs>

     </div>
    </section>

    <WhatsApp />
    </>
  );
};

export default servicios;
