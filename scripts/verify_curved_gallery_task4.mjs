import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9230',
  '--user-data-dir=/tmp/chrome-v4235-' + Date.now(),
  '--window-size=390,844',
  '--hide-scrollbars',
  'about:blank'
]);

await new Promise(r => setTimeout(r, 2000));

try {
  const tabsRes = await fetch('http://127.0.0.1:9230/json');
  const tabs = await tabsRes.json();
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

  // 1. Mobile 390x844
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
    fitWindow: false
  });
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 2000));

  // Scroll to Curved Gallery
  await send('Runtime.evaluate', {
    expression: "document.getElementById('portfolio-curved-gallery').scrollIntoView({ behavior: 'instant', block: 'center' });"
  });
  await new Promise(r => setTimeout(r, 1000));
  let res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4235_mobile_curved_gallery_active.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4235_mobile_curved_gallery_active.png');

  // Click Next Arrow to test rotation
  await send('Runtime.evaluate', {
    expression: "document.getElementById('galleryNextBtn')?.click();"
  });
  await new Promise(r => setTimeout(r, 1000));
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4235_mobile_curved_gallery_next.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4235_mobile_curved_gallery_next.png');

} catch (err) {
  console.error('Error during testing:', err);
} finally {
  chrome.kill();
  process.exit(0);
}
