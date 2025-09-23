export const QUESTIONS = [
  {
    id: 0,
    title: "Что делает хук useState в React?",
    variants: [
      "Хранит и изменяет состояние компонента",
      "Запускает функцию при монтировании",
      "Рендерит другой компонент",
    ],
    correct: 0,
  },
  {
    id: 1,
    title:
      "Какой правильный способ передать данные от родителя к дочернему компоненту?",
    variants: ["Через props", "Через useEffect", "Через return"],
    correct: 0,
  },
  {
    id: 2,
    title: "Что такое JSX?",
    variants: [
      "Язык шаблонов для HTML",
      "Расширение синтаксиса JavaScript для описания UI",
      "Библиотека для работы с DOM",
    ],
    correct: 1,
  },
  {
    id: 3,
    title: "Что произойдет, если не задать key при рендеринге списка?",
    variants: [
      "Ничего, React сам подберёт ключи",
      "Может сломаться рендеринг и снизится производительность",
      "Компонент перестанет работать",
    ],
    correct: 1,
  },
  {
    id: 4,
    title: "Какой хук используется для побочных эффектов?",
    variants: ["useState", "useEffect", "useReducer"],
    correct: 1,
  },
  {
    id: 5,
    title: "Что делает Virtual DOM в React?",
    variants: [
      "Оптимизирует обновление интерфейса",
      "Хранит данные состояния",
      "Подключает внешние библиотеки",
    ],
    correct: 0,
  },
  {
    id: 6,
    title: "Что возвращает useState?",
    variants: [
      "Только текущее значение",
      "Массив из значения и функции для его изменения",
      "Объект с состоянием",
    ],
    correct: 1,
  },
  {
    id: 7,
    title: "Как правильно условно отрендерить компонент?",
    variants: [
      "{ isOpen && <Modal /> }",
      "{ if(isOpen) <Modal /> }",
      "<Modal when={isOpen} />",
    ],
    correct: 0,
  },
  {
    id: 8,
    title: "Что делает проп children?",
    variants: [
      "Передаёт стили в компонент",
      "Позволяет вложить JSX внутрь компонента",
      "Обновляет состояние",
    ],
    correct: 1,
  },
  {
    id: 9,
    title: "Какая команда создаёт новый проект на React с Vite?",
    variants: [
      "npx create-react-app my-app",
      "npm create vite@latest my-app",
      "npx react-init my-app",
    ],
    correct: 1,
  },
];
