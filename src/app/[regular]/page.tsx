import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

export const dynamicParams = false;

export const generateStaticParams = () => {
  const getRegularPages = getSinglePage("pages");
  return getRegularPages.map((page: RegularPage) => ({
    regular: page.slug,
  }));
};

const RegularPages = async ({
  params,
}: {
  params: Promise<{ regular: string }>;
}) => {
  const { regular } = await params;
  const data: RegularPage[] = getSinglePage("pages");
  const pageData = data.filter((page) => page.slug === regular)[0];
  const { frontmatter, content } = pageData;
  const { title, meta_title, description, image } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <section className="section">
        <div className="container">
          <div className="row justify-center">
            <div className="lg:col-10">
              <MDXContent content={content} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegularPages;
