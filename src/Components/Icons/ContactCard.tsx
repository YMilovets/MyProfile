import clsx from "clsx";

import { IconProps } from "./types";

import styles from "./Icons.module.css";

function ContactCard({ className }: IconProps) {
  return (
    <svg
      className={clsx(className, styles.root)}
      aria-label="ContactCardColor"
      fill="currentColor"
      role="img"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 5.75C2 4.78 2.78 4 3.75 4h12.5c.97 0 1.75.78 1.75 1.75v8.5c0 .97-.78 1.75-1.75 1.75H3.75C2.78 16 2 15.22 2 14.25v-8.5Z"
        fill="url(#ic_fluent_contact_card_20_color__a)"
      ></path>
      <path
        d="M2 5.75C2 4.78 2.78 4 3.75 4h12.5c.97 0 1.75.78 1.75 1.75v8.5c0 .97-.78 1.75-1.75 1.75H3.75C2.78 16 2 15.22 2 14.25v-8.5Z"
        fill="url(#ic_fluent_contact_card_20_color__b)"
        fillOpacity=".7"
      ></path>
      <path
        d="M11.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"
        fill="url(#ic_fluent_contact_card_20_color__c)"
      ></path>
      <path
        d="M4 11.7c0-.53.42-.95.95-.95h3.1c.53 0 .95.42.95.95 0 .85-.58 1.58-1.4 1.79l-.06.01a4.3 4.3 0 0 1-2.08 0l-.06-.01c-.82-.2-1.4-.94-1.4-1.8Z"
        fill="url(#ic_fluent_contact_card_20_color__d)"
      ></path>
      <path
        d="M8 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        fill="url(#ic_fluent_contact_card_20_color__e)"
      ></path>
      <defs>
        <linearGradient
          id="ic_fluent_contact_card_20_color__a"
          x1="7.71"
          y1="4"
          x2="11.39"
          y2="16.1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B3E0FF"></stop>
          <stop offset="1" stopColor="#8CD0FF"></stop>
        </linearGradient>
        <linearGradient
          id="ic_fluent_contact_card_20_color__b"
          x1="12.48"
          y1="5.47"
          x2="15.57"
          y2="22.67"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".45" stopColor="#FF6CE8" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#FF6CE8"></stop>
        </linearGradient>
        <linearGradient
          id="ic_fluent_contact_card_20_color__c"
          x1="12.64"
          y1="7.54"
          x2="14.65"
          y2="15.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0078D4"></stop>
          <stop offset="1" stopColor="#0067BF"></stop>
        </linearGradient>
        <linearGradient
          id="ic_fluent_contact_card_20_color__d"
          x1="4"
          y1="9"
          x2="5.1"
          y2="14.05"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".13" stopColor="#9C6CFE"></stop>
          <stop offset="1" stopColor="#7A41DC"></stop>
        </linearGradient>
        <linearGradient
          id="ic_fluent_contact_card_20_color__e"
          x1="5"
          y1="6"
          x2="7.24"
          y2="9.84"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".13" stopColor="#9C6CFE"></stop>
          <stop offset="1" stopColor="#7A41DC"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default ContactCard