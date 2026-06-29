export type Project = {
  name: string;
  description: string;
  language: string;
  url: string;
};

export type SocialLink = {
  label: string;
  command: string;
  href: string;
  display: string;
};

export const profile = {
  name: "Shoury Sharma",
  role: "AI Engineer",
  handle: "shoury",
  host: "portfolio",
  email: "shoury.sharma.work@gmail.com",
  github: "https://github.com/galanteria01",
  linkedin: "https://linkedin.com/in/shoury-sharma",
  // Short bio surfaced via `cat bio.txt`
  bio: [
    "AI Engineer shipping intelligent systems end to end — from",
    "prompts and pipelines to the dev tools that make them usable.",
    "I like small, sharp software: agents that do real work, infra",
    "that gets out of the way, and interfaces that feel inevitable.",
  ],
  stack: [
    "Python",
    "TypeScript",
    "PyTorch",
    "LLMs / RAG",
    "Next.js",
    "Docker",
  ],
};

export const projects: Project[] = [
  {
    name: "architect-studio",
    description: "The Figma for System Design.",
    language: "TypeScript",
    url: "https://github.com/galanteria01/architect-studio",
  },
  {
    name: "envx",
    description: "Environment Protection Unit.",
    language: "JavaScript",
    url: "https://github.com/galanteria01/envx",
  },
  {
    name: "special-hooks",
    description: "Handy React hooks, published on npm.",
    language: "TypeScript",
    url: "https://github.com/galanteria01/special-hooks",
  },
];

export const socials: SocialLink[] = [
  {
    label: "github",
    command: "--github",
    href: profile.github,
    display: "github.com/galanteria01",
  },
  {
    label: "linkedin",
    command: "--linkedin",
    href: profile.linkedin,
    display: "linkedin.com/in/shoury-sharma",
  },
  {
    label: "email",
    command: "--email",
    href: `mailto:${profile.email}`,
    display: profile.email,
  },
];
