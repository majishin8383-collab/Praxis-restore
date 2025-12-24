export function setMain(node) {
  const main = document.getElementById("main");
  if (!main) return;
  main.innerHTML = "";
  if (node) main.appendChild(node);
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k.startsWith("on") && typeof v === "function") {
      node.addEventListener(k.slice(2).toLowerCase(), v);
    } else {
      node.setAttribute(k, v);
    }
  }
  for (const child of children) {
    if (child == null) continue;
    node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
  }
  return node;
}

function go(hash) {
  location.hash = hash;
}

function tile({ title, sub, hint, to, zone }) {
  const dotClass =
    zone === "green" ? "dotGreen" :
    zone === "yellow" ? "dotYellow" :
    "dotRed";

  return el("button", {
    class: "actionTile",
    type: "button",
    onClick: () => go(to),
  }, [
    el("div", { class: "tileTop" }, [
      el("div", {}, [
        el("div", { class: "tileTitle" }, [title]),
        el("div", { class: "tileSub" }, [sub]),
      ]),
      el("div", { class: `zoneDot ${dotClass}` }, []),
    ]),
    el("p", { class: "tileHint" }, [hint]),
  ]);
}

export function renderHome() {
  // Reset = Home. 6 main actions total: Reset screen + 5 tiles.
  const actions = [
    { title: "Calm Me Down", sub: "Reduce intensity", hint: "Regain choice.", to: "#/yellow/calm", zone: "yellow" },
    { title: "Stop the Urge", sub: "Delay → distance → redirect", hint: "Interrupt the impulse.", to: "#/yellow/urge", zone: "yellow" },
    { title: "Move Forward", sub: "One small step", hint: "Progress, not perfection.", to: "#/green/move", zone: "green" },
    { title: "Get Something Done", sub: "Body activation", hint: "Break freeze fast.", to: "#/green/focus", zone: "green" },
    { title: "Emergency", sub: "Fast stabilization", hint: "When it’s too much.", to: "#/red/emergency", zone: "red" },
  ];

  return el("div", { class: "flowShell" }, [
    el("div", { class: "homeTop" }, [
      el("div", {}, [
        el("h1", { class: "h1" }, ["Reset"]),
        el("p", { class: "p" }, ["Start here when you’re spun up."]),
      ]),
      el("div", { class: "badge" }, ["Tap-first. Minimal thinking."]),
    ]),
    el("div", { class: "homeGrid" }, actions.map(tile)),
  ]);
}

export function renderSimpleFlow(title, subtitle, status, contentNode, primaryLabel, primaryHash) {
  const wrap = document.createElement("section");
  wrap.className = "card";

  const head = document.createElement("div");
  head.className = "cardHead";
  head.innerHTML = `<h1 class="h1">${title}</h1><p class="sub">${subtitle}</p>`;

  const body = document.createElement("div");
  body.className = "cardBody";
  if (contentNode) body.appendChild(contentNode);

  const foot = document.createElement("div");
  foot.className = "cardFoot";

  const pill = document.createElement("span");
  pill.className = "pill";
  pill.textContent = status || "Ready";

  const actions = document.createElement("div");
  actions.className = "actions";

  const home = document.createElement("button");
  home.className = "linkBtn";
  home.textContent = "Reset";
  home.onclick = () => (location.hash = "#/home");

  const primary = document.createElement("button");
  primary.className = "btn";
  primary.textContent = primaryLabel || "Continue";
  primary.onclick = () => (location.hash = primaryHash || "#/home");

  actions.appendChild(home);
  actions.appendChild(primary);

  foot.appendChild(pill);
  foot.appendChild(actions);

  wrap.appendChild(head);
  wrap.appendChild(body);
  wrap.appendChild(foot);

  return wrap;
}
