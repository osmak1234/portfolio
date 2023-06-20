import { PROJECTS } from "../consts";
import { useState, useEffect } from "react";

export const Projects = () => {
  const [selected, setSelected] = useState(0);

  const handleKeyDown = (e) => {
    if (e.keyCode === 74 && selected < PROJECTS.length - 1) {
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

  return (
    <div className="float-left w-full p-4">
      <h1 className="text-2xl font-bold">Projects</h1>
      {PROJECTS.map(({ name, link, description, category }, index) => (
        <div
          key={name}
          className={`${
            selected === index ? "text-white font-bold" : "text-gray-500"
          } p-2`}
        >
          <h2 className="text-xl">
            {selected === index ? "~>" : ""}
            <a href={link}>{name}</a>
          </h2>
          <p>{description}</p>
        </div>
      ))}
      <div className="text-gray-500 text-xs p-2">
        <span className="font-bold">j</span> to move down
        <br />
        <span className="font-bold">k</span> to move up
        <br />
        <span className="font-bold">enter</span> to open
      </div>
    </div>
  );
};
