---
title: "Blog with Astro vs Next"
description: "What are the ups and downs when building blog sites with newest technology"
pubDate: "Jul 20 2023"
heroImage: "/placeholder-hero.jpg"
---

<h1>Writing a Blog with Astro vs Next.js</h1>

<br>

<br>

When it comes to building blogs and Jamstack applications, the landscape of frameworks is quite extensive and offers many great tools to choose from. Among the most popular in the JavaScript ecosystem are [Astro](https://astro.build) and [Next.js](https://nextjs.org). Both frameworks have different philosophies, styles, and capabilities, which makes choosing the right tool for your blog an important decision. In this blog post, we will compare Astro and Next.js in the context of building a blog, from rendering markdown to performance optimizations.

<br>

<h2> The Basics of Astro and Next.js</h2>

<br>
<br>

[Astro](https://astro.build) is a relatively new, modern front-end framework designed to optimize the delivery of your website using partial hydration. Unlike many other frameworks, Astro doesn't require JavaScript for the runtime, leading to a better performance in the browser. Astro leverages a unique component syntax that allows developers to write components in the languages they prefer (_React_, _Vue_, _Svelte_, or simply _HTML_ and _CSS_).

<br>

[Next.js](https://nextjs.org) is an established and robust framework for building React applications, offering capabilities like server-side rendering, static site generation, API routes, and more. Next.js also comes with excellent performance optimizations like automatic code splitting, image optimization, and built-in support for CSS and SCSS modules.

<br>

  <h2>Writing and Rendering Markdown</h2>

<br>

A key feature for any blog is the ability to use markdown files for content as they provide an easy way to format and structure your text. Here's how we can write and render markdown files with Astro and Next.js.

<br>

<h3>Astro</h3>

<br>
<br>

Astro renders markdown files with ease. You just need to use the Astro component syntax to import your markdown file and use it in an `.astro` file.

<br>

1. Install the `@astrojs/renderer-markdown` package:

```bash
npm install @astrojs/renderer-markdown
```

2. Create a markdown file in the `src` folder, for example `post.md`.

3. In your `.astro` file, import the markdown content and render it:
   <br>

```astro
---
import Post from './post.md';
---
<article>
    <Post />
</article>
```

<br>

<h3>Next.JS</h3>
<br>
<br>

Next.js uses the popular `gray-matter` and `remark` or `mdx-js` libraries to parse and render markdown.

1. Install the required packages:

```bash
npm install gray-matter remark remark-html react-markdown
```

2. Create a markdown file in the `posts` folder.

3. In Next.js, you need to parse the markdown content and pass it to a React component as props. You can create a reusable `MarkdownRenderer` component, which takes the markdown content as a prop and renders it using the `react-markdown` library.
   <br>

```javascript
import React from "react";
import ReactMarkdown from "react-markdown";
import remark from "remark";
import remarkHtml from "remark-html";

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown remarkPlugins={[remark(), remarkHtml]}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
```

<br>

4. Finally, read the markdown file, parse the frontmatter and content, and pass it to the `MarkdownRenderer` component.

<br>

```javascript
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownRenderer from "../components/MarkdownRenderer";

const PostPage = ({ content }) => {
  return (
    <article>
      <MarkdownRenderer content={content} />
    </article>
  );
};

export async function getStaticProps() {
  const postFilePath = path.join(process.cwd(), "posts", "post.md");
  const fileContents = fs.readFileSync(postFilePath, "utf8");
  const { content } = matter(fileContents);

  return {
    props: {
      content,
    },
  };
}

export default PostPage;
```

<br>

  <h2> Performance and Optimizations
</h2>

<br>
<br>

Both Astro and Next.js are focused on performance and offer numerous optimizations out of the box.

<br>

  <h3>Astro</h3>

<br>
<br>

Astro has a unique set of performance optimizations, such as **partial hydration**. Astro only sends the minimal amount of JavaScript required to the client, which leads to higher performance scores, especially on slower networks and devices. Astro also has built-in image optimization features, ensuring that images are served in the right sizes and formats.

<br>

<h3>NextJS</h3>

<br>
<br>

Next.js has a powerful set of optimizations, including automatic code splitting, server-side rendering, and static site generation, which lead to improved performance. The Next.js Image component ensures the optimized delivery of images. Additionally, Next.js has a large ecosystem, which means you can find plugins, solutions, and resources for common tasks to improve your application's overall performance.
<br>

<h2>Conclusion</h2>

<br>
<br>

Both Astro and Next.js are excellent choices for building blogs, offering unique features
