import clsx from "clsx";

import { IconProps } from "./types";

import styles from "./Icons.module.css";

function Mail({ className }: IconProps) {
  return (
    <svg
      className={clsx(className, styles.root)}
      aria-label="MailColor"
      fill="currentColor"
      role="img"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.76 6.07A.5.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-8a.5.5 0 0 0-.76-.43L10 10.42 2.76 6.07Z"
        fill="#367AF2"
      ></path>
      <path
        d="M2.76 6.07A.5.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-8a.5.5 0 0 0-.76-.43L10 10.42 2.76 6.07Z"
        fill="url(#ic_fluent_mail_20_color__a)"
      ></path>
      <path
        d="M2.76 6.07A.5.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-8a.5.5 0 0 0-.76-.43L10 10.42 2.76 6.07Z"
        fill="url(#ic_fluent_mail_20_color__b)"
      ></path>
      <path
        d="M2.76 6.07A.5.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-8a.5.5 0 0 0-.76-.43L10 10.42 2.76 6.07Z"
        fill="url(#ic_fluent_mail_20_color__c)"
        fillOpacity=".75"
      ></path>
      <path
        d="M2.76 6.07A.5.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-8a.5.5 0 0 0-.76-.43L10 10.42 2.76 6.07Z"
        fill="url(#ic_fluent_mail_20_color__d)"
        fillOpacity=".7"
      ></path>
      <path
        d="M4.5 4A2.5 2.5 0 0 0 2 6.5v.6c0 .18.1.34.25.43l7.5 4.4c.15.1.35.1.5 0l7.5-4.4A.5.5 0 0 0 18 7.1v-.6A2.5 2.5 0 0 0 15.5 4h-11Z"
        fill="url(#ic_fluent_mail_20_color__e)"
      ></path>
      <defs>
        <linearGradient
          id="ic_fluent_mail_20_color__a"
          x1="12.03"
          y1="8.16"
          x2="16.92"
          y2="16.62"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".23" stopColor="#0094F0" stopOpacity="0"></stop>
          <stop offset=".43" stopColor="#0094F0"></stop>
        </linearGradient>
        <linearGradient
          id="ic_fluent_mail_20_color__b"
          x1="7.71"
          y1="7.16"
          x2="2.27"
          y2="17.13"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".23" stopColor="#0094F0" stopOpacity="0"></stop>
          <stop offset=".43" stopColor="#0094F0"></stop>
        </linearGradient>
        <linearGradient
          id="ic_fluent_mail_20_color__c"
          x1="14.22"
          y1="12.56"
          x2="15.06"
          y2="17.99"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2764E7" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#2764E7"></stop>
        </linearGradient>
        <linearGradient
          id="ic_fluent_mail_20_color__d"
          x1="12.48"
          y1="7.35"
          x2="14.01"
          y2="18.41"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".53" stopColor="#FF6CE8" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#FF6CE8"></stop>
        </linearGradient>
        <linearGradient
          id="ic_fluent_mail_20_color__e"
          x1="6.75"
          y1="1.51"
          x2="12.39"
          y2="15.12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6CE0FF"></stop>
          <stop offset=".46" stopColor="#29C3FF"></stop>
          <stop offset="1" stopColor="#4894FE"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Mail