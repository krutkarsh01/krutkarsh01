import { spawn } from "child_process";
const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
  "--headless=new",
  "--remote-debugging-port=9256",
  "--user-data-dir=/tmp/chrome-diag-" + Date.now(),
  "--window-size=390,844",
  "about:blank"
]);

let tabs;
for (let i = 0; i < 20; i++) {
  await new Promise(r => setTimeout(r, 300));
  try {
    const tabsRes = await fetch("http://127.0.0.1:9256/json");
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

const res = await send("Runtime.evaluate", {
  returnByValue: true,
  expression: `(() => {
    const w = window.innerWidth;
    const overflowing = [];
    document.querySelectorAll("body, main, section, div, header, nav, footer, img").forEach(el => {
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      if (rect.right > w + 1 && style.display !== 'none' && style.visibility !== 'hidden') {
        overflowing.push({
          tag: el.tagName,
          id: el.id,
          className: typeof el.className === 'string' ? el.className : '',
          right: Math.round(rect.right),
          overflowBy: Math.round(rect.right - w),
          computedOverflow: style.overflow,
          computedPosition: style.position
        });
      }
    });
    return {
      docScrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth,
      overflowing: overflowing
    };
  })()`
});
console.log(JSON.stringify(res.result.result.value, null, 2));
ws.close();
chrome.kill();
