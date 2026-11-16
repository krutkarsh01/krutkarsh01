import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9224',
  '--window-size=1440,900',
  '--hide-scrollbars',
  'about:blank'
]);

let tabsRes = null;
try {
  for (let i = 0; i < 12; i++) {
    try {
      tabsRes = await fetch('http://127.0.0.1:9224/json');
      if (tabsRes.ok) break;
    } catch (e) {
      await new Promise(r => setTimeout(r, 500));
    }
  }
  if (!tabsRes) throw new Error('Could not connect to Chrome port 9224');
  const tabs = await tabsRes.json();
  const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

  let id = 1;
  const pending = new Map();
  ws.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg);
      pending.delete(msg.id);
    }
  };
  await new Promise(r => ws.onopen = r);

  function send(method, params = {}) {
    return new Promise(res => {
      const msgId = id++;
      pending.set(msgId, res);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  await send('Page.enable');
  await send('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 2200));

  // Scroll to gallery
  await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('portfolio-curved-gallery');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    })()`
  });
  await new Promise(r => setTimeout(r, 1000));

  // Desktop Test: Check card dimensions and auto-rotation stability
  const desktopInitial = await send('Runtime.evaluate', {
    expression: `(() => {
      const card = document.querySelector('.curved-card[data-index="0"]');
      const rect = card ? card.getBoundingClientRect() : null;
      return {
        cardWidth: rect ? rect.width : 0,
        cardHeight: rect ? rect.height : 0,
        viewportHeight: document.querySelector('.curved-gallery-viewport')?.offsetHeight || 0,
        angle1: card?.dataset?.currentAngle || '0'
      };
    })()`,
    returnByValue: true
  });

  const val1 = desktopInitial?.result?.value || {};
  console.log('Desktop Initial:', val1);

  // Wait 2.2 seconds to verify NO auto-rotation
  await new Promise(r => setTimeout(r, 2200));

  const desktopAfterWait = await send('Runtime.evaluate', {
    expression: `(() => {
      const card = document.querySelector('.curved-card[data-index="0"]');
      return {
        angle2: card?.dataset?.currentAngle || '0'
      };
    })()`,
    returnByValue: true
  });
  const val2 = desktopAfterWait?.result?.value || {};

  console.log('Desktop Audit:', {
    ...val1,
    ...val2,
    hasRotated: val1.angle1 !== val2.angle2
  });

  // Capture Desktop Screenshot
  const desktopShot = await send('Page.captureScreenshot', { format: 'png' });
  const desktopOut = '/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/screenshot-gallery-spacious-desktop-v490.png';
  fs.writeFileSync(desktopOut, Buffer.from(desktopShot.result.data, 'base64'));
  console.log('Desktop Screenshot saved:', desktopOut);

  // Mobile iPhone 14 Pro Emulation: 393 x 852
  console.log('--- Testing Mobile Viewport (iPhone 14 Pro 393x852) ---');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 393,
    height: 852,
    deviceScaleFactor: 2,
    mobile: true
  });
  await send('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 2200));

  await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('portfolio-curved-gallery');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    })()`
  });
  await new Promise(r => setTimeout(r, 1200));

  const mobileAudit = await send('Runtime.evaluate', {
    expression: `(() => {
      const card = document.querySelector('.curved-card[data-index="0"]');
      const rect = card ? card.getBoundingClientRect() : null;
      return {
        cardWidth: rect ? rect.width : 0,
        cardHeight: rect ? rect.height : 0,
        viewportHeight: document.querySelector('.curved-gallery-viewport')?.offsetHeight || 0,
        windowWidth: window.innerWidth,
        cardRatioVsScreen: rect ? (rect.width / window.innerWidth).toFixed(2) : 0,
        angle: card?.dataset?.currentAngle || '0'
      };
    })()`,
    returnByValue: true
  });
  console.log('Mobile Audit:', mobileAudit.result.value);

  // Capture Mobile Screenshot
  const mobileShot = await send('Page.captureScreenshot', { format: 'png' });
  const mobileOut = '/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/screenshot-gallery-spacious-mobile-v490.png';
  fs.writeFileSync(mobileOut, Buffer.from(mobileShot.result.data, 'base64'));
  console.log('Mobile Screenshot saved:', mobileOut);

  ws.close();
} catch (err) {
  console.error('Error during test:', err);
} finally {
  chrome.kill();
  process.exit(0);
}
