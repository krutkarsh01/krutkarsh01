import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9228',
  '--user-data-dir=/tmp/chrome-v4233-' + Date.now(),
  '--window-size=390,844',
  '--hide-scrollbars',
  'about:blank'
]);

await new Promise(r => setTimeout(r, 2000));

try {
  const tabsRes = await fetch('http://127.0.0.1:9228/json');
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

  // Scroll to Global Client Atlas
  await send('Runtime.evaluate', {
    expression: "document.getElementById('global-client-atlas').scrollIntoView({ behavior: 'instant', block: 'start' });"
  });
  await new Promise(r => setTimeout(r, 800));
  let res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4233_mobile_atlas_heading.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4233_mobile_atlas_heading.png');

  // Scroll to Prototypes Heading
  await send('Runtime.evaluate', {
    expression: "document.getElementById('portfolio-curved-gallery').scrollIntoView({ behavior: 'instant', block: 'start' });"
  });
  await new Promise(r => setTimeout(r, 800));
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4233_mobile_proto_heading.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4233_mobile_proto_heading.png');

  // 2. Desktop 1440x900
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
    fitWindow: false
  });
  await send('Runtime.evaluate', {
    expression: "document.getElementById('portfolio-curved-gallery').scrollIntoView({ behavior: 'instant', block: 'start' });"
  });
  await new Promise(r => setTimeout(r, 800));
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4233_desktop_proto_heading.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4233_desktop_proto_heading.png');

} catch (err) {
  console.error('Error during testing:', err);
} finally {
  chrome.kill();
  process.exit(0);
}
