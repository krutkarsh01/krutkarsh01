import { spawn } from 'child_process';
import fs from 'fs';

// Launch headless Chrome with mobile viewport emulation
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9222',
  '--window-size=375,812',
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

  // 1. Enable emulation for iPhone dimensions
  await send('Emulation.setDeviceMetricsOverride', {
    width: 375,
    height: 812,
    deviceScaleFactor: 2,
    mobile: true,
    fitWindow: false
  });

  // 2. Navigate to localhost:3000
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 2000));

  // 3. Take screenshot of closed mobile home
  let res = await send('Page.captureScreenshot');
  fs.writeFileSync('screenshots/v21_verified_mobile_closed.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v21_verified_mobile_closed.png');

  // 4. Click hamburger button to open mobile menu
  await send('Runtime.evaluate', {
    expression: `
      var btn = document.getElementById('hamburger-btn');
      if (btn) btn.click();
    `
  });
  await new Promise(r => setTimeout(r, 600));

  // 5. Take screenshot of open mobile menu drawer
  res = await send('Page.captureScreenshot');
  fs.writeFileSync('screenshots/v21_verified_mobile_menu_open.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v21_verified_mobile_menu_open.png');

  // 6. Close menu and scroll to portfolio
  await send('Runtime.evaluate', {
    expression: `
      var btn = document.getElementById('hamburger-btn');
      if (btn && btn.classList.contains('active')) btn.click();
      var port = document.getElementById('portfolio-section') || document.querySelector('.curved-gallery-section');
      if (port) port.scrollIntoView({ behavior: 'instant', block: 'center' });
    `
  });
  await new Promise(r => setTimeout(r, 1000));

  // 7. Take screenshot of portfolio section
  res = await send('Page.captureScreenshot');
  fs.writeFileSync('screenshots/v21_verified_mobile_portfolio.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v21_verified_mobile_portfolio.png');

  // 8. Navigate to /prototypes/
  await send('Page.navigate', { url: 'http://localhost:3000/prototypes/' });
  await new Promise(r => setTimeout(r, 2000));

  // 9. Take screenshot of prototypes page on mobile
  res = await send('Page.captureScreenshot');
  fs.writeFileSync('screenshots/v21_verified_mobile_prototypes.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v21_verified_mobile_prototypes.png');

  ws.close();
} finally {
  chrome.kill();
  console.log('Done!');
}
