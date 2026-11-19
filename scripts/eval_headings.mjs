import { spawn } from 'child_process';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9226',
  '--user-data-dir=/tmp/chrome-eval-' + Date.now(),
  '--window-size=390,844',
  'about:blank'
]);
await new Promise(r => setTimeout(r, 2000));
const tabs = await (await fetch('http://127.0.0.1:9226/json')).json();
const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);
let id = 1;
const pending = new Map();
ws.onmessage = e => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
};
await new Promise(r => ws.onopen = r);
function send(method, params = {}) {
  return new Promise(res => {
    const msgId = id++;
    pending.set(msgId, res);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });
}
await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true, fitWindow: false });
await send('Page.navigate', { url: 'http://localhost:3000/' });
await new Promise(r => setTimeout(r, 1500));

const res = await send('Runtime.evaluate', {
  expression: `(() => {
    const o = document.querySelector('.osiris-title');
    const og = document.querySelector('.osiris-title .gradient-text');
    const p = document.querySelector('#portfolio-heading');
    const pg = document.querySelector('#portfolio-heading .gradient-text');
    return {
      osirisText: o?.innerText,
      osirisLetterSpacing: window.getComputedStyle(o).letterSpacing,
      osirisGradLetterSpacing: window.getComputedStyle(og).letterSpacing,
      osirisGradDisplay: window.getComputedStyle(og).display,
      portText: p?.innerText,
      portLetterSpacing: window.getComputedStyle(p).letterSpacing,
      portGradLetterSpacing: window.getComputedStyle(pg).letterSpacing,
      portGradDisplay: window.getComputedStyle(pg).display
    };
  })()`,
  returnByValue: true
});
console.log('Evaluated DOM values:', res.result?.value);
chrome.kill();
process.exit(0);
