import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9225',
  '--window-size=390,844',
  '--hide-scrollbars',
  'about:blank'
]);

await new Promise(r => setTimeout(r, 1500));

try {
  const tabsRes = await fetch('http://localhost:9225/json');
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

  let res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4232_mobile_hero_fixed.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4232_mobile_hero_fixed.png');

  // Also scroll slightly to show full bio card on mobile
  await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 300)' });
  await new Promise(r => setTimeout(r, 800));
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4232_mobile_hero_bio_fixed.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4232_mobile_hero_bio_fixed.png');

  // 2. Tablet 768x1024
  await send('Emulation.setDeviceMetricsOverride', {
    width: 768,
    height: 1024,
    deviceScaleFactor: 2,
    mobile: false,
    fitWindow: false
  });
  await send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 1500));
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4232_tablet_hero_fixed.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4232_tablet_hero_fixed.png');

  // 3. Desktop 1440x900
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
    fitWindow: false
  });
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 1500));
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4232_desktop_unaffected.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4232_desktop_unaffected.png');

} catch (err) {
  console.error('Error during CDP testing:', err);
} finally {
  chrome.kill();
  process.exit(0);
}
