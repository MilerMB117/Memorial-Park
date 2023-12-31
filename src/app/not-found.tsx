import SeoMeta from "@/partials/SeoMeta";

const NotFound = async () => {
  return (
    <>
      <SeoMeta title={"Page Not Found"} />
      <section className="section-sm text-center">
        <div className="container">
          <div className="row justify-center">
            <div className="sm:col-10 md:col-8 lg:col-6">
              <span className="text-[8rem] block font-bold text-dark dark:text-darkmode-dark">
                404
              </span>
              <h1 className="h2 mb-4">Pagina no encontrada!</h1>
              <div className="content">
                <p>
                  Esta pagina no existe o fue removida.
                </p>
              </div>
              <a href="/" className="btn btn-primary mt-8">
                Ve al incio
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
