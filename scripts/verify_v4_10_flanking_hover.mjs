import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9226',
  '--window-size=1440,900',
  '--hide-scrollbars',
  'about:blank'
]);

let tabsRes = null;
try {
  for (let i = 0; i < 12; i++) {
    try {
      tabsRes = await fetch('http://127.0.0.1:9226/json');
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

  // Get precise screen coordinates for Left Flanker, Center, and Right Flanker
  const coordsRes = await send('Runtime.evaluate', {
    expression: `(() => {
      // Find cards by dataset angle
      const cards = Array.from(document.querySelectorAll('.curved-card'));
      let center = null, left = null, right = null;
      let minCenter = 999, minLeft = 999, minRight = 999;
      cards.forEach(c => {
        const angle = parseFloat(c.dataset.currentAngle || '999');
        if (Math.abs(angle) < minCenter) { minCenter = Math.abs(angle); center = c; }
        if (angle < -15 && Math.abs(angle - (-25.7)) < minLeft) { minLeft = Math.abs(angle - (-25.7)); left = c; }
        if (angle > 15 && Math.abs(angle - 25.7) < minRight) { minRight = Math.abs(angle - 25.7); right = c; }
      });
      const getPt = el => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return { x: Math.round(r.x + r.width/2), y: Math.round(r.y + r.height/2) };
      };
      return JSON.stringify({
        center: { pt: getPt(center), id: center?.getAttribute('data-proto-id') },
        left: { pt: getPt(left), id: left?.getAttribute('data-proto-id') },
        right: { pt: getPt(right), id: right?.getAttribute('data-proto-id') }
      });
    })()`,
    returnByValue: true
  });
  const coords = JSON.parse(coordsRes?.result?.result?.value || '{}');
  console.log('Detected Card Positions:', coords);

  // 1. Hover over Right Flanker (112 Veterinarios)
  if (coords.right?.pt) {
    console.log('Hovering over Right Card at:', coords.right.pt);
    await send('Input.dispatchMouseEvent', {
      type: 'mouseMoved',
      x: coords.right.pt.x,
      y: coords.right.pt.y
    });
    await new Promise(r => setTimeout(r, 800));

    // Check hit test
    const hitRight = await send('Runtime.evaluate', {
      expression: `(() => {
        const el = document.elementFromPoint(${coords.right.pt.x}, ${coords.right.pt.y});
        const card = el ? el.closest('.curved-card') : null;
        const overlay = card ? card.querySelector('.curved-card-hover-overlay') : null;
        return JSON.stringify({
          hitElement: el?.tagName + '.' + el?.className,
          cardId: card?.getAttribute('data-proto-id'),
          overlayOpacity: overlay ? getComputedStyle(overlay).opacity : '0',
          overlayVisibility: overlay ? getComputedStyle(overlay).visibility : 'hidden'
        });
      })()`,
      returnByValue: true
    });
    console.log('Right Hover Hit Audit:', JSON.parse(hitRight?.result?.result?.value || '{}'));

    const shotRight = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/screenshot-hover-right-flank-v410.png', Buffer.from(shotRight.result.data, 'base64'));
    console.log('Saved screenshot-hover-right-flank-v410.png');
  }

  // 2. Hover over Left Flanker (Industrial Cutting Tools)
  if (coords.left?.pt) {
    console.log('Hovering over Left Card at:', coords.left.pt);
    await send('Input.dispatchMouseEvent', {
      type: 'mouseMoved',
      x: coords.left.pt.x,
      y: coords.left.pt.y
    });
    await new Promise(r => setTimeout(r, 800));

    const hitLeft = await send('Runtime.evaluate', {
      expression: `(() => {
        const el = document.elementFromPoint(${coords.left.pt.x}, ${coords.left.pt.y});
        const card = el ? el.closest('.curved-card') : null;
        const overlay = card ? card.querySelector('.curved-card-hover-overlay') : null;
        return JSON.stringify({
          hitElement: el?.tagName + '.' + el?.className,
          cardId: card?.getAttribute('data-proto-id'),
          overlayOpacity: overlay ? getComputedStyle(overlay).opacity : '0',
          overlayVisibility: overlay ? getComputedStyle(overlay).visibility : 'hidden'
        });
      })()`,
      returnByValue: true
    });
    console.log('Left Hover Hit Audit:', JSON.parse(hitLeft?.result?.result?.value || '{}'));

    const shotLeft = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/screenshot-hover-left-flank-v410.png', Buffer.from(shotLeft.result.data, 'base64'));
    console.log('Saved screenshot-hover-left-flank-v410.png');
  }

  ws.close();
} catch (err) {
  console.error('Error during test:', err);
} finally {
  chrome.kill();
  process.exit(0);
}
