const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

test('KO 상태는 한국어 CV 원본 파일을 원본 이름으로 다운로드한다', () => {
  assert.match(html, /ko:\s*\{\s*href:\s*'김일석_CV\.pdf',\s*filename:\s*'김일석_CV\.pdf'\s*\}/);
});

test('EN 상태는 영문 CV 원본 파일을 원본 이름으로 다운로드한다', () => {
  assert.match(html, /en:\s*\{\s*href:\s*'ILSUK\.KIM_CV\.pdf',\s*filename:\s*'ILSUK\.KIM_CV\.pdf'\s*\}/);
});
