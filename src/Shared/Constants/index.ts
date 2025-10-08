import { ContactType } from "../../Model/Profile/types";

export const Skills: Array<string> = [
  "React",
  "TypeScript",
  "Redux",
  "Redux-Saga",
  "Effector",
  "Vite",
  "Webpack",
  "Visual Code",
  "WebSocket",
];

export const Tools: Array<string> = [
  "Figma",
  "Storybook",
  "Git",
  "CI/CD",
  "ECharts",
  "ESLint",
  "Prettier",
  "Keycloak",
  "NPM",
  "Yarn",
];

export const Contacts: Array<ContactType> = [
  {
    id: "telegram",
    linkURL: "https://t.me/yan_milovets",
    name: "@yan_milovets",
  },
  {
    id: "email",
    linkURL: "mailto:y.milovets@yandex.ru",
    name: "y.milovets@yandex.ru",
  },
  {
    id: "hh",
    linkURL: "https://hh.ru/resume/1b34c73cff0f5a191b0039ed1f704d31515141",
    name: "Резюме на HH.ru",
  },
  {
    id: "habr",
    linkURL: "https://career.habr.com/ymilovets",
    name: "Резюме на Habr",
  },
  {
    id: "github",
    linkURL: "https://github.com/YMilovets",
    name: "GitHub",
  },
];

export const DELTA_SCROLL_POS = 0.5;
export const REALIZE_YEAR = 2025;