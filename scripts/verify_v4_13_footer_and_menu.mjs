import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9236',
  '--window-size=1440,1100',
  'about:blank'
]);

for (let i = 0; i < 20; i++) {
  try {
    const res = await fetch('http://127.0.0.1:9236/json');
    if (res.ok) break;
  } catch (e) {
    await new Promise(r => setTimeout(r, 200));
  }
}

const tabsRes = await fetch('http://127.0.0.1:9236/json');
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
await send('DOM.enable');
await send('CSS.enable');
await send('Page.navigate', { url: 'http://localhost:3000/' });
await new Promise(r => setTimeout(r, 2500));

// --- TEST 1: Open Menu Overlay & Verify CLOSE ✕ Position ---
console.log('--- TEST 1: Opening Menu Overlay ---');
await send('Runtime.evaluate', {
  expression: `(() => {
    const btn = document.getElementById('nlMenuBtn');
    if (btn) btn.click();
  })()`
});
await new Promise(r => setTimeout(r, 600));

const menuCloseEval = await send('Runtime.evaluate', {
  expression: `(() => {
    const overlay = document.getElementById('nlMenuOverlay');
    const closeBtn = document.getElementById('nlMenuCloseBtn');
    const menuTop = document.querySelector('.nl-menu-top');
    const rect = closeBtn ? closeBtn.getBoundingClientRect() : null;
    return JSON.stringify({
      overlayActive: overlay ? overlay.classList.contains('active') : false,
      closeBtnFound: !!closeBtn,
      closeBtnText: closeBtn ? closeBtn.innerText.trim() : null,
      closeBtnRect: rect ? { x: rect.x, y: rect.y, width: rect.width, height: rect.height } : null,
      isTopRight: rect ? rect.x > 1100 && rect.y < 80 : false
    });
  })()`,
  returnByValue: true
});
const menuCloseData = JSON.parse(menuCloseEval.result.result.value);
console.log('Menu Close Button Data:', menuCloseData);

// Capture screenshot of open menu overlay
const menuShot = await send('Page.captureScreenshot', {
  clip: { x: 0, y: 0, width: 1440, height: 350, scale: 2 }
});
fs.writeFileSync('/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/v413-menu-close-top-right.png', Buffer.from(menuShot.result.data, 'base64'));
console.log('Saved: v413-menu-close-top-right.png');

// Close Menu Overlay
await send('Runtime.evaluate', {
  expression: `(() => {
    const closeBtn = document.getElementById('nlMenuCloseBtn');
    if (closeBtn) closeBtn.click();
  })()`
});
await new Promise(r => setTimeout(r, 400));

// --- TEST 2: Inspect Footer Elements, Professional Copy & Aurora Styling ---
console.log('--- TEST 2: Inspecting Footer Elements ---');
await send('Runtime.evaluate', {
  expression: `(() => {
    const footer = document.getElementById('siteFooter');
    if (footer) footer.scrollIntoView({ behavior: 'instant', block: 'end' });
  })()`
});
await new Promise(r => setTimeout(r, 800));

const footerEval = await send('Runtime.evaluate', {
  expression: `(() => {
    const callout = document.querySelector('.closing-callout-col');
    const calloutStyle = callout ? window.getComputedStyle(callout) : null;
    const nindoSub = document.querySelector('.footer-nindo-sub');
    const coord = document.querySelector('.meta-mono-coord');
    const replayBtn = document.getElementById('replayJourneyBtn');
    const replayStyle = replayBtn ? window.getComputedStyle(replayBtn) : null;
    const stages = Array.from(document.querySelectorAll('.journey-stage text')).map(t => t.textContent.trim());

    // Check SVG icons for presence of orange
    const svgHTML = document.querySelector('.journey-strip-wrap') ? document.querySelector('.journey-strip-wrap').innerHTML : '';
    const hasOrangeInJourney = svgHTML.includes('#ff5e1a') || svgHTML.includes('#ff6200') || svgHTML.includes('kurama');

    return JSON.stringify({
      calloutBorderLeft: calloutStyle ? calloutStyle.borderLeftColor : null,
      calloutBg: calloutStyle ? calloutStyle.backgroundColor : null,
      nindoSubText: nindoSub ? nindoSub.innerText.trim() : null,
      coordText: coord ? coord.innerText.trim() : null,
      replayBtnText: replayBtn ? replayBtn.innerText.trim() : null,
      replayColor: replayStyle ? replayStyle.color : null,
      replayBg: replayStyle ? replayStyle.backgroundColor : null,
      stageLabels: stages,
      hasOrangeInJourney: hasOrangeInJourney
    });
  })()`,
  returnByValue: true
});
const footerData = JSON.parse(footerEval.result.result.value);
console.log('Footer Inspection Data:', footerData);

// Capture screenshot of footer
const footerShot = await send('Page.captureScreenshot', {
  clip: { x: 0, y: 400, width: 1440, height: 700, scale: 2 }
});
fs.writeFileSync('/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/v413-footer-modernized.png', Buffer.from(footerShot.result.data, 'base64'));
console.log('Saved: v413-footer-modernized.png');

chrome.kill();
