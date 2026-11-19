import { spawn } from 'child_process';
import fs from 'fs';

// Launch headless Chrome
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9223',
  '--window-size=1440,900',
  '--hide-scrollbars',
  'about:blank'
]);

await new Promise(r => setTimeout(r, 1500));

try {
  const tabsRes = await fetch('http://localhost:9223/json');
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

  // 1. Desktop 1440x900 Hero View (to check aurora dimming)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
    fitWindow: false
  });
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 2000));

  let res = await send('Page.captureScreenshot', {
    format: 'png'
  });
  fs.writeFileSync('screenshots/v4231_desktop_aurora_dimmed.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4231_desktop_aurora_dimmed.png');

  // 2. Mobile 390x844 (iPhone 14) Full Page capture & check horizontal overflow
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
    fitWindow: false
  });
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 2000));

  // Check layout metrics & overflow elements
  const evalRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const docWidth = document.documentElement.scrollWidth;
      const viewWidth = window.innerWidth;
      const hasHScroll = docWidth > viewWidth;
      
      const overflowingElements = [];
      document.querySelectorAll('*').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.right > viewWidth + 1 || rect.left < -1) {
          overflowingElements.push({
            tag: el.tagName,
            id: el.id,
            className: (el.className || '').toString().slice(0, 50),
            right: Math.round(rect.right),
            width: Math.round(rect.width)
          });
        }
      });

      return {
        docWidth,
        viewWidth,
        hasHScroll,
        overflowCount: overflowingElements.length,
        topOverflows: overflowingElements.slice(0, 10)
      };
    })()`,
    returnByValue: true
  });
  console.log('Mobile 390px Overflow Diagnostics:', JSON.stringify(evalRes.result?.value, null, 2));

  // Capture Mobile Hero
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4231_mobile_hero.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4231_mobile_hero.png');

  // Capture Mobile Full Page
  res = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: true
  });
  fs.writeFileSync('screenshots/v4231_mobile_fullpage.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4231_mobile_fullpage.png');

  // 3. Tablet 768x1024
  await send('Emulation.setDeviceMetricsOverride', {
    width: 768,
    height: 1024,
    deviceScaleFactor: 2,
    mobile: false,
    fitWindow: false
  });
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 1500));
  
  const tabletEval = await send('Runtime.evaluate', {
    expression: `(() => {
      const docWidth = document.documentElement.scrollWidth;
      const viewWidth = window.innerWidth;
      return {
        docWidth,
        viewWidth,
        hasHScroll: docWidth > viewWidth
      };
    })()`,
    returnByValue: true
  });
  console.log('Tablet 768px Diagnostics:', JSON.stringify(tabletEval.result?.value, null, 2));

  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4231_tablet_hero.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4231_tablet_hero.png');

} catch (err) {
  console.error('Error during CDP testing:', err);
} finally {
  chrome.kill();
  process.exit(0);
}
