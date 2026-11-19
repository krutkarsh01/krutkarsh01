import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9262',
  '--user-data-dir=/tmp/chrome-brand-v4242-' + Date.now(),
  '--window-size=1440,900',
  '--hide-scrollbars',
  'about:blank'
]);

let tabs;
for (let i = 0; i < 20; i++) {
  await new Promise(r => setTimeout(r, 300));
  try {
    const tabsRes = await fetch('http://127.0.0.1:9262/json');
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
  { name: 'contact', url: 'http://localhost:3000/contact/' }
];

const viewports = [
  { label: 'mobile', width: 390, height: 844, isMobile: true },
  { label: 'tablet', width: 768, height: 1024, isMobile: true },
  { label: 'desktop', width: 1440, height: 900, isMobile: false }
];

const audit = {};

for (const vp of viewports) {
  audit[vp.label] = {};

  await send('Emulation.setDeviceMetricsOverride', {
    width: vp.width,
    height: vp.height,
    deviceScaleFactor: 1,
    mobile: vp.isMobile,
    fitWindow: false
  });

  for (const p of pages) {
    await send('Page.navigate', { url: p.url });
    await new Promise(r => setTimeout(r, 1000));

    // Capture navbar screenshot on home page for each viewport
    if (p.name === 'home') {
      const clipRes = await send('Page.captureScreenshot', {
        format: 'png',
        clip: { x: 0, y: 0, width: vp.width, height: 80, scale: 1 }
      });
      fs.writeFileSync(`screenshots/v4242_${vp.label}_navbar_planwithkumar.png`, Buffer.from(clipRes.result.data, 'base64'));
      console.log(`Saved screenshots/v4242_${vp.label}_navbar_planwithkumar.png`);
    }

    // Evaluate brand center in navbar
    const res = await send('Runtime.evaluate', {
      returnByValue: true,
      expression: `(() => {
        const brand = document.querySelector('.nl-brand-center');
        const logo = document.querySelector('.nl-monogram-img, .nl-brand a, a.nl-brand');
        const menuBtn = document.querySelector('.nl-menu-btn, button.nl-menu-btn');

        if (!brand) return { exists: false };

        const bRect = brand.getBoundingClientRect();
        const lRect = logo ? logo.getBoundingClientRect() : null;
        const mRect = menuBtn ? menuBtn.getBoundingClientRect() : null;

        const overlapsLogo = lRect ? (bRect.left < lRect.right) : false;
        const overlapsMenu = mRect ? (bRect.right > mRect.left) : false;

        const style = window.getComputedStyle(brand);

        return {
          exists: true,
          text: brand.textContent.trim(),
          textTransform: style.textTransform,
          fontSize: style.fontSize,
          letterSpacing: style.letterSpacing,
          fontWeight: style.fontWeight,
          color: style.color,
          rect: {
            left: Math.round(bRect.left),
            right: Math.round(bRect.right),
            width: Math.round(bRect.width)
          },
          overlapsLogo,
          overlapsMenu
        };
      })()`
    });

    audit[vp.label][p.name] = res.result.result.value;
  }
}

console.log('FINAL AUDIT:');
console.log(JSON.stringify(audit, null, 2));

ws.close();
chrome.kill('SIGTERM');
