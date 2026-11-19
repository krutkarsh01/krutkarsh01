import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9234',
  '--user-data-dir=/tmp/chrome-v4237-' + Date.now(),
  '--window-size=1440,900',
  '--hide-scrollbars',
  'about:blank'
]);

await new Promise(r => setTimeout(r, 2000));

try {
  const tabsRes = await fetch('http://127.0.0.1:9234/json');
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

  // 1. Mobile iPhone 14 (390x844)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
    fitWindow: false
  });
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 2500));

  let res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4237_mobile_hero_restored_hands_and_brand.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4237_mobile_hero_restored_hands_and_brand.png');

  // Verify elements via runtime evaluation
  const mobileAudit = await send('Runtime.evaluate', {
    expression: `JSON.stringify((() => {
      const brand = document.querySelector(".nl-brand-center");
      const leftHand = document.querySelector(".nl-hero-hand-left");
      const rightHand = document.querySelector(".nl-hero-hand-right");
      const char = document.querySelector(".nl-character-hand-anchor");
      const kuLogo = document.querySelector(".nl-monogram-img");
      const menuBtn = document.querySelector(".nl-menu-btn");

      return {
        brandText: brand ? brand.innerText.trim() : null,
        brandVisible: brand ? window.getComputedStyle(brand).display : null,
        brandRect: brand ? brand.getBoundingClientRect() : null,
        kuRect: kuLogo ? kuLogo.getBoundingClientRect() : null,
        menuRect: menuBtn ? menuBtn.getBoundingClientRect() : null,
        leftHandRect: leftHand ? leftHand.getBoundingClientRect() : null,
        charRect: char ? char.getBoundingClientRect() : null,
        overlapKuBrand: brand && kuLogo ? (kuLogo.getBoundingClientRect().right < brand.getBoundingClientRect().left) : null,
        overlapBrandMenu: brand && menuBtn ? (brand.getBoundingClientRect().right < menuBtn.getBoundingClientRect().left) : null
      };
    })())`
  });
  console.log('MOBILE AUDIT:', JSON.parse(mobileAudit.result.result.value));

  // 2. Tablet iPad (768x1024)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 768,
    height: 1024,
    deviceScaleFactor: 2,
    mobile: true,
    fitWindow: false
  });
  await new Promise(r => setTimeout(r, 1200));

  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4237_tablet_hero_restored_hands_and_brand.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4237_tablet_hero_restored_hands_and_brand.png');

  // 3. Desktop (1440x900)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
    fitWindow: false
  });
  await new Promise(r => setTimeout(r, 1200));

  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4237_desktop_hero_unaffected.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4237_desktop_hero_unaffected.png');

  console.log('Task 6 testing completed successfully.');
} catch (err) {
  console.error('Testing error:', err);
} finally {
  chrome.kill();
  process.exit(0);
}
