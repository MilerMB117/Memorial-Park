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
            <SeoMeta title={"Reglamento Interno"} />
            <h3 className="mb-2">
              Reglamento Interno para la Administración del Camposanto Memorial
              Park
            </h3>
            <p className="mb-8">En esta sección resolvemos tus dudas.</p>
          </div>
        </div>
        <div className="container mx-auto my-10 tab mb-10">
          <Accordion title="CAPÍTULO PRELIMINAR: DEFINICIONES.">
            <p>
              Para los efectos de este Reglamento, las siguientes palabras
              tendrán el significado que a continuación se indica:
            </p>
            <ul>
              <li>
                <strong>Sociedad propietaria o Empresa propietaria:</strong> Es
                la persona jurídica dueña del cementerio y quien lo representa
                para todos los efectos legales.
              </li>
              <li>
                <strong>Interesado:</strong> Es la persona física o jurídica que
                ha suscrito una intención de compra de un lote en el cementerio
                con la sociedad propietaria.
              </li>
              <li>
                <strong>Propietario particular:</strong> Es la persona física o
                jurídica que adquiere en calidad de propietario un lote dentro
                del cementerio por haberlo adquirido de la sociedad propietaria
                o de un tercero
              </li>
              <li>
                <strong>Cementerio o Camposanto:</strong> Es el cementerio
                ubicado en el Distrito Tercero (San Rafael), Cantón Segundo
                (Escazú), Provincia Primera (San José), destinado a enterrar
                cadáveres humanos, sus restos o vísceras extraídas a los
                cadáveres autopsiados o embalsamados en establecimientos
                autorizados para dichos efectos, o para la conservación y
                custodia de cenizas producto de la cremación de cadáveres,
                restos humanos y/o mascotas.
              </li>
              <li>
                <strong>Cadáver:</strong> El cuerpo humano durante los cinco
                años siguientes a la muerte, computando este plazo desde la
                fecha y la hora de la muerte que figura en la inscripción de la
                defunción en el Registro Civil.
              </li>
              <li>
                <strong>Cenizas de Mascota:</strong> Es el producto de la
                cremación de un cuerpo de un animal doméstico.
              </li>
              <li>
                <strong>Cripta o Bóveda: </strong> Corresponde a la estructura
                de ferroconcreto o construcción subterránea destinado para la
                inhumación de cadáveres humanos.
              </li>
              <li>
                <strong>Exhumación:</strong> Acción y efecto de desenterrar un
                cadáver/cenizas.
              </li>
              <li>
                <strong>Inhumación:</strong> Acción y efecto de enterrar un
                cadáver/cenizas.
              </li>
              <li>
                <strong>Jardín:</strong> Es la porción de terreno que consta de
                varios lotes, cenizarios o columbarios.
              </li>
              <li>
                <strong>Jardín Privado:</strong> Es la porción de terreno
                delimitada por un muro con una altura no mayor a los 60
                centímetros y que consta de dos, tres o cuatro nichos
                individuales que pueden ser destinados a una familia o a un
                grupo como por ejemplo, instituciones, asociaciones gremiales,
                colegios, etc.
              </li>
              <li>
                <strong>Lote o Nicho:</strong> Extensión de terreno de 2.16
                metros cuadrados en la que se puede enterrar restos humanos o
                cenizas, y en el cual consta de un máximo de dos criptas bajo el
                nivel de suelo.
              </li>
              <li>
                <strong>Administración:</strong> Extensión de terreno de 2.16
                metros cuadrados en la que se puede enterrar restos humanos o
                cenizas, y en el cual consta de un máximo de dos criptas bajo el
                nivel de suelo.
              </li>
              <li>
                <strong>Osario:</strong> Es el espacio dentro de la construcción
                que permite la colocación de una caja contenida de restos
                humanos, posteriores a los 5 años de haberse inhumado.
              </li>
              <li>
                <strong>Cenizario:</strong> Es el espacio dentro de la
                construcción que permite la colocación de una urna que contiene
                cenizas de restos humanos y/o mascotas.
              </li>
              <li>
                <strong>Columbarios:</strong> Corresponde al área destinada para
                el resguardo aéreo (tipo locker) de las urnas que contienen las
                cenizas producto de una cremación.
              </li>
              <li>
                <strong>Restos Humanos:</strong> Partes del cuerpo humano de
                cantidades suficientes procedentes de abortos, mutilaciones,
                intervenciones quirúrgicas, autopsias clínicas o judiciales y
                actividades de docencia o investigación.
              </li>
              <li>
                <strong>Restos Cadavéricos:</strong> Lo que queda del cuerpo
                humano una vez transcurridos los cinco años siguientes a la
                muerte.
              </li>
              <li>
                <strong>Crematorio:</strong> Cámara de calor externo utilizado
                para reducir a cenizas un cuerpo humano o partes de él.
              </li>
              <li>
                <strong>Reglamento General de Cementerios:</strong> Reglamento
                aprobado mediante Decreto Ejecutivo No.32833, el día 3 de agosto
                del 2005 y sus modificaciones posteriores.
              </li>
            </ul>
          </Accordion>

          <Accordion title="CAPÍTULO PRIMERO: DISPOSICIONES GENERALES.">
            <p>
              <strong>Artículo uno:</strong> El presente Reglamento regula la
              construcción, conservación, administración y operación del
              CEMENTERIO, así como los derechos y obligaciones de la
              Administración y los propietarios particulares.
            </p>
            <p>
              <strong>Artículo dos:</strong> El cementerio se denominará
              “MEMORIAL PARK” y está ubicado en el Distrito Tercero (San Rafael)
              del Cantón Segundo (Escazú) de la Provincia de San José.
            </p>
            <p>
              <strong> Artículo tres: </strong> Las situaciones no previstas en
              este Reglamento serán resueltas conforme a los preceptos de la Ley
              General de Salud, del Reglamento General de Cementerios del
              Ministerio de Salud y demás disposiciones legales y reglamentarias
              vigentes sobre la materia.
            </p>
            <p>
              <strong> Artículo cuatro:</strong>Artículo cuatro. Por su origen
              el cementerio es de uso privado y la administración del mismo, su
              mantenimiento, vigilancia, corresponden a la Administración
              conforme a las normas del presente Reglamento.
            </p>
            <p>
              <strong> Artículo cinco:</strong> El cementerio es un lugar
              destinado exclusivamente, a la ubicación póstuma de cadáveres y
              restos humanos y su conservación, así como también la conservación
              de las cenizas producto de la cremación de cadáveres y de
              mascotas.
            </p>
            <p>
              <strong> Artículo seis:</strong> Es permitido en el cementerio, la
              práctica de todo rito religioso, siempre que no sea contrario a la
              ley, la moral universal y las buenas costumbres, todo a juicio de
              la Administración, o bien a la autorización previa del Ministerio
              de Salud.
            </p>
            <p>
              <strong> Artículo siete:</strong> Queda terminantemente prohibido
              la comercialización de cadáveres, vísceras extraídas a los
              cadáveres autopsiados o embalsamados, restos humanos o cenizas
              producto de la cremación de cadáveres o restos humanos.
            </p>
          </Accordion>

          <Accordion title="CAPÍTULO SEGUNDO: SOBRE EL CEMENTERIO.">
            <p>
              <strong>Artículo ocho:</strong> El cementerio deberá contar con un
              diseño de sitio (plano general) aprobado por las autoridades
              costarricenses correspondientes.
            </p>
            <p>
              <strong> Artículo nueve:</strong> Para la ubicación de los lotes,
              cenizarios y columbarios se utilizará la siguiente nomenclatura:
              a) Lotes: Jardín, Sección, Fila, Número, Nivel; b) Cenizarios:
              Jardín, Sección, Fila, Bloque, Número, Fracción; c) Columbarios:
              Jardín, Sección, Fila, Número.
            </p>
            <p>
              <strong> Artículo diez:</strong> El cementerio contará con un
              osario general en el cual se depositarán los restos cadavéricos
              y/o de cenizas provenientes de cremaciones de restos humanos
              exhumados de los lotes o cenizarios.
            </p>
            <p>
              <strong> Artículo once:</strong> Cualquier construcción que se
              haga en el cementerio deberá contar con la autorización y
              aprobación de las autoridades costarricenses, según corresponda y
              cumplir con las leyes y reglamentos que para estos efectos debiera
              cumplir.
            </p>
            <p>
              <strong> Artículo doce:</strong> El cementerio tendrá un área de
              lotes los cuales serán destinados para el resguardo de restos
              óseos o urnas con cenizas provenientes de las exhumaciones
              ordinarias de lotes, cenizarios y columbarios.
            </p>
          </Accordion>

          <Accordion title="CAPÍTULO TERCERO: DE LOS LOTES.">
            <p>
              <strong>Artículo trece: </strong>Todo lote en el cementerio deberá
              contar con su correspondiente folio real y su plano catastrado,
              según las disposiciones del Registro Nacional de la Propiedad.
              Cada lote tendrá como mínimo una medida de: Dos metros cuarenta
              centímetros de largo por noventa centímetros de ancho y contendrán
              hasta un máximo de dos criptas por lote, las cuales deben estar
              bajo el nivel de suelo.
            </p>
            <p>
              <strong> Artículo catorce:</strong> Las construcciones sobre el
              nivel de suelo en los lotes, queda terminantemente prohibida, a
              excepción de las aceras, gradas, caminos de acceso y de los muros
              que separan los jardines privados y semi-privados y los cuales
              están construidos en las colindancias de estos.
            </p>
            <p>
              <strong> Artículo quince:</strong> Las criptas deberán construirse
              o enterrarse sujetándose estrictamente a la posición y tamaño que
              indique el plano oficial. En aquellos casos donde las criptas
              deben de enterrarse, las mismas serán colocadas dentro de los
              lotes solamente cuando sea necesario efectuar una inhumación.
            </p>
            <p>
              <strong> Artículo dieciséis:</strong> Los lotes soportarán las
              servidumbres de paso de energía eléctrica, drenajes, instalaciones
              de agua y de riego necesarios para la apropiada operación y
              administración del cementerio. La Administración podrá imponer
              cualesquiera otros tipos de servidumbre o limitaciones, cuyos
              fines sean la utilidad común. Tales gravámenes no generan
              indemnización alguna a favor de los “propietarios particulares”.
            </p>
            <p>
              <strong> Artículo diecisiete:</strong> El título de propiedad se
              otorgará al interesado únicamente cuando el valor del lote haya
              sido totalmente cancelado por parte del interesado.
            </p>
            <p>
              <strong> Artículo dieciocho:</strong> Los propietarios de los
              lotes podrán traspasar el dominio por cualquier título, siempre y
              cuando se cumplan los siguientes requisitos: a) todos los gastos
              en que se incurra, con motivo del traspaso, correrán por cuenta
              del propietario; b) para que el traspaso surta efectos legales,
              deberán inscribirse en los registros de la Administración; c)
              también deberá comunicarse mediante notificación, autenticada por
              un Notario Público, a la empresa propietaria del cementerio; d) el
              adquiriente deberá comprometerse a hacer uso, exclusivamente, de
              los espacios no ocupados; e) el traspaso implica aceptación del
              presente Reglamento y de las demás disposiciones, condiciones o
              limitaciones que fije la Administración. El vendedor deberá
              advertir al comprador de la existencia de este Reglamento, en el
              momento de otorgar el traspaso y consignar en el documento de
              traspaso la aceptación del comprador.
            </p>
          </Accordion>

          <Accordion title="CAPÍTULO CUARTO: LOS CENIZARIOS.">
            <p>
              <strong>Artículo diecinueve:</strong> El cementerio podrá destinar
              áreas específicas para la inhumación de cenizas producto de la
              cremación de cuerpos humanos.
            </p>
            <p>
              <strong>Artículo veinte:</strong> Las dimensiones de cada
              cenizario serán como mínimo de 40 centímetros de ancho por 40
              centímetros de largo y tendrán capacidad para resguardar una urna
              con cenizas.
            </p>
            <p>
              <strong>Artículo veintiuno:</strong> La única excepción a las
              medidas indicadas en el artículo anterior son los Arbolitos de
              Amor Eterno. Estos se ofrecerán en diferentes opciones, como
              sencillas, dobles o cuádruples. Únicamente se aceptarán las
              cenizas en urnas biodegradables para estas opciones.
            </p>
            <p>
              <strong>Artículo veintidós:</strong> Dado su tamaño, resulta
              ilógico crear un folio real y plano catastrado para cada
              cenizario. Por lo tanto, se suscribirá un contrato de alquiler por
              99 años, renovable por el mismo periodo, con los interesados. Esto
              se hará utilizando la localización según la nomenclatura indicada
              en el artículo nueve.
            </p>
          </Accordion>

          <Accordion title="CAPÍTULO QUINTO: LOS COLUMBARIOS.">
            <p>
              <strong>Artículo veintitrés:</strong> El cementerio podrá destinar
              áreas específicas para el resguardo de cenizas producto de la
              cremación de cuerpos humanos bajo el tipo aéreo, tipo locker,
              denominado como columbarios.
            </p>
            <p>
              <strong>Artículo veinticuatro:</strong> Las dimensiones de cada
              columbario serán variables según la capacidad de cada uno, es
              decir, si es para una, dos, tres o cuatro urnas.
            </p>
            <p>
              <strong>Artículo veinticinco:</strong> Se suscribirá con el
              interesado un contrato de alquiler donde se establecerán las
              condiciones de plazo, precio, financiamiento, cantidad de urnas,
              ubicación y demás condiciones del mismo.
            </p>
          </Accordion>

          <Accordion title="CAPÍTULO SEXTO: CEMENTERIO JUDIO BEIT SHALOM.">
            <p>
              <strong>Artículo veintiséis:</strong> Se destina el Jardín G del
              plano general del cementerio para crear el Cementerio Judío Beit
              Shalom. Este jardín se compone de 36 lotes semi-privados y 128
              lotes regulares.
            </p>
            <p>
              <strong>Artículo veintisiete:</strong> Se nombra como
              co-administrador de este jardín a la Asociación Comunidad Judía
              Masorti Beit Shalom Costa Rica, con cédula jurídica 3-002-856042.
              Su función es controlar, certificar, verificar y auditar que los
              interesados y propietarios particulares estén en estricto apego de
              la Halajá.
            </p>
            <p>
              <strong>Artículo veintiocho:</strong> El co-administrador tendrá
              las siguientes funciones:
            </p>
            <ol>
              <li>
                Verificar si un interesado cumple las condiciones de judío. El
                interesado deberá ponerse en contacto con el co-administrador
                para presentar la documentación que lo certifica como judío. Una
                vez cumplida esta condición, el co-administrador emitirá un
                documento al administrador para proceder con la firma de los
                documentos de venta del lote.
              </li>
              <li>
                Verificar/certificar que, al momento de la inhumación, el cuerpo
                esté en contacto con tierra.
              </li>
              <li>Llevar a cabo el proceso del Tatzalah Jevra Kadisha.</li>
              <li>
                Asesorar y orientar al administrador en las costumbres judías
                para cumplirlas a cabalidad.
              </li>
            </ol>
            <p>
              <strong>Artículo veintinueve:</strong> La Matzevah se podrá llevar
              a cabo posterior a los 11 meses contados a partir de la fecha de
              la inhumación.
            </p>
            <p>
              <strong>Artículo treinta:</strong> Queda terminantemente prohibida
              la exhumación de restos. La única excepción a esta prohibición es
              que por orden de autoridad judicial competente se ordene dicha
              exhumación.
            </p>
            <p>
              <strong>Artículo treinta y uno:</strong> El interesado o el
              propietario particular se compromete a solo utilizar un nicho en
              vez de los dos que tiene capacidad cada lote. Si deseara utilizar
              el segundo, deberá solicitar autorización por escrito del
              co-administrador. Sin este permiso, el interesado o propietario
              entiende y acepta expresamente que no podrá un nicho por cada
              lote, renunciando a cualquier reclamo en contra del administrador
              o del co-administrador por esta limitación.
            </p>
            <p>
              <strong>Artículo treinta y dos:</strong> A raíz de que un lote
              solo podrá ser utilizado una vez, la Administración cobrará una
              cuota de mantenimiento por un plazo de 5 años adicionales a la
              indicada en el artículo 39. Esta situación no cambiará aunque se
              dé la autorización indicada en el artículo anterior.
            </p>
          </Accordion>

          <Accordion title="CAPÍTULO SEPTIMO: DEL CEMENTERIO DE MASCOTAS.">
            <p>
              <strong>Artículo veintitrés:</strong> El cementerio destinará un
              área específica para el resguardo exclusivo de cenizas producto de
              la cremación de mascotas. Queda prohibida la inhumación de restos
              de mascotas. Podrán existir 2 tipos: cenizarios bajo el nivel de
              suelo y aéreos, tipo locker: columbarios.
            </p>
            <p>
              <strong>Artículo veinticuatro:</strong> Las dimensiones de cada
              cenizario/columbario no serán mayores a 40 centímetros de ancho
              por 40 centímetros de largo, pudiendo estas dimensiones variar
              según el tamaño de la urna a resguardar.
            </p>
            <p>
              <strong>Artículo veinticinco:</strong> Se suscribirá con el
              interesado un contrato de alquiler donde se establecerán las
              condiciones de plazo, precio, financiamiento, tamaño del
              cenizario/columbario, ubicación y demás condiciones de este.
            </p>
          </Accordion>

          <Accordion title="CAPÍTULO OCTAVO: DEL FINANCIAMIENTO A LOS INTERESADOS.">
            <p>
              <strong>Artículo treinta y tres:</strong> La sociedad propietaria
              podrá ofrecer a los interesados financiamiento para la adquisición
              de los lotes y/o el alquiler de los cenizarios y columbarios. Las
              condiciones de este financiamiento se negociarán entre ambos al
              momento de la negociación y firma del documento correspondiente
              entre las partes.
            </p>
            <p>
              <strong>Artículo treinta y cuatro:</strong> Si existiese un
              incumplimiento por parte del interesado en la obligación de pago
              en dicho financiamiento, bajo las condiciones establecidas en el
              contrato, por concepto de indemnización fija por daños y
              perjuicios, la sociedad propietaria tendrá derecho a dejarse, como
              indemnización fija por el incumplimiento, todas las sumas de
              dinero canceladas hasta ese momento por el interesado. Se entiende
              por incumplida la obligación cuando se produzca la falta de pago
              oportuno de una mensualidad.
            </p>
            <p>
              <strong>Artículo treinta y cinco:</strong> El interesado no podrá
              efectuar ninguna inhumación de restos humanos ni de cenizas en el
              lote/cenizario/columbario adquirido/alquilado mientras tenga
              deudas pendientes con la sociedad propietaria. Sin embargo, en
              caso de emergencia y a juicio del acreedor y/o sociedad
              propietaria, ésta podrá autorizar la utilización del derecho de
              inhumación, sin tener que emitir justificación alguna en caso de
              que niegue ese derecho.
            </p>
            <p>
              <strong>Artículo treinta y seis:</strong> El interesado reconoce y
              acepta expresamente que, si la sociedad propietaria le otorga la
              excepción indicada en el artículo anterior de inhumar restos y/o
              cenizas en lotes/cenizarios/columbarios aún teniendo una deuda
              pendiente, deberá mantener el pago de la deuda al día. En caso de
              incumplimiento en el pago de las cuotas y/o de los acuerdos
              indicados en el contrato firmado entre las partes, el interesado
              autoriza a la Administración la exhumación de los restos/cenizas y
              que sean trasladados a los lotes destinados para el resguardo de
              estos casos, debiendo la Administración velar por el cumplimiento
              de la legislación costarricense vigente en ese momento. El
              interesado acepta que no habrá indemnización alguna en caso de que
              se aplique o se dé la situación antes descrita, ya que la misma
              deviene de su propio incumplimiento.
            </p>
          </Accordion>

          <Accordion title="CAPÍTULO NOVENO: DE LA CONSERVACIÓN, MANTENIMIENTO Y DEMÁS OBLIGACIONES DE LA ADMINISTRACIÓN.">
            <p>
              <strong>Artículo treinta y siete:</strong> Es obligación de la
              Administración mantener en buen estado de limpieza y conservación
              todas las instalaciones del cementerio en forma vitalicia.
            </p>
            <p>
              <strong>Artículo treinta y ocho:</strong> La Administración es la
              única autorizada para realizar las actividades operativas en el
              cementerio, entendiéndose por esto, que será quien realice las
              labores de mantenimiento de áreas verdes, atención de funerales,
              actividades de aperturas de lotes, cenizarios y columbarios,
              vigilancia, entre otros. Estas labores las podrá realizar con su
              personal o contratación de terceros, bajo su propio peculio, para
              que efectúen labores específicas.
            </p>
            <p>
              <strong>Artículo treinta y nueve:</strong> La Administración
              creará un fondo especial para el mantenimiento y vigilancia
              vitalicia del cementerio y el cual sólo podrá ser utilizado para
              estos propósitos. El fondo se creará por medio de las cuotas que
              se cobrará a los interesados o propietarios particulares de los
              lotes, cenizarios y columbarios, así como también del cementerio
              de mascotas. Para el caso específico de los lotes, la
              Administración cobrará un monto definido por la Administración por
              un plazo establecido por cada lote y/o folio real. Para garantizar
              el cumplimiento de esta obligación, se solicitará al interesado o
              al propietario particular la firma de un pagaré por el monto total
              que será definido por la Administración. Una vez que el interesado
              o el propietario particular cancele la totalidad del monto que le
              corresponde, el pagaré le será devuelto. Para el caso de los
              interesados de los cenizarios y columbarios, se cobrará una suma
              anual por todo el periodo del alquiler. Esta suma deberá ser
              cancelada por el interesado por año adelantado. En el caso del
              Cementerio de Mascotas, se cobrará un monto total de mantenimiento
              según el plazo del alquiler y deberá ser cancelado de manera
              anticipada. Este monto será establecido y definido por la
              Administración.
            </p>
            <p>
              <strong>Artículo cuarenta:</strong> En caso de que exista
              incumplimiento por parte del comprador según lo indica el artículo
              treinta y cuatro, todas las cuotas de mantenimiento señaladas en
              los artículos anteriores y canceladas hasta la fecha por el
              interesado permanecerán en el fondo especial creado para el
              mantenimiento del cementerio. Las mismas se aplicarán como
              indemnización fija por daños y perjuicios relacionados con el
              mantenimiento y el interesado no podrá reclamarlas ni solicitar
              reembolso de estas.
            </p>
            <p>
              <strong>Artículo cuarenta y uno:</strong> La Administración hará
              uso de todos los medios a su alcance para proteger la propiedad
              privada dentro del cementerio, sin embargo, no será responsable
              por las pérdidas, daños y robos que sucedan a las propiedades ni
              por los daños que se ocasionen por fuerza mayor o caso fortuito, o
              hechos de terceros.
            </p>
            <p>
              <strong>Artículo cuarenta y dos:</strong> Por cuenta de los
              propietarios, la Administración se hará cargo de las reparaciones
              a realizar por las causas mencionadas en el artículo anterior. La
              Administración deberá notificar el daño y el costo de la
              reparación a los interesados, quienes deberán confirmar la
              existencia del mismo dentro de los diez días hábiles posteriores a
              dicho aviso. En caso de confirmar el daño o de no constatación del
              requerimiento por parte del propietario, se procederá a efectuar
              la reparación. Los propietarios no podrán efectuar ninguna
              inhumación mientras tengan cuentas pendientes por este concepto,
              con la Administración.
            </p>
            <p>
              <strong>Artículo cuarenta y tres:</strong> La Administración podrá
              realizar cualquier otro tipo de construcción, distinta a las
              indicadas en este Reglamento, siempre que su uso sea necesario y
              conveniente para el Cementerio, de acuerdo con su criterio y se
              cumplan las disposiciones legales y reglamentarias.
            </p>
            <p>
              <strong>Artículo cuarenta y cuatro:</strong> La Administración
              será la única autorizada para colocar las lápidas rememorativas en
              los lotes o mausoleos y se obliga a proveer estas lápidas para su
              adquisición. La instalación la hará exclusivamente la
              Administración. No será permitida la instalación de ninguna lápida
              diferente a las provistas por la Administración.
            </p>
            <p>
              <strong>Artículo cuarenta y cinco:</strong> Únicamente se autoriza
              la colocación de flores naturales en los
              lotes/cenizarios/columbarios. No está autorizado la colocación de
              flores artificiales, artículos decorativos de ningún tipo y/o
              ningún otro artefacto. La Administración deberá ser vigilante de
              que esta condición se dé con el fin de mantener el diseño
              paisajístico del cementerio. En caso de que un propietario
              particular o interesado contraviniere esta disposición, la
              Administración está facultada a retirar cualquier objeto y
              devolverlo al momento en que ésta sea solicitada por quien la
              puso.
            </p>
          </Accordion>

          <Accordion title="CAPÍTULO DECIMO: DE LAS INHUMACIONES.">
            <p>
              <strong>Artículo cuarenta y seis:</strong> Las inhumaciones sólo
              podrán realizarse previo cumplimiento de las disposiciones legales
              sobre la materia y lo dispuesto por las autoridades competentes.
              La Administración cobrará una suma de dinero por concepto de
              derecho de apertura de nicho/cenizario/columbario. El precio de
              este derecho lo definirá la Administración.
            </p>
            <p>
              <strong>Artículo cuarenta y siete:</strong> Los interesados
              deberán solicitar el acondicionamiento del lugar donde debe
              efectuarse una inhumación, con un tiempo mínimo de 12 horas
              hábiles antes de la hora programada para la ceremonia. La
              comunicación deberá hacerse por escrito en las oficinas del
              cementerio.
            </p>
            <p>
              <strong>Artículo cuarenta y ocho:</strong> La Administración no
              dará trámite a las solicitudes que no se presenten firmadas por el
              o los propietarios del terreno y/o sus beneficiarios. Si son
              varios los propietarios se exigirá únicamente la firma de uno de
              ellos. Asimismo, tampoco podrá dar trámite aquellas solicitudes
              donde existan cuotas de mantenimiento, indicadas en el artículo
              treinta y nueve, pendientes de pago por parte de el o los
              propietarios.
            </p>
            <p>
              <strong>Artículo cuarenta y nueve:</strong> Si por razones de
              fuerza mayor o de circunstancias fuera del control de la
              Administración, no se puede acondicionar un lugar de inhumación en
              el tiempo previsto, la Administración podrá acondicionar otro
              similar en ubicación y precio del original, en donde se hará la
              inhumación provisional.
            </p>
            <p>
              <strong>Artículo cincuenta:</strong> Si ocurriera lo previsto en
              el artículo anterior, la Administración deberá notificar a los
              interesados la fecha y hora en que se realizará el traslado al
              lugar definitivo.
            </p>
            <p>
              <strong>Artículo cincuenta y uno:</strong> No obstante que es
              requisito fundamental para la inhumación el certificado de
              defunción otorgado en fórmulas oficiales y copia de la cédula de
              identidad, la Administración no será responsable por la identidad
              de la persona a inhumarse.
            </p>
            <p>
              <strong>Artículo cincuenta y dos:</strong> Para el caso en
              específico de inhumación de mascotas, el interesado deberá
              solicitar la inhumación con por lo menos 12 horas hábiles,
              presentando su cédula de identidad, solicitud de inhumación de
              mascota en la que indicará la fecha y hora de la inhumación,
              documento de la cremación emitida por el crematorio y cancelar el
              monto correspondiente al derecho de apertura.
            </p>
          </Accordion>

          <Accordion title="CAPÍTULO DECIMO PRIMERO: DE LAS EXHUMACIONES.">
            <p>
              <strong>Artículo cincuenta y tres:</strong> Todo propietario podrá
              prohibir la exhumación de sus restos y los de sus hijos menores de
              edad. También podrá prohibir la exhumación de los restos de una
              tercera persona siempre que ésta haya previamente otorgado dicho
              consentimiento por escrito. Cuando exista esta prohibición, las
              personas que por traspaso adquieran esta propiedad podrán hacer
              uso exclusivamente de los espacios no ocupados con esta
              restricción.
            </p>
            <p>
              <strong>Artículo cincuenta y cuatro:</strong> Para todos los
              efectos, no se considerará exhumación el levantamiento o traslado
              dentro del cementerio de la cripta de ferro concreto sellada que
              contiene el ataúd con los restos humanos.
            </p>
            <p>
              <strong>Artículo cincuenta y cinco:</strong> De conformidad con
              las leyes, las exhumaciones de cenizas se pueden realizar en
              cualquier momento. Para el caso específico de exhumaciones de
              cadáveres o restos humanos se considerarán ordinarias y
              extraordinarias. Las primeras son las que se hacen después de los
              cinco años de inhumados los restos y las segundas las que
              contemplan el artículo anterior.
            </p>
            <p>
              <strong>Artículo cincuenta y seis:</strong> Para la exhumación
              ordinaria de cadáveres o restos humanos los propietarios y/o
              beneficiarios deberán presentar solicitud escrita a la
              Administración del cementerio, quien procederá a otorgarla previa
              comprobación de la identidad del cadáver, mediante su registro en
              los libros respectivos.
            </p>
            <p>
              <strong>Artículo cincuenta y siete:</strong> Se permitirán
              únicamente las exhumaciones extraordinarias cuando fueren
              ordenadas por autoridad judicial competente y en la práctica de
              estas se observarán todos los requisitos que señala la ley. Se
              entiende por exhumación extraordinaria la que se efectúa dentro de
              los primeros cinco años posteriores contados a partir de la
              inhumación de los restos.
            </p>
            <p>
              <strong>Artículo cincuenta y ocho:</strong> La Administración
              podrá efectuar exhumaciones ordinarias de oficio, en cuyo caso
              además de acatar las regulaciones específicas, debe cumplir los
              siguientes requisitos adicionales: a) notificar a los familiares
              cercanos, si los hay, con quince días de anticipación; y b)
              levantar acta por duplicado haciendo constar: 1) Nombres y
              apellidos completos del fallecido; 2) Fecha de enterramiento y
              datos de identificación del lugar donde se encuentra inhumado; 3)
              Causa de la muerte; 4) Destino final de los restos; 5) Los demás
              datos que exija el Reglamento interno del Cementerio.
            </p>
            <p>
              <strong>Artículo cincuenta y nueve:</strong> Todos los gastos que
              ocasione una inhumación o traslado deberán ser cancelados con
              anterioridad a la Administración.
            </p>
          </Accordion>

          <Accordion title="CAPÍTULO DECIMO PRIMERO: DE LAS EXHUMACIONES.">
            <p>
              <strong>Artículo cincuenta y tres:</strong> Todo propietario podrá
              prohibir la exhumación de sus restos y los de sus hijos menores de
              edad. También podrá prohibir la exhumación de los restos de una
              tercera persona siempre que ésta haya previamente otorgado dicho
              consentimiento por escrito. Cuando exista esta prohibición, las
              personas que por traspaso adquieran esta propiedad podrán hacer
              uso exclusivamente de los espacios no ocupados con esta
              restricción.
            </p>
            <p>
              <strong>Artículo cincuenta y cuatro:</strong> Para todos los
              efectos, no se considerará exhumación el levantamiento o traslado
              dentro del cementerio de la cripta de ferro concreto sellada que
              contiene el ataúd con los restos humanos.
            </p>
            <p>
              <strong>Artículo cincuenta y cinco:</strong> De conformidad con
              las leyes, las exhumaciones de cenizas se pueden realizar en
              cualquier momento. Para el caso específico de exhumaciones de
              cadáveres o restos humanos se considerarán ordinarias y
              extraordinarias. Las primeras son las que se hacen después de los
              cinco años de inhumados los restos y las segundas las que
              contemplan el artículo anterior.
            </p>
            <p>
              <strong>Artículo cincuenta y seis:</strong> Para la exhumación
              ordinaria de cadáveres o restos humanos los propietarios y/o
              beneficiarios deberán presentar solicitud escrita a la
              Administración del cementerio, quien procederá a otorgarla previa
              comprobación de la identidad del cadáver, mediante su registro en
              los libros respectivos.
            </p>
            <p>
              <strong>Artículo cincuenta y siete:</strong> Se permitirán
              únicamente las exhumaciones extraordinarias cuando fueren
              ordenadas por autoridad judicial competente y en la práctica de
              estas se observarán todos los requisitos que señala la ley. Se
              entiende por exhumación extraordinaria la que se efectúa dentro de
              los primeros cinco años posteriores contados a partir de la
              inhumación de los restos.
            </p>
            <p>
              <strong>Artículo cincuenta y ocho:</strong> La Administración
              podrá efectuar exhumaciones ordinarias de oficio, en cuyo caso
              además de acatar las regulaciones específicas, debe cumplir los
              siguientes requisitos adicionales: a) notificar a los familiares
              cercanos, si los hay, con quince días de anticipación; y b)
              levantar acta por duplicado haciendo constar: 1) Nombres y
              apellidos completos del fallecido; 2) Fecha de enterramiento y
              datos de identificación del lugar donde se encuentra inhumado; 3)
              Causa de la muerte; 4) Destino final de los restos; 5) Los demás
              datos que exija el Reglamento interno del Cementerio.
            </p>
            <p>
              <strong>Artículo cincuenta y nueve:</strong> Todos los gastos que
              ocasione una inhumación o traslado deberán ser cancelados con
              anterioridad a la Administración.
            </p>
          </Accordion>

          <Accordion title="CAPÍTULO DECIMO TERCERO: DISPOSICIONES VARIAS.">
            <p>
              <strong>Artículo sesenta y seis:</strong> El cementerio estará
              abierto al público de las seis horas a las diecisiete horas y
              treinta minutos. Sólo la Administración podrá hacer variaciones en
              este horario.
            </p>
            <p>
              <strong>Artículo sesenta y siete:</strong> La Administración se
              reserva el derecho de Admisión al cementerio de cualquier persona
              que a su juicio pudiera poner en peligro la tranquilidad y el
              orden que debe reinar en el mismo.
            </p>
            <p>
              <strong>Artículo sesenta y ocho:</strong> La Administración se
              reserva el derecho de realizar todo tipo de reparaciones y
              mantenimiento en todas las instalaciones del Cementerio, ya sea
              que éstas se realicen en terreno propio de la empresa o en
              propiedades ya vendidas en beneficio de estas para su correcta
              conservación. Consecuentemente, el traspaso de la propiedad se
              hará con dichas limitaciones.
            </p>
            <p>
              <strong>Artículo sesenta y nueve:</strong> El Cementerio es
              totalmente ajeno a cualquier tipo de ideas políticas o principios
              religiosos. En consecuencia, se respetarán todas las creencias
              sean de la clase que fueren y permitirá a sus instalaciones la
              celebración de ritos de cualquier creencia siempre y cuando no se
              ponga en peligro con ellos la tranquilidad del Cementerio, ni se
              atente contra la ley y las buenas costumbres.
            </p>
            <p>
              <strong>Artículo setenta:</strong> El presente reglamento es parte
              integral del contrato de compra-venta que se suscribe entre el
              propietario particular y la empresa propietaria y por lo tanto las
              partes se obligan a cumplirlo íntegramente y lo harán constar así
              en el respectivo documento.
            </p>
            <p>
              <strong>Artículo setenta y uno:</strong> El presente reglamento
              será editado pública o privadamente, a juicio de la sociedad
              propietaria y entrará en vigor el día de su publicación en los
              medios que correspondan.
            </p>
          </Accordion>
        </div>
      </section>
      <WhatsApp />
    </>
  );
};

export default faq;
