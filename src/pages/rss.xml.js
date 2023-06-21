import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_DESCRIPTION } from "../consts";

export async function get(context) {
  const posts = await getCollection("blog");
  return rss({
    description: SITE_DESCRIPTION,
    title: "Blog",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}
