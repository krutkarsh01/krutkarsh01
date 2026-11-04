import { spawn } from 'child_process';
import fs from 'fs';

// Launch headless Chrome
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9222',
  '--window-size=1440,900',
  '--hide-scrollbars',
  'about:blank'
]);

await new Promise(r => setTimeout(r, 1500));

try {
  const tabsRes = await fetch('http://localhost:9222/json');
  const tabs = await tabsRes.json();
  const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
  const wsUrl = pageTab.webSocketDebuggerUrl;

  const ws = new WebSocket(wsUrl);
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

  // 1. Mobile iPhone emulation (375x812)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 375,
    height: 812,
    deviceScaleFactor: 2,
    mobile: true,
    fitWindow: false
  });

  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 1800));

  let res = await send('Page.captureScreenshot');
  fs.writeFileSync('screenshots/v22_verified_mobile_nohud.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v22_verified_mobile_nohud.png');

  // Scroll down to portfolio
  await send('Runtime.evaluate', {
    expression: `
      var port = document.getElementById('portfolio-section') || document.querySelector('.curved-gallery-section');
      if (port) port.scrollIntoView({ behavior: 'instant', block: 'center' });
    `
  });
  await new Promise(r => setTimeout(r, 800));

  res = await send('Page.captureScreenshot');
  fs.writeFileSync('screenshots/v22_verified_mobile_portfolio_nohud.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v22_verified_mobile_portfolio_nohud.png');

  // 2. Desktop emulation (1440x900)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false,
    fitWindow: false
  });

  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 1800));

  res = await send('Page.captureScreenshot');
  fs.writeFileSync('screenshots/v22_verified_desktop_nohud.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v22_verified_desktop_nohud.png');

  ws.close();
} finally {
  chrome.kill();
  console.log('Done capturing verification screenshots!');
}
