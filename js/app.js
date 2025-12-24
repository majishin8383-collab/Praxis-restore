import { initRouter } from "./router.js";

const main = document.getElementById("main");

// PROBE: prove JS is running
if (main) {
  main.innerHTML = `
    <div style="padding:16px;border:1px solid lime;border-radius:12px">
      JS LOADED. ABOUT TO INIT ROUTER.
    </div>
  `;
}

initRouter();
