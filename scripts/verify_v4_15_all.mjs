import { spawn } from 'child_process';
import fs from 'fs';

async function run() {
  const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless=new',
    '--remote-debugging-port=9252',
    '--window-size=1440,1100',
    'http://localhost:3000/'
  ]);

  for (let i = 0; i < 25; i++) {
    try {
      const res = await fetch('http://127.0.0.1:9252/json');
      if (res.ok) break;
    } catch (e) {
      await new Promise(r => setTimeout(r, 200));
    }
  }

  const tabsRes = await fetch('http://127.0.0.1:9252/json');
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
  await send('Runtime.enable');
  await new Promise(r => setTimeout(r, 2200));

  // 1. Verify & Capture Frosted Glass Navbar
  const navEval = await send('Runtime.evaluate', {
    expression: `(() => {
      const nav = document.querySelector('.nl-nav');
      const menuBtn = document.getElementById('nlMenuBtn');
      const nStyle = nav ? window.getComputedStyle(nav) : null;
      const bStyle = menuBtn ? window.getComputedStyle(menuBtn) : null;
      return JSON.stringify({
        navBg: nStyle ? nStyle.backgroundColor : null,
        navBackdrop: nStyle ? (nStyle.backdropFilter || nStyle.webkitBackdropFilter) : null,
        navBorder: nStyle ? nStyle.borderBottomColor : null,
        btnBg: bStyle ? bStyle.backgroundColor : null,
        btnBackdrop: bStyle ? (bStyle.backdropFilter || bStyle.webkitBackdropFilter) : null,
        btnBoxShadow: bStyle ? bStyle.boxShadow : null
      });
    })()`,
    returnByValue: true
  });
  console.log('NAV METRICS:', JSON.parse(navEval.result.result.value));

  const navShot = await send('Page.captureScreenshot', {
    clip: { x: 0, y: 0, width: 1440, height: 180, scale: 2 }
  });
  fs.writeFileSync('/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/v415-frosted-glass-nav.png', Buffer.from(navShot.result.data, 'base64'));
  console.log('Saved: v415-frosted-glass-nav.png');

  // 2. Verify & Capture Legend Spacing
  const legendEval = await send('Runtime.evaluate', {
    expression: `(() => {
      const legend = document.querySelector('.osiris-legend');
      const lStyle = legend ? window.getComputedStyle(legend) : null;
      const r = legend ? legend.getBoundingClientRect() : null;
      return JSON.stringify({
        legendPadding: lStyle ? lStyle.padding : null,
        legendGap: lStyle ? lStyle.gap : null,
        legendWidth: r ? r.width : null,
        legendHeight: r ? r.height : null
      });
    })()`,
    returnByValue: true
  });
  console.log('LEGEND METRICS:', JSON.parse(legendEval.result.result.value));

  await send('Runtime.evaluate', {
    expression: `(() => {
      const legend = document.querySelector('.osiris-legend');
      if (legend) legend.scrollIntoView({ behavior: 'instant', block: 'center' });
    })()`
  });
  await new Promise(r => setTimeout(r, 600));

  const legendShot = await send('Page.captureScreenshot', {
    clip: { x: 40, y: 350, width: 650, height: 200, scale: 2 }
  });
  fs.writeFileSync('/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/v415-legend-spacing.png', Buffer.from(legendShot.result.data, 'base64'));
  console.log('Saved: v415-legend-spacing.png');

  // 3. Trigger Companion Speech Bubble at Waypoint 4 (Interactive Sandboxes) and Verify It is NOT Mirrored
  console.log('Testing Companion speech bubble...');
  const companionEval = await send('Runtime.evaluate', {
    expression: `(() => {
      // Scroll to carousel waypoint
      const gallery = document.getElementById('portfolio-curved-gallery');
      if (gallery) gallery.scrollIntoView({ behavior: 'instant', block: 'center' });
      const char = document.getElementById('anime-companion-character');
      const bubble = document.querySelector('.anime-speech-bubble');
      const img = char ? char.querySelector('img') : null;
      // Trigger jump to waypoint index 3 (Interactive Sandboxes)
      if (window.companionEngine && typeof window.companionEngine.jumpToWaypoint === 'function') {
        window.companionEngine.jumpToWaypoint(3);
      } else if (char) {
        char.click();
      }
      return JSON.stringify({
        charFound: !!char,
        bubbleFound: !!bubble,
        bubbleTransform: bubble ? window.getComputedStyle(bubble).transform : null,
        charTransform: char ? window.getComputedStyle(char).transform : null,
        imgTransform: img ? window.getComputedStyle(img).transform : null
      });
    })()`,
    returnByValue: true
  });
  console.log('COMPANION INITIAL:', JSON.parse(companionEval.result.result.value));

  await new Promise(r => setTimeout(r, 1200));

  // Force show speech bubble if not open
  await send('Runtime.evaluate', {
    expression: `(() => {
      const bubble = document.querySelector('.anime-speech-bubble');
      if (bubble) bubble.classList.add('active');
    })()`
  });
  await new Promise(r => setTimeout(r, 400));

  const companionShot = await send('Page.captureScreenshot', {
    clip: { x: 300, y: 100, width: 840, height: 700, scale: 2 }
  });
  fs.writeFileSync('/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/v415-companion-unmirrored.png', Buffer.from(companionShot.result.data, 'base64'));
  console.log('Saved: v415-companion-unmirrored.png');

  chrome.kill();
}
run();
