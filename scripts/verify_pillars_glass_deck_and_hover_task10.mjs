import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9250',
  '--user-data-dir=/tmp/chrome-v42310-' + Date.now(),
  '--window-size=1440,900',
  '--hide-scrollbars',
  'about:blank'
]);

await new Promise(r => setTimeout(r, 2500));

try {
  const tabsRes = await fetch('http://127.0.0.1:9250/json');
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

  // Scroll to Pillars section
  await send('Runtime.evaluate', {
    expression: "document.getElementById('core-value-proposition').scrollIntoView({ behavior: 'instant', block: 'start' });"
  });
  await new Promise(r => setTimeout(r, 800));

  // Capture resting state (grand glass deck enclosing header + 4 cards)
  let res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v42310_desktop_pillars_deck_resting.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v42310_desktop_pillars_deck_resting.png');

  // Trigger hover on first pillar card via Input.dispatchMouseEvent
  const firstCard = await send('Runtime.evaluate', {
    returnByValue: true,
    expression: `(() => {
      const card = document.querySelector('.teaser-pillar-card');
      const r = card.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    })()`
  });

  const cardCoords = firstCard.result.result.value;

  await send('Input.dispatchMouseEvent', {
    type: 'mouseMoved',
    x: cardCoords.x,
    y: cardCoords.y
  });
  await new Promise(r => setTimeout(r, 600));

  // Capture hover state
  res = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v42310_desktop_pillars_deck_hover.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v42310_desktop_pillars_deck_hover.png');

  // Metrics Audit
  const audit = await send('Runtime.evaluate', {
    returnByValue: true,
    expression: `(() => {
      const deck = document.getElementById('pillarsGrandDeck');
      const pillarCards = Array.from(document.querySelectorAll('.teaser-pillar-card'));
      const cardTops = pillarCards.map(c => Math.round(c.getBoundingClientRect().top));
      const allInOneRow = cardTops.length === 4 && cardTops.every(t => Math.abs(t - cardTops[0]) < 4);

      return {
        pillarsGrandDeckExists: !!deck,
        deckBg: deck ? window.getComputedStyle(deck).backgroundColor : null,
        deckBackdropFilter: deck ? window.getComputedStyle(deck).backdropFilter : null,
        deckBorderRadius: deck ? window.getComputedStyle(deck).borderRadius : null,
        cardCount: pillarCards.length,
        cardTops: cardTops,
        allPillarsInOneRow: allInOneRow,
        deckHeight: deck ? Math.round(deck.getBoundingClientRect().height) : null
      };
    })()`
  });

  console.log('AUDIT REPORT:', JSON.stringify(audit.result.value, null, 2));

  // Mobile Viewport 390x844
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
  fs.writeFileSync('screenshots/v42310_mobile_pillars_deck.png', Buffer.from(res.result.data, 'base64'));
  console.log('Saved screenshots/v42310_mobile_pillars_deck.png');

  console.log('Task 10 verification completed successfully.');
  ws.close();
  chrome.kill();
} catch (e) {
  console.error('Audit failed:', e);
  chrome.kill();
  process.exit(1);
}
