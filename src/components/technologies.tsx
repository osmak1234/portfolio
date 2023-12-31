// Technologies
import { TbBrandNextjs } from "react-icons/tb";
import { SiReact, SiPostgresql, SiTrpc } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

// Markup languages
import { TbBrandHtml5, TbMarkdown } from "react-icons/tb";

// Programming languages
import { TbBrandTypescript } from "react-icons/tb";
import { FaRust } from "react-icons/fa";

export default function technologies() {
  const technology_card =
    "w-24 h-24 p-4 text-white flex flex-col items-center justify-center m-2 border-solid border-white border rounded";
  return (
    <div>
      <div className="flex flex-wrap justify-center bg-black p-4">
        <a href="https://www.typescriptlang.org/">
          <div className={technology_card}>
            <TbBrandTypescript size="2.5em" />
            <p className="text-white underline">TS(JS)</p>
          </div>
        </a>
        <a href="https://www.rust-lang.org/">
          <div className={technology_card}>
            <FaRust size="2.5em" />
            <p className="text-white underline">Rust</p>
          </div>
        </a>
        <a href="https://nextjs.org/">
          <div className={technology_card}>
            <TbBrandNextjs size="2.5em" />
            <p className="text-white underline">Nextjs</p>
          </div>
        </a>
        <a href="https://reactjs.org/">
          <div className={technology_card}>
            <SiReact size="2.5em" />
            <p className="text-white underline">React</p>
          </div>
        </a>
        <a href="https://nodejs.org/">
          <div className={technology_card}>
            <FaNodeJs size="2.5em" />
            <p className="text-white underline">NodeJs</p>
          </div>
        </a>
        <a href="https://www.postgresql.org/">
          <div className={technology_card}>
            <SiPostgresql size="2.5em" />
            <p className="text-white underline">PSQL</p>
          </div>
        </a>
        <a href="https://trpc.io/">
          <div className={technology_card}>
            <SiTrpc size="2.5em" />
            <p className="text-white underline">tRPC</p>
          </div>
        </a>
        <a href="https://tailwindcss.com/">
          <div className={technology_card}>
            <SiTailwindcss size="2.5em" />
            <p className="text-white underline">Tailwind</p>
          </div>
        </a>
        <a href="https://www.markdownguide.org/">
          <div className={technology_card}>
            <TbMarkdown size="2.5em" />
            <p className="text-white underline">Markdown</p>
          </div>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
          <div className={technology_card}>
            <TbBrandHtml5 size="2.5em" />
            <p className="text-white underline">HTML5</p>
          </div>
        </a>
      </div>
    </div>
  );
}
