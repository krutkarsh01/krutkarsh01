import WebSocket from 'ws';
import fs from 'fs';

async function main() {
  const tabsRes = await fetch('http://127.0.0.1:9251/json');
  const tabs = await tabsRes.json();
  const pageTab = tabs.find(t => t.type === 'page');
  if (!pageTab) throw new Error('No page tab');
  
  const ws = new WebSocket(pageTab.webSocketDebuggerUrl);
  let id = 1;
  const pending = new Map();
  
  ws.on('message', data => {
    const msg = JSON.parse(data.toString());
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg);
      pending.delete(msg.id);
    }
  });

  const send = (method, params = {}) => new Promise((resolve) => {
    const curId = id++;
    pending.set(curId, resolve);
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  await new Promise(r => ws.on('open', r));

  await send('Page.enable');
  await send('DOM.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false
  });

  // 1. Check About Page
  console.log("Navigating to http://localhost:3000/about/ ...");
  await send('Page.navigate', { url: 'http://localhost:3000/about/' });
  await new Promise(r => setTimeout(r, 1200));

  // Verify Task 1: Menu Overlay item 05
  const menuEval = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const item5 = document.querySelector('#nlMenuOverlay .nl-menu-nav li:nth-child(5) a');
        return item5 ? item5.innerText.trim() : 'NOT_FOUND';
      })()
    `,
    returnByValue: true
  });
  console.log("Task 1 - Menu Item 05 text:", menuEval.result?.value);

  // Verify Task 2: About Hero Copy Padding
  const heroCopyEval = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const el = document.querySelector('.about-hero-copy');
        if (!el) return 'NOT_FOUND';
        const cs = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        return {
          padding: cs.padding,
          paddingTop: cs.paddingTop,
          paddingBottom: cs.paddingBottom,
          paddingLeft: cs.paddingLeft,
          paddingRight: cs.paddingRight,
          borderRadius: cs.borderRadius,
          width: rect.width,
          height: rect.height
        };
      })()
    `,
    returnByValue: true
  });
  console.log("Task 2 - Hero Copy computed styles:", heroCopyEval.result?.value);

  // Verify Task 2b: Click portrait photo & check modal size and uncropped image
  console.log("Clicking portrait photo to test modal...");
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const photo = document.querySelector('.about-photo-card') || document.querySelector('.about-portrait-card');
        if (photo) photo.click();
      })()
    `
  });
  await new Promise(r => setTimeout(r, 800));

  const modalEval = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const modal = document.querySelector('#imageLightbox');
        const img = document.querySelector('#lightboxImg');
        const content = document.querySelector('.lightbox-content');
        if (!modal || !modal.classList.contains('active')) return { active: false };
        const imgRect = img.getBoundingClientRect();
        const contentRect = content.getBoundingClientRect();
        const csImg = window.getComputedStyle(img);
        return {
          active: true,
          contentWidth: contentRect.width,
          contentHeight: contentRect.height,
          imgWidth: imgRect.width,
          imgHeight: imgRect.height,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
          objectFit: csImg.objectFit
        };
      })()
    `,
    returnByValue: true
  });
  console.log("Task 2b - Lightbox modal status:", modalEval.result?.value);

  // Screenshot modal
  const modalShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/v417-modal-verified.png', Buffer.from(modalShot.result.data, 'base64'));

  // Close modal
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const closeBtn = document.querySelector('.lightbox-close');
        if (closeBtn) closeBtn.click();
      })()
    `
  });
  await new Promise(r => setTimeout(r, 400));

  // Verify Task 3: About Story Body Spacing & Title Alignment
  const storyEval = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const body = document.querySelector('.about-story-body');
        const title = document.querySelector('.about-story-title');
        const csBody = body ? window.getComputedStyle(body) : null;
        const bodyRect = body ? body.getBoundingClientRect() : null;
        const titleRect = title ? title.getBoundingClientRect() : null;
        return {
          bodyPadding: csBody?.padding,
          bodyBorderRadius: csBody?.borderRadius,
          titleTop: titleRect?.top,
          bodyTop: bodyRect?.top,
          titlePosition: title ? window.getComputedStyle(title).position : null
        };
      })()
    `,
    returnByValue: true
  });
  console.log("Task 3 - Story styles & alignment:", storyEval.result?.value);

  // Verify Task 4: Chronological order of Career & Foundations
  const timelineEval = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const careerItems = Array.from(document.querySelectorAll('#chapter-career .timeline-item')).map(el => {
          const year = el.querySelector('.timeline-year')?.innerText.trim();
          const role = el.querySelector('.timeline-role')?.innerText.trim();
          return { year, role };
        });
        const foundationItems = Array.from(document.querySelectorAll('#chapter-foundations .foundation-item')).map(el => {
          const deg = el.querySelector('.foundation-degree')?.innerText.trim();
          const yr = el.querySelector('.foundation-year')?.innerText.trim();
          return { deg, yr };
        });
        return { careerItems, foundationItems };
      })()
    `,
    returnByValue: true
  });
  console.log("Task 4 - Career items:", JSON.stringify(timelineEval.result?.value?.careerItems, null, 2));
  console.log("Task 4 - Foundation items:", JSON.stringify(timelineEval.result?.value?.foundationItems, null, 2));

  // Verify Task 5: Colors check across all computed styles
  const colorCheckEval = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const all = Array.from(document.querySelectorAll('*'));
        let hasLegacyGreen = 0;
        all.forEach(el => {
          const cs = window.getComputedStyle(el);
          if (cs.color === 'rgb(181, 255, 67)' || cs.backgroundColor === 'rgb(181, 255, 67)') {
            hasLegacyGreen++;
          }
        });
        return { legacyColorCount: hasLegacyGreen };
      })()
    `,
    returnByValue: true
  });
  console.log("Task 5 - Legacy green count:", colorCheckEval.result?.value);

  // Capture full about page screenshot
  const fullAboutShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/v417-about-verified.png', Buffer.from(fullAboutShot.result.data, 'base64'));

  ws.close();
  console.log("Verification finished successfully!");
}

main().catch(console.error);
