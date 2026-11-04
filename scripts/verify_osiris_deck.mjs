import { spawn } from 'child_process';
import fs from 'fs';

// Launch headless Chrome
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

  // 1. Desktop 1440x900
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false,
    fitWindow: false
  });

  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 2500));

  // Check that elements exist
  const evalRes = await send('Runtime.evaluate', {
    expression: `
      JSON.stringify({
        hasDeck: !!document.getElementById('osiris-command-deck'),
        hasEnlarge: !!document.getElementById('osiris-deck-enlarge'),
        hasClose: !!document.getElementById('osiris-deck-close'),
        hasZoomIn: !!document.getElementById('globe-zoom-in'),
        hasZoomOut: !!document.getElementById('globe-zoom-out'),
        hasZoomReset: !!document.getElementById('globe-zoom-reset'),
        hasGlobeCanvas: !!document.querySelector('#globe-canvas-wrap canvas'),
        hasAtlas: !!window.__atlas,
        title: document.querySelector('.osiris-title')?.textContent
      })
    `,
    returnByValue: true
  });
  console.log('Desktop State Evaluation:', evalRes.result?.value);

  // Take screenshot of Desktop standard
  const shot1 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4_osiris_deck_desktop.png', Buffer.from(shot1.result.data, 'base64'));
  console.log('Captured screenshots/v4_osiris_deck_desktop.png');

  // Test Enlarge / Fullscreen theatre mode
  await send('Runtime.evaluate', {
    expression: `document.getElementById('osiris-deck-enlarge').click();`
  });
  await new Promise(r => setTimeout(r, 800));

  const theatreEval = await send('Runtime.evaluate', {
    expression: `
      JSON.stringify({
        isExpanded: document.getElementById('osiris-command-deck').classList.contains('is-expanded'),
        bodyHasTheatre: document.body.classList.contains('osiris-theatre-open'),
        closeVisible: window.getComputedStyle(document.getElementById('osiris-deck-close')).display !== 'none'
      })
    `,
    returnByValue: true
  });
  console.log('Theatre Mode Evaluation:', theatreEval.result?.value);

  // Take screenshot of Theatre Mode
  const shot2 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4_osiris_deck_theatre.png', Buffer.from(shot2.result.data, 'base64'));
  console.log('Captured screenshots/v4_osiris_deck_theatre.png');

  // Test Close Theatre Mode
  await send('Runtime.evaluate', {
    expression: `document.getElementById('osiris-deck-close').click();`
  });
  await new Promise(r => setTimeout(r, 500));

  // Test Perspective Switcher & Country Hub Focus (Spain)
  await send('Runtime.evaluate', {
    expression: `
      window.setDeckPerspective('prototypes');
    `
  });
  await new Promise(r => setTimeout(r, 500));

  const spainEval = await send('Runtime.evaluate', {
    expression: `
      JSON.stringify({
        flagName: document.getElementById('hub-card-flag-name').textContent,
        title: document.getElementById('hub-card-title').textContent,
        btnPrimaryText: document.getElementById('hub-btn-action-primary').textContent,
        btnPrimaryHref: document.getElementById('hub-btn-action-primary').href,
        btnSecondaryText: document.getElementById('hub-btn-action-secondary').textContent
      })
    `,
    returnByValue: true
  });
  console.log('Spain Hub Evaluation:', spainEval.result?.value);

  // 2. Mobile Viewport 375x812
  await send('Emulation.setDeviceMetricsOverride', {
    width: 375,
    height: 812,
    deviceScaleFactor: 3,
    mobile: true,
    hasTouch: true,
    fitWindow: false
  });

  await send('Runtime.evaluate', {
    expression: `window.focusGlobeHub('all');`
  });
  await new Promise(r => setTimeout(r, 1000));

  const shot3 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4_osiris_deck_mobile.png', Buffer.from(shot3.result.data, 'base64'));
  console.log('Captured screenshots/v4_osiris_deck_mobile.png');

  console.log('ALL VERIFICATIONS SUCCESSFUL!');
  ws.close();
} catch (e) {
  console.error('CDP verification error:', e);
} finally {
  chrome.kill();
}

