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
  technologies: Array<string>;
  pubDate: Date;
  type: string;
};

export default function Homepage() {
  // get ready content to render
  const render: Array<Post> = [];
  PROJECTS.forEach((project) => {
    render.push(project);
  });
  posts.forEach((post) => {
    if (!post.data.hide) {
      const blog: Post = {
        title: post.data.title,
        link: `/blog/${post.slug}`,
        description: post.data.description,
        technologies: ["blog"],
        pubDate: post.data.pubDate,
        type: "blog",
      };
      render.push(blog);
    }
  });

  // Mobile remove arrow
  let screenWidth = window.screen.width;
  const [mobile, setMobile] = useState(false);

  const div = useAnimationControls();
  const controls = useAnimationControls();
  const onBlog = false;

  // Blog title

  let blogTitle = false;

  // Framer motion

  // Keyboard controls
  const [selected, setSelected] = useState(0);
  const handleKeyDown = (e) => {
    if (e.keyCode === 74 && selected < render.length - 1) {
      setSelected((selected) => selected + 1);
      console.log(selected);
    }
    if (e.keyCode === 75 && selected > 0) {
      setSelected((selected) => selected - 1);
      console.log(selected);
    }
    if (e.keyCode === 13) {
      window.location.href = render[selected].link;
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
    let offset = 0;
    if (selected == PROJECTS.length) {
      offset = -32;
    }
    if (element !== null) {
    }
    controls.start({
      y: newY.top - 146 - offset,
    });
  }, [selected]);

  return (
    <div className="float-left w-full p-4">
      <motion.h1
        animate={controls}
        className="text-xl font-bold relative right-[18px]"
        id="arrow"
      >
        {"~>"}
      </motion.h1>
      <h1 className="text-2xl font-bold" id="heading">
        Projects
      </h1>
      {render.map(({ title, link, description, type, technologies }, index) => {
        const isBlog = type === "blog";
        const isSelected = selected === index || mobile;
        const classNames = `p-2 ${isSelected ? "text-white" : "text-gray-500"}`;

        return (
          <div
            key={title}
            onMouseEnter={() => setSelected(index)}
            onTouchStart={() => setSelected(index)}
            id={index.toString()}
          >
            {isBlog && !blogTitle && (
              <>
                <h1 className="text-2xl font-bold mt-2">Blog posts</h1>
                {(blogTitle = true)}
              </>
            )}

            <motion.div className={classNames}>
              <h2 className="text-xl">
                <a href={link}>{title}</a>
              </h2>
              {isBlog ? <p>{description}</p> : <a href={link}>{description}</a>}
              {isBlog || (
                <p className="text-[10px] text-gray-500">
                  {technologies.join(", ")}
                </p>
              )}
            </motion.div>
          </div>
        );
      })}
      <div className="text-gray-500 text-xs p-2">
        {mobile ? (
          ""
        ) : (
          <div>
            <span className="font-bold">j</span> to move down
            <br />
            <span className="font-bold">k</span> to move up
            <br />
            <span className="font-bold">enter</span> to open
          </div>
        )}
      </div>
    </div>
  );
}
