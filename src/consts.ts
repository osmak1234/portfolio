// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_DESCRIPTION = "Welcome to my website!";
export const PROJECTS = [
  {
    title: "Quicktick Frontend ✔️",
    description: "Todo application frontend, Webapp, Android",
    link: "https://quicktick-next.vercel.app/?show=force",
    technologies: [
      "React",
      "TypeScript",
      "NextJS",
      "ChakraUI",
      "FramerMotion",
      "CapacitorJS",
    ],
    pubDate: new Date(),
    type: "Project",
  },
  {
    title: "Quicktick Backend ✔️",
    description: "Backend for my todo app",
    link: "https://github.com/osmak1234/public-quicktick-api",
    technologies: [
      "Rust",
      "Axum",
      "SQLx",
      "MySQL",
      "WebSockets",
      "HTTPS",
      "Docker",
    ],
    pubDate: new Date(),
    type: "Project",
  },
  {
    title: "Quicktick TTY ❌",
    description: "TTY client for my todo app (unstable, abandoned)",
    link: "https://github.com/osmak1234/quicktick-tty",
    technologies: ["Rust", "RataTUI", "Reqwest"],
    pubDate: new Date(),
    type: "Project",
  },

  {
    title: "Old Portfolio ✔️",
    description: "My old portfolio website.",
    link: "https://osmak1234-github-io.vercel.app/",
    technologies: ["React", "ChakraUI", "FramerMotion"],
    pubDate: new Date(),
    type: "Project",
  },
  {
    title: "Pomodoro ✔️",
    description: "Pomodoro cli timer.",
    link: "https://github.com/osmak1234/pomodoro",
    technologies: ["Rust", "RataTUI"],
    category: "Rust",
    pubDate: new Date(),
    type: "Project",
  },
  {
    title: "Text to Ascii art ✔️",
    description: "Library for bigger text in terminal.",
    link: "https://github.com/osmak1234/text-to-ascii-art",
    technologies: ["Rust"],
    pubDate: new Date(),
    type: "Project",
  },
  {
    title: "HangRS ✔️",
    description: "Cli hangman game.",
    link: "https://github.com/osmak1234/hangrs",
    technologies: ["Rust"],
    pubDate: new Date(),
    type: "Project",
  },
  {
    title: "Pokeswipe ✔️",
    description: "Tinder-like app for Pokemon.",
    link: "https://pokeswipe.vercel.app/",
    technologies: ["NextJS", "TypeScript", "PostgreSQL", "Prisma", "ChakraUI"],
    pubDate: new Date(),
    type: "Project",
  },
  {
    title: "Ukladejto ⏳",
    description: "Web app for chatting and sending files.",
    link: "https://ukladejto-git-prod-osmak1234.vercel.app/",
    technologies: [
      "NextJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "TRPC",
      "FramerMotion",
    ],
    pubDate: new Date(),
    type: "Project",
  },
];
