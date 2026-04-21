import BlogCard from "@/components/BlogCard";
import config from "@/config/config.json";
import { getSinglePage } from "@/lib/contentParser";
import { getTaxonomy } from "@/lib/taxonomyParser";
import taxonomyFilter from "@/lib/utils/taxonomyFilter";
import { humanize } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";

const { blog_folder } = config.settings;

export const dynamicParams = false;

export const generateStaticParams: () => { single: string }[] = () => {
  const tags = getTaxonomy(blog_folder, "tags");
  return tags.map((tag) => ({ single: tag }));
};

const TagSingle = async ({
  params,
}: {
  params: Promise<{ single: string }>;
}) => {
  const { single } = await params;
  const posts: Post[] = getSinglePage(blog_folder);
  const filterByTags = taxonomyFilter(posts, "tags", single);

  return (
    <>
      <SeoMeta title={humanize(single)} />
      <PageHeader title={humanize(single)} />
      <div className="section-sm pb-0">
        <div className="container">
          <div className="row">
            {filterByTags.map((post: Post, index: number) => (
              <div className="mb-14 md:col-6 lg:col-4" key={index}>
                <BlogCard data={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TagSingle;
