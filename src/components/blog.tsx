import { getCollection } from "astro:content";

const posts = (await getCollection("blog")).sort(
  (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
);

export default function Blog() {
  return (
    <ul>
      {posts.map((post) => (
        <li>
          <div>
            <a href={`/blog/${post.slug}`}>{post.data.title}</a>
          </div>
        </li>
      ))}
    </ul>
  );
}
