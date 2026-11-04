import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9222',
  '--window-size=1440,900',
  '--hide-scrollbars',
  '--enable-webgl',
  '--use-gl=angle',
  'about:blank'
]);

await new Promise(r => setTimeout(r, 1600));

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

  // 1. Mobile iPhone 14 Pro: 393 x 852 (deviceScaleFactor: 3)
  console.log('Testing Mobile iPhone 14 Pro 393x852...');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 393,
    height: 852,
    deviceScaleFactor: 2,
    mobile: true,
    hasTouch: true
  });

  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 2200));

  // Capture Mobile Top (Showing Header & Menu Button Highlight)
  const snapTop = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4_6_mobile_header_top.png', Buffer.from(snapTop.result.data, 'base64'));
  console.log('Saved screenshots/v4_6_mobile_header_top.png');

  // Click Hamburger Menu
  await send('Runtime.evaluate', {
    expression: `
      var btn = document.getElementById('hamburger-btn');
      if (btn) btn.click();
    `
  });
  await new Promise(r => setTimeout(r, 600));

  // Capture Mobile Menu Open
  const snapMenu = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4_6_mobile_menu_open.png', Buffer.from(snapMenu.result.data, 'base64'));
  console.log('Saved screenshots/v4_6_mobile_menu_open.png');

  // Close Menu
  await send('Runtime.evaluate', {
    expression: `
      var btn = document.getElementById('hamburger-btn');
      if (btn) btn.click();
    `
  });
  await new Promise(r => setTimeout(r, 500));

  // Scroll down to check Quick Jump, Core Value Prop & Portfolio in Frames
  await send('Runtime.evaluate', {
    expression: `
      window.scrollTo({ top: 380, behavior: 'instant' });
    `
  });
  await new Promise(r => setTimeout(r, 800));

  const snapMid = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4_6_mobile_deck_scroll.png', Buffer.from(snapMid.result.data, 'base64'));
  console.log('Saved screenshots/v4_6_mobile_deck_scroll.png');

  // Scroll to Portfolio section
  await send('Runtime.evaluate', {
    expression: `
      var sec = document.getElementById('portfolio-curved-gallery');
      if (sec) sec.scrollIntoView({ behavior: 'instant' });
    `
  });
  await new Promise(r => setTimeout(r, 800));

  const snapProto = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4_6_mobile_portfolio_section.png', Buffer.from(snapProto.result.data, 'base64'));
  console.log('Saved screenshots/v4_6_mobile_portfolio_section.png');

  // Verify section order in DOM
  const checkOrder = await send('Runtime.evaluate', {
    expression: `
      (function() {
        var s = Array.from(document.querySelectorAll('main > section')).map(el => el.id || el.className);
        return JSON.stringify(s);
      })()
    `
  });
  console.log('DOM Section Order:', checkOrder.result.value);

  // 2. Tablet 768x1024
  console.log('Testing Tablet 768x1024...');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 768,
    height: 1024,
    deviceScaleFactor: 2,
    mobile: false,
    hasTouch: true
  });
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 2000));

  const snapTablet = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4_6_tablet_768.png', Buffer.from(snapTablet.result.data, 'base64'));
  console.log('Saved screenshots/v4_6_tablet_768.png');

  // 3. Desktop 1440x900
  console.log('Testing Desktop 1440x900...');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false,
    hasTouch: false
  });
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 2000));

  const snapDesktop = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4_6_desktop_1440.png', Buffer.from(snapDesktop.result.data, 'base64'));
  console.log('Saved screenshots/v4_6_desktop_1440.png');

  ws.close();
} finally {
  chrome.kill();
}
