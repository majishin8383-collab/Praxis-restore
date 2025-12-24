const mainEl = () => document.getElementById("main");

export function setMain(node) {
  const main = mainEl();
  if (!main) return;
  main.innerHTML = "";
  if (node) main.appendChild(node);
}

function el(tag, className, text) {
  const n = document.createElement(tag);
  if (className) n.className = className;
  if (text !== undefined) n.textContent = text;
  return n;
}

function card(title, subtitle) {
  const wrap = el("section", "card");
  const head = el("div", "cardHead");
  head.appendChild(el("h1", "h1", title));
  head.appendChild(el("p", "sub", subtitle));
  wrap.appendChild(head);

  const body = el("div", "cardBody");
  wrap.appendChild(body);

  return { wrap, body };
}

function navTo(hash) {
  location.hash = hash;
}

export function renderHome() {
  const { wrap, body } = card(
    "Reset",
    "Start here when you’re spun up."
  );

  const stack = el("div", "homeStack");

  const grid = el("div", "homeGrid");

  const buttons = [
    { label: "Calm Me Down", hash: "#/yellow/calm" },
    { label: "Stop the Urge", hash: "#/yellow/stop" },
    { label: "Move Forward", hash: "#/green/move" },
    { label: "Get Something Done", hash: "#/green/focus" },
    { label: "Emergency", hash: "#/red/emergency" }
  ];

  for (const b of buttons) {
    const btn = el("button", "homeBtn", b.label);
    btn.onclick = () => navTo(b.hash);
    grid.appendChild(btn);
  }

  stack.appendChild(grid);
  wrap.appendChild(stack);
  body.appendChild(stack);

  return wrap;
}
