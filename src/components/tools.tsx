import { SiNeovim } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { TbBrandGit } from "react-icons/tb";
import { GoTerminal } from "react-icons/go";
import { FaNpm } from "react-icons/fa";

export default function tools() {
  const technology_card =
    "w-24 h-24 p-4 text-white flex flex-col items-center justify-center m-2 border-solid border-white border rounded";

  return (
    <div>
      <div className="flex flex-wrap justify-center bg-black p-4">
        <a href="https://neovim.io/">
          <div className={technology_card}>
            <SiNeovim size="2.5em" />
            <p className="text-white underline">Neovim</p>
          </div>
        </a>
        <a href="https://github.com/osmak1234/dots">
          <div className={technology_card}>
            <FaLinux size="2.5em" />
            <p className="text-white underline">Linux</p>
          </div>
        </a>
        <a href="https://git-scm.com/">
          <div className={technology_card}>
            <TbBrandGit size="2.5em" />
            <p className="text-white underline">Git</p>
          </div>
        </a>

        <a href="https://sw.kovidgoyal.net/kitty/">
          <div className={technology_card}>
            <GoTerminal size="2.5em" />
            <p className="text-white underline">Terminal</p>
          </div>
        </a>
        <a href="https://www.npmjs.com/">
          <div className={technology_card}>
            <FaNpm size="2.5em" />
            <p className="text-white underline">NPM</p>
          </div>
        </a>
      </div>
    </div>
  );
}
