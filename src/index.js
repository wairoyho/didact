import { createElement } from "./createElement";
import render, { useState } from "./renderer";

const Didact = {
  createElement,
  render,
  useState,
};

/** @jsx Didact.createElement */
function Counter() {
  const [state, setState] = Didact.useState(1);
  return (
    <div style="display: flex; justify-content: center; line-height: 32px;">
      <span>Count: {state}</span>
      <button style="width: 32px;" onClick={() => setState((c) => c + 1)}>
        +
      </button>
      <button style="width: 32px;" onClick={() => setState((c) => c - 1)}>
        -
      </button>
    </div>
  );
}

/** @jsx Didact.createElement */
const element = (
  <div>
    <div style="background: darkcyan">
      <h1>Hello World</h1>
      <h2 style="text-align: right">from Didact</h2>
    </div>
    <Counter />
  </div>
);

const container = document.getElementById("root");
Didact.render(element, container);
