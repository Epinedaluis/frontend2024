export const buttons = [
  [
    {
      class: "special",
      label: "C",
      function: "clearDisplay",
      columns:1
    },
    {
      class: "special",
      label: "<",
      function: "deleteLastCharacter",
      columns:1
    },
    {
      class: "operator",
      label: "%",
      function: "setOperator",
      columns:1
    },
    {
      class: "operator",
      label: "/",
      function: "setOperator",
      columns:1
    },
  ],
  [
    {
      class: "numeric",
      label: "7",
      function: "updateDisplay",
      columns:1
    },
    {
      class: "numeric",
      label: "8",
      function: "updateDisplay",
      columns:1
    },
    {
      class: "numeric",
      label: "9",
      function: "updateDisplay",
      columns:1
    },
    {
      class: "operator",
      label: "x",
      function: "setOperator",
      columns:1
    },
  ],
  [
    {
      class: "numeric",
      label: "4",
      function: "updateDisplay",
      columns:1
    },
    {
      class: "numeric",
      label: "5",
      function: "updateDisplay",
      columns:1
    },
    {
      class: "numeric",
      label: "6",
      function: "updateDisplay",
      columns:1
    },
    {
      class: "operator",
      label: "-",
      function: "setOperator",
      columns:1
    },
  ],
  [
    {
      class: "numeric",
      label: "1",
      function: "updateDisplay",
      columns:1
    },
    {
      class: "numeric",
      label: "2",
      function: "updateDisplay",
      columns:1
    },
    {
      class: "numeric",
      label: "3",
      function: "updateDisplay",
      columns:1
    },
    {
      class: "operator",
      label: "+",
      function: "setOperator",
      columns:1
    },
  ],
  [
    {
      class: "numeric",
      label: "0",
      function: "updateDisplay",
      columns:2
    },
    {
      class: "numeric",
      label: ".",
      function: "updateDisplay",
      columns:1
    },
    {
      class: "special",
      label: "=",
      function: "calculate",
      columns:1
    },
  ],
];
