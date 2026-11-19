import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9269',
  '--user-data-dir=/tmp/chrome-shift-' + Date.now(),
  '--window-size=1440,900',
  '--hide-scrollbars',
  'about:blank'
]);

let tabs;
for (let i = 0; i < 20; i++) {
  await new Promise(r => setTimeout(r, 200));
  try {
    const tabsRes = await fetch('http://127.0.0.1:9269/json');
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

const shifts = ['-72%', '-76%', '-80%'];
const devices = [
  { name: 'iphone14pro', width: 393, height: 852 },
  { name: 'pixel7pro', width: 480, height: 1040 }
];

const results = [];

for (const dev of devices) {
  await send('Emulation.setDeviceMetricsOverride', { width: dev.width, height: dev.height, deviceScaleFactor: 1, mobile: true });
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 1000));

  for (const shift of shifts) {
    const evalRes = await send('Runtime.evaluate', {
      returnByValue: true,
      expression: `(() => {
        const hand = document.querySelector('.nl-hero-hand-mobile-cradle');
        hand.style.setProperty('mask-image', 'none', 'important');
        hand.style.setProperty('-webkit-mask-image', 'none', 'important');
        hand.style.setProperty('transform', 'translateX(${shift})', 'important');
        hand.style.setProperty('width', 'clamp(340px, 88vw, 440px)', 'important');
        const r = hand.getBoundingClientRect();
        return {
          left: Math.round(r.left),
          right: Math.round(r.right),
          width: Math.round(r.width)
        };
      })()`
    });

    const ss = await send('Page.captureScreenshot', { format: 'png' });
    const filename = `screenshots/test_hand_shift_${dev.name}_${shift.replace('-', 'neg').replace('%', '')}.png`;
    fs.writeFileSync(filename, Buffer.from(ss.result.data, 'base64'));
    results.push({ dev: dev.name, shift, ...evalRes.result.result.value, filename });
  }
}

console.log(JSON.stringify(results, null, 2));

ws.close();
chrome.kill();
