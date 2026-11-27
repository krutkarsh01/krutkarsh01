const http = require('http');
const fs = require('fs');
const path = require('path');
const { pipeline } = require('node:stream');
const { constants, createBrotliCompress, createGzip } = require('node:zlib');

const PORT = process.env.PORT || 3000;
const ROOT = path.resolve(__dirname);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
};

const COMPRESSIBLE = new Set(['.html', '.css', '.js', '.mjs', '.json', '.svg', '.xml', '.txt']);

function preferredEncoding(header = '') {
  const qualities = new Map();

  for (const entry of header.split(',')) {
    const [encoding, preference] = entry.trim().toLowerCase().split(';');
    const quality = preference === undefined ? 1 : Number(preference.trim().replace(/^q=/, ''));
    qualities.set(encoding, quality);
  }

  const wildcard = qualities.get('*') ?? 0;
  const brotli = qualities.get('br') ?? wildcard;
  const gzip = qualities.get('gzip') ?? wildcard;
  if (brotli > 0 && brotli >= gzip) return 'br';
  if (gzip > 0) return 'gzip';
  return null;
}

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath.endsWith('/')) {
    reqPath += 'index.html';
  }

  let filePath = path.join(ROOT, reqPath);

  // If path doesn't have an extension and isn't a directory, try appending .html or /index.html
  if (!path.extname(filePath)) {
    if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    }
  }

  // Security check: prevent directory traversal
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      const notFoundPath = path.join(ROOT, '404.html');
      if (fs.existsSync(notFoundPath)) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        fs.createReadStream(notFoundPath).pipe(res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      }
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    const compressible = COMPRESSIBLE.has(ext) && stats.size >= 1024;
    const encoding = compressible ? preferredEncoding(req.headers['accept-encoding']) : null;
    if (compressible) res.setHeader('Vary', 'Accept-Encoding');
    if (encoding) res.setHeader('Content-Encoding', encoding);

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://api.web3forms.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https:; connect-src 'self' https://api.web3forms.com; frame-src 'self'; object-src 'none'; base-uri 'self';"
    });

    if (req.method === 'HEAD') {
      res.end();
      return;
    }

    const body = fs.createReadStream(filePath);
    const streams = [body];
    if (encoding === 'br') {
      streams.push(createBrotliCompress({ params: { [constants.BROTLI_PARAM_QUALITY]: 4 } }));
    } else if (encoding === 'gzip') {
      streams.push(createGzip());
    }
    pipeline(...streams, res, error => {
      if (error && error.code !== 'ERR_STREAM_PREMATURE_CLOSE') console.error(error);
    });
  });
});

let currentPort = Number(PORT);

function startServer(port) {
  server.listen(port, () => {
    console.log('\n  ▲ Shinobi Development Server');
    console.log(`  - Local:        http://localhost:${port}/`);
    console.log('  - Environment:  development');
    console.log('  ✓ All 8 production pages, 3D WebGL globe & prototypes active\n');
  });
}

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.warn(`  ⚠ Port ${currentPort} is already in use. Retrying on port ${currentPort + 1}...`);
    currentPort += 1;
    setTimeout(() => {
      startServer(currentPort);
    }, 200);
  } else {
    console.error('Server error:', err);
    process.exit(1);
  }
});

startServer(currentPort);


