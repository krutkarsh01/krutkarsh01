import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9223',
  '--window-size=1440,900',
  '--hide-scrollbars',
  'about:blank'
]);

let tabsRes = null;
try {
  for (let i = 0; i < 10; i++) {
    try {
      tabsRes = await fetch('http://127.0.0.1:9223/json');
      if (tabsRes.ok) break;
    } catch (e) {
      await new Promise(r => setTimeout(r, 600));
    }
  }
  if (!tabsRes) throw new Error('Could not connect to Chrome debugging port 9223');
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

  await send('Page.enable');
  await send('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 2000));

  // Check initial navbar position
  const initialNav = await send('Runtime.evaluate', {
    expression: `(() => {
      const brand = document.querySelector('.nl-brand-center');
      const rect = brand ? brand.getBoundingClientRect() : null;
      return {
        brandLeft: rect ? rect.left : 0,
        brandWidth: rect ? rect.width : 0,
        windowWidth: window.innerWidth,
        brandCenter: rect ? (rect.left + rect.width / 2) : 0,
        isCentered: rect ? Math.abs((rect.left + rect.width / 2) - window.innerWidth / 2) < 2 : false,
        chipsPresent: !!document.querySelector('.gallery-category-chips')
      };
    })()`,
    returnByValue: true
  });
  console.log('Initial navbar audit:', JSON.stringify(initialNav.result.value, null, 2));

  // Scroll down to the gallery
  await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('portfolio-curved-gallery');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    })()`
  });
  await new Promise(r => setTimeout(r, 1500));

  // Capture screenshot of the gallery view with new mockups
  const screenshotGallery = await send('Page.captureScreenshot', { format: 'png' });
  const outPathGallery = '/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/screenshot-gallery-mockups-v480.png';
  fs.writeFileSync(outPathGallery, Buffer.from(screenshotGallery.result.data, 'base64'));
  console.log('Gallery Mockups Screenshot saved to:', outPathGallery);

  // Hover over the center card (Card 0 or 1) to verify hover case study button
  await send('Runtime.evaluate', {
    expression: `(() => {
      const card = document.querySelector('.curved-card[data-index="0"]');
      if (card) {
        const overlay = card.querySelector('.curved-card-hover-overlay');
        if (overlay) {
          overlay.style.setProperty('opacity', '1', 'important');
          overlay.style.setProperty('visibility', 'visible', 'important');
        }
        const btn = card.querySelector('.curved-case-study-btn');
        if (btn) {
          btn.style.setProperty('transform', 'translateY(0) scale(1)', 'important');
        }
      }
    })()`
  });
  await new Promise(r => setTimeout(r, 500));

  const screenshotHover = await send('Page.captureScreenshot', { format: 'png' });
  const outPathHover = '/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/screenshot-gallery-hover-v480.png';
  fs.writeFileSync(outPathHover, Buffer.from(screenshotHover.result.data, 'base64'));
  console.log('Hover Screenshot saved to:', outPathHover);

  ws.close();
} catch (err) {
  console.error('Error during audit:', err);
} finally {
  chrome.kill();
  process.exit(0);
}
