import { StateCreator } from "zustand";

export enum Sections {
  Home = "home",
  About = "about",
  EnterpriseProjects = "enterprise_projects",
  PersonalProjects = "personal_projects",
  Apps = "apps",
  Footer = "footer",
}

export type ProjectIdIndexes = Extract<
  Sections,
  Sections.EnterpriseProjects | Sections.PersonalProjects
>;

type EventCreateParams<TState> = Parameters<StateCreator<TState>>;

export type EventSetParam<TState> = EventCreateParams<TState>[0];

export type EventGetParam<TState> = EventCreateParams<TState>[1];

export enum Themes {
  Dark = "dark",
  Light = "light",
  Default = "no-preference",
}