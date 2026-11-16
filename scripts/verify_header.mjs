import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9235',
  '--window-size=1440,900',
  'about:blank'
]);

for (let i = 0; i < 15; i++) {
  try {
    const res = await fetch('http://127.0.0.1:9235/json');
    if (res.ok) break;
  } catch (e) {
    await new Promise(r => setTimeout(r, 200));
  }
}

const tabsRes = await fetch('http://127.0.0.1:9235/json');
const tabs = await tabsRes.json();
const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);

let id = 1;
const send = (method, params = {}) => new Promise(res => {
  const msgId = id++;
  const handler = (e) => {
    const msg = JSON.parse(e.data);
    if (msg.id === msgId) {
      ws.removeEventListener('message', handler);
      res(msg);
    }
  };
  ws.addEventListener('message', handler);
  ws.send(JSON.stringify({ id: msgId, method, params }));
});

await send('Page.enable');
await send('Page.navigate', { url: 'http://localhost:3000/' });
await new Promise(r => setTimeout(r, 2000));

const shot = await send('Page.captureScreenshot', {
  clip: { x: 0, y: 0, width: 1440, height: 180, scale: 2 }
});
fs.writeFileSync('/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/v412-header-restored.png', Buffer.from(shot.result.data, 'base64'));
console.log('Saved: v412-header-restored.png');

const navInfo = await send('Runtime.evaluate', {
  expression: `(() => {
    const nav = document.querySelector(".nl-nav");
    const logo = document.querySelector(".nl-monogram-img");
    const brand = document.querySelector(".nl-brand-center");
    const btn = document.querySelector(".nl-menu-btn");
    return JSON.stringify({
      navDisplay: window.getComputedStyle(nav).display,
      logoVisible: logo ? logo.offsetWidth > 0 : false,
      logoRect: logo ? logo.getBoundingClientRect() : null,
      brandText: brand ? brand.innerText : null,
      brandVisible: brand ? brand.offsetWidth > 0 : false,
      brandRect: brand ? brand.getBoundingClientRect() : null,
      btnText: btn ? btn.innerText : null,
      btnVisible: btn ? btn.offsetWidth > 0 : false,
      btnRect: btn ? btn.getBoundingClientRect() : null
    });
  })()`,
  returnByValue: true
});

console.log('NAV ELEMENTS VERIFICATION:', JSON.parse(navInfo.result.result.value));
chrome.kill();
