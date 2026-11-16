import { spawn } from 'child_process';
import fs from 'fs';

async function run() {
  const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless=new',
    '--remote-debugging-port=9245',
    '--window-size=1440,900',
    'http://localhost:3000/'
  ]);

  await new Promise(r => setTimeout(r, 2000));
  const tabsRes = await fetch('http://127.0.0.1:9245/json');
  const tabs = await tabsRes.json();
  const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);

  let id = 1;
  const send = (method, params = {}) => new Promise(res => {
    const msgId = id++;
    const handler = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === msgId) {
        ws.removeEventListener('message', handler);
        res(msg);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

  await send('Page.enable');
  await new Promise(r => setTimeout(r, 1200));

  // 1. Capture Header
  const headerShot = await send('Page.captureScreenshot', {
    clip: { x: 0, y: 0, width: 1440, height: 200, scale: 2 }
  });
  fs.writeFileSync('/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/v413-header-clean.png', Buffer.from(headerShot.result.data, 'base64'));
  console.log('1. Saved: v413-header-clean.png');

  // 2. Open Menu Overlay & Capture
  await send('Runtime.evaluate', {
    expression: `(() => {
      const overlay = document.getElementById('nlMenuOverlay');
      if (overlay) overlay.classList.add('open');
    })()`
  });
  await new Promise(r => setTimeout(r, 400));

  const menuCloseRect = await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.getElementById('nlMenuCloseBtn');
      const r = btn ? btn.getBoundingClientRect() : null;
      return JSON.stringify({
        found: !!btn,
        rect: r ? { x: r.x, y: r.y, width: r.width, height: r.height } : null
      });
    })()`,
    returnByValue: true
  });
  console.log('Menu Close Rect:', menuCloseRect.result.result.value);

  const menuShot = await send('Page.captureScreenshot', {
    clip: { x: 0, y: 0, width: 1440, height: 350, scale: 2 }
  });
  fs.writeFileSync('/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/v413-menu-close-top-right.png', Buffer.from(menuShot.result.data, 'base64'));
  console.log('2. Saved: v413-menu-close-top-right.png');

  // Close menu overlay
  await send('Runtime.evaluate', {
    expression: `(() => {
      const overlay = document.getElementById('nlMenuOverlay');
      if (overlay) overlay.classList.remove('open');
    })()`
  });

  // 3. Scroll to Footer & Capture
  await send('Runtime.evaluate', {
    expression: `(() => {
      const footer = document.getElementById('siteFooter');
      if (footer) footer.scrollIntoView({ behavior: 'instant', block: 'start' });
    })()`
  });
  await new Promise(r => setTimeout(r, 800));

  const footerEval = await send('Runtime.evaluate', {
    expression: `(() => {
      const callout = document.querySelector('.closing-callout-col');
      const nindo = document.querySelector('.footer-nindo-sub');
      const coord = document.querySelector('.meta-mono-coord');
      const replay = document.getElementById('replayJourneyBtn');
      const rStyle = replay ? window.getComputedStyle(replay) : null;
      const cStyle = callout ? window.getComputedStyle(callout) : null;
      return JSON.stringify({
        calloutBorder: cStyle ? cStyle.borderLeftColor : null,
        nindoText: nindo ? nindo.innerText.trim() : null,
        coordText: coord ? coord.innerText.trim() : null,
        replayText: replay ? replay.innerText.trim() : null,
        replayBg: rStyle ? rStyle.backgroundColor : null,
        replayColor: rStyle ? rStyle.color : null
      });
    })()`,
    returnByValue: true
  });
  console.log('Footer Evaluation:', footerEval.result.result.value);

  const footerShot = await send('Page.captureScreenshot', {});
  fs.writeFileSync('/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/v413-footer-modernized.png', Buffer.from(footerShot.result.data, 'base64'));
  console.log('3. Saved: v413-footer-modernized.png');

  chrome.kill();
}
run();
