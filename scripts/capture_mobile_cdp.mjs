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

  // 1. Desktop 1440x900
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false,
    fitWindow: false
  });

  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 1500));

  let res = await send('Page.captureScreenshot', {
      clip: { x: 0, y: 0, width: 1440, height: 100, scale: 2 }
    });
    fs.writeFileSync('screenshots/v23_desktop_header_crop.png', Buffer.from(res.result.data, 'base64'));
    console.log('Saved screenshots/v23_desktop_header_crop.png');

    // 2. Mobile 375x812
    await send('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 812,
      deviceScaleFactor: 2,
      mobile: true,
      fitWindow: false
  });

  await send('Page.navigate', { url: 'http://localhost:3000/' });
    await new Promise(r => setTimeout(r, 1500));

    res = await send('Page.captureScreenshot', {
      clip: { x: 0, y: 0, width: 375, height: 90, scale: 2 }
    });
    fs.writeFileSync('screenshots/v23_mobile_header_crop.png', Buffer.from(res.result.data, 'base64'));
    console.log('Saved screenshots/v23_mobile_header_crop.png');

    ws.close();
  } finally {
    chrome.kill();
    console.log('Done capturing v23 header crops!');
  }
