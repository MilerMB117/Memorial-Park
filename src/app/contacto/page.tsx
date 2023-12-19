import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

const Contact = async () => {
  const data: RegularPage = getListPage("contact/_index.md");
  const { frontmatter } = data;
  const { title, description, meta_title, image } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6">
              <form action={contact_form_action} method="POST">
                <div className="mb-6">
                  <label htmlFor="name" className="form-label">
                    Nombre Completo<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="form-label">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="john.doe@email.com"
                    type="email"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="form-label">
                    Escríbanos<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input"
                    placeholder="Message goes here..."
                    rows={8}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </form>
            </div>
            <div className="lg:col-6">
  <div className="contact-info">
    <p>
      <span className="contact-icon">
        <i className="fas fa-phone"></i>
      </span>
      <a href="tel:22150707">Tel: 2215-0707</a>
      <span className="contact-icon">
        <i className="fab fa-whatsapp"></i>
      </span>
      <a href="https://wa.me/+50685520707"> WhatsApp: +506 8552-0707</a>
    </p>
    <p>
      <span className="contact-icon">
        <i className="fas fa-envelope"></i>
      </span>
      <a href="mailto:info@memorialpark.cr">info@memorialpark.cr</a>
    </p>
    <p>
      <span className="contact-icon">
        <i className="fas fa-globe"></i>
      </span>
      <a href="https://www.memorialpark.cr" target="_blank" rel="noopener noreferrer">
        www.memorialpark.cr
      </a>
    </p>
  </div>
  <div className="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.6720807379716!2d-84.17630538825958!3d9.96121707365748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fbe86c6238cd%3A0xc8645b9111627020!2sCamposanto%20Memorial%20Park!5e0!3m2!1ses!2sco!4v1697576750956!5m2!1ses!2sco"
      width="100%"
      height="450"
      style={{
        border: '0',
      }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
