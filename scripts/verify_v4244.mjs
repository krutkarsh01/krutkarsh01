import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9270',
  '--user-data-dir=/tmp/chrome-v4244-' + Date.now(),
  '--window-size=1440,900',
  '--hide-scrollbars',
  'about:blank'
]);

let tabs;
for (let i = 0; i < 20; i++) {
  await new Promise(r => setTimeout(r, 200));
  try {
    const tabsRes = await fetch('http://127.0.0.1:9270/json');
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

const testDevices = [
  { name: 'iphone14pro', width: 393, height: 852 },
  { name: 'pixel7pro', width: 480, height: 1040 },
  { name: 'tablet', width: 768, height: 1024 }
];

const auditResults = {};

for (const dev of testDevices) {
  await send('Emulation.setDeviceMetricsOverride', { width: dev.width, height: dev.height, deviceScaleFactor: 1, mobile: true });
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 1200));

  const res = await send('Runtime.evaluate', {
    returnByValue: true,
    expression: `(() => {
      const hand = document.querySelector('.nl-hero-hand-mobile-cradle');
      if (!hand) return { exists: false };
      const s = window.getComputedStyle(hand);
      const r = hand.getBoundingClientRect();
      const docEl = document.documentElement;
      const body = document.body;
      return {
        exists: true,
        maskImage: s.maskImage,
        webkitMaskImage: s.webkitMaskImage,
        transform: s.transform,
        rect: {
          left: Math.round(r.left),
          right: Math.round(r.right),
          width: Math.round(r.width)
        },
        wristCutIsOffscreen: r.left <= 0,
        docScrollWidth: docEl.scrollWidth,
        bodyScrollWidth: body.scrollWidth,
        innerWidth: window.innerWidth,
        hasHorizontalOverflow: docEl.scrollWidth > window.innerWidth || body.scrollWidth > window.innerWidth
      };
    })()`
  });

  auditResults[dev.name] = res.result.result.value;

  const ss = await send('Page.captureScreenshot', { format: 'png' });
  const filename = `screenshots/v4244_${dev.name}_hand_shifted_left.png`;
  fs.writeFileSync(filename, Buffer.from(ss.result.data, 'base64'));
  console.log(`Saved ${filename}`);
}

console.log('AUDIT RESULTS:');
console.log(JSON.stringify(auditResults, null, 2));

ws.close();
chrome.kill();
