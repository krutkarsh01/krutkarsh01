import { spawn } from "child_process";
const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
  "--headless=new",
  "--remote-debugging-port=9258",
  "--user-data-dir=/tmp/chrome-test-" + Date.now(),
  "--window-size=390,844",
  "about:blank"
]);

let tabs;
for (let i = 0; i < 20; i++) {
  await new Promise(r => setTimeout(r, 300));
  try {
    const tabsRes = await fetch("http://127.0.0.1:9258/json");
    tabs = await tabsRes.json();
    if (tabs && tabs.length > 0) break;
  } catch (e) {}
}

const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);
let id = 1;
const pending = new Map();
ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } };
await new Promise(r => ws.onopen = r);
function send(method, params = {}) { return new Promise(res => { const msgId = id++; pending.set(msgId, res); ws.send(JSON.stringify({ id: msgId, method, params })); }); }

await send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
await send("Page.navigate", { url: "http://localhost:3000/" });
await new Promise(r => setTimeout(r, 1500));

// Test injecting contain: paint
const fixRes = await send("Runtime.evaluate", {
  returnByValue: true,
  expression: `(() => {
    const style = document.createElement('style');
    style.id = 'responsive-hotfix';
    style.textContent = \`
      html, body {
        overflow-x: clip !important;
        max-width: 100vw !important;
        width: 100% !important;
      }
      .nl-hero,
      main section.nl-hero {
        overflow-x: clip !important;
        max-width: 100vw !important;
      }
      @media (max-width: 768px) {
        .nl-hero-hand-right {
          right: 0 !important;
        }
        .osiris-legend,
        .osiris-col-left .osiris-legend {
          max-width: calc(100vw - 32px) !important;
          flex-wrap: wrap !important;
          height: auto !important;
          padding: 6px 14px !important;
          gap: 6px 12px !important;
        }
        .osiris-legend-item,
        .osiris-col-left .osiris-legend-item {
          font-size: 11px !important;
        }
      }
      #portfolio-curved-gallery,
      .curved-gallery-section,
      .prototypes-grand-deck {
        overflow: clip !important;
        contain: paint !important;
        max-width: 100vw !important;
      }
    \`;
    document.head.appendChild(style);

    const docScrollWidth = document.documentElement.scrollWidth;
    const bodyScrollWidth = document.body.scrollWidth;
    const w = window.innerWidth;

    const overflowing = [];
    document.querySelectorAll("body, main, section, div, header, nav, footer, img").forEach(el => {
      const rect = el.getBoundingClientRect();
      const st = window.getComputedStyle(el);
      if (rect.right > w + 1 && st.display !== 'none' && st.visibility !== 'hidden') {
        overflowing.push({
          tag: el.tagName,
          id: el.id,
          cls: typeof el.className === 'string' ? el.className : '',
          right: Math.round(rect.right),
          overflowBy: Math.round(rect.right - w)
        });
      }
    });

    return {
      innerWidth: w,
      docScrollWidth,
      bodyScrollWidth,
      hasOverflow: docScrollWidth > w || bodyScrollWidth > w,
      overflowingCount: overflowing.length,
      overflowing
    };
  })()`
});

console.log('Result with contain: paint:');
console.log(JSON.stringify(fixRes.result.result.value, null, 2));

ws.close();
chrome.kill();
