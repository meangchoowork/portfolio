# Ilsuk Kim — Portfolio 2026

Forward Deployed AI Engineer · Technical Product Manager

Live portfolio site built as a single HTML document with shared content data.

## Stack

- Static HTML + vanilla JS
- Express (Node 18+) for serving on Railway
- Pretendard Variable font

## Structure

```
.
├── index.html              # Main portfolio (Concept B · Deep Forest)
├── shared/
│   └── content.js          # All copy / data (bilingual KO / EN)
├── previews/               # Design concept previews
│   ├── index.html          # 3-concept landing page
│   ├── concept-a.html      # Terracotta
│   ├── concept-b.html      # Deep Forest
│   └── concept-c.html      # Ink Cobalt
├── server.js               # Express static server
├── package.json
└── railway.json            # Railway deployment config
```

## Local development

```bash
npm install
npm start
# → http://localhost:3000
```

## Deploy on Railway

1. Push this repo to GitHub.
2. In Railway → **New Project → Deploy from GitHub repo** → select the repo.
3. Railway auto-detects `package.json` and runs `npm start`.
4. `PORT` is injected by Railway; the server picks it up automatically.
5. Health check: `/healthz`.

No environment variables required.

## Editing content

All portfolio copy lives in [`shared/content.js`](shared/content.js) — edit that file, then bump the query-string version on the `<script src="shared/content.js?v=N">` tag in `index.html` to bust the browser cache.

## Language toggle

Top-right chrome bar has a KO / EN toggle. Persisted in `localStorage`.
