// Minimal Express static server for Railway deployment.
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

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
