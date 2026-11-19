import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9252',
  '--user-data-dir=/tmp/chrome-v4240-' + Date.now(),
  '--window-size=1440,900',
  '--hide-scrollbars',
  'about:blank'
]);

await new Promise(r => setTimeout(r, 2500));

try {
  const tabsRes = await fetch('http://127.0.0.1:9252/json');
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

  const pages = [
    { name: 'process', url: 'http://localhost:3000/process/' },
    { name: 'experience', url: 'http://localhost:3000/experience/' },
    { name: 'skills', url: 'http://localhost:3000/skills/' },
    { name: 'prototypes', url: 'http://localhost:3000/prototypes/' },
    { name: 'testimonials', url: 'http://localhost:3000/testimonials/' },
    { name: 'contact', url: 'http://localhost:3000/contact/' }
  ];

  // 1. Desktop 1440x900
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
    fitWindow: false
  });

  const auditResults = {};

  for (const p of pages) {
    await send('Page.navigate', { url: p.url });
    await new Promise(r => setTimeout(r, 1200));

    const res = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`screenshots/v4240_desktop_${p.name}_split_hero.png`, Buffer.from(res.result.data, 'base64'));
    console.log(`Saved screenshots/v4240_desktop_${p.name}_split_hero.png`);

    const audit = await send('Runtime.evaluate', {
      returnByValue: true,
      expression: `(() => {
        const card = document.querySelector('.subpage-hero-card');
        const frame = document.querySelector('.subpage-character-frame');
        const img = document.querySelector('.subpage-character-img');
        const caption = document.querySelector('.subpage-character-caption');
        return {
          hasHeroCard: !!card,
          cardBg: card ? window.getComputedStyle(card).backgroundColor : null,
          cardRadius: card ? window.getComputedStyle(card).borderRadius : null,
          hasCharacterFrame: !!frame,
          hasCharacterImg: !!img,
          imgSrc: img ? img.getAttribute('src') : null,
          imgAnimation: img ? window.getComputedStyle(img).animationName : null,
          captionText: caption ? caption.textContent.trim() : null
        };
      })()`
    });

    auditResults[p.name] = audit.result.result.value;
  }

  console.log('ALL SUBPAGES DESKTOP AUDIT REPORT:');
  console.log(JSON.stringify(auditResults, null, 2));

  // 2. Mobile Viewport 390x844 (Test on process & contact)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
    fitWindow: false
  });

  await send('Page.navigate', { url: 'http://localhost:3000/process/' });
  await new Promise(r => setTimeout(r, 1200));
  let mRes = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4240_mobile_process_split_hero.png', Buffer.from(mRes.result.data, 'base64'));
  console.log('Saved screenshots/v4240_mobile_process_split_hero.png');

  await send('Page.navigate', { url: 'http://localhost:3000/contact/' });
  await new Promise(r => setTimeout(r, 1200));
  mRes = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/v4240_mobile_contact_split_hero.png', Buffer.from(mRes.result.data, 'base64'));
  console.log('Saved screenshots/v4240_mobile_contact_split_hero.png');

  console.log('Task 11 verification completed successfully.');
  ws.close();
  chrome.kill();
} catch (e) {
  console.error('Audit failed:', e);
  chrome.kill();
  process.exit(1);
}
