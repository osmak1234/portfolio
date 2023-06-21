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
  // get ready content to render
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

  // Mobile remove arrow
  let screenWidth = window.screen.width;
  const [mobile, setMobile] = useState(false);

  const div = useAnimationControls();
  const controls = useAnimationControls();

  useEffect(() => {
    if (screenWidth < 768) {
      setMobile(true);
      div.start({
        opacity: 1,
      });
    } else {
      div.start({
        opacity: 0,
      });
    }
  }, [screenWidth]);

  function hideElement() {
    controls.start({
      translateY: [0, -100, -100],
      translateX: [-10, -10, 700],
      transition: {
        duration: 1,
      },
    });
    div
      .start({
        translateX: [0, 0, 700],
        transition: {
          duration: 1,
        },
      })
      .finally(() => {
        document.getElementById("mobile-warning").remove();
        document.getElementById("arrow").remove();
      });
  }

  useEffect(() => {
    if (screenWidth < 768) {
      setMobile(true);
      div
        .start({
          opacity: 1,
        })
        .then(() => {
          // wait 3 seconds and remove the elelemt
          setTimeout(hideElement, 3000);
        });
    } else {
      document.getElementById("mobile-warning").remove();
    }
    console.log(screenWidth);
  }, [screenWidth]);
  // Blog title

  let blogTitle = false;

  // Framer motion

  // Keyboard controls
  const [selected, setSelected] = useState(0);
  const handleKeyDown = (e) => {
    if (e.keyCode === 74 && selected < render.length - 1) {
      setSelected((selected) => selected + 1);
    }
    if (e.keyCode === 75 && selected > 0) {
      setSelected((selected) => selected - 1);
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
    if (element !== null) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
    console.log(newY);
    console.log(selected);
    controls.start({
      y: newY.top - 178,
    });
  }, [selected]);

  return (
    <div className="float-left w-full p-4">
      <h1 className="text-2xl font-bold mb-2" id="heading">
        Projects
      </h1>
      <motion.h1
        animate={controls}
        className="text-xl font-bold relative right-[18px]"
        id="arrow"
      >
        {"~>"}
      </motion.h1>
      <motion.div
        animate={div}
        className="border-white border p-8 z-10 rounded-md position-fixed "
        id="mobile-warning"
      >
        <h3 className="text-xl font-bold">
          For the full experience view on desktop
        </h3>
      </motion.div>
      {render.map(({ title, link, description, type }, index) => {
        if (type === "blog" && !blogTitle) {
          blogTitle = true;
          return (
            <div>
              <h1 className="text-2xl font-bold mt-2">Blog posts</h1>
              <div
                id={index.toString()}
                key={title}
                className={`${
                  selected === index || mobile
                    ? "text-white font-bold"
                    : "text-gray-500"
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
                selected === index || mobile
                  ? "text-white font-bold"
                  : "text-gray-500"
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
                selected === index || mobile
                  ? "text-white font-bold"
                  : "text-gray-500"
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
