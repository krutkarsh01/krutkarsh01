import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const ARTIFACTS_DIR = '/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9227',
  '--window-size=1440,1080',
  '--hide-scrollbars',
  'about:blank'
]);

try {
  let tabsRes = null;
  for (let i = 0; i < 15; i++) {
    try {
      tabsRes = await fetch('http://127.0.0.1:9227/json');
      if (tabsRes.ok) break;
    } catch (e) {
      await new Promise(r => setTimeout(r, 400));
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
  await send('DOM.enable');
  await send('CSS.enable');
  await send('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 2500));

  console.log('=== TEST 1: Navbar Transparency ===');
  const navTopRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const nav = document.querySelector('.nl-nav');
      const style = window.getComputedStyle(nav);
      return JSON.stringify({
        bg: style.backgroundColor,
        backdrop: style.backdropFilter || style.webkitBackdropFilter,
        border: style.borderBottom
      });
    })()`,
    returnByValue: true
  });
  console.log('Nav at top:', navTopRes.result.value);

  // Scroll 600px and check again
  await send('Runtime.evaluate', { expression: `window.scrollTo(0, 600)` });
  await new Promise(r => setTimeout(r, 600));

  const navScrolledRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const nav = document.querySelector('.nl-nav');
      const style = window.getComputedStyle(nav);
      return JSON.stringify({
        bg: style.backgroundColor,
        backdrop: style.backdropFilter || style.webkitBackdropFilter,
        border: style.borderBottom
      });
    })()`,
    returnByValue: true
  });
  console.log('Nav scrolled 600px:', navScrolledRes.result.value);

  // Take screenshot of navbar
  const shotNav = await send('Page.captureScreenshot', {
    clip: { x: 0, y: 0, width: 1440, height: 160, scale: 2 }
  });
  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'v411-verification-navbar-transparent.png'), Buffer.from(shotNav.result.data, 'base64'));
  console.log('Saved: v411-verification-navbar-transparent.png');

  console.log('\n=== TEST 2: Thin Black Text Stroke ===');
  const strokeRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const grad = document.querySelector('.gradient-text');
      const title = document.querySelector('.sec-title');
      return JSON.stringify({
        gradientTextStroke: grad ? window.getComputedStyle(grad).webkitTextStroke : null,
        titleStroke: title ? window.getComputedStyle(title).webkitTextStroke : null
      });
    })()`,
    returnByValue: true
  });
  console.log('Stroke properties:', strokeRes.result.value);

  console.log('\n=== TEST 3: Arrow Stepping (Exact 1-Tile) ===');
  await send('Runtime.evaluate', {
    expression: `(() => {
      const el = document.getElementById('portfolio-curved-gallery');
      if (el) el.scrollIntoView();
    })()`
  });
  await new Promise(r => setTimeout(r, 800));

  const initialAngleRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const track = document.getElementById('curvedGalleryTrack');
      const m = track.style.transform.match(/rotateY\\(([-\\d.]+)deg\\)/);
      return m ? parseFloat(m[1]) : 0;
    })()`,
    returnByValue: true
  });
  const initialAngle = initialAngleRes.result.value;

  // Click next button
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.getElementById('nextBtn');
      if (btn) btn.click();
    })()`
  });
  await new Promise(r => setTimeout(r, 800));

  const afterClickAngleRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const track = document.getElementById('curvedGalleryTrack');
      const m = track.style.transform.match(/rotateY\\(([-\\d.]+)deg\\)/);
      return m ? parseFloat(m[1]) : 0;
    })()`,
    returnByValue: true
  });
  const afterAngle = afterClickAngleRes.result.value;
  const delta = afterAngle - initialAngle;
  console.log(`Initial angle: ${initialAngle} deg -> After Next click: ${afterAngle} deg (Delta: ${delta.toFixed(2)} deg, Expected ~ -25.71 deg)`);

  const shotGallery = await send('Page.captureScreenshot', {
    clip: { x: 0, y: 0, width: 1440, height: 950, scale: 2 }
  });
  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'v411-verification-gallery-1step.png'), Buffer.from(shotGallery.result.data, 'base64'));
  console.log('Saved: v411-verification-gallery-1step.png');

  console.log('\n=== TEST 4: Decompressed Boxes & Badges ===');
  const tagMetricsRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const get = (sel) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const s = window.getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return {
          text: el.innerText.trim().slice(0, 30),
          padding: s.padding,
          height: Math.round(r.height),
          lineHeight: s.lineHeight,
          fontSize: s.fontSize,
          display: s.display
        };
      };
      return JSON.stringify({
        statusBadge: get('.osiris-status-badge'),
        osirisCode: get('.osiris-code'),
        dossierFlag: get('.osiris-dossier-flag'),
        sourceTag: get('.osiris-source-tag'),
        pillLink: get('.pill-link'),
        footerEyebrow: get('.footer-eyebrow')
      });
    })()`,
    returnByValue: true
  });
  console.log('Tag metrics:', JSON.parse(tagMetricsRes.result.value));

  // Scroll to Atlas Section (Image 5)
  await send('Runtime.evaluate', {
    expression: `document.getElementById('kh-osiris-atlas').scrollIntoView();`
  });
  await new Promise(r => setTimeout(r, 800));

  const shotAtlas = await send('Page.captureScreenshot', {
    clip: { x: 650, y: 50, width: 750, height: 750, scale: 2 }
  });
  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'v411-verification-atlas-decompressed.png'), Buffer.from(shotAtlas.result.data, 'base64'));
  console.log('Saved: v411-verification-atlas-decompressed.png');

  // Scroll to Footer Section (Image 4)
  await send('Runtime.evaluate', {
    expression: `document.getElementById('siteFooter').scrollIntoView();`
  });
  await new Promise(r => setTimeout(r, 800));

  const shotFooter = await send('Page.captureScreenshot', {
    clip: { x: 0, y: 0, width: 1440, height: 600, scale: 2 }
  });
  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'v411-verification-footer-decompressed.png'), Buffer.from(shotFooter.result.data, 'base64'));
  console.log('Saved: v411-verification-footer-decompressed.png');

  console.log('All CDP tests completed successfully.');
} finally {
  chrome.kill();
}
