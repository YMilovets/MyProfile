import clsx from "clsx";

import { IconProps } from "./types";

import styles from "./Icons.module.css";

function Calendar({ className }: IconProps) {
  return (
    <svg
      className={clsx(className, styles.root)}
      aria-label="CalendarColor"
      fill="currentColor"
      role="img"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 6H3v8.5A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V6Z"
        fill="url(#ic_fluent_calendar_20_color__a)"
      ></path>
      <path
        d="M17 6H3v8.5A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V6Z"
        fill="url(#ic_fluent_calendar_20_color__b)"
      ></path>
      <g filter="url(#ic_fluent_calendar_20_color__c)">
        <path
          d="M8 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
          fill="url(#ic_fluent_calendar_20_color__d)"
        ></path>
        <path
          d="M8 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
          fill="url(#ic_fluent_calendar_20_color__e)"
        ></path>
        <path
          d="M11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
          fill="url(#ic_fluent_calendar_20_color__f)"
        ></path>
        <path
          d="M10 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
          fill="url(#ic_fluent_calendar_20_color__g)"
        ></path>
        <path
          d="M14 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
          fill="url(#ic_fluent_calendar_20_color__h)"
        ></path>
      </g>
      <path
        d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V7h14V5.5Z"
        fill="url(#ic_fluent_calendar_20_color__i)"
      ></path>
      <defs>
        <linearGradient
          id="ic_fluent_calendar_20_color__a"
          x1="12.53"
          y1="18.35"
          x2="8.5"
          y2="6.56"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B3E0FF"></stop>
          <stop offset="1" stopColor="#B3E0FF"></stop>
        </linearGradient>
        <linearGradient
          id="ic_fluent_calendar_20_color__b"
          x1="11.5"
          y1="10.5"
          x2="13.5"
          y2="19.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DCF8FF" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#FF6CE8" stopOpacity=".7"></stop>
        </linearGradient>
        <linearGradient
          id="ic_fluent_calendar_20_color__d"
          x1="9.27"
          y1="8.42"
          x2="10.91"
          y2="18.39"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0078D4"></stop>
          <stop offset="1" stopColor="#0067BF"></stop>
        </linearGradient>
        <linearGradient
          id="ic_fluent_calendar_20_color__e"
          x1="9.27"
          y1="8.42"
          x2="10.91"
          y2="18.39"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0078D4"></stop>
          <stop offset="1" stopColor="#0067BF"></stop>
        </linearGradient>
        <linearGradient
          id="ic_fluent_calendar_20_color__f"
          x1="9.27"
          y1="8.42"
          x2="10.91"
          y2="18.39"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0078D4"></stop>
          <stop offset="1" stopColor="#0067BF"></stop>
        </linearGradient>
        <linearGradient
          id="ic_fluent_calendar_20_color__g"
          x1="9.27"
          y1="8.42"
          x2="10.91"
          y2="18.39"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0078D4"></stop>
          <stop offset="1" stopColor="#0067BF"></stop>
        </linearGradient>
        <linearGradient
          id="ic_fluent_calendar_20_color__h"
          x1="9.27"
          y1="8.42"
          x2="10.91"
          y2="18.39"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0078D4"></stop>
          <stop offset="1" stopColor="#0067BF"></stop>
        </linearGradient>
        <linearGradient
          id="ic_fluent_calendar_20_color__i"
          x1="3"
          y1="3"
          x2="15.02"
          y2="-.77"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0094F0"></stop>
          <stop offset="1" stopColor="#2764E7"></stop>
        </linearGradient>
        <filter
          id="ic_fluent_calendar_20_color__c"
          x="4.67"
          y="8.33"
          width="10.67"
          height="7.67"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset dy=".67"></feOffset>
          <feGaussianBlur stdDeviation=".67"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0.1242 0 0 0 0 0.323337 0 0 0 0 0.7958 0 0 0 0.32 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_378174_9787"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_378174_9787"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Calendar;
