// Minimal Express static server for Railway deployment.
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const ACCESS_COUNT_FILE = process.env.ACCESS_COUNT_FILE || path.join(ROOT, 'data', 'access-count.json');

function getKoreaDate() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());
}

function readAccessCount() {
  try {
    return JSON.parse(fs.readFileSync(ACCESS_COUNT_FILE, 'utf8'));
  } catch (error) {
    if (error.code !== 'ENOENT') console.error('Failed to read access count:', error);
    return { total: 0, daily: {} };
  }
}

function writeAccessCount(counts) {
  fs.mkdirSync(path.dirname(ACCESS_COUNT_FILE), { recursive: true });
  const temporaryFile = `${ACCESS_COUNT_FILE}.tmp`;
  fs.writeFileSync(temporaryFile, JSON.stringify(counts), 'utf8');
  fs.renameSync(temporaryFile, ACCESS_COUNT_FILE);
}

app.post('/api/access-count', (_req, res) => {
  try {
    const today = getKoreaDate();
    const counts = readAccessCount();
    counts.total = Number(counts.total || 0) + 1;
    counts.daily = counts.daily && typeof counts.daily === 'object' ? counts.daily : {};
    counts.daily[today] = Number(counts.daily[today] || 0) + 1;
    writeAccessCount(counts);
    res.setHeader('Cache-Control', 'no-store');
    res.json({ today: counts.daily[today], total: counts.total });
  } catch (error) {
    console.error('Failed to update access count:', error);
    res.status(500).json({ error: 'access_count_unavailable' });
  }
});

app.use(
  express.static(ROOT, {
    extensions: ['html'],
    setHeaders(res, filePath) {
      if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache');
      } else {
        res.setHeader('Cache-Control', 'public, max-age=3600');
      }
    },
  })
);

// Health check for Railway.
app.get('/healthz', (_req, res) => res.status(200).send('ok'));

// SPA-style fallback to index.html.
app.get('*', (_req, res) => {
  res.sendFile(path.join(ROOT, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Portfolio server listening on port ${PORT}`);
});
