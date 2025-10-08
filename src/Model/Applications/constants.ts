import { ApplicationItemType, MaterialItemType } from "./types";

export const Applications: Array<ApplicationItemType> = [
  {
    id: "manager",
    name: "86BoxManager",
    description:
      "86BoxManager - приложение для создания и управления настройками виртуальных машин 86Box на Windows и Linux.",
    downloadURL: "https://github.com/YMilovets/86BoxManager/releases",
    iconPath: "icons/86Box.png",
    realizeDate: new Date(2025, 9, 7),
    version: "2.3.0",
    requirements:
      "Windows 7/8/8.1, Windows 10/11, Ubuntu 20.04 и новее, Fedora 32+, Debian 10+",
  },
  {
    id: "weather",
    name: "Weather Desktop Plus",
    description: `Данная программа позволяет удобно просматривать текущий прогноз погоды для выбранного города
      в интернете с возможностью выбора сервиса и просмотра температуры в области системных уведомлений.`,
    downloadURL:
      "https://github.com/YMilovets/WeatherDesktopPlus/releases/tag/v0.10.0-alpha",
    iconPath: "icons/Weather++.png",
    realizeDate: new Date(),
    version: "0.10.0-alpha",
    requirements:
      "Windows 7 - 11, Ubuntu 14.04 и новее / Fedora 24+ / Debian 8+",
  },
];

export const Materials: Array<MaterialItemType> = [
  {
    id: "fluentUI",
    name: "Iconography - Fluent 2 Design System",
    linkURL: "https://fluent2.microsoft.design/iconography",
  },
  {
    id: "effects",
    name: "React Bits - Plasma / davidhdev",
    linkURL: "https://reactbits.dev/backgrounds/plasma",
  },
  {
    id: "logoCompany",
    name: "Companies Logo - The company logo database and API",
    linkURL: "https://companieslogo.com/",
  },
];