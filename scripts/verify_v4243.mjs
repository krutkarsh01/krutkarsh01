import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9267',
  '--user-data-dir=/tmp/chrome-v4243-' + Date.now(),
  '--window-size=1440,900',
  '--hide-scrollbars',
  'about:blank'
]);

let tabs;
for (let i = 0; i < 20; i++) {
  await new Promise(r => setTimeout(r, 200));
  try {
    const tabsRes = await fetch('http://127.0.0.1:9267/json');
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

// 1. Verify Pillars header has zero glass background/backdrop-filter
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
await send('Page.navigate', { url: 'http://localhost:3000/' });
await new Promise(r => setTimeout(r, 1200));

const pillarsAudit = await send('Runtime.evaluate', {
  returnByValue: true,
  expression: `(() => {
    const el = document.querySelector('#core-value-proposition .sec-header');
    const s = window.getComputedStyle(el);
    return {
      bg: s.backgroundColor,
      backdropFilter: s.backdropFilter,
      border: s.border,
      boxShadow: s.boxShadow,
      hasExtraGlass: s.backdropFilter !== 'none' || (s.backgroundColor !== 'rgba(0, 0, 0, 0)' && s.backgroundColor !== 'transparent')
    };
  })()`
});

await send('Runtime.evaluate', {
  expression: `document.querySelector('#core-value-proposition').scrollIntoView()`
});
await new Promise(r => setTimeout(r, 500));
const ssPillars = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync('screenshots/v4243_desktop_pillars_no_glass_header.png', Buffer.from(ssPillars.result.data, 'base64'));
console.log('Saved screenshots/v4243_desktop_pillars_no_glass_header.png');

// 2. Verify Hand Feathered Mask on iPhone 14 Pro (393px) and Pixel 7 Pro (480px)
const testDevices = [
  { name: 'iphone14pro', width: 393, height: 852 },
  { name: 'pixel7pro', width: 480, height: 1040 }
];

const handAudits = {};

for (const dev of testDevices) {
  await send('Emulation.setDeviceMetricsOverride', { width: dev.width, height: dev.height, deviceScaleFactor: 1, mobile: true });
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 1000));

  const handAudit = await send('Runtime.evaluate', {
    returnByValue: true,
    expression: `(() => {
      const hand = document.querySelector('.nl-hero-hand-mobile-cradle');
      if (!hand) return { exists: false };
      const s = window.getComputedStyle(hand);
      return {
        exists: true,
        maskImage: s.maskImage || s.webkitMaskImage,
        width: s.width,
        rect: hand.getBoundingClientRect()
      };
    })()`
  });
  handAudits[dev.name] = handAudit.result.result.value;

  const ssHand = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(`screenshots/v4243_${dev.name}_hand_feathered_cradle.png`, Buffer.from(ssHand.result.data, 'base64'));
  console.log(`Saved screenshots/v4243_${dev.name}_hand_feathered_cradle.png`);
}

console.log('PILLARS AUDIT:', JSON.stringify(pillarsAudit.result.result.value, null, 2));
console.log('HAND AUDITS:', JSON.stringify(handAudits, null, 2));

ws.close();
chrome.kill();
