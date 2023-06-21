import { Projects } from "./projects";
import Blog from "./blog";
import { useState, useEffect } from "react";
import { PROJECTS } from "../consts";
import { getCollection } from "astro:content";
import { motion, useAnimationControls } from "framer-motion";

const posts = (await getCollection("blog")).sort(
  (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
);

type Post = {
  title: string;
  link: string;
  description: string;
  category: string;
  pubDate: Date;
  type: string;
};

export default function Homepage() {
  let blogTitle = false;
  const render: Array<Post> = [];
  PROJECTS.forEach((project) => {
    render.push(project);
  });
  posts.forEach((post) => {
    const blog: Post = {
      title: post.data.title,
      link: `/blog/${post.slug}`,
      description: post.data.description,
      category: "blog",
      pubDate: post.data.pubDate,
      type: "blog",
    };
    render.push(blog);
  });

  const [selected, setSelected] = useState(0);

  const controls = useAnimationControls();

  const handleKeyDown = (e) => {
    if (e.keyCode === 74 && selected < render.length - 1) {
      setSelected((selected) => selected + 1);
    }
    if (e.keyCode === 75 && selected > 0) {
      setSelected((selected) => selected - 1);
    }
    if (e.keyCode === 13) {
      window.location.href = PROJECTS[selected].link;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  function getOffset(el: any) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    };
  }
  useEffect(() => {
    let newY = getOffset(document.getElementById(selected.toString()));
    let element = document.getElementById(selected.toString() ?? "heading");
    if (element !== null) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
    console.log(newY);
    controls.start({
      y: newY.top - 178,
    });
  }, [selected]);

  return (
    <div className="float-left w-full p-4">
      <h1 className="text-2xl font-bold" id="heading">
        Projects
      </h1>
      <motion.h1
        animate={controls}
        className="text-xl font-bold relative right-[18px]"
      >
        {"~>"}
      </motion.h1>
      {render.map(({ title, link, description, category, type }, index) => {
        if (type === "blog" && !blogTitle) {
          blogTitle = true;
          return (
            <div>
              <h1 className="text-2xl font-bold">Blog posts</h1>
              <div
                id={index.toString()}
                key={title}
                className={`${
                  selected === index ? "text-white font-bold" : "text-gray-500"
                } p-2`}
              >
                <h2 className="text-xl">
                  <a href={link}>{title}</a>
                </h2>
                <p>{description}</p>
              </div>
            </div>
          );
        } else if (type === "blog" && blogTitle) {
          return (
            <div
              id={index.toString()}
              key={title}
              className={`${
                selected === index ? "text-white font-bold" : "text-gray-500"
              } p-2`}
            >
              <h2 className="text-xl">
                <a href={link}>{title}</a>
              </h2>
              <p>{description}</p>
            </div>
          );
        } else if (type === "Project") {
          return (
            <motion.div
              id={index.toString()}
              key={title}
              className={`${
                selected === index ? "text-white font-bold" : "text-gray-500"
              } p-2`}
            >
              <h2 className="text-xl">
                <a href={link}>{title}</a>
              </h2>
              <p>{description}</p>
            </motion.div>
          );
        }
      })}
      <div className="text-gray-500 text-xs p-2">
        <span className="font-bold">j</span> to move down
        <br />
        <span className="font-bold">k</span> to move up
        <br />
        <span className="font-bold">enter</span> to open
      </div>
    </div>
  );
}
