import SeoMeta from "@/partials/SeoMeta";
import { getListPage } from "@/lib/contentParser";
import ImageFallback from "@/helpers/ImageFallback";;
import WhatsApp from "@/partials/Whatsapp";
import Card from "@/shortcodes/Card";

const servicios = () => {
  const services = getListPage("servicios/_index.md")
  const {frontmatter} = services;
  const {img
  }: {
    img: {image: string;}
  } = frontmatter;

  const cardsData = [
    {
      label: "Camposanto",
      title: "Un lugar memorable para sus seres queridos.",
      content:
        "En Memorial Park estamos comprometidos en ayudarle a sobrellevar este difícil momento de la vida. Deseamos brindarle la tranquilidad que usted necesita para despedir a sus seres queridos mientras nosotros nos encargamos de todo por usted. Sus hermosos y cuidados jardines le darán un entorno único lleno de armonía y paz. Usted podrá recordar con serenidad a sus seres queridos con la confianza de que Memorial Park le va a brindar la más alta calidad en todos sus servicios para que ese momento sea lo más sereno posible para usted y su familia. Memorial Park es un lugar único para conmemorar a quienes tanto amamos.",
    },
    {
      label: "Servicios Funerarios",
      title: "Cuidado y Compasión en Cada Despedida.",
      content:
        "En momentos difíciles, ofrecemos servicios funerarios integrales para acompañar a las familias en la despedida de sus seres queridos. Brindamos apoyo con empatía y profesionalismo, asegurando un proceso respetuoso y sereno.",
    },
    {
      label: "Cremación",
      title: "Transformando el Adiós en Recuerdos eternos.",
      content:
        "Ofrecemos servicios de cremación con la más alta calidad y respeto. Permitimos a las familias elegir una opción más personalizada y sostenible, manteniendo el mismo nivel de cuidado y compasión que nos caracteriza.",
    },
    {
      label: "Cenizarios",
      title: "Espacios de Paz para Recordar y Reflexionar.",
      content:
        "Nuestros cenizarios son espacios sagrados diseñados para brindar un lugar tranquilo y hermoso donde las familias pueden visitar y recordar a sus seres queridos. Proporcionamos opciones de cenizarios tanto para ceremonias privadas como para aquellas compartidas con seres queridos.",
    },
    {
      label: "Servicios Religiosos",
      title: "Ceremonias Sagradas, Despedidas Significativas.",
      content:
        "En nuestro templo religioso, creamos un ambiente propicio para honrar la memoria de los seres queridos de acuerdo con las creencias y tradiciones de cada familia. Proporcionamos un espacio sereno y respetuoso para ceremonias religiosas y despedidas significativas.",
    },
    {
      label: "Tanatopraxia",
      title: "Preparación con Profesionalismo, Despedida con Serenidad.",
      content:
        "Con el más alto nivel de cuidado y profesionalismo, nuestros expertos en tanatopraxia se encargan del embalsamamiento y preparación estética del cuerpo, permitiendo que las familias se despidan con la paz y la serenidad que merecen.",
    },
    {
      label: "Traslados entre Cementerios",
      title: "Tenemos convenio con la Funeraria 'El Recuerdo'.",
      content:
        "Brindamos servicios de traslado de cuerpos a lo largo y ancho del territorio nacional, asegurando que los seres queridos lleguen a su destino final con el mismo nivel de profesionalismo y respeto que caracteriza a Memorial Park.",
    },
    {
      label: "Repatriaciones",
      title: "USA, Canada: Uniendo Distancias, Respetando Historias.",
      content:
        "Facilitamos el proceso de repatriación de cuerpos para aquellos que desean llevar a sus seres queridos de regreso a su lugar de origen. Garantizamos un manejo cuidadoso y respetuoso en cada paso del proceso. Encuentras más información en la pestaña de Repatriaciones o a través de Whatsapp.",
    },



    // Agrega más objetos de datos para cada tarjeta según sea necesario
  ];


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
     <div className="container mx-auto my-10 tab content">
          <div className="card-container container">
            {cardsData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

    <WhatsApp />
    </>
  );
};

export default servicios;
