import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9265',
  '--user-data-dir=/tmp/chrome-hand-' + Date.now(),
  '--window-size=1440,900',
  '--hide-scrollbars',
  'about:blank'
]);

let tabs;
for (let i = 0; i < 20; i++) {
  await new Promise(r => setTimeout(r, 200));
  try {
    const tabsRes = await fetch('http://127.0.0.1:9265/json');
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

// Test viewports: iPhone 14 Pro (393x852) and Pixel 7 Pro (480x1040)
const viewports = [
  { name: 'iphone14pro', width: 393, height: 852 },
  { name: 'pixel7pro', width: 480, height: 1040 }
];

for (const vp of viewports) {
  await send('Emulation.setDeviceMetricsOverride', { width: vp.width, height: vp.height, deviceScaleFactor: 1, mobile: true });
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 1200));

  // Capture before
  const ssBefore = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(`screenshots/test_hand_before_${vp.name}.png`, Buffer.from(ssBefore.result.data, 'base64'));

  // Inject fixes:
  // 1. Remove extra glass from #core-value-proposition .sec-header
  // 2. Feather mask on .nl-hero-hand-mobile-cradle
  await send('Runtime.evaluate', {
    expression: `(() => {
      const style = document.createElement('style');
      style.id = 'fix-hand-and-header';
      style.textContent = \`
        #core-value-proposition .sec-header,
        .pillars-grand-deck .sec-header,
        html body #core-value-proposition .sec-header {
          background: transparent !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
        }

        .nl-hero-hand-mobile-cradle {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.4) 8%, rgba(0, 0, 0, 1) 22%, rgba(0, 0, 0, 1) 100%) !important;
          mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.4) 8%, rgba(0, 0, 0, 1) 22%, rgba(0, 0, 0, 1) 100%) !important;
        }
      \`;
      document.head.appendChild(style);
    })()`
  });

  await new Promise(r => setTimeout(r, 300));
  const ssAfter = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(`screenshots/test_hand_after_${vp.name}.png`, Buffer.from(ssAfter.result.data, 'base64'));
  console.log(`Captured test_hand_after_${vp.name}.png`);
}

ws.close();
chrome.kill();
