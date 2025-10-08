import clsx from "clsx";

import { IconProps } from "./types";

import styles from "./Icons.module.css";

function BookContact({ className }: IconProps) {
  return (
    <svg
      className={clsx(className, styles.root)}
      aria-label="BookContactsColor"
      fill="currentColor"
      role="img"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 15H16s-.5.5-.5 1.5.5 1 .5 1H5.5a1 1 0 0 1-1-1V15Z"
        fill="url(#ic_fluent_book_contacts_20_color__a)"
      ></path>
      <path
        d="M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z"
        fill="url(#ic_fluent_book_contacts_20_color__b)"
      ></path>
      <path
        d="M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z"
        fill="url(#ic_fluent_book_contacts_20_color__c)"
        fillOpacity=".3"
      ></path>
      <path
        d="M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z"
        fill="url(#ic_fluent_book_contacts_20_color__d)"
        fillOpacity=".3"
      ></path>
      <path
        d="M10 13c2.14 0 3-.94 3-1.88 0-.62-.58-1.12-1.29-1.12H8.3C7.58 10 7 10.5 7 11.13c0 .93.86 1.87 3 1.87Zm1.5-5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        fill="url(#ic_fluent_book_contacts_20_color__e)"
        fillOpacity=".9"
      ></path>
      <defs>
        <linearGradient
          id="ic_fluent_book_contacts_20_color__a"
          x1="10"
          y1="17"
          x2="10"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9DEAFF"></stop>
          <stop offset=".72" stopColor="#58AAFE"></stop>
        </linearGradient>
        <linearGradient
          id="ic_fluent_book_contacts_20_color__b"
          x1="8.27"
          y1="4.99"
          x2="10.81"
          y2="22.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20AC9D"></stop>
          <stop offset="1" stopColor="#2052CB"></stop>
        </linearGradient>
        <linearGradient
          id="ic_fluent_book_contacts_20_color__e"
          x1="14.5"
          y1="19"
          x2="2.54"
          y2=".2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9DEAFF"></stop>
          <stop offset="1" stopColor="#fff"></stop>
        </linearGradient>
        <radialGradient
          id="ic_fluent_book_contacts_20_color__c"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(4 0 0 2.23514 10 12)"
        >
          <stop stopColor="#171155"></stop>
          <stop offset="1" stopColor="#4A43CB" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="ic_fluent_book_contacts_20_color__d"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(2 0 0 1.94168 10.5 7.5)"
        >
          <stop stopColor="#171155"></stop>
          <stop offset="1" stopColor="#4A43CB" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}

export default BookContact