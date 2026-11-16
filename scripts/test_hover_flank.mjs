import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9225',
  '--window-size=1440,900',
  '--hide-scrollbars',
  'about:blank'
]);

let tabsRes = null;
try {
  for (let i = 0; i < 12; i++) {
    try {
      tabsRes = await fetch('http://127.0.0.1:9225/json');
      if (tabsRes.ok) break;
    } catch (e) {
      await new Promise(r => setTimeout(r, 500));
    }
  }
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

  await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('portfolio-curved-gallery');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    })()`
  });
  await new Promise(r => setTimeout(r, 1000));

  // Find bounding rect of the right card (index 1) and left card (index 6)
  const rects = await send('Runtime.evaluate', {
    expression: `(() => {
      try {
        const cCenter = document.querySelector('.curved-card[data-index="0"]')?.getBoundingClientRect();
        const cRight = document.querySelector('.curved-card[data-index="1"]')?.getBoundingClientRect();
        const cLeft = document.querySelector('.curved-card[data-index="6"]')?.getBoundingClientRect();
        return JSON.stringify({
          center: cCenter ? { x: cCenter.x + cCenter.width/2, y: cCenter.y + cCenter.height/2 } : null,
          right: cRight ? { x: cRight.x + cRight.width/2, y: cRight.y + cRight.height/2 } : null,
          left: cLeft ? { x: cLeft.x + cLeft.width/2, y: cLeft.y + cLeft.height/2 } : null
        });
      } catch (e) {
        return JSON.stringify({ error: e.message });
      }
    })()`,
    returnByValue: true
  });
  console.log('Raw rects:', JSON.stringify(rects));
  const rawStr = rects?.result?.result?.value || '{}';
  const data = JSON.parse(rawStr);
  console.log('Card Centers:', data);

  // Set track pointer-events: none and card pointer-events: auto FIRST
  await send('Runtime.evaluate', {
    expression: `(() => {
      const track = document.querySelector('.curved-gallery-track');
      if (track) track.style.setProperty('pointer-events', 'none', 'important');
      document.querySelectorAll('.curved-card').forEach(c => c.style.setProperty('pointer-events', 'auto', 'important'));
    })()`
  });

  // Dispatch mouse move to right card center
  const rightPt = data.right;
  if (rightPt) {
    await send('Input.dispatchMouseEvent', {
      type: 'mouseMoved',
      x: Math.round(rightPt.x),
      y: Math.round(rightPt.y)
    });
  }
  await new Promise(r => setTimeout(r, 800));

  const shotRight = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/screenshot-hover-right-card.png', Buffer.from(shotRight.result.data, 'base64'));

  // Also check what element is actually hit at rightPt
  const hitEl = await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.elementFromPoint(${Math.round(rightPt.x)}, ${Math.round(rightPt.y)});
      const card = el ? el.closest('.curved-card') : null;
      const overlay = card ? card.querySelector('.curved-card-hover-overlay') : null;
      return JSON.stringify({
        tagName: el ? el.tagName : null,
        className: el ? el.className : null,
        closestCard: card?.getAttribute('data-index') || null,
        hoverOverlayComputedOpacity: overlay ? getComputedStyle(overlay).opacity : null,
        hoverOverlayComputedVisibility: overlay ? getComputedStyle(overlay).visibility : null
      });
    })()`,
    returnByValue: true
  });
  console.log('Hit Element with track pointer-events:none:', JSON.parse(hitEl?.result?.result?.value || '{}'));

  ws.close();
} catch (err) {
  console.error('Error:', err);
} finally {
  chrome.kill();
  process.exit(0);
}
