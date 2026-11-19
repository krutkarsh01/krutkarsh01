import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9260',
  '--user-data-dir=/tmp/chrome-responsive-v4241-' + Date.now(),
  '--window-size=1440,900',
  '--hide-scrollbars',
  'about:blank'
]);

let tabs;
for (let i = 0; i < 20; i++) {
  await new Promise(r => setTimeout(r, 300));
  try {
    const tabsRes = await fetch('http://127.0.0.1:9260/json');
    tabs = await tabsRes.json();
    if (tabs && tabs.length > 0) break;
  } catch (e) {}
}

const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
let id = 1;
const pending = new Map();

ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  }
};
await new Promise(r => ws.onopen = r);

function send(method, params = {}) {
  return new Promise((resolve) => {
    const msgId = id++;
    pending.set(msgId, resolve);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });
}

const pages = [
  { name: 'home', url: 'http://localhost:3000/' },
  { name: 'about', url: 'http://localhost:3000/about/' },
  { name: 'process', url: 'http://localhost:3000/process/' },
  { name: 'experience', url: 'http://localhost:3000/experience/' },
  { name: 'skills', url: 'http://localhost:3000/skills/' },
  { name: 'prototypes', url: 'http://localhost:3000/prototypes/' },
  { name: 'testimonials', url: 'http://localhost:3000/testimonials/' },
  { name: 'contact', url: 'http://localhost:3000/contact/' }
];

const viewports = [
  { label: 'mobile', width: 390, height: 844, isMobile: true },
  { label: 'tablet', width: 768, height: 1024, isMobile: true },
  { label: 'desktop', width: 1440, height: 900, isMobile: false }
];

const results = {};

for (const vp of viewports) {
  results[vp.label] = {};

  await send('Emulation.setDeviceMetricsOverride', {
    width: vp.width,
    height: vp.height,
    deviceScaleFactor: 1,
    mobile: vp.isMobile,
    fitWindow: false
  });

  for (const p of pages) {
    await send('Page.navigate', { url: p.url });
    await new Promise(r => setTimeout(r, 1200));

    // Viewport screenshot
    const ss = await send('Page.captureScreenshot', { format: 'png' });
    const filename = `screenshots/v4241_${vp.label}_${p.name}.png`;
    fs.writeFileSync(filename, Buffer.from(ss.result.data, 'base64'));

    // Check overflow & layout health
    const evalRes = await send('Runtime.evaluate', {
      returnByValue: true,
      expression: `(() => {
        const docEl = document.documentElement;
        const body = document.body;
        const docScrollWidth = docEl.scrollWidth;
        const bodyScrollWidth = body.scrollWidth;
        const innerWidth = window.innerWidth;
        const hasHorizontalOverflow = docScrollWidth > innerWidth + 1 || bodyScrollWidth > innerWidth + 1;

        return {
          innerWidth,
          docScrollWidth,
          bodyScrollWidth,
          hasHorizontalOverflow,
          status: hasHorizontalOverflow ? 'FAIL' : 'PASS'
        };
      })()`
    });

    results[vp.label][p.name] = evalRes.result.result.value;
    console.log(`[${vp.label.toUpperCase()}] ${p.name.padEnd(12)} -> ${evalRes.result.result.value.status} (w=${evalRes.result.result.value.innerWidth}, doc=${evalRes.result.result.value.docScrollWidth}, body=${evalRes.result.result.value.bodyScrollWidth})`);
  }
}

console.log('\n--- ALL PAGES & BREAKPOINTS AUDIT SUMMARY ---');
console.log(JSON.stringify(results, null, 2));

ws.close();
chrome.kill('SIGTERM');
