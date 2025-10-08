import { ProjectItemType } from "./types";

export const Projects: Array<ProjectItemType> = [
  {
    id: "dpm",
    title: "Система цифрового управления эффективностью",
    imageSources: [
      "project_01/screenshot_01.jpg",
      "project_01/screenshot_02.jpg",
      "project_01/screenshot_03.jpg",
      "project_01/screenshot_04.jpg",
      "project_01/screenshot_05.jpg",
      "project_01/screenshot_06.jpg",
      "project_01/screenshot_07.jpg",
      "project_01/screenshot_08.jpg",
    ],
    usedSkills: [
      "React",
      "Redux",
      "Redux-Saga",
      "Webpack",
      "STOMP.js (WebSocket)",
    ],
    description: `Проект был запланирован с целью расширения функционала уже существовавшего ранее 
        приложения и добавления нового участка предприятия для мониторинга состояния процесса изготовления стали.<br /><br />
        Также было реализовано отображение аналитических данных для нового участка предприятия по выборе смены, бригады, сталевара сравнительная статистика.<br /><br />
        Цель проекта: повышение эффективности выплавки стали в доменной печи для текущей плавки и выбранной формы заготовки.`,
    projectYears: [new Date(2021, 11, 1), new Date(2022, 11, 31)],
  },
  {
    id: "iiot",
    title: "Платформа IIoT",
    imageSources: [
      "project_03/screenshot_01.jpg",
      "project_03/screenshot_03.jpg",
      "project_03/screenshot_04.jpg",
      "project_03/screenshot_05.jpg",
    ],
    usedSkills: [
      "React",
      "TypeScript",
      "Effector",
      "Vite",
      "Express",
      "Keycloak",
    ],
    description: `Основная цель приложения: реализовать настройку сетевого взаимодействия между промышленным оборудованием предприятия по технологии Internet of Things.<br /><br />
        В рамках задач по проекту были подготовлены страницы по различным страницам конфигураторов и разработать интерфейс Модуля подъема данных, в котором
        будет реализована форма настройки параметров сервера, драйвера, тегов и промышленных приборов для выбранного списка предприятий. Также пользователь может применить указанную конфигурацию
        и сохранить её в отдельный json-файл.`,
    projectYears: [new Date(2024, 2, 1), new Date(2025, 1, 1)],
  },
  {
    id: "tbz",
    title: "Выравнивание тепловых показателей доменной печи",
    imageSources: [
      "project_02/screenshot_01.jpg",
      "project_02/screenshot_02.jpg",
      "project_02/screenshot_03.jpg",
      "project_02/screenshot_04.jpg",
    ],
    usedSkills: [
      "React",
      "TypeScript",
      "Effector",
      "Vite",
      "SignalR (WebSocket)",
      "ECharts",
    ],
    description: `Система для аналитики и выбора данных по температурным показателям доменных печей предприятия в режиме реального времени. Пользователи имеют возможность настраивать показатели
        допустимых значений для круговых и линейных диаграм.<br /><br />
        Приложение позволяет переключать стандартную тему на темную, чтобы работники предприятия могли работать с проектом в ночную смену. Для круговой диаграммы разработан собственный
        компонент отображения данных без использования сторонних библиотек.<br /><br />
        Также был реализована страница формирования отчета по времени использования системы.`,
    projectYears: [new Date(2024, 7, 1), new Date(2025, 0, 1)],
  },
  {
    id: "tmc",
    title: "Движение ТМЦ",
    imageSources: [
      "project_05/screenshot_001.jpg",
      "project_05/screenshot_002.jpg",
      "project_05/screenshot_004.jpg",
      "project_05/screenshot_005.jpg",
      "project_05/screenshot_006.jpg",
      "project_05/screenshot_007.jpg",
      "project_05/screenshot_008.jpg",
      "project_05/screenshot_009.jpg",
      "project_05/screenshot_010.jpg",
    ],
    usedSkills: [
      "React",
      "TypeScript",
      "Effector",
      "Vite",
      "Express",
      "Axios",
      "Selection API",
    ],
    description: `Один из крупнейших проектов по учету и отслеживанию перемещения товарно-материальных ценностей (ТМЦ) произведенной продукции на предприятиях.<br /><br />
        В рамках данного проекта я занимался разработкой страницы событийной рассылки с целью отправки типовых сообщений. Там можно указать получателя системы с привязкой
        к существующим складам и заводам произведенных ТМЦ. Форматирование текстового поля рассылок было разработано с нуля, чтобы иметь возможность указывать внутри переменные и ссылки.<br /><br />
        Также была создана мобильная страница копирования запросов по перемещению материальных ценностей на различные склады.`,
    projectYears: [new Date(2025, 2, 1), new Date(2025, 4, 31)],
  },
  {
    id: "hse",
    title: "Рейтинг HSE",
    imageSources: [
      "project_04/screenshot_01.jpg",
      "project_04/screenshot_02.jpg",
      "project_04/screenshot_03.jpg",
      "project_04/screenshot_04.jpg",
    ],
    usedSkills: ["React", "Redux", "Redux-Saga", "TypeScript", "Vite", "Axios"],
    description: `Цель данного проекта: проанализировать показатели травмирующих и смертельных факторов для снижения опасных факторов на предприятиях и шахтах и обеспечить
        безопасность сотрудников.<br /><br />
        Для данного приложения добавлен в справочник новый раздел Объекты контроля для исключения из рейтинга выбранного предприятия на определенный период. Также была разработана
        отдельная страница Статус интеграции, чтобы пользователь мог перезапускать рейтинговые системы и отслеживать возникшие ошибки.`,
    projectYears: [new Date(2025, 5, 1), new Date(2025, 7, 1)],
  },
];

export const PersonalProjects: Array<ProjectItemType> = [
  {
    id: "peapp",
    title: "PEApp",
    usedSkills: ["React", "Effector", "Vite", "JSONServer", "TypeScript"],
    description: `Данное приложение может помочь правильно выполнять физические упражнения для укрепления шейного и других отделов позвоночника.
        Основным инструментом контроля количества подходов при выполнении упражнения осуществляется с помощью таймера после начала и завершения повторения, который также издает
        напоминающие сигналы. Описание и картинка должны подсказать пользователю, как правильно нужно выполнять упражнение.<br /><br />
        Также предусмотрена форма добавления нового упражнения с указанием времени выполения подхода, перерыва и количества повторений.`,
    imageSources: [
      "project_07/screenshot_01.png",
      "project_07/screenshot_02.png",
      "project_07/screenshot_03.png",
    ],
    projectYears: [new Date(2021, 8, 24), new Date()],
    URL: "https://ymilovets.github.io/PEApp/",
    repository: "https://github.com/YMilovets/PEApp/tree/dev",
  },
  {
    id: "contact",
    title: "Contact Book",
    usedSkills: [
      "React",
      "Redux",
      "Webpack",
      "JSONServer",
      "SCSS",
      "concurrently",
    ],
    description: `Клиентское приложение для хранения контактных данных о пользователе (имя, телефон, e-mail) с возможностью привязки его к определенной группе.
        Пользователь может создать новую учетную запись и хранить в ней любое количество контактов. Реализовано добавление, редактирование и поиск контактов в адресной книге для
        авторизованной учетной записи.`,
    imageSources: [
      "project_08/screenshot_01.png",
      "project_08/screenshot_02.png",
      "project_08/screenshot_03.png",
      "project_08/screenshot_04.png",
    ],
    projectYears: [new Date(2021, 8, 29), new Date(2021, 10, 24)],
    repository: "https://github.com/YMilovets/contactBook",
  },
  {
    id: "chat",
    title: "Chattix",
    usedSkills: [
      "React",
      "Redux",
      "Webpack",
      "Socket.io (WebSocket)",
      "JSONServer",
      "concurrently",
    ],
    description: `Простой пользовательский чат для временного общения без хранения переписки пользователей, в котором можно указать любое имя и подключиться локальной сети. 
        Приложение использует возможности подключения WebSocket на основе socket.io.<br /><br />
        В будущем планируется реализовать возможность просмотра информации по выбранному профилю (количество сообщений, проведенное в чате время), а также
        подключение к различным тематическим комнатам по интересам.`,
    imageSources: [
      "project_09/screenshot_01.png",
      "project_09/screenshot_02.png",
    ],
    projectYears: [new Date(2022, 9, 30), new Date()],
    repository: "https://github.com/YMilovets/chattix",
  },
];