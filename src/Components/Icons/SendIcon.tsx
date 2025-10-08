import clsx from "clsx";

import { IconProps } from "./types";

import styles from "./Icons.module.css";

function SendIcon({ className }: IconProps) {
  return (
    <svg
      className={clsx(className, styles.root)}
      aria-label="SendColor"
      fill="currentColor"
      role="img"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 9.5a.5.5 0 0 1 0 1l-8.12 1.77.6-2.27-.6-2.27L11.5 9.5Z"
        fill="url(#ic_fluent_send_20_color__a)"
      ></path>
      <path
        d="M2.72 2.05a.5.5 0 0 0-.7.58l1.5 5.62c.05.19.2.33.4.36l6.85 1.14c.28.05.28.45 0 .5l-6.85 1.14a.5.5 0 0 0-.4.36l-1.5 5.62a.5.5 0 0 0 .7.58l15-7.5a.5.5 0 0 0 0-.9l-15-7.5Z"
        fill="url(#ic_fluent_send_20_color__b)"
      ></path>
      <path
        d="M2.72 2.05a.5.5 0 0 0-.7.58l1.5 5.62c.05.19.2.33.4.36l6.85 1.14c.28.05.28.45 0 .5l-6.85 1.14a.5.5 0 0 0-.4.36l-1.5 5.62a.5.5 0 0 0 .7.58l15-7.5a.5.5 0 0 0 0-.9l-15-7.5Z"
        fill="url(#ic_fluent_send_20_color__c)"
      ></path>
      <defs>
        <linearGradient
          id="ic_fluent_send_20_color__b"
          x1="2"
          y1="-4.5"
          x2="15.7"
          y2="13.71"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3BD5FF"></stop>
          <stop offset="1" stopColor="#0094F0"></stop>
        </linearGradient>
        <linearGradient
          id="ic_fluent_send_20_color__c"
          x1="10"
          y1="6.31"
          x2="14.16"
          y2="17.57"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".13" stopColor="#DCF8FF" stopOpacity="0"></stop>
          <stop offset=".77" stopColor="#FF6CE8" stopOpacity=".7"></stop>
        </linearGradient>
        <radialGradient
          id="ic_fluent_send_20_color__a"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(7 0 0 .9275 1.5 10)"
        >
          <stop stopColor="#0094F0"></stop>
          <stop offset="1" stopColor="#2052CB"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}

export default SendIcon;
