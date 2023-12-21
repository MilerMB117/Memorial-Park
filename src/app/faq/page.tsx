import SeoMeta from "@/partials/SeoMeta";
import { getListPage } from "@/lib/contentParser";
import Testimonials from "@/partials/Testimonials";
import WhatsApp from "@/partials/Whatsapp";
import Accordion from "@/shortcodes/Accordion";


const faq = () => {


  return (
    <>
    <section className="section pt-14">
    <div className="container">
    <div className="row justify-center"></div>
    <div className="gallery-container text-center">
      <SeoMeta title={"F.A.Q"} />
      <h3 className="mb-2">Preguntas Frecuentes</h3>
      <p className="mb-8">
      En esta sección resolvemos tus dudas.
     </p>
     </div>
     </div>
     <div  className="container mx-auto my-10 tab mb-10">
     <Accordion title="¿Que ofrece el Camposanto?">
      Memorial Park ofrecerá los servicios de camposanto, funeraria, morgue, crematorio, cenizarios y templo religioso. Es decir, todo lo necesario para que en caso de la pérdida de un ser querido, usted no tenga que estar trasladándose a diferentes lugares para darle santa sepultura. Tiene espacio para más de 150 vehículos, con más de 10,000 propiedades en áreas verdes.

     </Accordion>

     <Accordion title="¿Que incluye la compra de una propiedad en el Camposanto?">
     Todos nuestros lotes incluyen lo siguiente: - Título de propiedad - Terrenos con diferentes medidas según tipo de lote - Mantenimiento a perpetuidad garantizado - Vigilancia las 24 horas del día, 365 días al año.

     </Accordion>

     <Accordion title="¿Cuánto miden las propiedades?">
     Las propiedades miden 2,40 metros de largo por 0.90 metros de ancho. La profundidad máxima permitida es de 2.00 metros, la cual proporciona una capacidad de 2 criptas o tumbas.

     </Accordion>

     <Accordion title="¿Qué capacidad tiene las propiedades?">
     Las propiedades tienen capacidad para 2 criptas, es decir, 2 cuerpos a la vez. Según el reglamento General de Cementerios, cada 5 años se puede reutilizar cada campo, por lo que podrían haber más de 2 cuerpos en una propiedad.

     </Accordion>

     <Accordion title="¿Qué son las criptas?">
     La cripta es la estructura de ferroconcreto que se entierra en la propiedad adquirida y es donde se inhuman los cuerpos.

     </Accordion>

     <Accordion title="¿Hay planes de financiamiento?">
     Existen planes de financiamiento en colones y en dólares, dependiendo de la moneda que usted desee escoger. Los plazos van desde los 12 meses hasta los 60 meses. La prima mínima es del 10%. El cálculo de los intereses es sobre el saldo del principal adeudado y no hay penalización por pronto pago.

     </Accordion>

     <Accordion title="¿Qué significa que cada 5 años se puede reutilizar un campo?">
     Significa que de acuerdo al Reglamento General de Cementerios se puede exhumar un cuerpo con más de 5 años de inhumado e inhumar un nuevo cuerpo en la misma cripta.

     </Accordion>

     <Accordion title="¿Qué pasa con los restos exhumados después de los 5 años?">
     Los restos exhumados después de los 5 años se introducen en una bolsa y se pueden inhumar junto con el nuevo cuerpo o bien trasladarlo a un osario dentro del mismo camposanto.

     </Accordion>

     <Accordion title="¿Cómo me garantiza el Camposanto que será mantenido en un futuro?">
     Se cobrará una cuota mensual por un periodo de 10 años, la cual será transferida íntegramente a un fondo. Estos dineros serán reinvertidos hasta que el Camposanto esté vendido. En ese momento, el Fondo empezará a cubrir los gastos relacionados a la manutención de la infraestructura y áreas verdes.

     </Accordion>

     <Accordion title="¿Qué sucede antes de que el camposanto se venda?">
     En este caso, será con las ventas propias del camposanto que se cubrirán todos los gastos relacionados al mantenimiento.

     </Accordion>

     </div>
    </section>

    <WhatsApp />
    </>
  );
};

export default faq;
