import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9241',
  '--user-data-dir=/tmp/chrome-v4239-' + Date.now(),
  '--window-size=1440,900',
  '--hide-scrollbars',
  'about:blank'
]);

await new Promise(r => setTimeout(r, 2000));

try {
  const tabsRes = await fetch('http://127.0.0.1:9241/json');
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

  // Audit 1: Check Atlas Deck corner (Should have ZERO curl triangles - Reverts User Image 1)
  await send('Runtime.evaluate', {
    expression: "document.getElementById('global-atlas').scrollIntoView({ behavior: 'instant', block: 'start' });"
  });
  await new Promise(r => setTimeout(r, 800));
  let res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4239_desktop_atlas_no_curl.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4239_desktop_atlas_no_curl.png');

  // Audit 2: Check Pillars (Should be 4 cards in 1 row, not larger - Reverts User Image 2)
  await send('Runtime.evaluate', {
    expression: "document.getElementById('core-value-proposition').scrollIntoView({ behavior: 'instant', block: 'start' });"
  });
  await new Promise(r => setTimeout(r, 800));
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4239_desktop_pillars_compact_row.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4239_desktop_pillars_compact_row.png');

  // Audit 3: Check Prototypes Deck (Decreased space, shorter tile, all fits in one section - Addresses User Image 3)
  await send('Runtime.evaluate', {
    expression: "document.getElementById('portfolio-curved-gallery').scrollIntoView({ behavior: 'instant', block: 'start' });"
  });
  await new Promise(r => setTimeout(r, 800));
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4239_desktop_prototypes_compact_fit.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4239_desktop_prototypes_compact_fit.png');

  // Detailed Metrics Audit
  const audit = await send('Runtime.evaluate', {
    returnByValue: true,
    expression: `(() => {
      const curlElements = document.querySelectorAll('.deck-page-curl-corner');
      const pillarsGrid = document.querySelector('.teaser-pillars-grid');
      const pillarCards = Array.from(document.querySelectorAll('.teaser-pillar-card'));
      const protoDeck = document.getElementById('prototypesGrandDeck');
      const protoMeta = protoDeck ? protoDeck.querySelector('.section-meta') : null;
      const protoViewport = protoDeck ? protoDeck.querySelector('.curved-gallery-viewport') : null;
      const protoControls = protoDeck ? protoDeck.querySelector('.curved-gallery-controls') : null;
      const protoCta = protoDeck ? protoDeck.querySelector('.gallery-cta-wrap') : null;
      const activeCard = document.querySelector('.curved-card[data-proto-id="meax"]');
      const activeTag = activeCard ? activeCard.querySelector('.curved-card-top-tag') : null;

      const cardTops = pillarCards.map(c => Math.round(c.getBoundingClientRect().top));
      const allPillarsInOneRow = cardTops.length === 4 && cardTops.every(t => Math.abs(t - cardTops[0]) < 4);

      const topSpace = (protoViewport && protoMeta) 
        ? Math.round(protoViewport.getBoundingClientRect().top - protoMeta.getBoundingClientRect().bottom)
        : null;
      const bottomSpace = (protoControls && protoViewport)
        ? Math.round(protoControls.getBoundingClientRect().top - protoViewport.getBoundingClientRect().bottom)
        : null;

      return {
        curlCount: curlElements.length,
        hasPillarsGrandDeck: !!document.getElementById('pillarsGrandDeck'),
        pillarCardsCount: pillarCards.length,
        allPillarsInOneRow: allPillarsInOneRow,
        cardTops: cardTops,
        protoDeckTotalHeight: protoDeck ? Math.round(protoDeck.getBoundingClientRect().height) : null,
        protoCardHeight: activeCard ? Math.round(activeCard.getBoundingClientRect().height) : null,
        protoCardWidth: activeCard ? Math.round(activeCard.getBoundingClientRect().width) : null,
        topSpaceBetweenMetaAndViewport: topSpace,
        bottomSpaceBetweenViewportAndControls: bottomSpace,
        tagBottom: activeTag ? window.getComputedStyle(activeTag).bottom : null,
        tagIsAtBottom: activeTag && activeCard ? (activeTag.getBoundingClientRect().top > activeCard.getBoundingClientRect().top + (activeCard.getBoundingClientRect().height * 0.5)) : null
      };
    })()`
  });

  const auditReport = audit.result.value;
  console.log('AUDIT REPORT:', JSON.stringify(auditReport, null, 2));

  // 2. Mobile Viewport 390x844
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
    fitWindow: false
  });
  await send('Runtime.evaluate', {
    expression: "document.getElementById('core-value-proposition').scrollIntoView({ behavior: 'instant', block: 'start' });"
  });
  await new Promise(r => setTimeout(r, 800));
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4239_mobile_pillars.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4239_mobile_pillars.png');

  await send('Runtime.evaluate', {
    expression: "document.getElementById('portfolio-curved-gallery').scrollIntoView({ behavior: 'instant', block: 'start' });"
  });
  await new Promise(r => setTimeout(r, 800));
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4239_mobile_prototypes.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v4239_mobile_prototypes.png');

  console.log('Task 9 verification completed successfully.');
  ws.close();
  chrome.kill();
} catch (e) {
  console.error('Audit failed:', e);
  chrome.kill();
  process.exit(1);
}
