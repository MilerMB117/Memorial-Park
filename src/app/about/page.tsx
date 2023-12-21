import React from 'react';
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import WhatsApp from '@/partials/Whatsapp';

const About = () => {
  const data: RegularPage = getListPage("about/_index.md");
  const { frontmatter, content } = data;
  const { title, meta_title, description, image } = frontmatter;

  return (
    <>
    <section className="section-lg">
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
        <div className="container">
          <div className="row justify-center">
            <div className="text-center md:col-10 lg:col-7">
              {image && (
                <ImageFallback
                  className="mx-auto mb-6 rounded-lg"
                  src={image}
                  width={1200}
                  height={500}
                  alt={title}
                />
              )}
            </div>
            <div className="content text-center">
                <MDXContent content={content} />
              </div>
          </div>
        </div>
      </section>

      <section className="section-lm pt-14">
      <h2 className="h3 mb-6 text-center"> ¿Por qué Elegirnos?</h2>
        <div className="container mx-auto my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Calidez</h3>
                <p className="text-gray-600">El trato amable a través de nuestro servicio profesional, la dedicación y atención personalizada para con cada uno de nuestros clientes y el esmero en darle un mantenimiento permanente a los jardines y camposanto son un reflejo de nuestra consideración hacia sus seres queridos.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Respaldo</h3>
                <p className="text-gray-600">En Memorial Park incorporamos los conceptos más modernos en materia de servicios exequiales, así como también contará con título de propiedad sobre su terreno. Para su mayor tranquilidad y seguridad, Memorial Park suscribió un Fideicomiso con el que se garantizará el mantenimiento a perpetuidad del Camposanto.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Homenaje</h3>
                <p className="text-gray-600">La belleza de nuestros jardines refleja nuestro diario esfuerzo en conmemorar la memoria de sus seres queridos. El entorno de Memorial Park es un lugar de altura para despedir y recordar a quienes tanto amamos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatsApp />
    </>
  );
};

export default About;
