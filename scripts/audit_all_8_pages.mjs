import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const ARTIFACTS_DIR = '/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7';

const pages = [
  { name: 'home', url: 'http://localhost:3000/' },
  { name: 'about', url: 'http://localhost:3000/about/' },
  { name: 'process', url: 'http://localhost:3000/process/' },
  { name: 'skills', url: 'http://localhost:3000/skills/' },
  { name: 'prototypes', url: 'http://localhost:3000/prototypes/' },
  { name: 'experience', url: 'http://localhost:3000/experience/' },
  { name: 'testimonials', url: 'http://localhost:3000/testimonials/' },
  { name: 'contact', url: 'http://localhost:3000/contact/' }
];

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9228',
  '--window-size=1440,1080',
  '--hide-scrollbars',
  'about:blank'
]);

try {
  let tabsRes = null;
  for (let i = 0; i < 20; i++) {
    try {
      tabsRes = await fetch('http://127.0.0.1:9228/json');
      if (tabsRes.ok) break;
    } catch (e) {
      await new Promise(r => setTimeout(r, 300));
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

  const auditReport = [];

  for (const p of pages) {
    console.log(`\n========================================`);
    console.log(`AUDITING PAGE: ${p.name.toUpperCase()} (${p.url})`);
    console.log(`========================================`);

    await send('Page.navigate', { url: p.url });
    await new Promise(r => setTimeout(r, 2000));

    // Evaluate Page Diagnostics
    const evalRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const nav = document.querySelector('.nl-nav');
        const footerNav = document.querySelector('.footer-nav');
        const footer = document.querySelector('#siteFooter') || document.querySelector('footer');
        const hero = document.querySelector('.nl-hero') || document.querySelector('header') || document.querySelector('.hero');
        
        const navStyle = nav ? window.getComputedStyle(nav) : null;
        const footerNavStyle = footerNav ? window.getComputedStyle(footerNav) : null;
        
        // Check if footerNav is positioned at top
        const footerNavRect = footerNav ? footerNav.getBoundingClientRect() : null;
        const isFooterNavAtTop = footerNavRect ? (footerNavRect.top < 100 && window.scrollY === 0) : false;

        // Check horizontal overflow
        const hasHorizontalOverflow = document.documentElement.scrollWidth > window.innerWidth;
        const scrollWidth = document.documentElement.scrollWidth;
        const innerWidth = window.innerWidth;

        // Check heading visibility
        const h1 = document.querySelector('h1');
        const h1Text = h1 ? h1.innerText.trim().slice(0, 50) : 'None';
        const h1Visible = h1 ? (h1.offsetWidth > 0 && h1.offsetHeight > 0) : false;

        return JSON.stringify({
          navTransparent: navStyle ? (navStyle.backgroundColor === 'rgba(0, 0, 0, 0)' || navStyle.backgroundColor === 'transparent') : false,
          navPosition: navStyle ? navStyle.position : null,
          footerNavPosition: footerNavStyle ? footerNavStyle.position : null,
          footerNavInFlow: footerNavStyle ? footerNavStyle.position === 'static' : true,
          isFooterNavAtTop: isFooterNavAtTop,
          hasHorizontalOverflow: hasHorizontalOverflow,
          scrollWidth: scrollWidth,
          innerWidth: innerWidth,
          h1Text: h1Text,
          h1Visible: h1Visible
        });
      })()`,
      returnByValue: true
    });

    let metrics = {};
    try {
      metrics = JSON.parse(evalRes.result.result.value);
    } catch (e) {
      metrics = { error: 'Failed to parse metrics: ' + e.message };
    }

    console.log(`[Audit ${p.name}] Nav Transparent:`, metrics.navTransparent);
    console.log(`[Audit ${p.name}] FooterNav Position:`, metrics.footerNavPosition, `(In Flow: ${metrics.footerNavInFlow})`);
    console.log(`[Audit ${p.name}] FooterNav Leaking At Top:`, metrics.isFooterNavAtTop ? 'FAIL (LEAKING)' : 'PASS (CLEAN)');
    console.log(`[Audit ${p.name}] Horizontal Overflow:`, metrics.hasHorizontalOverflow ? `FAIL (${metrics.scrollWidth} > ${metrics.innerWidth})` : 'PASS');
    console.log(`[Audit ${p.name}] Primary Heading H1:`, metrics.h1Text, `(Visible: ${metrics.h1Visible})`);

    // Capture Top Hero Screenshot
    const shotTop = await send('Page.captureScreenshot', {
      clip: { x: 0, y: 0, width: 1440, height: 750, scale: 2 }
    });
    const shotTopPath = path.join(ARTIFACTS_DIR, `v412-audit-${p.name}-hero.png`);
    fs.writeFileSync(shotTopPath, Buffer.from(shotTop.result.data, 'base64'));
    console.log(`[Audit ${p.name}] Saved Hero Shot:`, shotTopPath);

    // Scroll to footer and capture Footer Screenshot
    await send('Runtime.evaluate', {
      expression: `(() => {
        const footer = document.querySelector('#siteFooter') || document.querySelector('footer');
        if (footer) footer.scrollIntoView({ behavior: 'instant' });
      })()`
    });
    await new Promise(r => setTimeout(r, 600));

    const shotBottom = await send('Page.captureScreenshot', {
      clip: { x: 0, y: 380, width: 1440, height: 700, scale: 2 }
    });
    const shotBottomPath = path.join(ARTIFACTS_DIR, `v412-audit-${p.name}-footer.png`);
    fs.writeFileSync(shotBottomPath, Buffer.from(shotBottom.result.data, 'base64'));
    console.log(`[Audit ${p.name}] Saved Footer Shot:`, shotBottomPath);

    auditReport.push({
      page: p.name,
      url: p.url,
      ...metrics,
      heroShot: shotTopPath,
      footerShot: shotBottomPath
    });
  }

  const reportPath = path.join(ARTIFACTS_DIR, 'v412-audit-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(auditReport, null, 2));
  console.log(`\n========================================`);
  console.log(`ALL 8 PAGES AUDITED. Report saved to: ${reportPath}`);
  console.log(`========================================\n`);

} finally {
  chrome.kill();
}
