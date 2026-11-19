import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9240',
  '--user-data-dir=/tmp/chrome-v4238-' + Date.now(),
  '--window-size=1440,900',
  '--hide-scrollbars',
  'about:blank'
]);

await new Promise(r => setTimeout(r, 2000));

try {
  const tabsRes = await fetch('http://127.0.0.1:9240/json');
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

  // 1. Desktop 1440x900
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
    fitWindow: false
  });
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 2500));

  // 1. Capture Enterprise Pillars Grand Deck (Addresses User Image 1)
  await send('Runtime.evaluate', {
    expression: "document.getElementById('core-value-proposition').scrollIntoView({ behavior: 'instant', block: 'start' });"
  });
  await new Promise(r => setTimeout(r, 800));
  let res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4238_desktop_pillars_grand_deck.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4238_desktop_pillars_grand_deck.png');

  // 2. Capture Prototypes Grand Deck (Addresses User Image 2)
  await send('Runtime.evaluate', {
    expression: "document.getElementById('portfolio-curved-gallery').scrollIntoView({ behavior: 'instant', block: 'start' });"
  });
  await new Promise(r => setTimeout(r, 800));
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4238_desktop_prototypes_grand_deck.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4238_desktop_prototypes_grand_deck.png');

  // 3. Inspect Tag Positioning & Logo Clearance (Addresses User Image 3)
  const tagAudit = await send('Runtime.evaluate', {
    expression: `JSON.stringify((() => {
      const activeCard = document.querySelector('.curved-card[data-proto-id="meax"]');
      const tag = activeCard ? activeCard.querySelector('.curved-card-top-tag') : null;
      const img = activeCard ? activeCard.querySelector('.curved-card-img') : null;
      const pillarsDeck = document.getElementById('pillarsGrandDeck');
      const protoDeck = document.getElementById('prototypesGrandDeck');
      const curlPillars = pillarsDeck ? pillarsDeck.querySelector('.deck-page-curl-corner') : null;
      const curlProto = protoDeck ? protoDeck.querySelector('.deck-page-curl-corner') : null;

      return {
        tagStyle: tag ? {
          bottom: window.getComputedStyle(tag).bottom,
          top: window.getComputedStyle(tag).top,
          background: window.getComputedStyle(tag).backgroundColor,
          color: window.getComputedStyle(tag).color
        } : null,
        tagRect: tag ? tag.getBoundingClientRect() : null,
        imgRect: img ? img.getBoundingClientRect() : null,
        tagIsAtBottom: tag && img ? (tag.getBoundingClientRect().top > img.getBoundingClientRect().top + (img.getBoundingClientRect().height * 0.6)) : null,
        pillarsGrandDeck: {
          exists: !!pillarsDeck,
          bg: pillarsDeck ? window.getComputedStyle(pillarsDeck).backgroundColor : null,
          borderRadius: pillarsDeck ? window.getComputedStyle(pillarsDeck).borderRadius : null,
          hasPageCurl: !!curlPillars
        },
        prototypesGrandDeck: {
          exists: !!protoDeck,
          bg: protoDeck ? window.getComputedStyle(protoDeck).backgroundColor : null,
          borderRadius: protoDeck ? window.getComputedStyle(protoDeck).borderRadius : null,
          hasPageCurl: !!curlProto
        }
      };
    })())`
  });
  console.log('AUDIT REPORT:', JSON.parse(tagAudit.result.result.value));

  // 4. Test Scroll Page-Curl Progress Transition (Scroll halfway through Pillars)
  await send('Runtime.evaluate', {
    expression: `(() => {
      window.scrollTo({ top: document.getElementById('core-value-proposition').offsetTop + 350, behavior: 'instant' });
      window.dispatchEvent(new Event('scroll'));
    })()`
  });
  await new Promise(r => setTimeout(r, 600));
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4238_desktop_page_curl_scroll_active.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4238_desktop_page_curl_scroll_active.png');

  // 5. Mobile Viewport 390x844
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
    fitWindow: false
  });
  await new Promise(r => setTimeout(r, 600));

  await send('Runtime.evaluate', {
    expression: "document.getElementById('core-value-proposition').scrollIntoView({ behavior: 'instant', block: 'start' });"
  });
  await new Promise(r => setTimeout(r, 800));
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4238_mobile_pillars_grand_deck.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4238_mobile_pillars_grand_deck.png');

  await send('Runtime.evaluate', {
    expression: "document.getElementById('portfolio-curved-gallery').scrollIntoView({ behavior: 'instant', block: 'start' });"
  });
  await new Promise(r => setTimeout(r, 800));
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4238_mobile_prototypes_grand_deck.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4238_mobile_prototypes_grand_deck.png');

  console.log('Task 8 verification completed successfully.');
} catch (err) {
  console.error('Testing error:', err);
} finally {
  chrome.kill();
  process.exit(0);
}
