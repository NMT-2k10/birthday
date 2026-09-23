// Regression check for export logic using simulated browser APIs.
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
let draw, clicked;
const context = new Proxy({
  measureText: text => ({ width: text.length * 20 }),
  createLinearGradient: () => ({ addColorStop() {} }),
  drawImage: (...args) => { draw = args; },
}, { get: (target, key) => target[key] || (() => {}) });
const env = {
  navigator: { userAgent: 'Desktop' }, tR: /Android/,
  File: class extends Blob {
    constructor(parts, name, options) { super(parts, options); this.name = name; }
  }, URL, Error,
  setTimeout: callback => callback(),
  getComputedStyle: () => ({ getPropertyValue: () => 'Georgia' }),
  n: text => text,
  Image: class {
    width = 1290; height = 2145;
    set src(value) {
      assert.ok(fs.existsSync(path.join(root, value)), value);
      this.onload();
    }
  },
  document: {
    documentElement: {}, fonts: { ready: Promise.resolve() },
    body: { appendChild() {}, removeChild() {} },
    createElement: tag => tag === 'canvas' ? {
      getContext: () => context,
      toBlob: (callback, type) => callback(new Blob(['test'], { type })),
    } : { style: {}, click() { clicked = true; } },
  },
};
vm.createContext(env);
vm.runInContext(source.slice(source.indexOf('    function tA()'), source.indexOf('    function tW(')), env);
const configEnv = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'config.js'), 'utf8'), configEnv);
(async () => {
  for (const positionY of [0.25, undefined]) {
    for (const wish of ['', 'Một năm thật vui']) {
      const blob = await env.tL({
        photo: { ...configEnv.window.BIRTHDAY_CONFIG.keepsakePhoto, positionY },
        wish, recipientName: 'Rie', senderName: 'người thương',
        dateLabel: '24 tháng 9 năm 2009',
        copy: { keepsake: { footerDefault: 'được chúc mừng bởi người thương', wishHeader: 'điều ước' } },
      });
      assert.equal(blob.type, 'image/png');
      assert.ok(draw.slice(1).every(Number.isFinite));
      const scale = Math.max(936 / 1290, 880 / 2145);
      assert.equal(draw[2], 72 + (880 - 2145 * scale) * (positionY ?? 0.5));
      clicked = false;
      assert.equal(await env.tD(blob, 'polaroid-rie.png'), 'downloaded');
      assert.ok(clicked);
    }
  }
  console.log('PASS: Polaroid export and download logic for four crop/wish combinations.');
})().catch(error => { console.error(error); process.exitCode = 1; });
