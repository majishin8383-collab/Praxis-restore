import { renderSimpleFlow } from "../../ui.js";

export function renderMoveForward() {
  const block = document.createElement("div");
  block.className = "block";
  block.innerHTML = `
    <h3>Move Forward</h3>
    <p>One small step that improves today.</p>
    <div class="hr"></div>
    <label>Smallest next action (2–10 minutes)</label>
    <input class="input" placeholder="e.g., take out trash, 1 email, 10 push-ups" />
    <div class="hr"></div>
    <label>Start time</label>
    <input class="input" placeholder="e.g., now / 2:10pm / after coffee" />
  `;

  return renderSimpleFlow(
    "Move Forward",
    "One small step. Then another.",
    "Ready",
    block,
    "Back to Reset",
    "#/home"
  );
}
