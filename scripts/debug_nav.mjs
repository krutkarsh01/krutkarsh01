import { spawn } from 'child_process';

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9234',
  'about:blank'
]);

for (let i = 0; i < 15; i++) {
  try {
    const res = await fetch('http://127.0.0.1:9234/json');
    if (res.ok) break;
  } catch (e) {
    await new Promise(r => setTimeout(r, 200));
  }
}

const tabsRes = await fetch('http://127.0.0.1:9234/json');
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
await send('DOM.enable');
await send('CSS.enable');
await send('Page.navigate', { url: 'http://localhost:3000/' });
await new Promise(r => setTimeout(r, 2000));

// Find nodeId of .nl-nav
const doc = await send('DOM.getDocument');
const node = await send('DOM.querySelector', { nodeId: doc.result.root.nodeId, selector: '.nl-nav' });

const styles = await send('CSS.getMatchedStylesForNode', { nodeId: node.result.nodeId });
const displayRules = [];
for (const match of styles.result.matchedCSSRules) {
  for (const prop of match.rule.style.cssProperties) {
    if (prop.name === 'display') {
      displayRules.push({
        selector: match.rule.selectorList.text,
        value: prop.value,
        important: prop.important
      });
    }
  }
}
console.log('DISPLAY RULES MATCHING .nl-nav:', displayRules);

chrome.kill();
