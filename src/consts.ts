import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "PELLAN Florian",
  DESCRIPTION: "My little portfolio about game dev, game design, infrastructure and whatever i find interesting in this vast web :)",
  EMAIL: "florian.pellan@live.fr",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "My portfolio.",
};

export const WORK : Metadata = {
  TITLE: "WORK",
  DESCRIPTION: "My work experience.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/",
  },
];
