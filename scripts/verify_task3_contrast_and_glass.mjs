import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9229',
  '--user-data-dir=/tmp/chrome-v4234-' + Date.now(),
  '--window-size=1440,900',
  '--hide-scrollbars',
  'about:blank'
]);

await new Promise(r => setTimeout(r, 2000));

try {
  const tabsRes = await fetch('http://127.0.0.1:9229/json');
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

  // 1. Desktop 1440x900
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
    fitWindow: false
  });
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 2000));

  // Desktop: Core Value Proposition (Image 2 comparison)
  await send('Runtime.evaluate', {
    expression: "document.getElementById('core-value-proposition').scrollIntoView({ behavior: 'instant', block: 'start' });"
  });
  await new Promise(r => setTimeout(r, 800));
  let res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4234_desktop_core_values_shielded.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4234_desktop_core_values_shielded.png');

  // Desktop: Contact Callout (Image 1 comparison)
  await send('Runtime.evaluate', {
    expression: "document.getElementById('contact').scrollIntoView({ behavior: 'instant', block: 'start' });"
  });
  await new Promise(r => setTimeout(r, 800));
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4234_desktop_contact_callout_shielded.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4234_desktop_contact_callout_shielded.png');

  // 2. Mobile 390x844
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
    fitWindow: false
  });
  await send('Runtime.evaluate', {
    expression: "document.getElementById('core-value-proposition').scrollIntoView({ behavior: 'instant', block: 'start' });"
  });
  await new Promise(r => setTimeout(r, 800));
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4234_mobile_core_values_shielded.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4234_mobile_core_values_shielded.png');

  await send('Runtime.evaluate', {
    expression: "document.getElementById('contact').scrollIntoView({ behavior: 'instant', block: 'start' });"
  });
  await new Promise(r => setTimeout(r, 800));
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4234_mobile_contact_callout_shielded.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4234_mobile_contact_callout_shielded.png');

} catch (err) {
  console.error('Error during testing:', err);
} finally {
  chrome.kill();
  process.exit(0);
}
