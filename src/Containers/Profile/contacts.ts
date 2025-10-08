import { ReactNode } from "react";

import { BookContact, GitHub, Mail, SendIcon } from "../../Components/Icons";

import styles from "./Profile.module.css";

export const ContactIcons: Record<string, ReactNode> = {
  telegram: SendIcon({ className: styles.telegram }),
  hh: BookContact({}),
  habr: BookContact({}),
  email: Mail({}),
  github: GitHub({}),
};