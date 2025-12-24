import { setMain, renderHome } from "./ui.js?v=20251224a";

import { renderFocusSprint } from "./zones/green/focusSprint.js?v=20251224a";
import { renderMoveForward } from "./zones/green/moveForward.js?v=20251224a";

import { renderCalm } from "./zones/yellow/calm.js?v=20251224a";
import { renderStopUrge } from "./zones/yellow/stopUrge.js?v=20251224a";

import { renderEmergency } from "./zones/red/emergency.js?v=20251224a";

const routes = new Map([
  ["#/home", () => renderHome()],
  ["#/green/focus", () => renderFocusSprint()],
  ["#/green/move", () => renderMoveForward()],
  ["#/yellow/calm", () => renderCalm()],
  ["#/yellow/urge", () => renderStopUrge()],
  ["#/red/emergency", () => renderEmergency()],
]);

function getRoute() {
  const hash = location.hash || "#/home";
  return routes.get(hash) || routes.get("#/home");
}

function onRouteChange() {
  const view = getRoute()();
  setMain(view);
  window.scrollTo(0, 0);
}

export function initRouter() {
  document.getElementById("navHome")?.addEventListener("click", () => (location.hash = "#/home"));
  if (!location.hash) location.hash = "#/home";
  window.addEventListener("hashchange", onRouteChange);
  onRouteChange();
}
