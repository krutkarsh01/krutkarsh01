import { spawn } from 'child_process';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9222',
  'about:blank'
]);

await new Promise(r => setTimeout(r, 1200));

try {
  const tabs = await (await fetch('http://localhost:9222/json')).json();
  const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);

  let id = 1;
  function send(method, params = {}) {
    return new Promise((res) => {
      const i = id++;
      const handler = (e) => {
        const d = JSON.parse(e.data);
        if (d.id === i) { ws.removeEventListener('message', handler); res(d); }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: i, method, params }));
    });
  }

  await send('Emulation.setDeviceMetricsOverride', { width: 393, height: 852, deviceScaleFactor: 2, mobile: true });
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise(r => setTimeout(r, 1800));

  // Test 1: Click "Explore Portfolio Prototypes" button
  console.log('Testing Click on "Explore Portfolio Prototypes"...');
  await send('Runtime.evaluate', {
    expression: `
      var btn = document.querySelector('.kh-actions a[href="#portfolio-curved-gallery"]');
      if (btn) btn.click();
    `
  });
  await new Promise(r => setTimeout(r, 1000));

  const scrollAfterPrototypes = await send('Runtime.evaluate', {
    expression: `
      (function() {
        var sec = document.getElementById('portfolio-curved-gallery');
        var rect = sec.getBoundingClientRect();
        return JSON.stringify({ scrollY: window.scrollY, secTop: rect.top, hash: window.location.hash });
      })()
    `,
    returnByValue: true
  });
  console.log('Scroll Result after Prototypes click:', scrollAfterPrototypes.result.value);

  // Test 2: Quick Jump chip click to "Value Prop"
  console.log('Testing Click on Quick Jump "Value Prop"...');
  await send('Runtime.evaluate', {
    expression: `
      var chip = document.querySelector('.mobile-jump-chip[href="#core-value-proposition"]');
      if (chip) chip.click();
    `
  });
  await new Promise(r => setTimeout(r, 1000));

  const scrollAfterValueProp = await send('Runtime.evaluate', {
    expression: `
      (function() {
        var sec = document.getElementById('core-value-proposition');
        var rect = sec.getBoundingClientRect();
        return JSON.stringify({ scrollY: window.scrollY, secTop: rect.top, hash: window.location.hash });
      })()
    `,
    returnByValue: true
  });
  console.log('Scroll Result after Value Prop click:', scrollAfterValueProp.result.value);

  // Test 3: Back to top button
  console.log('Testing Back to Top button...');
  await send('Runtime.evaluate', {
    expression: `
      var btt = document.getElementById('backToTopBtn');
      if (btt) btt.click();
    `
  });
  await new Promise(r => setTimeout(r, 1000));

  const scrollAfterBTT = await send('Runtime.evaluate', {
    expression: `window.scrollY`,
    returnByValue: true
  });
  console.log('Scroll Result after Back to Top:', scrollAfterBTT.result.value);

  ws.close();
} finally {
  chrome.kill();
}

