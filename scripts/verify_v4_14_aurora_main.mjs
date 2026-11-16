import { spawn } from 'child_process';
import fs from 'fs';

async function run() {
  const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless=new',
    '--remote-debugging-port=9251',
    '--window-size=1440,900',
    'http://localhost:3000/'
  ]);

  for (let i = 0; i < 25; i++) {
    try {
      const res = await fetch('http://127.0.0.1:9251/json');
      if (res.ok) break;
    } catch (e) {
      await new Promise(r => setTimeout(r, 200));
    }
  }
  const tabsRes = await fetch('http://127.0.0.1:9251/json');
  const tabs = await tabsRes.json();
  const ws = new WebSocket(tabs[0].webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);

  let id = 1;
  const send = (method, params = {}) => new Promise(res => {
    const msgId = id++;
    const handler = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === msgId) {
        ws.removeEventListener('message', handler);
        res(msg);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

  await send('Page.enable');
  await send('Runtime.enable');
  await new Promise(r => setTimeout(r, 2500));

  // Inspect WebGL canvas & Starfield canvas
  const canvasEval = await send('Runtime.evaluate', {
    expression: `(() => {
      const glCanvas = document.getElementById('webgl-aurora-canvas');
      const starCanvas = document.getElementById('universal-aurora-canvas');
      let glContextType = null;
      if (glCanvas) {
        const gl2 = glCanvas.getContext('webgl2');
        const gl1 = glCanvas.getContext('webgl');
        glContextType = gl2 ? 'webgl2' : (gl1 ? 'webgl' : null);
      }
      return JSON.stringify({
        glCanvasFound: !!glCanvas,
        glCanvasWidth: glCanvas ? glCanvas.width : null,
        glCanvasHeight: glCanvas ? glCanvas.height : null,
        glContextType: glContextType,
        starCanvasFound: !!starCanvas,
        starCanvasWidth: starCanvas ? starCanvas.width : null,
        starCanvasHeight: starCanvas ? starCanvas.height : null
      });
    })()`,
    returnByValue: true
  });
  console.log('CANVAS METRICS:', JSON.parse(canvasEval.result.result.value));

  // Capture hero screenshot with new WebGL Aurora
  const heroShot = await send('Page.captureScreenshot', {});
  fs.writeFileSync('/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/v414-aurora-webgl-hero.png', Buffer.from(heroShot.result.data, 'base64'));
  console.log('Saved: v414-aurora-webgl-hero.png');

  // Let it animate for 2 seconds and capture second frame to confirm movement
  await new Promise(r => setTimeout(r, 2000));
  const heroShot2 = await send('Page.captureScreenshot', {});
  fs.writeFileSync('/Users/kumarutkarsh/.gemini/antigravity/brain/9867d81e-c3a1-43a4-8150-225a641eece7/v414-aurora-webgl-frame2.png', Buffer.from(heroShot2.result.data, 'base64'));
  console.log('Saved: v414-aurora-webgl-frame2.png');

  chrome.kill();
}
run();
